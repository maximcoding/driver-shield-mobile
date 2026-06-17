You are a senior mobile product designer.

Create a complete production-grade mobile design system and screen set for a mobile app called:

DriveShield — Legal Black Box

This system must be suitable for:
- Figma Variables
- token-based theming
- React Native implementation
- reusable component-driven UI

The product is a paid mobile app for drivers. It is a calm, neutral, trustworthy legal-tech / evidence-check utility.

It is NOT:
- a navigation app
- an anti-camera app
- a sporty automotive dashboard
- a gaming-style interface
- a police / enforcement themed product

The visual style must feel:
- calm
- minimal
- reliable
- modern
- highly readable on mobile
- evidence-oriented, not emotional
- similar in discipline and clarity to Stripe / Linear / Notion UI

Avoid:
- flashy automotive styling
- racing/dashboard aesthetics
- police/enforcement vibes
- cyber/security clichés
- aggressive red-heavy UI
- entertainment or gamified visuals
- neon colors
- decorative gradients
- visual noise

Important rules:
- Mobile-first layout
- Dark theme first
- Use Auto Layout everywhere
- Use semantic naming throughout
- All components must use ONLY defined design tokens
- Do not use raw hex codes, raw spacing, raw radius, or arbitrary font sizes inside component definitions
- Keep everything platform-agnostic for iOS and Android
- Make status understandable without relying on color alone
- Use one clear token system for colors, spacing, radius, typography, elevation, opacity, and icon sizes
- All design output must be reusable as a long-term design system, not just one-off screens
- Build in this exact order:
  1. Foundations
  2. Atomic components
  3. Composite components
  4. States
  5. Screens
- Keep component inheritance shallow
- Avoid deeply nested component chains
- Prefer simple reusable primitives over complex multi-level inheritance
- Organize the Figma file into these exact pages:
  - 01 Foundations
  - 02 Components
  - 03 States
  - 04 Modals
  - 05 Screens

Create the output as editable Figma content with clear pages and semantic naming.

--------------------------------------------------
PAGE 01 FOUNDATIONS — DESIGN DIRECTION
--------------------------------------------------

Define the visual direction first.

Include:
- brief visual direction
- 5–8 style principles
- “Must feel like”
- “Must not feel like”

Must feel like examples:
- legal document
- insurance dashboard
- trustworthy utility app
- evidence report

Must not feel like examples:
- racing app
- police dashboard
- game UI
- flashy automotive concept
- entertainment product

--------------------------------------------------
PAGE 01 FOUNDATIONS — DESIGN TOKENS / FIGMA VARIABLES
--------------------------------------------------

Create a complete semantic variable system.

Create Figma Variables for:

1. Color tokens

Base colors:
- Color/Background
- Color/Surface
- Color/SurfaceSecondary
- Color/Primary
- Color/PrimaryHover
- Color/Secondary
- Color/Accent
- Color/TextPrimary
- Color/TextSecondary
- Color/TextMuted
- Color/Border
- Color/Divider

Status colors:
- Color/Status/CoverageHigh
- Color/Status/CoverageMedium
- Color/Status/CoverageLow
- Color/Status/NotMonitored
- Color/Status/ProtectionOn
- Color/Status/ProtectionOff
- Color/Status/Success
- Color/Status/Warning
- Color/Status/Error
- Color/Status/Info
- Color/Status/Disabled

2. Spacing tokens using 4px base scale

Create:
- Spacing/XXS = 4
- Spacing/XS = 8
- Spacing/S = 12
- Spacing/M = 16
- Spacing/L = 24
- Spacing/XL = 32
- Spacing/XXL = 48
- Spacing/XXXL = 64

3. Radius tokens

Create:
- Radius/None = 0
- Radius/Small = 4
- Radius/Medium = 8
- Radius/Large = 12
- Radius/XLarge = 16
- Radius/Full = 999

4. Elevation tokens

Create:
- Elevation/None
- Elevation/Low
- Elevation/Medium
- Elevation/High

5. Opacity tokens

Create:
- Opacity/Disabled
- Opacity/Hover
- Opacity/Pressed

6. Icon size tokens

Create:
- Icon/Small = 16
- Icon/Medium = 24
- Icon/Large = 32

Use semantic names only.

--------------------------------------------------
PAGE 01 FOUNDATIONS — TYPOGRAPHY SYSTEM
--------------------------------------------------

Use a modern sans-serif system font stack suitable for mobile apps.

Create reusable text styles:

- Text/H1
  - size 32
  - weight Bold
  - line height 40

- Text/H2
  - size 28
  - weight Bold
  - line height 36

