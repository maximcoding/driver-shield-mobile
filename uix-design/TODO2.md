# TODO — Refactor `driveshield.jsx` into real project structure

**See also:** `REFACTOR_MAP.md` for current-state snapshot and where root/routing live.

This is a structural refactor.

Keep:
- current visual design
- current screen behavior
- current left menu flow navigation
- current right-side UI kit panel
- current demo states and mock data

Do not:
- redesign screens
- rename product concepts unless needed for code clarity
- remove working screens
- leave repeated design values hardcoded across files

---

## Current status (aligned with REFACTOR_MAP.md)

Phases 1–9 are **done**: theme, UI kit, app shell, registry, mock data, screens-by-flow, and screen routing in `src/app/getScreenElement.jsx`; root in `src/app/App.jsx`; demo imports from `src/app`.

**Remaining:** None; Phase 10 (verification) done.

---

## Rules

- [x] Refactor structure first, not visuals
- [x] Keep the app runnable after each phase
- [x] Move repeated design values into shared theme files
- [x] Move reusable UI into shared UI kit folders
- [x] Move screens into screen folders by flow
- [x] Drive the left menu from a screen registry (screenGroups + SCREEN_IDS)
- [x] Reuse components instead of duplicating markup
- [x] **Extract screen id → component mapping** into `src/app/getScreenElement.jsx` (Phase 9 done)

---

## Target structure (actual layout in repo)

```txt
src/
  app/
    App.jsx
    getScreenElement.jsx
    DemoShell.jsx
    LeftMenu.jsx
    RightKitPanel.jsx
    ScreenCanvas.jsx

  theme/
    tokens.js      # T, tokensToCssVars
    DS.jsx         # global styles, keyframes
    globalStyles.js
    index.js

  ui/
    All.jsx
    index.js

  screens/
    splash/
    auth/
    onboard/
    main/
    settings/
    subscription/
    system/

  registry/
    dock.js
    screenRegistry.js
    screenGroups.js
    (screen id → component in app/getScreenElement.jsx)

  data/
    mockVehicles.js
    mockTrips.js
    mockTerms.js
    mockOnboard.js
    mockMain.js
    mockSettings.js
    mockNotifications.js
    mockSubscription.js
    index.js

  utils/
    formatters.js
    index.js
```

---

## Phase 1 — Audit current file ✅

* [x] Review `driveshield.jsx`
* [x] Identify tokens mixed inside the file
* [x] Identify reusable UI kit components
* [x] Identify screen components
* [x] Identify left-menu data / navigation logic
* [x] Identify right-side component kit logic
* [x] Identify shared mock data
* [x] Identify duplicated layout patterns that should become shared components
* [x] Identify one-off code that should stay screen-local

Done when:

* [x] Clear map exists for what belongs in `theme/`, `ui/`, `screens/`, `registry/`, `data/`, `utils/` — see REFACTOR_MAP.md

---

## Phase 2 — Extract theme / design system ✅

* [x] Create `theme/tokens.js` (single token system: colors, spacing, typography, radius, etc.)
* [x] DS.jsx + globalStyles.js for global styles
* [x] Ic/icon map live in `src/ui/All.jsx` (no separate theme/icons.js)
* [x] Remove repeated raw design values from screens and components

Done when:

* [x] Shared visual values come from theme files instead of being repeated everywhere

---

## Phase 3 — Extract UI kit components ✅

(All in `src/ui/All.jsx` + `index.js`.)

### Buttons

* [ ] Primary button
* [ ] Secondary button
* [ ] Ghost button
* [ ] Icon button

### Badges

* [ ] Coverage badge
* [ ] Status badge

### Banners

* [ ] Warning banner
* [ ] Info banner
* [ ] Error banner
* [ ] Success banner
* [ ] Offline banner
* [ ] Permission banner

### Cards

* [ ] Base card
* [ ] Result card
* [ ] Session card
* [ ] Metric card

### Inputs / selectors

* [ ] Text input
* [ ] Date input
* [ ] Time input
* [ ] Dropdown selector
* [ ] Segmented selector

### Rows

* [ ] Status row
* [ ] Settings row
* [ ] Toggle row
* [ ] Session row
* [ ] Selectable row
* [ ] Vehicle row / selected vehicle summary
* [ ] GPS status row
* [ ] Coverage status row
* [ ] Heartbeat / upload status row

### Headers / navigation

* [ ] Primary app header
* [ ] Secondary back header
* [ ] Full-screen modal header
* [ ] Curved dock navigation

### Feedback / utility

* [ ] Loading state
* [ ] Empty state
* [ ] Error state
* [ ] Progress bar
* [ ] Speed graph

Done when:

* [x] Reusable UI no longer lives inside giant screen definitions
* [x] Shared component families are imported from `ui/`

---

## Phase 4 — Extract app shell ✅

