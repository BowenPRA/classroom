"""Build the Hoi An project map: fetch OSM, project to metres, emit house-style SVG.

The map is at an EXACT 1 cm = 250 m, which is the whole point: students measure
compass radii off a printed scale bar and the answer has to come out in real
metres. Projection is local equirectangular about the frame's centre latitude —
over 6.4 km that is accurate to a few metres, far inside a pencil line.
"""
import io
import json
import math
import os
import time
import urllib.parse
import urllib.request

SCRATCH = os.path.dirname(os.path.abspath(__file__))
UA = 'LessonsDeckBot/1.0 (sbowen209@gmail.com; classroom lesson material)'

# ── The frame ───────────────────────────────────────────────────────────────
# 6400 m x 3600 m at 1 cm = 250 m -> 25.6 cm x 14.4 cm printed.
LON0, LAT0 = 108.316231, 15.873640          # bottom-left corner of the frame
W_M, H_M = 6400.0, 3600.0
PX_PER_M = 0.2                               # 1280 x 720 px render; 200 px = 1 km
LAT_MID = LAT0 + (H_M / 2) / 110600.0
M_PER_DEG_LAT = 110600.0
M_PER_DEG_LON = 111320.0 * math.cos(math.radians(LAT_MID))

W_PX, H_PX = int(W_M * PX_PER_M), int(H_M * PX_PER_M)

BBOX = '%.5f,%.5f,%.5f,%.5f' % (
    LAT0 - 0.004, LON0 - 0.004,
    LAT0 + H_M / M_PER_DEG_LAT + 0.004, LON0 + W_M / M_PER_DEG_LON + 0.004)


def metres(lat, lon):
    return ((lon - LON0) * M_PER_DEG_LON, (lat - LAT0) * M_PER_DEG_LAT)


def px(lat, lon):
    x, y = metres(lat, lon)
    return (x * PX_PER_M, H_PX - y * PX_PER_M)      # SVG y grows downward


def fetch(name, query):
    path = os.path.join(SCRATCH, 'map_%s.json' % name)
    if os.path.exists(path):
        return json.load(io.open(path, encoding='utf-8'))
    req = urllib.request.Request('https://overpass-api.de/api/interpreter',
                                 data=urllib.parse.urlencode({'data': query}).encode(),
                                 headers={'User-Agent': UA})
    with urllib.request.urlopen(req, timeout=240) as r:
        payload = json.loads(r.read().decode('utf-8'))
    io.open(path, 'w', encoding='utf-8').write(json.dumps(payload, ensure_ascii=False))
    time.sleep(2)
    return payload


ROADS = fetch('roads',
              '[out:json][timeout:120];('
              'way["highway"~"^(motorway|trunk|primary|secondary|tertiary|unclassified|residential|living_street)$"](%s);'
              ');out geom;' % BBOX)
WATER = fetch('water2',
              '[out:json][timeout:120];('
              'way["natural"="water"](%s);'
              'way["natural"="coastline"](%s);'
              'way["waterway"="riverbank"](%s);'
              'relation["natural"="water"](%s);'
              'way["waterway"~"^(river|stream)$"](%s);'
              ');out geom;' % ((BBOX,) * 5))

INK = '#2b2b2b'
ROAD_MINOR = '#c3ccd4'
ROAD_MAJOR = '#8b98a5'
WATER_FILL = '#d8ebf5'
WATER_EDGE = '#8fbdd6'
KEY = '#c25e12'


def clip_ok(pts):
    """Keep a way if any vertex is anywhere near the frame."""
    return any(-200 <= x <= W_PX + 200 and -200 <= y <= H_PX + 200 for x, y in pts)


def path_of(geom):
    pts = [px(p['lat'], p['lon']) for p in geom]
    if not clip_ok(pts):
        return None
    return 'M ' + ' L '.join('%.1f %.1f' % p for p in pts)


parts = []
parts.append('<rect x="0" y="0" width="%d" height="%d" fill="#ffffff"/>' % (W_PX, H_PX))

