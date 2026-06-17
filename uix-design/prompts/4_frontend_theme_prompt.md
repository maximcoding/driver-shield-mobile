# Frontend Theme Prompt — DriveShield

Use this prompt only after the DriveShield design system, variables, components, and screens are stable and approved.

## Role
You are converting an approved design system into frontend-ready theme artifacts for a mobile app.

Target consumer:
- React Native developers
- Cursor / LLM coding agents
- frontend handoff workflow

Do not generate screens.
Do not invent new design decisions.
Do not infer missing values without calling them out explicitly.

## Goal
Transform the approved DriveShield design system into a frontend-ready theme specification and component style contract.

The output must be implementation-friendly and must not introduce new colors, spacing, typography, radius values, states, or component variants that do not already exist in the approved design system.

## Inputs to use
Use only these approved sources:
- design tokens / variables
- colors
- spacing
- typography
- radius
- elevation
- opacity
- icon size tokens
- component inventory
- state semantics
- status semantics

## Hard rules
- Do not invent missing tokens or values.
- If something is missing, add it to a `GAPS` section.
- Preserve semantic naming.
- Prefer React Native–friendly output.
- Use numeric values where appropriate for spacing, radius, font size, line height, icon sizes.
- Use camelCase keys for frontend output.
- Separate primitive tokens, semantic tokens, component contracts, and state mappings.

## Deliverables

### 1. Theme Structure
Produce a frontend-ready theme structure with these top-level sections:

- `colors`
- `spacing`
- `radius`
- `typography`
- `elevation`
- `opacity`
- `iconSize`

### 2. Token Mapping
Map every approved design token into a frontend-friendly key/value structure.

Include:
- Figma token name
- frontend key
- value
- note if needed

### 3. Colors
Create a single semantic color source, for example:

- background
- surface
- surfaceSecondary
- primary
- primaryHover
- secondary
- accent
- textPrimary
- textSecondary
- textMuted
- border
- divider

Status colors:
- coverageHigh
- coverageMedium
- coverageLow
- notMonitored
- protectionOn
- protectionOff
- success
- warning
- error
- info
- disabled

### 4. Spacing
Create a single spacing scale source.

Example keys:
- xxs
- xs
- s
- m
- l
- xl
- xxl
- xxxl

### 5. Radius
Create a single radius source.

Example keys:
- none
- small
- medium
- large
- xlarge
- full

### 6. Typography
Create a typography source with styles matching the approved design system.

Include:
- h1
- h2
- h3
- subtitle
- body
- bodySmall
- caption
- helper
- buttonLabel
- fieldLabel
- statusLabel
- numericMetric
- overline

For each include:
- fontFamily
- fontSize
- fontWeight
- lineHeight
- letterSpacing if defined

### 7. Elevation
Create elevation tokens suitable for mobile implementation.

If exact shadow/elevation values are missing, put them in `GAPS`.

### 8. Opacity
Map disabled / hover / pressed opacity tokens.

### 9. Icon Sizes
Map icon size tokens:
- small
- medium
- large

### 10. Component Style Contracts
For each approved component, list:
- component name
- supported variants
- supported states
- tokens used
- required theme keys
- notes for implementation

Use the approved component inventory only.

Include at minimum:
- Button/Primary
- Button/Secondary
- Button/Ghost
- Button/Icon
- Badge/Coverage
- Badge/Status
- Card/Base
- Card/Result
- Card/Session
- Card/Metric
- Input/Text
- Input/Search
- Input/Date
- Input/Time
- Select/Dropdown
- Select/Segmented
- Row/Status
- Row/Session
- Row/Selectable
- Tile/Stat
- Tile/Metric
- Banner/Info
- Banner/Warning
- Banner/Error
- Banner/Success
- Banner/Offline
- Banner/Permission
- Toast/Success
- Toast/Error
- Toast/Info
- Modal/Base
- Modal/Confirmation
- Modal/ThemeSelector
- Modal/LanguageSelector
- Modal/VehicleSelector
- BottomSheet/Base
- TopBar
- BottomNavigation
- BackButton
- IconButton
- Loader/Spinner
- Loader/Skeleton
- ProgressBar
- Chart/SpeedGraph
- Chart/Coverage
- Section/Header
- BottomActionBar

### 11. State Mapping
Map product states to frontend theme / component props.

Include:
- coverage: high / medium / low / notMonitored
- protection: on / off
- feedback: success / warning / error / info
- disabled
- offline
- loading
- permissionRequired
- empty

### 12. Theme Scalability Notes
Explain how the structure can support:
- dark theme first
- future light theme
- future platform overrides if needed

### 13. GAPS
List anything required for frontend implementation that is missing from the design system.

Examples:
- missing exact hex values
- missing modal overlay token
- missing pressed-state opacity
- missing chart color rules
- missing disabled border token

## Output format
Return the result in this order:

1. `theme` object structure
2. token mapping table
3. component contract table
4. state mapping table
5. theme scalability notes
6. GAPS

Avoid prose-heavy explanation.
Prefer structured markdown and JSON-like examples.