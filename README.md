# DriveShield Mobile

**Tamper-proof drive recording that protects drivers when it matters most.**

## 💡 The idea

DriveShield is a mobile app that produces **tamper-proof evidence of how a driver actually drove**.
When a driver turns **Protection ON**, the app records GPS + speed telemetry for the trip, scores
how complete that recording was (**coverage**), and generates an immutable **verdict** — e.g.
"No speeding events found (High coverage)". If a dispute arises (an insurer, employer, or
authority claims the driver was speeding), the driver can run an **Evidence Check** for a vehicle
and date/time and get a clear, verifiable answer backed by a session hash. The driver is protected
**only by what was actually monitored** — no guessing, no smoothing, no after-the-fact edits.

## ✨ Features

**Product**
- 🛡️ **Protection toggle** — start/stop tamper-proof recording per trip
- 📍 **Drive sessions** — GPS + speed telemetry captured while protection is ON
- 📊 **Coverage scoring** — HIGH / MEDIUM / LOW / NOT_MONITORED based on data completeness
- ⚖️ **Verdicts** — immutable, canonical results (speeding / no speeding / insufficient coverage)
- 🔎 **Evidence Check** — query by vehicle + date/time → matched session and verdict
- 🧾 **Trip history & details** — sessions, segments, gap intervals, event details
- 🚗 **Vehicles** — add/edit/select default vehicle
- 💳 **Subscription** — paywall, free trial, checkout, invoices, manage plan
- 🔐 **Evidence integrity** — finalized sessions are immutable; SHA-256 session hash

