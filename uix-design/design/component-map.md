# Component Map — Design to Implementation

Map Figma/design components to frontend implementation concepts. Fill as the design system and client implementation align.

| Design component | Implementation concept | Notes |
|------------------|------------------------|-------|
| Button/Primary | Primary button | theme.colors.primary, theme.spacing, theme.typography.buttonLabel |
| Button/Secondary | Secondary button | theme.colors.secondary, border |
| Button/Ghost | Text/ghost button | text color, no fill |
| Button/Icon | Icon button | icon size, min tap target |
| Badge/Coverage | Status badge (coverage) | status colors + icon/label |
| Badge/Status | Status badge (generic) | success/warning/error/info |
| Card/Base | Container/card | surface, radius, elevation, padding |
| Card/Result | Result card | same + content layout |
| Banner/Warning | Warning banner | warning color, spacing |
| Banner/Info | Info banner | info color, spacing |
| Input/Text | TextInput | border, spacing, typography, states |
| Input/DateTime | Date/time input | same as text input + picker |
| Row/Status | List row (status) | divider, padding |
| Row/Session | List row (session) | typography, padding |
| Tile/Stat | Stat tile | surface, typography |
| Section/Header | Section title | typography, spacing |
| Modal/Base | Modal container | overlay, surface, radius |
| BottomActionBar | Sticky bottom bar | surface, safe area, spacing |

Reference `docs/COMPONENT_INVENTORY.md` for purpose, variants, and states. Reference `docs/FRONTEND_HANDOFF.md` for token and state mapping.