# ── The sea ─────────────────────────────────────────────────────────────────
# OSM gives the coast as two open ways that meet at (994.6, 137.3); together
# they run from off-frame bottom-right up to off-frame top. The sea is the
# north-east side, so the polygon is closed round the outside of the frame on
# that side. Without this the right-hand third of the map is white and reads as
# more rice field, which is the one thing it definitely is not.
coast_ways = [e for e in WATER['elements'] if e.get('tags', {}).get('natural') == 'coastline']
chain = []
for e in sorted(coast_ways, key=lambda e: -px(e['geometry'][0]['lat'], e['geometry'][0]['lon'])[0]):
    pts = [px(p['lat'], p['lon']) for p in e['geometry']]
    if chain and math.dist(chain[-1], pts[0]) > 1:
        pts.reverse()
    chain += pts[1:] if chain else pts
if chain:
    sea = chain + [(W_PX + 420, -400), (W_PX + 420, H_PX + 400)]
    parts.append('<path d="M %s Z" fill="%s" stroke="%s" stroke-width="2"/>'
                 % (' L '.join('%.1f %.1f' % p for p in sea), WATER_FILL, WATER_EDGE))

# Water areas first, then rivers as thick strokes, so the Thu Bon reads clearly.
areas, lines = [], []
for e in WATER['elements']:
    geom = e.get('geometry')
    if not geom:
        continue
    d = path_of(geom)
    if not d:
        continue
    tags = e.get('tags', {})
    if tags.get('natural') == 'water' or tags.get('waterway') == 'riverbank':
        areas.append('<path d="%s Z" fill="%s" stroke="%s" stroke-width="1"/>' % (d, WATER_FILL, WATER_EDGE))
    elif tags.get('natural') == 'coastline':
        continue                      # already drawn as the edge of the sea polygon
    else:
        w = 5 if tags.get('waterway') == 'river' else 2
        lines.append('<path d="%s" fill="none" stroke="%s" stroke-width="%d" stroke-linecap="round"/>' % (d, WATER_EDGE, w))
parts += areas + lines

minor, major = [], []
for e in ROADS['elements']:
    geom = e.get('geometry')
    if not geom:
        continue
    d = path_of(geom)
    if not d:
        continue
    hw = e.get('tags', {}).get('highway')
    if hw in ('motorway', 'trunk', 'primary', 'secondary', 'tertiary'):
        major.append('<path d="%s" fill="none" stroke="%s" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>' % (d, ROAD_MAJOR))
    else:
        minor.append('<path d="%s" fill="none" stroke="%s" stroke-width="1.1" stroke-linecap="round"/>' % (d, ROAD_MINOR))
parts += minor + major

# ── Two context labels, placed in PIXELS and both well away from the answer ──
# The answer lands at (620, 296); nothing here goes near it, and nothing names
# the part of the map the arcs converge on.
CONTEXT = [
    (430, 702, 'middle', 'HOI AN ANCIENT TOWN'),
    (1265, 128, 'end', 'EAST SEA'),
]
for x, y, anchor, text in CONTEXT:
    parts.append('<text x="%d" y="%d" font-family="Inter, Segoe UI, sans-serif" font-size="19" font-weight="900" '
                 'fill="#8a97a3" letter-spacing="1.5" text-anchor="%s" stroke="#ffffff" stroke-width="5" '
                 'paint-order="stroke">%s</text>' % (x, y, anchor, text))

# ── The three anchors ───────────────────────────────────────────────────────
ANCHORS = [
    ('A', 'Japanese Bridge', 15.87712, 108.32601, 'start', 16, -14),
    ('B', 'Tra Que Herb Village', 15.90271, 108.33602, 'start', 16, -14),
    ('C', 'Cua Dai Beach', 15.89806, 108.36623, 'end', -16, -14),
]
for letter, name, lat, lon, anchor, dx, dy in ANCHORS:
    x, y = px(lat, lon)
    parts.append('<circle cx="%.1f" cy="%.1f" r="9" fill="%s" stroke="#ffffff" stroke-width="3.5"/>' % (x, y, KEY))
    parts.append('<circle cx="%.1f" cy="%.1f" r="3" fill="#ffffff"/>' % (x, y))
    parts.append('<text x="%.1f" y="%.1f" font-family="Inter, Segoe UI, sans-serif" font-size="26" font-weight="900" '
                 'fill="%s" text-anchor="%s" stroke="#ffffff" stroke-width="6" paint-order="stroke">%s  %s</text>'
                 % (x + dx, y + dy, KEY, anchor, letter, name))