**Engineering foundation** (from [react-native-bare-starter](https://github.com/maximcoding/react-native-bare-starter))
- 🧱 Bare React Native 0.82 (no Expo) + React 19, **strict TypeScript**
- 🧭 React Navigation 7 — stacks, tabs, modals
- 📦 TanStack Query 5 — caching, retries, persistence
- 🪶 Zustand 5 — light, hook-based state
- ⚡ MMKV 4.3 storage via Nitro Modules (offline-first)
- 📡 Offline-ready — query persistence, queue/replay, transport offline mode
- 🔌 Pluggable transport — REST / GraphQL / WebSocket / Firebase adapters
- 🎨 Theming — light/dark with semantic tokens + `useTheme()`
- 🌍 i18next 25 — typed translations (EN/DE/RU) via `useT()`
- 🖼️ SVG icons via `npm run gen:icons`; BootSplash 6
- 🧪 Biome 2, Jest 29, Maestro E2E

This repository contains the DriveShield **mobile frontend** and its **design reference**. The
current goal is to **convert the design demo into the React Native app** — building real screens
on top of the existing foundation (theme tokens, UI kit, navigation shell).

> **Built on:** the React Native app in `client/DriveShield` is built on top of the
> [**react-native-bare-starter**](https://github.com/maximcoding/react-native-bare-starter)
> template (bare RN 0.82, TypeScript, React Navigation 7, TanStack Query, Zustand, MMKV,
> offline-ready transport, theming, i18next, Biome/Jest). Extend that foundation — do not rebuild
> theme, navigation, state, or folder structure from scratch. See the starter's README for the
> full architecture and conventions.

## Repository layout

```
driver-shield-mobile/
├── client/              # React Native mobile app (bare workflow, TypeScript)
│   ├── AGENTS.md        # ← READ FIRST before any client work
│   └── DriveShield/     # The RN project
└── uix-design/          # React + Vite design demo = visual source of truth
    ├── AGENTS.md        # Design system rules
    ├── demo/            # Runnable demo (all screens, UI kit, tokens)
    └── src/             # theme/, ui/, screens/, data/
```

## The task

Convert the `uix-design` demo screens into real React Native screens in `client/DriveShield`.

- **`uix-design`** is the **design source of truth** — every screen, the UI kit, tokens, and
  states already exist there as a runnable React/Vite demo.
- **`client/DriveShield`** is the **target** — a React Native starter with theme tokens, a shared
  UI Kit, an i18n setup, and a navigation shell already in place. Screens are currently
  placeholders.

Your job is to implement the real screens in the client so the mobile app matches the demo.

**Deliverable: a fully clickable prototype.** No real backend in this phase — the whole app must
be **clickable, with working navigation and changing states, fully driven by mock data** behind a
service layer that mimics backend integration (loading/empty/error/content included). It should
feel indistinguishable from the finished app, except the data is mocked — so when the real API
arrives, only the mock layer is swapped and screens/navigation stay untouched.

👉 **Start here: [BUILD_GUIDE.md](BUILD_GUIDE.md)** — step-by-step instructions for reusing the
design system, tokens, theme, and UI Kit so the app looks and behaves exactly like the demo,
including token/component mapping tables and a per-screen Definition of Done.

### Ground rules (see `client/AGENTS.md` for the full list)

1. **Tokens only** for styling — no raw hex/rgb, no magic spacing/size/radius values.
2. **i18n for all visible text** — no hardcoded strings in JSX.
3. **No duplicate UI** — repeated UI becomes a shared component/variant.
4. **Alias imports only** (`@/features/...`, `@/shared/...`, `@/navigation/...`, `@/i18n/...`) — no `../../../`.
5. **Strict TypeScript** — no `any`.
6. **No new dependencies** without approval.
7. **`uix-design` is the visual reference** — the mobile app must match the demo.
8. After each phase: run iOS, run Android, run lint, commit a checkpoint.

## Getting started

### Design demo (React + Vite)

```bash
cd uix-design/demo
npm install
npm run dev          # http://localhost:5173
```

### Mobile app (React Native)

```bash
cd client/DriveShield
cp .env.example .env          # fill in values
npm install
npx pod-install ios           # iOS only (macOS)

npm start                     # Metro bundler
npm run ios                   # build + run on iOS simulator
npm run android               # build + run on Android emulator

npm run lint                  # Biome
npm test                      # Jest
```

> **Note:** `.env` is gitignored. Use `.env.example` as the template. Never commit secrets.

## Mobile stack

- React Native 0.82 + React 19, TypeScript (strict)
- Navigation: React Navigation 7 (native-stack + bottom-tabs)
- State/data: Zustand + TanStack Query, MMKV (offline-first)
- Theme + i18n: custom token theme + i18next (EN/DE/RU)
- Reanimated 4, Gesture Handler, SVG, Vector Icons
- Tooling: Biome, Jest, Husky

## React Native project structure (`client/DriveShield`)

Feature-first architecture inherited from the boilerplate. **Build new screens inside
`src/features/<feature>/screens/` and shared UI inside `src/shared/components/ui/` — do not
introduce a new architecture.**

```
client/DriveShield/
├── App.tsx                  # Root: providers (theme, query, i18n, nav)
├── index.js                 # RN entry point
├── app.json                 # App name / config
├── babel.config.js          # Babel + module-resolver (@/ aliases)
├── metro.config.js          # Metro + SVG transformer
├── tsconfig.json            # Strict TS + path aliases
├── biome.json               # Lint/format config
├── jest.config.js           # Test config
├── .env.example             # Env template (copy → .env, gitignored)
│
├── android/                 # Native Android project (Gradle)
├── ios/                     # Native iOS project (Xcode workspace, Podfile)
├── assets/                  # Fonts, images, bootsplash logo
├── maestro/                 # E2E smoke flows (iOS + Android)
├── scripts/                 # Icon/bootsplash/env generators
│
└── src/
    ├── config/              # App constants + feature flags
    │
    ├── features/            # ⭐ Feature-first — each feature is self-contained
    │   ├── auth/            #   sign-in / phone / OTP / terms
    │   │   ├── api/         #   request builders
    │   │   ├── hooks/       #   feature hooks (queries/mutations)
    │   │   ├── screens/     #   ⭐ screens go here
    │   │   ├── services/    #   feature service layer
    │   │   └── types/       #   feature TypeScript types
    │   ├── home/            #   home / feed / session entry
    │   ├── settings/        #   settings + reusable settings rows
    │   │   ├── components/  #   feature-local components
    │   │   └── screens/
    │   └── user/            #   profile / me
    │
    ├── navigation/          # React Navigation setup
    │   ├── root/            #   root navigator + param lists
    │   ├── tabs/            #   bottom tab bar (the "Dock")
    │   ├── helpers/         #   typed navigation helpers
    │   ├── persistence/     #   nav state persistence
    │   └── routes.ts        #   route name constants
    │
    ├── i18n/                # i18next setup
    │   ├── locales/         #   en / de / ru translation files
    │   └── useT.ts          #   typed translation hook
    │
    ├── session/            # Drive-session domain (protection/telemetry)
    │
    └── shared/             # ⭐ Cross-feature building blocks
        ├── components/ui/   #   ⭐ shared UI Kit (Button, Card, Sheets, …)
        ├── hooks/           #   generic hooks (useForm, useDebouncedValue, …)
        ├── stores/          #   Zustand global stores
        ├── theme/           #   ⭐ design system
        │   ├── tokens/      #     brand, spacing, radius, typography, elevation, fonts
        │   ├── light.ts     #     light theme
        │   ├── dark.ts      #     dark theme
        │   ├── ThemeProvider.tsx
        │   └── useTheme.ts  #     useTheme() hook → theme.colors / spacing / radius / typography
        ├── services/        #   infra
        │   ├── api/         #     http client, query layer, offline, transport adapters
        │   ├── storage/     #     MMKV wrapper
        │   └── monitoring/  #     error/perf hooks
        ├── types/           #   shared types
        └── utils/           #   helpers (platform, formatting, …)
```

**Where things go**
- New screen → `src/features/<feature>/screens/MyScreen.tsx`
- Reused UI (used by 2+ screens) → `src/shared/components/ui/`
- Colors / spacing / radius / fonts → `src/shared/theme/` (tokens + `light.ts`/`dark.ts`)
- Visible text → `src/i18n/locales/` (use `useT()`)
- Routes → `src/navigation/`
- Import with aliases only: `@/features/...`, `@/shared/...`, `@/navigation/...`, `@/i18n/...`

## Design demo stack

- React 18 + Vite 5 (JSX), Framer Motion
- Custom design system — tokens (`T`, `L`) + hand-built UI kit (no UI library)
