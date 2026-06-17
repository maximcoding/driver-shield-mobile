# client/TODO.md — DriveShield Mobile (Starter → Tokens → UI Kit → Nav Shell → Placeholder Screens)

> Source of truth for current mobile work.  
> Current goal: build a **clean frontend foundation only**:
> 1. correct starter-based project setup
> 2. normalized in-project tokens/theme
> 3. reusable UI Kit
> 4. stable navigation shell
> 5. placeholder screens
>
> **Not in scope yet:** real screen/business implementation, backend integration.

---

## 0) Rules (non-negotiable)

- [ ] Read `client/AGENTS.md` before starting work.
- [ ] Use the generated starter architecture as the base. Extend it; do not rebuild theme, navigation, state, or folder structure from scratch.
- [ ] Use **tokens only** for styling in screens/components:
  - no raw hex/rgb/rgba
  - no magic spacing/font size/radius/elevation values
- [ ] Use the project’s **existing i18n/locales** for all user-facing text.
  - no hardcoded visible strings in JSX/screens/shared components
- [ ] No duplicate UI components.
  - repeated UI must become a shared component or shared variant
- [ ] No new dependencies without explicit proposal first.
- [ ] After each phase:
  - run iOS
  - run Android
  - run lint
  - create checkpoint commit with proof commands
- [ ] **uix-design** (demo + theme + UI kit + docs) is the visual and token reference for the mobile app. Tokens and UI kit in the client must align with uix-design so the mobile app matches the demo's design. After Phase 2, the in-project theme/tokens remain the single source of truth for the client codebase.
- [ ] Do not start backend integration until frontend foundation is signed off.

---

## 1) References

- [ ] `client/AGENTS.md`
- [ ] Starter/base: `https://github.com/maximcoding/react-native-starter`
- [ ] **uix-design (demo project)** — design source of truth:
  - [ ] Tokens/theme: `uix-design/src/theme/tokens.js` (T, L), `uix-design/design/tokens.json`
  - [ ] UI kit: `uix-design/src/ui/All.jsx`, `uix-design/src/ui/index.js`
  - [ ] Design docs: `uix-design/docs/DESIGN_SYSTEM.md`, `uix-design/docs/SCREEN_SPECS.md`, `uix-design/design/component-map.md`
  - [ ] Screen inventory: `uix-design/src/screens/` (splash, auth, onboard, main, settings, subscription, system), `uix-design/REFACTOR_MAP.md`

### 1.1 uix-design inventory (conversion traceability)

- **Design system:** `uix-design/docs/DESIGN_SYSTEM.md` (color roles, status colors, typography, spacing, radius, elevation, layout, accessibility), `uix-design/docs/UI_FOUNDATION.md` (cards, lists, forms, banners, modals/sheets, bottom actions, vertical rhythm, state presentation), `uix-design/docs/DESIGN_RULES.md` (tokens only, no raw hex, semantic naming).
- **Component map:** `uix-design/design/component-map.md` (design component → implementation).
- **Screens:** `uix-design/docs/SCREEN_SPECS.md`, `uix-design/docs/SCREEN_INVENTORY.md`, `uix-design/src/registry/screenRegistry.js`, `uix-design/REFACTOR_MAP.md`, `uix-design/src/screens/` (splash, auth, onboard, main, settings, subscription, system).

> Note:
> The design system and tokens live in uix-design. The client implements them inside the React Native app during Phase 2; after that, the in-project theme/tokens are the single source of truth for mobile UI work.

---

## 2) Phase 1 — Clean starter project baseline

> Outcome: generated project runs cleanly, and the team understands the generated structure.

### 2.1 Generate / prepare base app
- [ ] Create `client/DriveShield` from the starter
- [ ] Install dependencies using the starter’s intended workflow
- [ ] Keep generated folder structure intact
- [ ] Do not start custom UI work before baseline is green

