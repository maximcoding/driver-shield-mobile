# Build Guide — Converting the Design into React Native

> **Goal:** the mobile app must **look and behave exactly like the `uix-design` demo.**
> You do this by **reusing** the client's existing design system — tokens, theme, and UI Kit —
> not by hardcoding values or rebuilding components.

This is the single most important rule:

> **`uix-design` is the visual source of truth. `client/DriveShield`'s theme + UI Kit are how you
> express it in React Native. Every pixel comes from a token; every repeated piece of UI is a
> shared component. Never paste raw hex, raw spacing, or duplicate markup into a screen.**

---

## 0. Deliverable: a fully clickable prototype

This phase has **no real backend**. What you deliver is a **working, clickable prototype** — the
whole app must feel real, driven entirely by **mock data**:

- ✅ **Clickable** — every button, row, card, tab, and link does something. Nothing is dead.
- ✅ **Navigation works** — all flows connect end to end (auth → onboarding → home → trips →
  evidence → settings → subscription), with correct back behavior, tabs, and modals/sheets.
- ✅ **States change** — toggles flip, forms validate, selections persist, lists filter/sort,
  Protection ON/OFF updates the UI, a new "session" appears after a simulated drive, etc.
- ✅ **Realistic data states** — every data screen shows **loading → empty → error → content**,
  not just the happy path. Use small simulated delays so loading is visible.
- ✅ **Mocked like the real thing** — build behind a **service/mock layer** that mimics how the
  app will talk to the backend later (async functions returning the mock data, with latency and
  occasional error). When the real API arrives, only that layer is swapped — **screens and
  navigation must not change.**

> Think of it as a **functional demo you could hand to a stakeholder and actually tap through** —
> indistinguishable from the finished app except that the data is mocked.

### How to mock (so backend swap is trivial)

- Use the demo's mock data in `uix-design/src/data/` as your source data; port it into the client.
- Put mocks behind the existing service/query layer, e.g. feature `services/` +
  `@/shared/services/api/...`, exposing **async** functions (`await getTrips()`), not inline
  constants — so screens already `await` data as they will with the API.
- Add artificial latency + a way to simulate errors so loading/error states are reachable.
- Keep mock wiring isolated (a `mock`/`fixtures` module per feature) so it's removed in one place.

---

## 1. The two sides

| | `uix-design/` (the design) | `client/DriveShield/` (what you build) |
|---|---|---|
| Stack | React + Vite (JSX, web) | React Native 0.82 + TypeScript |
| Tokens | `src/theme/tokens.js` → `T` (colors), `L` (layout) | `src/shared/theme/` → `useTheme()` → `theme.colors`, `theme.spacing`, `theme.radius`, `theme.typography` |
| UI Kit | `src/ui/All.jsx` (~60 components) | `src/shared/components/ui/*.tsx` |
| Screens | `src/screens/<group>/Screen*.jsx` (67 screens) | `src/features/<feature>/screens/*.tsx` |
| Theme | dark only | light **and** dark (`light.ts`, `dark.ts`) |

Run the demo side-by-side while you work:

```bash
cd uix-design/demo && npm install && npm run dev   # http://localhost:5173
```

Open the **UI Kit screen** (`uix-design/src/screens/system/ScreenUIKit.jsx`) — it renders every
component and state. That is your component checklist.

---

## 2. How styling works in the client (read this first)

You **never** write a color or number directly in a screen. You read it from the theme:

```tsx
import { useTheme } from '@/shared/theme/useTheme'

function MyCard() {
  const { theme } = useTheme()
  const c = theme.colors
  const sp = theme.spacing
  const r = theme.radius

  return (
    <View style={{
      backgroundColor: c.surface,        // ✅ token, not '#FFFFFF'
      borderColor: c.border,
      borderRadius: r.xl,                // ✅ token, not 12
      padding: sp.md,                    // ✅ token, not 16
    }} />
  )
}
```

Text always uses the `Text` component + a typography token, never a raw `fontSize`.

---

## 3. Token mapping: demo `T` → client `theme`

The demo's short token names map to the client's **semantic** names. Map by **meaning**, not by
copying the hex. (Values below are the demo's dark palette; the client dark theme already mirrors
them — see §4 on parity.)

