# DriveShield Mobile

**Tamper-proof drive recording that protects drivers when it matters most.**

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

### Ground rules (see `client/AGENTS.md` for the full list)

1. **Tokens only** for styling — no raw hex/rgb, no magic spacing/size/radius values.
2. **i18n for all visible text** — no hardcoded strings in JSX.
3. **No duplicate UI** — repeated UI becomes a shared component/variant.
4. **Alias imports only** (`@/app/...`, `@/core/...`) — no `../../../`.
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

## Design demo stack

- React 18 + Vite 5 (JSX), Framer Motion
- Custom design system — tokens (`T`, `L`) + hand-built UI kit (no UI library)