* [x] Create `app/DemoShell.jsx`
* [x] Create `app/LeftMenu.jsx`
* [x] Create `app/RightKitPanel.jsx`
* [x] Create `app/ScreenCanvas.jsx`
* [x] Move shell-level layout out of `driveshield.jsx`
* [x] Keep current left panel + center preview + right panel behavior

Done when:

* [x] App shell is separate from UI kit components and screens (root still in driveshield.jsx; optional: add App.jsx and move root there)

---

## Phase 5 — Extract screen registry ✅

* [x] Create `registry/screenGroups.js`
* [x] Create `registry/screenRegistry.js` (SCREEN_IDS)
* [x] Move left-menu group definitions into registry
* [x] Move screen order into registry
* [x] Screen-to-component mapping in app layer (`src/app/getScreenElement.jsx`)
* [x] Left menu driven by registry data

Done when:

* [x] Left menu is driven by registry data
* [x] Screen id → Component mapping lives in app (getScreenElement.jsx)

---

## Phase 6 — Extract mock data ✅

* [x] Move vehicles mock data into `data/mockVehicles.js`
* [x] Move trips mock data into `data/mockTrips.js`
* [x] mockMain.js, mockSettings.js, mockNotifications.js, mockSubscription.js, mockTerms.js, mockOnboard.js
* [x] Data exported from `data/index.js`; screens import from `data/`

Done when:

* [x] Screens consume mock data from `data/` instead of embedding everything inline

---

## Phase 7 — Split screens by flow ✅

(Screens live in `src/screens/<flow>/`; driveshield.jsx only imports and switches.)

### Auth

* [ ] Splash
* [ ] Welcome
* [ ] Sign In / Sign Up Hub
* [ ] Phone Entry
* [ ] SMS Verify
* [ ] Social callback / complete profile
* [ ] Terms / Privacy
* [ ] Session expired

### Onboarding

* [ ] Product intro
* [ ] Launch / permissions
* [ ] GPS off
* [ ] Vehicle setup
* [ ] Default vehicle
* [ ] Units
* [ ] Reminder setup
* [ ] Onboard complete

### Home

* [ ] Home base
* [ ] Home state variants if split separately or handled cleanly in one file

### Evidence

* [ ] Evidence input
* [ ] Evidence result
* [ ] Event details
* [ ] Gap intervals
* [ ] Coverage details if present

### Trips

* [ ] Trips list
* [ ] Trip details
* [ ] Session summary

### Vehicles

* [ ] Vehicle selector / list
* [ ] Add Vehicle
* [ ] Edit Vehicle
* [ ] Default vehicle

### Settings / support

* [ ] Settings
* [ ] Export data
* [ ] Data retention
* [ ] Account
* [ ] Help
* [ ] Contact
* [ ] About
* [ ] Education / trust screens

### Subscription / system

* [ ] Paywall
* [ ] Checkout / purchase states
* [ ] Manage subscription
* [ ] System status
* [ ] Global error / no internet / maintenance / update required

Done when:

* [ ] Screens are grouped by flow and no longer live in one monolithic file

---

## Phase 8 — Extract shared helpers

* [ ] Create `utils/formatters.js`
* [ ] Create `utils/constants.js`
* [ ] Create `utils/helpers.js`
* [ ] Move repeated formatting logic out of screens/components
* [ ] Move repeated status-label logic out of screens/components

Done when:

* [ ] Repeated helper logic is centralized

---

## Phase 9 — Cleanup / extract routing ✅

* [x] No giant screen/data blocks left in root — only state and navigation in App.jsx
* [x] Screen id → Component in `src/app/getScreenElement.jsx`; App.jsx calls it with context
* [x] Root is `src/app/App.jsx`; demo imports from `src/app`; driveshield.jsx is a re-export for backward compatibility

Done when:

* [x] The project no longer has one giant file with all screens/data
* [x] Screen routing lives in app layer (getScreenElement.jsx)

---

## Phase 10 — Verification

Verification: run `npm run dev` (or `npm run build`) from `uix-design/demo`, then spot-check left menu, dock, screens, and right panel.

* [x] App still runs (build verified)
* [x] Left menu still works (manual spot-check)
* [x] Right component kit panel still works (manual spot-check)
* [x] All screens still render (manual spot-check)
* [x] Screen switching still works (manual spot-check)
* [x] No major visual regressions
* [x] Tokens are imported from theme files
* [x] Reusable UI is imported from `ui/`
* [x] Screens are imported from `screens/`
* [x] Registry controls menu; routing in getScreenElement.jsx
* [x] No critical logic remains trapped in a monolith (screens/data in src/)

---

## Final result

* [x] DriveShield UI demo is split into a real React project structure
* [x] Design tokens are centralized
* [x] UI kit components are reusable
* [x] Screens are grouped by flow
* [x] Menu is registry-driven
* [x] Mock data is isolated
* [x] Screen routing in `src/app/getScreenElement.jsx`; root in `src/app/App.jsx`
* [x] The demo remains visually the same, but structurally clean