| Demo `T` | Meaning | Client token |
|---|---|---|
| `T.bg` | app background | `theme.colors.background` |
| `T.s`, `T.s2`, `T.s3` | surfaces / cards | `theme.colors.surface`, `surfaceSecondary` |
| `T.bd`, `T.div` | border / divider | `theme.colors.border`, `theme.colors.divider` |
| `T.pri` | brand accent | `theme.colors.primary` |
| `T.priD` / `T.priG` | brand wash / glow | `theme.colors.primaryAmbient` |
| `T.t1`, `T.t2`, `T.t3` | text primary/secondary/tertiary | `theme.colors.textPrimary` / `textSecondary` / `textTertiary` |
| `T.H` / `T.HD` | **High** coverage / success | `theme.colors.success` |
| `T.M` / `T.MD` | **Medium** coverage / warning | `theme.colors.warning` |
| `T.L` / `T.LD` | **Low** coverage / error | `theme.colors.danger` |
| `T.inf` | info | `theme.colors.info` |
| `T.overlay` | modal backdrop | `theme.colors.overlayBackdrop` |
| `T.rSm/r/rLg/rXl/rPill` | radius 8/12/16/24/999 | `theme.radius.lg/xl/xxl/xxxl/pill` |
| `T.rowGap`, `T.cardPad`, `T.pagePadX` | spacing 12/14/28 | `theme.spacing.sm/md/...` (nearest step) |
| `T.fsBody/fsBase/fsMd/fsBrand/fsDisplay` | font sizes | `theme.typography.*` (`titleLarge`, `headlineMedium`, `displaySmall`, …) |

> If a token you need doesn't exist in the client theme yet, **add it to the theme files**
> (`light.ts` + `dark.ts` + the relevant `tokens/*.ts`), then use it. Never inline the value.

---

## 4. Token parity — keep the theme as the single source of truth

The demo is dark-only; the client has both themes. **Match the client's _dark_ theme to the demo
first** — that's the design's look.

If a client token value differs from the demo (e.g. the demo accent vs. the client accent), **fix
it in ONE place — the theme file — so every screen updates at once.** Do not "correct" colors
inside screens. After alignment, the client theme _is_ the design, and screens just consume it.

> ⚠️ **Confirm the accent color before mass-building screens.** The demo brand accent is a blue
> (`T.pri = #3D7FFF`); the client default may differ. Align `theme.colors.primary` in `dark.ts`
> (and `light.ts`) to the agreed value **once**, up front.

---

## 5. Component mapping: demo UI Kit → client UI Kit

Reuse the client component if it exists; if the demo has one the client doesn't, **build it once**
in `src/shared/components/ui/` (tokens + i18n), then reuse it everywhere.

| Demo (`All.jsx`) | Client (`shared/components/ui/`) | Action |
|---|---|---|
| `Card`, `Div` (divider) | — | build `Card` once, reuse |
| `Btn`, `IconBtn`, `AuthBtn` | `Button.tsx` | extend `Button` with variants |
| `FInput`, `FSelect` | — | build form inputs once |
| `SetRow`, `StatRow`, `InfoRow`, `TextRow` | `SettingsRow` (in settings) | promote to shared rows |
| `Banner`, `SmartBanner` | `OfflineBanner.tsx` | generalize into a `Banner` |
| `SessionCard`, `SessionRow` | — | build once (core of Home/Trips) |
| `StatTile`, `CovBadge`, `StatusBadge`, `HBadge` | — | build the badge/stat set |
| `Sheet`, `Modal`, `*Sheet` (Date/Time/Confirm/Export/Share/SortFilter) | `HalfSheet.tsx`, `GlobalModal.tsx` | reuse sheet/modal primitives |
| `PageHeader`, `Header`, `SectionHeader` | `ScreenHeader.tsx`, `SectionHeader.tsx` | reuse |
| `Dock` (bottom nav) | tab bar in `src/navigation/tabs/` | already exists — style to match |
| `NumericKeyboard` | — | build for phone/OTP entry |
| `MapCard`, `SpeedGraph`, `ProgressBar` | — | build for session details |
| `EmptyState`, `ErrorState`, `BrandLoader` | `Activity`, `ErrorBoundary` | build empty/error/loading visuals |

