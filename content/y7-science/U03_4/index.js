// A lesson module: default-exports { meta, slides, plan }. The registry
// auto-discovers this file (content/<course>/<unit>/index.js).
//
// Science 3.4 Tides, Unit 3 Forces and energy. English and French only (Year 7
// from Unit 4), so the deck's switch reads EN / FR. One deck, two periods:
// Part 1 (slides 1–17) on 21 October, Part 2 (18–37) the next science lesson,
// 23 October, after the Thursday lab. Both dates are provisional.
import { slides } from './slides.js'
import { plan } from './plan.js'

export default {
  meta: {
    course: 'y7-science',
    unit: '3.4',
    id: 'U03_4',
    title: 'Tides',
    subtitle: 'Why the sea rises and falls twice a day — the Moon, the Sun, and a card model',
    objective:
      'Describe a tide as the change in the depth of the sea during the day, and find the tidal range; ' +
      'explain that the pull of the Moon’s gravity (the tidal force) gives high tide on the sides of the ' +
      'Earth nearest to and furthest from the Moon, so the Earth’s 24-hour spin gives two high and two low ' +
      'tides a day; explain why high tides come about 50 minutes later each day; explain that the Sun’s ' +
      'weaker tidal force adds to the Moon’s at new moon and full moon, giving the biggest tidal range; and ' +
      'describe effects of tides on harbours, coasts, food chains and the land.',
    order: 18,
    french: true,
    vietnamese: false,
  },
  slides,
  plan,
}
