# .claude/skills/weekly-plan/scripts/build-plan.ps1
#
# Build a weekly lesson-plan document, then rasterise every page so you can
# actually look at it. Reports errors, overfull boxes, unresolved references,
# and a per-page density figure that finds a day that has spilled or a page
# left half empty.
#
#   pwsh .claude/skills/weekly-plan/scripts/build-plan.ps1 y7-q1
#   pwsh .claude/skills/weekly-plan/scripts/build-plan.ps1 y7-q1 -Dpi 140
#
# PNGs land in planning/<doc>/.preview/. Read them with the Read tool.
#
# Three pdflatex passes, not two: this document's contents page is hand-rolled
# out of \label / \pageref pairs pointing FORWARD, and hyperref needs a further
# pass after those settle or the page numbers in the contents are stale.

param(
  [Parameter(Mandatory = $true)][string]$Doc,
  [int]$Dpi = 110
)

$ErrorActionPreference = 'Stop'

# MiKTeX installs per-user and is not on PATH in a fresh shell.
$miktex = "$env:LOCALAPPDATA\Programs\MiKTeX\miktex\bin\x64"
if (Test-Path $miktex) { $env:PATH = "$miktex;$env:PATH" }
if (-not (Get-Command pdflatex -ErrorAction SilentlyContinue)) {
  throw "pdflatex not found. Install MiKTeX: winget install --id MiKTeX.MiKTeX --scope user"
}

# scripts -> weekly-plan -> skills -> .claude -> repo root
$repo = $PSScriptRoot
1..4 | ForEach-Object { $repo = Split-Path -Parent $repo }
$dir = Join-Path $repo "planning\$Doc"
if (-not (Test-Path (Join-Path $dir "$Doc.tex"))) {
  throw "No such plan: planning\$Doc\$Doc.tex"
}
Set-Location $dir

# Do NOT add "2>&1" here. In Windows PowerShell 5.1 that wraps each stderr line
# from a native exe in an ErrorRecord, and MiKTeX's harmless "you have not
# checked for updates" nag then aborts the script.
1..3 | ForEach-Object { & pdflatex -interaction=nonstopmode "$Doc.tex" | Out-Null }

$log       = "$Doc.log"
$errors    = @(Select-String -Path $log -Pattern '^!' -Context 0, 3)
$overfull  = @(Select-String -Path $log -Pattern 'Overfull \\[hv]box')
$undefined = @(Select-String -Path $log -Pattern 'Reference .* undefined|There were undefined references')
$pages     = @(Select-String -Path $log -Pattern 'Output written on')

# Everything reported here goes through Write-Host on purpose. Anything written
# to the output stream inside a PowerShell function becomes part of its return
# value, and a caller's [bool] test then reads a clean build as a failure.
Write-Host "`n=== $Doc ===" -ForegroundColor Cyan
if ($errors.Count)    { Write-Host 'ERRORS:'    -ForegroundColor Red;    $errors    | ForEach-Object { Write-Host $_.Line } }
if ($undefined.Count) { Write-Host 'UNDEFINED REFS (contents page will be wrong):' -ForegroundColor Red
                        $undefined | ForEach-Object { Write-Host $_.Line } }
if ($overfull.Count)  { Write-Host 'OVERFULL:'  -ForegroundColor Yellow; $overfull  | ForEach-Object { Write-Host $_.Line } }
if (-not $errors.Count -and -not $overfull.Count -and -not $undefined.Count) {
  Write-Host 'clean' -ForegroundColor Green
}
$pages | ForEach-Object { Write-Host ($_.Line.Trim()) }
if ($errors.Count) { throw "Build failed. Fix the errors above before looking at pages." }

# -- Rasterise, so the pages can be looked at rather than guessed about -------
$preview = Join-Path $dir '.preview'
if (Test-Path $preview) { Get-ChildItem "$preview\*.png" | Remove-Item }
else { New-Item -ItemType Directory -Path $preview | Out-Null }

& pdftoppm -png -r $Dpi "$Doc.pdf" (Join-Path $preview 'p')

Write-Host "`n=== page density (bytes of PNG; a small number is a half-empty page) ===" -ForegroundColor Cyan
$pngs = Get-ChildItem "$preview\p-*.png" | Sort-Object Name
$max  = ($pngs | Measure-Object -Property Length -Maximum).Maximum
foreach ($p in $pngs) {
  $bar  = '#' * [math]::Round(40 * $p.Length / $max)
  $flag = if ($p.Length -lt 0.40 * $max) { '  <-- look at this one' } else { '' }
  '{0,-10} {1,8}  {2}{3}' -f $p.Name, $p.Length, $bar, $flag
}

Write-Host "`nPNGs in $preview - now READ them." -ForegroundColor Yellow
Write-Host "A day that spilled onto a second page does NOT show up in the log." -ForegroundColor Yellow

# Aux files are noise in git; the PDF and .tex are what matter.
Get-ChildItem *.aux, *.out -ErrorAction SilentlyContinue | Remove-Item