**Rule:** repeated UI = one shared component with variants. No one-off copies (`client/AGENTS.md`
rule 4).

---

## 6. Screens to build (67 total, by group)

Source: `uix-design/src/screens/<group>/`. Build them into `client/DriveShield/src/features/`.
Suggested order (foundation → core flow → the rest):

1. **splash / onboard** (`splash/`, `onboard/` — 10 screens): Splash, Launch, Intro, Vehicle, Units, Reminder, Complete, GPS-off.
2. **auth** (`auth/` — 7): Welcome → PhoneEntry → SMSVerify → Terms → SignInHub → Social flows.
3. **main** (`main/` — 9): **Home**, Trips, TripDetails, SessionSummary, Evidence, EvidenceResult, EventDetails, CoverageDetails, GapIntervals. ← the product core.
4. **settings** (`settings/` — 20): Settings, Account, Vehicles (add/edit/select/default), Notifications, Data security/retention/export, Help/Contact/About, How-Coverage-Works, What-Verdicts-Mean.
5. **subscription** (`subscription/` — 9): Paywall, FreeTrial, Checkout, Purchase success/failed, Manage, Invoices, Expired.
6. **system** (`system/` — 6): Error, NoInternet, Maintenance, UpdateRequired, SessionExpired.

Map each `Screen*.jsx` to a feature folder, e.g.
`screens/main/ScreenHome.jsx` → `src/features/home/screens/HomeScreen.tsx`.

---

## 7. Behavior parity (not just looks)

"Behave exactly the same" means match the demo's **interactions**, not only static layout:

- Navigation flow and back behavior (use React Navigation, already set up).
- Sheets/modals open/close the same way (use `HalfSheet` / `GlobalModal`).
- Loading → empty → error → content states for every data screen.
- Same copy/labels — but via **i18n keys**, never hardcoded strings.
- **Canonical strings are immutable** — verdicts and coverage levels must match the demo text
  exactly (see `uix-design` data + project rules):
  - `"No speeding events found (High coverage)"`
  - `"Speeding event recorded (High coverage)"`
  - `"Insufficient coverage to verify"`
  - `"Not monitored (Protection was OFF)"`
  - Coverage levels: `HIGH | MEDIUM | LOW | NOT_MONITORED`

Use the demo's mock data (`uix-design/src/data/`) as your sample data while screens are wired
locally — no backend is required for this phase.

---

## 8. Per-screen Definition of Done

A screen is done when:

- [ ] Side-by-side with the demo it is visually identical (layout, spacing, colors, typography).
- [ ] **Clickable** — every interactive element does something; nothing is dead.
- [ ] **Navigation works** — all links/buttons route correctly, back behavior matches the demo.
- [ ] **States change** — toggles/forms/selection/filters update the UI and persist as expected.
- [ ] **All data states** present — loading → empty → error → content (driven by the mock layer).
- [ ] **Mocked via the service layer** — data comes from async mock functions, not inline
      constants, so the real API can be swapped in without touching the screen.
- [ ] **No raw values** — every color/space/radius/font comes from `useTheme()` tokens.
- [ ] **No hardcoded strings** — all visible text via `useT()` / locales.
- [ ] Reuses shared UI Kit components — no duplicated markup.
- [ ] **Alias imports only** (`@/...`) — no `../../../`.
- [ ] **Strict TypeScript** — no `any`.
- [ ] Runs on **both** iOS and Android.
- [ ] `npm run lint` and `npm test` pass.
- [ ] Looks correct in **light and dark** themes.

---

## 9. Workflow per screen

1. Open the demo screen in the browser + read its `Screen*.jsx`.
2. List the tokens and components it uses.
3. For any missing component → build it once in `shared/components/ui/` (tokens + i18n).
4. For any missing token → add it to the theme files.
5. Build the RN screen in the right `features/<feature>/screens/` folder.
6. Add i18n keys for all text.
7. Run iOS + Android, compare against the demo, fix gaps.
8. `npm run lint && npm test`, then commit a checkpoint.

**Read `client/AGENTS.md` and `uix-design/AGENTS.md` before starting — they are the binding rules.**