### 2.2 Verify baseline
- [ ] Run Metro
- [ ] Run iOS successfully
- [ ] Run Android successfully
- [ ] Run lint
- [ ] Run tests if starter already includes them
- [ ] Confirm clean baseline before touching theme/components/screens

### 2.3 Document generated architecture
- [ ] Create/update `client/DriveShield/README.md`
- [ ] Document:
  - [ ] where theme/tokens live
  - [ ] where i18n/locales live
  - [ ] where navigation lives
  - [ ] where shared UI components belong
  - [ ] alias import rules
  - [ ] starter conventions that must not be broken

### 2.4 Checkpoint
- [ ] Commit: `chore: reset base project from react-native-starter`

**Phase 1 done when**
- [ ] iOS runs
- [ ] Android runs
- [ ] lint passes
- [ ] `client/DriveShield/README.md` documents the generated structure
- [ ] no custom architecture was introduced

---

## 3) Phase 2 — Tokens + Theme alignment

> Outcome: tokens are extracted, normalized, implemented in the starter theme system, and become the source of truth for all future UI work.

### 3.1 Derive token system from uix-design
- [ ] Use `uix-design/src/theme/tokens.js` (T: colors, typography, spacing, radius, shadows, row/layout values) and `uix-design/docs/DESIGN_SYSTEM.md` for semantic roles. Review and extract:
  - [ ] colors
  - [ ] typography
  - [ ] spacing
  - [ ] radius
  - [ ] elevation/shadows
  - [ ] icon sizing
- [ ] Normalize these into a coherent token system for the app
- [ ] Implement them inside the starter’s existing theme/token infrastructure
- [ ] Ensure both light and dark themes are defined
- [ ] Ensure typography includes monospaced numerals for speed/time
- [ ] Ensure tabs/headers can consume the same tokens cleanly

### 3.1.1 Design system alignment (DESIGN_SYSTEM.md)
- [ ] **Colors:** All roles (Primary, Secondary, Accent, Background, Surface, Surface secondary, Text primary/secondary/muted, Border, Divider) and all status colors (Coverage HIGH/MEDIUM/LOW, Not monitored, Protection ON/OFF, Success, Warning, Error, Info, Disabled).
- [ ] **Typography:** All styles (H1–H3, Subtitle, Body, Body Small, Caption, Helper, Field Label, Button Label, Status Label, Numeric Metric); ensure Field Label, Helper, Status Label are present.
- [ ] **Spacing / Radius / Elevation:** Use token scale only; Elevation/Medium and Elevation/High for modals and toasts.
- [ ] **Layout:** Screen content padding (pagePadX / Spacing/M), safe area, card/list/modal rules from UI_FOUNDATION.md.
- [ ] **Accessibility:** Min touch 44px, WCAG AA, status not by color alone, focus indicator, icon button accessible name, form labels/errors.

### 3.2 Make project tokens the single source of truth
- [ ] After implementation, treat in-project theme/tokens as the only source of truth
- [ ] Do not copy raw values from uix-design into screens; use the in-project token system derived from uix-design
- [ ] Adapt any mobile-only needs through new or extended tokens rather than hardcoding screen-specific values

### 3.3 Token Preview (dev-only)
- [ ] Create a dev-only Token Preview screen/page
- [ ] Show:
  - [ ] color swatches
  - [ ] typography variants
  - [ ] mono numerals sample
  - [ ] spacing samples
  - [ ] radius/elevation examples
- [ ] Wire it safely into development navigation only
- [ ] Keep all visible labels in i18n/locales

### 3.4 Checkpoint
- [ ] Commit: `feat: establish tokens + theme (light/dark) + token preview`

**Phase 2 done when**
- [ ] a normalized token system exists inside the project
- [ ] light theme is coherent
- [ ] dark theme is coherent
- [ ] Token Preview works
- [ ] screens/components can rely on tokens only
- [ ] no raw styling values are used outside token definitions

---

## 4) Phase 3 — Shared UI Kit