- Text/H3
  - size 22
  - weight SemiBold
  - line height 28

- Text/Subtitle
  - size 18
  - weight Medium
  - line height 26

- Text/Body
  - size 16
  - weight Regular
  - line height 24

- Text/BodySmall
  - size 14
  - weight Regular
  - line height 20

- Text/Caption
  - size 12
  - weight Regular
  - line height 16

- Text/Helper
  - size 12
  - weight Regular
  - line height 16

- Text/FieldLabel
  - size 13
  - weight Medium
  - line height 18

- Text/ButtonLabel
  - size 16
  - weight SemiBold
  - line height 20

- Text/StatusLabel
  - size 13
  - weight Medium
  - line height 18

- Text/NumericMetric
  - size 28
  - weight Bold
  - line height 32

- Text/Overline
  - size 11
  - weight SemiBold
  - line height 14

Requirements:
- body text must be highly readable on mobile
- typography hierarchy must be obvious
- large metrics must be easy to scan under stress
- optional numeric style may be tabular if useful for time/speed

--------------------------------------------------
PAGE 01 FOUNDATIONS — LAYOUT & GRID
--------------------------------------------------

Define the mobile layout system.

Include:
- generic mobile frame approach
- single-column layout
- safe horizontal padding
- vertical rhythm
- max content width behavior
- section spacing rules
- list spacing rules
- card spacing rules
- form spacing rules

Use these layout principles:
- mobile-first
- clean single-column flow
- safe side padding based on spacing tokens
- major sections separated using Spacing/L or Spacing/XL
- forms use consistent vertical spacing
- cards use internal padding from the spacing system

Explain Auto Layout logic for:
- cards
- forms
- lists
- modal content
- sticky bottom actions

Use:
- clear hug / fill behavior
- predictable padding
- consistent gaps

--------------------------------------------------
PAGE 01 FOUNDATIONS — ICON SYSTEM
--------------------------------------------------

Create icon placeholders or icon references for:

- GPS
- Coverage
- Heartbeat
- Vehicle
- History
- Settings
- Safety
- Evidence
- Calendar
- Clock
- Location
- Speed
- Check
- Warning
- Error
- Info
- Close
- ArrowBack
- ArrowForward
- Menu
- Bell
- Shield
- Power
- Theme
- Language

Use:
- Icon/Small
- Icon/Medium
- Icon/Large

Keep icon style consistent:
- simple
- minimal
- no decorative illustration style
- stroke or filled style must be consistent across the system

--------------------------------------------------
PAGE 02 COMPONENTS — ATOMIC COMPONENTS
--------------------------------------------------

Create reusable atomic components using Auto Layout and variables.

Every component must use only tokens.

For each component define:
- purpose
- variants
- states
- min height
- padding
- gap
- icon size if relevant
- Auto Layout direction
- hug/fill behavior
- accessibility notes

Create these atomic components:

1. Buttons
- Button/Primary
- Button/Secondary
- Button/Ghost
- Button/Icon

States:
- Default
- Pressed
- Disabled

Minimum tap height:
- 44px

2. Inputs
- Input/Text
- Input/Search
- Input/Date
- Input/Time

States:
- Default
- Focus
- Error
- Disabled

3. Badges
- Badge/Coverage
  Variants:
  - High
  - Medium
  - Low
  - NotMonitored

- Badge/Status
  Variants:
  - Success
  - Warning
  - Error
  - Info

4. List primitives
- List/Divider

5. Basic actions
- BackButton
- IconButton

--------------------------------------------------
PAGE 02 COMPONENTS — COMPOSITE COMPONENTS
--------------------------------------------------

Create composite components after atomic components are finished.

Create:

1. Cards
- Card/Base
- Card/Result
- Card/Session
- Card/Metric

2. Selectors
- Select/Dropdown
- Select/Segmented

3. Rows / Lists
- Row/Status
- Row/Session
- Row/Selectable

4. Tiles
- Tile/Stat
- Tile/Metric

5. Banners
- Banner/Info
- Banner/Warning
- Banner/Error
- Banner/Success
- Banner/Offline
- Banner/Permission

6. Navigation
- TopBar
- BottomNavigation

7. Feedback
- Toast/Success
- Toast/Error
- Toast/Info
- Loader/Spinner
- Loader/Skeleton
- ProgressBar

8. Charts
- Chart/SpeedGraph
- Chart/Coverage

9. Structure
- Section/Header
- BottomActionBar

Keep inheritance shallow.
Do not create deeply nested component chains.

--------------------------------------------------
PAGE 03 STATES
--------------------------------------------------

Create reusable state blocks for:

- State/Loading
- State/Empty
- State/Error
- State/Offline
- State/PermissionRequired

Also support these product states:
- Protection ON
- Protection OFF
- GPS unavailable
- Coverage HIGH
- Coverage MEDIUM
- Coverage LOW
- Not monitored
- Network buffering
- No vehicles

State meaning must never rely on color alone.
Use labels, icons, and clear text.

--------------------------------------------------
PAGE 04 MODALS
--------------------------------------------------

Create modal and sheet components.

Create:
- Modal/Base
- Modal/Confirmation
- Modal/ThemeSelector
- Modal/LanguageSelector
- Modal/VehicleSelector
- Modal/PermissionInfo
- BottomSheet/Base

Rules:
- medium centered modal card for dialogs
- bottom sheet for selection-heavy or mobile-native flows
- use clear title, body, actions structure
- all modal actions must use existing button components

--------------------------------------------------
PAGE 05 SCREENS
--------------------------------------------------

Create these mobile screens:

- Launch / Permissions
- Dashboard
- Vehicle Selector
- Add Vehicle
- Edit Vehicle
- Evidence Check
- Evidence Result
- Event Details
- Session Summary
- History
- Settings

Apply the existing design system and component library.

Do not invent extra screens outside this list.

For the screens include these important product states where relevant:

- Protection ON
- Protection OFF
- GPS unavailable
- Permission missing
- Coverage HIGH
- Coverage MEDIUM
- Coverage LOW
- Not monitored
- Offline
- Empty history
- Multiple vehicles

Use these exact evidence verdict texts:

- “No speeding events found (High coverage)”
- “Speeding event recorded (High coverage)”
- “Insufficient coverage to verify”
- “Not monitored (Protection was OFF)”

Settings screen must support:
- theme selection
- language selection
- units selection
- permissions health
- reminder toggle
- retention info

Use modals or sheets for:
- theme change
- language change
- vehicle selection
- destructive confirmations

--------------------------------------------------
NAMING & ACCESSIBILITY RULES
--------------------------------------------------

Use semantic naming only.

Examples:
- Button/Primary
- Badge/Coverage/High
- Card/Result
- Text/Body
- Color/Status/Warning
- Modal/LanguageSelector
- Screen/Dashboard/On

Do NOT use:
- Frame 12
- Group 41
- Rectangle 9
- Text Copy 2

Apply accessibility rules across the system:
- minimum contrast suitable for dark UI
- readable text sizes on mobile
- minimum touch target 44px
- disabled state must remain clear
- color cannot be the only meaning carrier
- status must always include label and/or icon
- spacing and text contrast must support readability under stress

--------------------------------------------------
TOKEN EXPORT STRUCTURE
--------------------------------------------------

Create a token export example suitable for frontend handoff in this structure:

{
  "colors": {
    "background": "",
    "surface": "",
    "surfaceSecondary": "",
    "primary": "",
    "primaryHover": "",
    "secondary": "",
    "accent": "",
    "textPrimary": "",
    "textSecondary": "",
    "textMuted": "",
    "border": "",
    "divider": "",
    "status": {
      "coverageHigh": "",
      "coverageMedium": "",
      "coverageLow": "",
      "notMonitored": "",
      "protectionOn": "",
      "protectionOff": "",
      "success": "",
      "warning": "",
      "error": "",
      "info": "",
      "disabled": ""
    }
  },
  "spacing": {
    "xxs": 4,
    "xs": 8,
    "s": 12,
    "m": 16,
    "l": 24,
    "xl": 32,
    "xxl": 48,
    "xxxl": 64
  },
  "radius": {
    "none": 0,
    "small": 4,
    "medium": 8,
    "large": 12,
    "xlarge": 16,
    "full": 999
  },
  "typography": {
    "h1": {},
    "h2": {},
    "h3": {},
    "subtitle": {},
    "body": {},
    "bodySmall": {},
    "caption": {},
    "helper": {},
    "fieldLabel": {},
    "buttonLabel": {},
    "statusLabel": {},
    "numericMetric": {},
    "overline": {}
  },
  "elevation": {
    "none": {},
    "low": {},
    "medium": {},
    "high": {}
  },
  "opacity": {
    "disabled": "",
    "hover": "",
    "pressed": ""
  },
  "iconSize": {
    "small": 16,
    "medium": 24,
    "large": 32
  }
}

Ensure all components reference tokens instead of raw values.

Final requirement:
Create the result as a clean, production-style Figma system with:
- foundations
- variables
- typography
- icons
- reusable components
- modal system
- state system
- app screens
- token export structure

Everything must be editable, reusable, and suitable for handoff to React Native development.