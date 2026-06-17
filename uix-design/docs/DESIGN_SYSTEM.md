# Design System — DriveShield

## Design principles

DriveShield is a legal-tech / evidence-check utility. The UI must feel:

- **Calm** — No urgency or alarm unless content truly requires it.
- **Neutral** — Objective, factual, not emotional.
- **Trustworthy** — Clear, predictable, and consistent.
- **Evidence-oriented** — Information hierarchy supports verification.
- **Readable under stress** — Strong contrast, simple structure, easy scanning.

**Must feel like:** Legal document, insurance dashboard, utility app, evidence report.  
**Must not feel like:** Racing app, car dashboard, gaming UI, police/enforcement UI, flashy automotive UI.

**Avoid:**
- racing or dashboard aesthetics
- police/enforcement styling
- gaming or gamified visuals
- flashy gradients, heavy motion, decorative effects

---

## Color system

Semantic roles only. Components and screens must reference token names, not raw hex.

| Role | Token | Usage |
|---|---|---|
| Primary | `Color/Primary` | Primary CTA, key action |
| Secondary | `Color/Secondary` | Secondary action or support emphasis |
| Accent | `Color/Accent` | Highlights, non-primary emphasis |
| Background | `Color/Background` | Screen background |
| Surface | `Color/Surface` | Cards, modals, panels |
| Surface secondary | `Color/SurfaceSecondary` | Nested or secondary panels |
| Text primary | `Color/TextPrimary` | Headings, body |
| Text secondary | `Color/TextSecondary` | Secondary labels |
| Text muted | `Color/TextMuted` | Hints, placeholders, disabled text |
| Border | `Color/Border` | Inputs, outlines |
| Divider | `Color/Divider` | Separators |

### Status colors

| Status | Token | Usage |
|---|---|---|
| Coverage HIGH | `Color/Status/CoverageHigh` | Strong evidence coverage |
| Coverage MEDIUM | `Color/Status/CoverageMedium` | Partial coverage |
| Coverage LOW | `Color/Status/CoverageLow` | Weak coverage |
| Not monitored | `Color/Status/NotMonitored` | Protection OFF in target window |
| Protection ON | `Color/Status/ProtectionOn` | Active protection |
| Protection OFF | `Color/Status/ProtectionOff` | Inactive protection |
| Success | `Color/Status/Success` | Positive feedback |
| Warning | `Color/Status/Warning` | Caution / limited confidence |
| Error | `Color/Status/Error` | Failure / validation error |
| Info | `Color/Status/Info` | Informational message |
| Disabled | `Color/Status/Disabled` | Disabled state |

Status must never rely on color alone. Pair with icon and/or label.

---

## Typography

One heading family, one body family. Numeric style may be separate if needed for time/speed.

| Style | Token | Use |
|---|---|---|
| H1 | `Text/H1` | Screen title |
| H2 | `Text/H2` | Section title |
| H3 | `Text/H3` | Card title / subsection |
| Subtitle | `Text/Subtitle` | Intro or supporting title |
| Body | `Text/Body` | Main copy |
| Body Small | `Text/BodySmall` | Secondary content |
| Caption | `Text/Caption` | Metadata, timestamps |
| Helper | `Text/Helper` | Field help, helper text |
| Field Label | `Text/FieldLabel` | Input labels |
| Button Label | `Text/ButtonLabel` | Buttons |
| Status Label | `Text/StatusLabel` | Badges / chips |
| Numeric Metric | `Text/NumericMetric` | Speed, duration, counts |

**Readability rules**
- Minimum body size: 16px equivalent
- Body line height: at least 1.4
- Small text only for metadata, never for main actions
- Metrics must be highly scannable

---

## Spacing scale

**Base: 4px**

| Token | Value | Usage |
|---|---|---|
| Spacing/XXS | 4px | Tight icon/text gap |
| Spacing/XS | 8px | Small internal gap |
| Spacing/S | 12px | Between related items |
| Spacing/M | 16px | Default layout spacing |
| Spacing/L | 24px | Card padding / section gap |
| Spacing/XL | 32px | Major section spacing |
| Spacing/XXL | 48px | Screen-level vertical rhythm |

Use only these tokens.

---

## Radius, border, elevation

### Radius

| Token | Use |
|---|---|
| `Radius/None` | Hard edge |
| `Radius/Small` | Badges, chips |
| `Radius/Medium` | Buttons, inputs, cards |
| `Radius/Large` | Modals, bottom sheets |
| `Radius/Full` | Pills, circular UI |

### Border
- Use `Color/Border`
- Default width: 1px
- No arbitrary border weights

### Elevation

| Token | Use |
|---|---|
| `Elevation/None` | Flat surfaces |
| `Elevation/Low` | Cards |
| `Elevation/Medium` | Modals, dropdowns |
| `Elevation/High` | Toasts, floating layers |

---

## Layout / grid

- Mobile-first, single-column layout
- **Screen content and edges:** Use token-based insets so content does not sit flush to the screen edges. The scrollable content area should use class `ds-screen-content` (or padding `0 var(--t-pagePadX) var(--t-pagePadBottom)`) so horizontal and bottom spacing match design tokens (`pagePadX`, `pagePadBottom`). Headers and full-bleed elements may extend edge-to-edge; the body content below them should use this padding.
- Safe horizontal padding: `Spacing/M`
- Major sections separated by `Spacing/L` or `Spacing/XL`
- Keep large tablet behavior single-column unless explicitly extended
- Card, form, list, modal, and bottom action rules are defined in `UI_FOUNDATION.md`

---

## Accessibility

- **Contrast:** WCAG AA minimum (4.5:1 normal text, 3:1 large text and UI).
- **Touch targets:** Minimum 44×44px for interactive elements (mobile).
- **Typography:** No body text below 16px equivalent; line height and padding allow descenders.
- **Status:** Never conveyed by color alone; pair with icon and/or label.
- **Focus:** All interactive elements have a visible focus indicator (`:focus-visible`), using the primary token outline.
- **Icon-only controls:** Every icon button or control must have an accessible name (`aria-label` or visible text).
- **Skip link:** The app provides a “Skip to main content” link, visible on keyboard focus.
- **Landmarks:** Main regions use semantic elements or ARIA landmarks (`main`, `nav`, `aside` / `complementary`).
- **Forms:** Labels are associated with controls (`htmlFor`/`id`); errors are linked via `aria-describedby` and `aria-invalid`.
- **Decorative icons:** Icons that don’t convey meaning alone use `aria-hidden="true"`.