> Outcome: reusable UI Kit exists and is strong enough to build all app screens consistently.  
> Still no real screen implementation.  
> Align component names and variants with uix-design's UI kit (`uix-design/src/ui/`) where applicable (e.g. CoverageBadge ↔ CovBadge, Button variants, Card, SetRow-style rows, EmptyState, Modal/Sheet patterns).

### 4.1 i18n enforcement
- [ ] Confirm and follow the starter i18n workflow exactly
- [ ] Add strict English verdict strings to locales, exact:
  - [ ] `No speeding events found (High coverage)`
  - [ ] `Speeding event recorded (High coverage)`
  - [ ] `Insufficient coverage to verify`
  - [ ] `Not monitored (Protection was OFF)`
- [ ] Ensure shared components contain no hardcoded visible text

### 4.2 Build shared UI Kit using tokens only

#### Typography / Text
- [ ] AppText variants:
  - [ ] Title
  - [ ] Subtitle
  - [ ] Body
  - [ ] Caption
  - [ ] MonoNumbers
- [ ] Semantic text colors via tokens

#### Buttons
- [ ] Button variants:
  - [ ] Primary
  - [ ] Secondary
  - [ ] Ghost
  - [ ] Destructive
- [ ] Button sizes:
  - [ ] sm
  - [ ] md
  - [ ] lg
- [ ] Button states:
  - [ ] loading
  - [ ] disabled
- [ ] IconButton for header actions

#### Layout primitives
- [ ] Card / Surface
- [ ] Divider
- [ ] Spacer
- [ ] Screen wrapper only if starter does not already provide one

#### Inputs
- [ ] TextInput
- [ ] DateTime input pattern
- [ ] SwitchRow

#### Lists
- [ ] ListItem
- [ ] SectionHeader
- [ ] EmptyState
- [ ] Use starter list approach first
- [ ] Do not add FlashList unless clearly justified and approved

#### Status / Badges
- [ ] Badge
- [ ] CoverageBadge visual states:
  - [ ] HIGH
  - [ ] MEDIUM
  - [ ] LOW
  - [ ] NOT_MONITORED

#### Modals
- [ ] Base Modal
- [ ] Confirm dialog pattern
- [ ] Blocking permissions modal layout

#### DriveShield-specific building blocks
- [ ] ProtectionToggle
- [ ] MetricTile
- [ ] CoverageDetailsBlock
- [ ] EvidenceActionRow

### 4.3 UI Catalog (dev-only)
- [ ] Create a dev-only UI Catalog screen
- [ ] Show every shared component and important variant
- [ ] Keep all labels in i18n/locales
- [ ] Do not expose UI Catalog in normal production navigation

### 4.4 Component inventory
- [ ] Create/update `client/DriveShield/COMPONENT_INVENTORY.md`
- [ ] Document:
  - [ ] component name
  - [ ] variants
  - [ ] intended usage
  - [ ] “do not duplicate” notes

### 4.5 UI Kit — full uix-design component list

Every component from `uix-design/src/ui/index.js` and `uix-design/docs/UI_FOUNDATION.md` / `uix-design/design/component-map.md` must be accounted for (implemented or deferred).

#### Icons and branding
- [ ] Ic, ShieldLogo, BrandIc — IconSvg / assets; document in COMPONENT_INVENTORY
- [ ] CovBadge, StatusBadge — CoverageBadge, Badge (implemented)

#### Banners
- [ ] Banner (Offline) — OfflineBanner (implemented)
- [ ] Banner (Info, Warning, Error, Success, Permission) — implement or defer
- [ ] SmartBanner — implement or defer

#### Buttons (component-map: Button/Primary, Secondary, Ghost, Icon)
- [ ] Btn, IconBtn — Button, IconButton (implemented)
- [ ] AuthBtn — variant or note in COMPONENT_INVENTORY

#### Inputs (component-map: Input/Text, Input/DateTime)
- [ ] FInput — ThemedTextInput (implemented)
- [ ] FSelect (Select/Dropdown row) — implement or defer
- [ ] DateTime pattern — DateTimeInput (implemented)