# ── Scale bar: 1 km = 200 px, drawn as 4 x 250 m ticks ──────────────────────
# Top-left, not bottom-left: down there its white backing box sat on top of the
# "A Japanese Bridge" label, and the bottom strip is wanted for the town name.
sx, sy = 48, 44
parts.append('<rect x="%d" y="%d" width="216" height="40" rx="6" fill="#ffffff" fill-opacity="0.9" stroke="#cbd5e1"/>' % (sx - 8, sy - 26))
for i in range(4):
    parts.append('<rect x="%d" y="%d" width="50" height="9" fill="%s"/>' % (sx + i * 50, sy, INK if i % 2 == 0 else '#ffffff'))
parts.append('<rect x="%d" y="%d" width="200" height="9" fill="none" stroke="%s" stroke-width="1.5"/>' % (sx, sy, INK))
parts.append('<text x="%d" y="%d" font-family="Inter, Segoe UI, sans-serif" font-size="17" font-weight="900" fill="%s" text-anchor="start">0</text>' % (sx, sy - 8, INK))
parts.append('<text x="%d" y="%d" font-family="Inter, Segoe UI, sans-serif" font-size="17" font-weight="900" fill="%s" text-anchor="middle">500 m</text>' % (sx + 100, sy - 8, INK))
parts.append('<text x="%d" y="%d" font-family="Inter, Segoe UI, sans-serif" font-size="17" font-weight="900" fill="%s" text-anchor="end">1 km</text>' % (sx + 200, sy - 8, INK))

# North arrow.
nx, ny = W_PX - 54, 54
parts.append('<path d="M %d %d L %d %d L %d %d Z" fill="%s"/>' % (nx, ny - 26, nx - 11, ny + 8, nx + 11, ny + 8, INK))
parts.append('<text x="%d" y="%d" font-family="Inter, Segoe UI, sans-serif" font-size="18" font-weight="900" fill="%s" text-anchor="middle">N</text>' % (nx, ny + 28, INK))

# Attribution. ODbL requires it and it stays on the printed sheet.
parts.append('<text x="%d" y="%d" font-family="Inter, Segoe UI, sans-serif" font-size="15" font-weight="bold" fill="#93a1ad" '
             'text-anchor="end">Map data (c) OpenStreetMap contributors, ODbL</text>' % (W_PX - 14, H_PX - 14))
parts.append('<rect x="0.75" y="0.75" width="%.1f" height="%.1f" fill="none" stroke="#94a3b8" stroke-width="1.5"/>' % (W_PX - 1.5, H_PX - 1.5))

svg = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %d %d" width="%d" height="%d">\n  %s\n</svg>'
       % (W_PX, H_PX, W_PX, H_PX, '\n  '.join(parts)))
io.open(os.path.join(SCRATCH, 'hoi-an-map.svg'), 'w', encoding='utf-8').write(svg)

print('frame  %.0f x %.0f m  ->  %d x %d px  (1 cm = 250 m in print)' % (W_M, H_M, W_PX, H_PX))
print('bbox   %s' % BBOX)
print('roads  %d ways   water %d ways' % (len(ROADS['elements']), len(WATER['elements'])))
for letter, name, lat, lon, _, _, _ in ANCHORS:
    x, y = metres(lat, lon)
    print('  %s  %-22s  %8.1f %8.1f m   px %6.1f %6.1f' % (letter, name.encode('ascii', 'replace').decode(), x, y, *px(lat, lon)))
