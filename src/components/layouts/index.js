// Layout registry: maps a slide's `layout` field to its component. A slide with
// no `layout` falls back to the legacy `type` renderer in Deck.jsx, so every
// existing lesson keeps rendering unchanged.
import HeroLayout from './HeroLayout.jsx'
import StatementLayout from './StatementLayout.jsx'
import SplitLayout from './SplitLayout.jsx'
import ShowcaseLayout from './ShowcaseLayout.jsx'
import CompareLayout from './CompareLayout.jsx'
import StackLayout from './StackLayout.jsx'
import StepsLayout from './StepsLayout.jsx'
import CalloutLayout from './CalloutLayout.jsx'

export const LAYOUTS = {
  hero: HeroLayout,
  statement: StatementLayout,
  split: SplitLayout,
  showcase: ShowcaseLayout,
  compare: CompareLayout,
  stack: StackLayout,
  steps: StepsLayout,
  callout: CalloutLayout,
}

export function getLayout(name) {
  return name ? LAYOUTS[name] || null : null
}