#### Layout
- [ ] Card, Div — Card, Divider (implemented)
- [ ] SecLabel, SectionHeader — SectionHeader (implemented)

#### Rows and lists (component-map: Row/Status, Row/Session)
- [ ] StatRow, SetRow — ListItem, MetricTile, SwitchRow (implemented)
- [ ] InvoiceRow, NotifRow — implement or defer
- [ ] SessionCard, SessionRow — implement or defer
- [ ] SelectRow — ListItem variant; implement or defer
- [ ] VehicleRow, TextRow, LoadingRow — implement or defer
- [ ] PermRow, TogRow (SwitchRow done), CtrlRow — PermRow, CtrlRow implement or defer

#### States and empty
- [ ] EmptyState — EmptyState (implemented)
- [ ] ErrorState — implement or defer
- [ ] BrandLoader, LoadingRow — loading indicator; implement or defer

#### Tiles and blocks (component-map: Tile/Stat)
- [ ] StatTile — MetricTile (implemented)
- [ ] PageHeader — screen header pattern; implement or defer

#### Modals and sheets (component-map: Modal/Base)
- [ ] Header, Sheet, Modal — BaseModal, half-sheet (implemented)
- [ ] ConfirmSheet — ConfirmDialog (implemented)
- [ ] DatePickerSheet, TimePickerSheet — implement or defer
- [ ] ExportSheet, ShareSheet, SortFilterSheet — implement or defer

#### Navigation and keyboard
- [ ] Dock — tab bar / navigation (in nav); document
- [ ] NumericKeyboard — implement or defer

#### Sections and controls
- [ ] SectionHeader — (implemented)
- [ ] CollapsibleSection — implement or defer
- [ ] HBadge, Seg — map to Badge or add; implement or defer
- [ ] ProgressBar — implement or defer
- [ ] MapCard, SpeedGraph, RetRow — implement or defer

