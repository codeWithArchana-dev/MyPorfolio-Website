/**
 * Maps the icon names used in `data/site.js` to real Lucide components.
 * Icons are imported explicitly (rather than `import * as`) so the bundler can
 * tree-shake the rest of the library out.
 */
import {
  Atom,
  Award,
  BadgeCheck,
  Code2,
  GitBranch,
  GraduationCap,
  Layout,
  MapPin,
  Puzzle,
  Smartphone,
  Sparkles,
  TrendingUp,
  Trophy,
  Users,
  Wrench,
} from 'lucide-react'

const ICONS = {
  Atom,
  Award,
  BadgeCheck,
  Code2,
  GitBranch,
  GraduationCap,
  Layout,
  MapPin,
  Puzzle,
  Smartphone,
  Sparkles,
  TrendingUp,
  Trophy,
  Users,
  Wrench,
}

export default function Icon({ name, ...props }) {
  const Component = ICONS[name] ?? Code2
  return <Component aria-hidden="true" {...props} />
}
