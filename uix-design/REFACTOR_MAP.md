# Refactor map — driveshield.jsx to src/

**Goal:** Convert the single-file `driveshield.jsx` into a normal React project structure. This doc reflects the **current state** of the uix-design project and what remains.

---

## Current state (aligned with codebase)

### Already in src/

- **Theme** (`src/theme/`): T (tokens), L (layout contracts), DS (DS.jsx), globalStyles (globalStyles.js). Tokens in `tokens.js`; no separate `colors.js` / `spacing.js` — single token system.
- **UI** (`src/ui/`): All reusable components in `All.jsx` — Ic, ShieldLogo, CovBadge, StatusBadge, Banner, SmartBanner, Btn, IconBtn, Card, SetRow, StatRow, Sheet, Modal, Dock, etc. Exported via `index.js`.
- **App** (`src/app/`): App.jsx (root component), getScreenElement.jsx (screen id → component), DemoShell, LeftMenu, RightKitPanel, ScreenCanvas.
- **Registry** (`src/registry/`): dock.js (DOCK_SCREENS, DOCK_TABS), screenRegistry.js (SCREEN_IDS), screenGroups.js (for left menu).
- **Data** (`src/data/`): mockVehicles, mockTrips, mockTerms, mockOnboard, mockMain, mockSettings, mockNotifications, mockSubscription — all exported from `data/index.js`.
- **Utils** (`src/utils/`): maskPhone, formatters (date/time/duration).
- **Screens** (`src/screens/`): All screens extracted by flow:
  - `splash/` — ScreenSplash
  - `auth/` — Welcome, PhoneEntry, SMSVerify, Terms, SocialCallback, SignInHub, SocialDataCompletion
  - `onboard/` — Launch, GPSOff, OnboardIntro, OnboardVehicle, OnboardUnits, OnboardReminder, OnboardComplete, OnboardDefaultVehicle
  - `main/` — Home, Trips, Evidence, EvidenceResult, EventDetails, SessionSummary, TripDetails, CoverageDetails, GapIntervals
  - `settings/` — Settings, Account, AddVehicle, EditVehicle, VehicleSelector, DefaultVehicle, Notifications, NotificationDetail, Help, Contact, About, ReportProblem, FeedbackSent, DataSecurity, DataRetention, ExportData, SystemStatus, HowCoverageWorks, WhatVerdictsMean, PermRequired
  - `subscription/` — Paywall, FreeTrial, Checkout, PurchaseSuccess, PurchaseFailed, ManageSubscription, InvoiceHistory, InvoiceDetails, SubscriptionExpired
  - `system/` — SessionExpired, Error, NoInternet, Maintenance, UpdateRequired, UIKit

### Root and routing

- **Entry:** Demo imports `App` from `src/app`. The former root file `driveshield.jsx` was removed; the app entry is `src/app/App.jsx` only.
- **App state and navigation:** Live in `src/app/App.jsx` (screen, history, dockTab, screenParams, protectionOn, selectedVehicle, homeState; navigate, goBack, switchTab).
- **Screen routing:** Screen id → Component mapping lives in `src/app/getScreenElement.jsx`; App builds a context and passes it to `getScreenElement(screenId, context)`.

So: **The app root and routing are in src/app/**; all screens and data live under `src/`.

---

## Theme (src/theme/)

- **T:** Design tokens (colors, typography, radius, shadow, spacing). Exported from `tokens.js` with `tokensToCssVars`.
- **L:** Layout contracts (row, rowPad*, rowBorder, iconSlot*, content, card, etc.). Depends on T.
- **DS:** Global `<style>` (reset, keyframes, animation classes). In `DS.jsx`.
- **globalStyles:** ds-* classes. In `globalStyles.js`.
- **Ic:** Ic component and icon path map live in `src/ui/All.jsx`; no `theme/icons.js`.

## UI (src/ui/)

Components in `All.jsx` / `index.js`: Ic, ShieldLogo, CovBadge, StatusBadge, Banner, SmartBanner, Btn, IconBtn, FInput, FSelect, Card, SetRow, StatRow, InvoiceRow, NotifRow, SessionCard, EmptyState, ErrorState, Header, Sheet, Modal, Dock, etc. Plus SORT_OPTIONS and applySortToTrips.

## Screens (src/screens/)

All screens are in `src/screens/<flow>/`.

## Registry (src/registry/)

- **dock.js:** DOCK_SCREENS, DOCK_TABS.
- **screenRegistry.js:** SCREEN_IDS list (used by left menu).
- **screenGroups.js:** Grouping for left menu.
- **Screen id → Component:** Implemented in `src/app/getScreenElement.jsx` (not in registry); App.jsx calls it with context.

## Data (src/data/)

All mock/demo data is in `src/data/`: VEHICLES, TRIPS, TERMS_SECTIONS, ONBOARD_*, mockMain, mockSettings, mockNotifications, mockSubscription, etc. Nothing left in driveshield.jsx.

## Utils (src/utils/)

maskPhone, formatters. Exported from `utils/index.js`.

---

## Remaining work (optional)

- **Done:** Screen routing is in `src/app/getScreenElement.jsx`; root is `src/app/App.jsx`; demo imports from `src/app`.
- **Optional:** Move app state into React context or a reducer for a thinner root.
- **Optional:** Replace `getScreenElement` with a URL-based router (e.g. React Router) if you need shareable URLs.

---

## Correlation with TODO2.md

- **TODO2.md** is the phased plan (audit → theme → UI → shell → registry → data → screens → helpers → cleanup → verification).
- **This map** is the “as-is” snapshot: what's in `src/` and how the root/routing are structured.
- Keep both aligned: when you change structure, update this map and tick/update the corresponding phases in TODO2.