#### component-map alignment
- [ ] Button/Primary, Secondary, Ghost, Icon — Button, IconButton
- [ ] Badge/Coverage, Badge/Status — CoverageBadge, Badge
- [ ] Card/Base, Card/Result (structure) — Card
- [ ] Banner/* (Info, Warning, etc.) — see Banners above
- [ ] Input/Text, Input/DateTime — ThemedTextInput, DateTimeInput
- [ ] Row/Status, Row/Session — ListItem, EvidenceActionRow
- [ ] Tile/Stat — MetricTile
- [ ] Section/Header — SectionHeader
- [ ] Modal/Base — BaseModal
- [ ] BottomActionBar — implement or defer

### 4.6 Checkpoint
- [ ] Commit: `feat: ui kit complete + ui catalog`

**Phase 3 done when**
- [ ] shared UI Kit covers common app building blocks
- [ ] UI Catalog exists and is useful
- [ ] no hardcoded visible strings in shared components
- [ ] no duplicate shared patterns
- [ ] tokens are used consistently across the kit

---

## 5) Phase 4 — Navigation shell + placeholder screens

> Outcome: navigation is stable and all required screens exist as scaffolds only.  
> This is not the real feature implementation.

### 5.1 Navigation shell
- [ ] Extend starter navigation, do not replace it
- [ ] Configure tabs using tokens
- [ ] Configure headers using tokens
- [ ] Ensure tabs and headers look consistent across the app
- [ ] Avoid one-off navigation hacks

### 5.2 Placeholder screens
Final screen set and flow follow uix-design (see `uix-design/REFACTOR_MAP.md`, `uix-design/src/registry/screenRegistry.js`, and `uix-design/src/screens/`). Create placeholder screens for every screen below. Each line is one placeholder.

#### Splash
- [ ] Placeholder: Splash

#### Auth
- [ ] Placeholder: Welcome
- [ ] Placeholder: PhoneEntry
- [ ] Placeholder: SMSVerify
- [ ] Placeholder: Terms
- [ ] Placeholder: SocialCallback
- [ ] Placeholder: SignInHub
- [ ] Placeholder: SocialDataCompletion

#### Onboard
- [ ] Placeholder: Launch
- [ ] Placeholder: GPSOff
- [ ] Placeholder: OnboardIntro
- [ ] Placeholder: OnboardVehicle
- [ ] Placeholder: OnboardUnits
- [ ] Placeholder: OnboardReminder
- [ ] Placeholder: OnboardComplete
- [ ] Placeholder: OnboardDefaultVehicle

#### Main
- [ ] Placeholder: Home
- [ ] Placeholder: Trips
- [ ] Placeholder: Evidence
- [ ] Placeholder: EvidenceResult
- [ ] Placeholder: EventDetails
- [ ] Placeholder: SessionSummary
- [ ] Placeholder: TripDetails
- [ ] Placeholder: CoverageDetails
- [ ] Placeholder: GapIntervals

#### Settings
- [ ] Placeholder: Settings
- [ ] Placeholder: Account
- [ ] Placeholder: AddVehicle
- [ ] Placeholder: EditVehicle
- [ ] Placeholder: VehicleSelector
- [ ] Placeholder: DefaultVehicle
- [ ] Placeholder: Notifications
- [ ] Placeholder: NotificationDetail
- [ ] Placeholder: Help
- [ ] Placeholder: Contact
- [ ] Placeholder: About
- [ ] Placeholder: ReportProblem
- [ ] Placeholder: FeedbackSent
- [ ] Placeholder: DataSecurity
- [ ] Placeholder: DataRetention
- [ ] Placeholder: ExportData
- [ ] Placeholder: SystemStatus
- [ ] Placeholder: HowCoverageWorks
- [ ] Placeholder: WhatVerdictsMean
- [ ] Placeholder: PermRequired

#### Subscription
- [ ] Placeholder: Paywall
- [ ] Placeholder: FreeTrial
- [ ] Placeholder: Checkout
- [ ] Placeholder: PurchaseSuccess
- [ ] Placeholder: PurchaseFailed
- [ ] Placeholder: ManageSubscription
- [ ] Placeholder: InvoiceHistory
- [ ] Placeholder: InvoiceDetails
- [ ] Placeholder: SubscriptionExpired

#### System
- [ ] Placeholder: SessionExpired
- [ ] Placeholder: Error
- [ ] Placeholder: NoInternet
- [ ] Placeholder: Maintenance
- [ ] Placeholder: UpdateRequired

#### Dev-only
- [ ] Placeholder: Token Preview (dev-only; already exists)
- [ ] Placeholder: UIKit (dev-only)

Each placeholder must:
- [ ] use shared UI Kit only
- [ ] show correct header/title structure
- [ ] use static/mock layout only
- [ ] contain no backend logic
- [ ] contain no real screen/business implementation
- [ ] use i18n/locales for all visible text

### 5.3 Checkpoint
- [ ] Commit: `feat: navigation shell + placeholder screens`

**Phase 4 done when**
- [ ] every placeholder is reachable
- [ ] tabs/headers are consistent
- [ ] no real business logic was added
- [ ] placeholders are clearly scaffolds, not half-built final screens

---

## 6) Phase 5 — Foundation sign-off

> Outcome: frontend foundation is approved and ready for real screen work.

- [ ] App runs on iOS
- [ ] App runs on Android
- [ ] Light/Dark are consistent across Token Preview, UI Catalog, and placeholders
- [ ] No hardcoded user-facing strings in screens/components
- [ ] No raw style values in UI code
- [ ] Shared UI Kit is reusable and sufficient for app screens
- [ ] Navigation shell is stable
- [ ] `README.md` is up to date
- [ ] `COMPONENT_INVENTORY.md` is up to date
- [ ] Checkpoint commits exist for every phase

**Only after Phase 5**
- [ ] start rebuilding real screens
- [ ] then later start backend integration

---

## 7) Phase 6 — Real screen implementation
- [ ] Do not start until Phase 5 is signed off
- [ ] Implement screens per uix-design `docs/SCREEN_SPECS.md` and `docs/SCREEN_INVENTORY.md`; screen list = Section 5 placeholder list (full set by flow).
- [ ] Splash screen (app identity while bootstrap resolves); wired in root navigator.
- [ ] Auth flow (real UI, mock data): Welcome → PhoneEntry → SMSVerify → Terms; nav to onboarding on Terms "I Agree & Continue".

---

## 8) Phase 7 — Backend integration
- [ ] Do not start until real screens are rebuilt on top of the approved foundation

**Not in current foundation scope.**

---

## Progress Log (append-only)
- 2026-03-17 — Step 0: client/AGENTS.md. Phase 1: client/DriveShield from react-native-starter, lint fixes, README architecture doc. — proof: `cd client/DriveShield && npm run lint && npm test && npx pod-install ios` — commits: `7dbc728` — notes: iOS/Android run require simulator/emulator; baseline green for lint + tests.
- 2026-03-17 — Phase 2: tokens + theme from uix-design (spacing, radius, elevation, typography + monoNumbers, iconSizes); light/dark themes with semantic + status colors; Token Preview screen (dev-only). — proof: `cd client/DriveShield && npm run lint && npm test` — commits: `c1a3e28` — notes: Token Preview reachable via Settings in __DEV__ only.
- 2026-03-17 — Phase 3: shared UI Kit (Text variants, Button ghost/destructive/sm + IconButton, Card/Divider/Spacer, ThemedTextInput/DateTimeInput/SwitchRow, ListItem/SectionHeader/EmptyState, Badge/CoverageBadge, BaseModal/ConfirmDialog/PermissionsModalLayout, ProtectionToggle/MetricTile/CoverageDetailsBlock/EvidenceActionRow); verdict i18n + OfflineBanner i18n; UI Catalog screen (dev-only); COMPONENT_INVENTORY.md. — proof: `cd client/DriveShield && npm run lint && npm test` — commits: `3bf4262` — notes: UI Catalog reachable via Settings in __DEV__ only.
- 2026-03-17 — Phase 4: navigation shell + placeholder screens (PlaceholderScreen component, all flows: auth/onboard/main/settings/subscription/system, navigation tokens for tabs/headers, i18n placeholder text). — proof: `cd client/DriveShield && npm run lint && npm test` — commits: `a007fd9` — notes: All placeholder screens reachable; navigation shell consistent.
- 2026-03-17 — Phase 5: foundation sign-off (removed hardcoded strings/raw styles, verified token/theme consistency, confirmed UI Kit completeness, README + COMPONENT_INVENTORY up to date). — proof: `cd client/DriveShield && npm run lint && npm test` — commits: `a210fcb` — notes: Frontend foundation approved and ready for real screen implementation.
- 2026-03-17 — Phase 6 (first batch): Splash screen; Auth flow real screens (Welcome, PhoneEntry, SMSVerify, Terms) with mock data, i18n, tokens only. Terms "I Agree & Continue" resets to ROOT_ONBOARDING. — proof: `cd client/DriveShield && npm run lint && npm test` — commits: (pending) — notes: Auth stack initial route AUTH_WELCOME; NumericKeyboard deferred (ThemedTextInput used).
- 2026-03-18 — Phase 6 (second batch): Onboarding flow real screens (Launch, GPS Off, OnboardIntro, OnboardVehicle, OnboardDefaultVehicle, OnboardUnits, OnboardReminder, OnboardComplete) with mock data, i18n (en/de/ru), tokens only. OnboardComplete sets onboarding done and resets to ROOT_APP. — proof: `cd client/DriveShield && npm run lint && npm test` — commits: (pending) — notes: First screen after Terms = ONBOARDING_LAUNCH; flow linear through all 8 screens.
- YYYY-MM-DD — <done items> — proof: `<commands>` — commits: `<hashes>` — notes: `<short>`