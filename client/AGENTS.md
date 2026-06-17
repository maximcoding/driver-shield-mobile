# AGENTS.md — DriveShield Mobile Client

Read this file before starting any client work.

---

## Scope

This folder is for the DriveShield React Native mobile app. Current goal: **frontend foundation only** — starter baseline, tokens/theme, UI Kit, navigation shell, placeholder screens. Real screen implementation and backend integration are out of scope until the foundation is signed off.

---

## Non-negotiable rules

1. **Starter as base**  
   Use the generated starter architecture as the base. Extend it; do not rebuild theme, navigation, state, or folder structure from scratch.

2. **Tokens only for styling**  
   In screens and components, use the project’s token/theme system only. No raw hex/rgb/rgba; no magic spacing, font size, radius, or elevation values.

3. **i18n for all user-facing text**  
   Use the project’s existing i18n/locales for every visible string. No hardcoded text in JSX, screens, or shared components.

4. **No duplicate UI**  
   Repeated UI must become a shared component or shared variant. Do not create one-off copies.

5. **No new dependencies without proposal**  
   Do not add dependencies without an explicit proposal and approval.

6. **After each phase**  
   Run iOS, run Android, run lint, create a checkpoint commit, and document proof commands.

7. **uix-design is the visual reference**  
   The `uix-design` demo (theme, UI kit, docs) is the design source of truth. Tokens and UI kit in the client must align with uix-design so the mobile app matches the demo. After Phase 2, the in-project theme/tokens are the single source of truth for the client codebase.

8. **No backend integration until foundation sign-off**  
   Do not start backend integration until the frontend foundation (through Phase 5) is approved.

9. **Accessibility (DESIGN_SYSTEM)**  
   Min touch target 44×44px for interactive elements. WCAG AA contrast. Status never by color alone (pair with icon/label). Icon-only controls must have an accessible name. Form labels associated with controls; errors linked (e.g. aria-describedby). Focus indicator visible.

---

## Canonical architecture (do not break)

- **Theme / tokens:** `src/core/theme/` — tokens (spacing, radius, typography, elevation, fonts), `light.ts` / `dark.ts` (semantic colors), ThemeProvider, useTheme.
- **i18n / locales:** `src/core/i18n/` — i18n.ts, useT.ts, locales; feature strings in `src/app/features/<name>/i18n/`.
- **Navigation:** `src/app/navigation/` — root, stacks, tabs, options (tokens, presets), routes.ts.
- **Shared UI:** `src/app/components/` — Button, Text, ScreenWrapper, etc.; domain-specific under `components/domain/`.
- **Imports:** Alias-only (`@/app/...`, `@/core/...`, `@/infra/...`); no `../../../`. See `tsconfig.json` baseUrl and paths.
- **Extend, do not replace:** Extend theme and navigation; do not rebuild or replace them.

Full table and paths: [client/DriveShield/README.md](client/DriveShield/README.md) (section "Where things live").

---

## Conventions

- **Naming:** Components `PascalCase.tsx`; hooks `useSomething.ts`; services / mappers / schemas `kebab-case.ts`.
- **Imports:** Alias-only; no `../../../`.
- **Styling:** No magic numbers or hex in components; use theme tokens only.

---

## Feature development (when adding a feature)

1. Create `src/app/features/<name>/` with `i18n/`, `screens/`, `hooks/`, `components/`.
2. Screens: use `ScreenWrapper` as root; use UI kit (Text, Button, etc.), not raw RN views.
3. Copy: feature i18n in `src/app/features/<name>/i18n/*.json` (e.g. `featureName.actionName`); API logic in `src/app/services/<domain>`; UI must not call `infra` directly.
4. Navigation: add route in `src/app/navigation/types/routes.ts`, update `navConfig.tsx`, wire screen in the correct stack/tab.

---

## References

- **Starter:** https://github.com/maximcoding/react-native-starter
- **Design source of truth (uix-design):**
  - Tokens/theme: `uix-design/src/theme/tokens.js`, `uix-design/design/tokens.json`
  - UI kit: `uix-design/src/ui/All.jsx`, `uix-design/src/ui/index.js`
  - Design docs: `uix-design/docs/DESIGN_SYSTEM.md`, `uix-design/docs/SCREEN_SPECS.md`, `uix-design/design/component-map.md`
  - Screens: `uix-design/src/screens/`, `uix-design/REFACTOR_MAP.md`

---

## Where things live (after app exists)

The canonical locations for theme, i18n, navigation, and shared UI are documented in [client/DriveShield/README.md](client/DriveShield/README.md) (section "Where things live"). Follow the rules in Canonical architecture and Conventions above; do not break them.

---

## Source of truth

- **Current work:** `client/TODO.md` — phased plan and progress log.
- **Design:** `uix-design/` — tokens, UI kit, screen inventory, design docs.
