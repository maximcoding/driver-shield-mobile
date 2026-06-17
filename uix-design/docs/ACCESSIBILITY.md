# Accessibility — DriveShield UI

Target: **WCAG 2.1 Level AA**. This document summarizes testing, remediation, and conformance for the DriveShield uix-design and demo.

---

## Accessibility statement

- **Target:** WCAG 2.1 Level AA.
- **Scope:** DriveShield UI kit, demo shell, and screens rendered in the demo app.
- **Known limitations:** Some flows (e.g. onboarding, modals) have not been fully tested with assistive technologies; third-party audits and user testing are recommended for production.
- **Contact:** Report accessibility issues via the project’s issue tracker or standard support channel.

---

## Testing and tooling

- **ESLint:** `eslint-plugin-jsx-a11y` is used in the demo project. Run from the demo directory:
  ```bash
  cd demo && npx eslint "../src/**/*.jsx" --config .eslintrc.cjs
  ```
- **Manual checks:** Keyboard navigation, focus order, and screen reader spot-checks (e.g. VoiceOver, NVDA) should be run on the main flows.

---

## Implemented remediations

### Focus and keyboard

- **Focus indicators:** Global `:focus-visible` styles use the primary token outline (2px solid, 2px offset) for buttons, links, and form controls. Default `outline: none` is overridden only where a visible focus ring is provided.
- **Skip link:** “Skip to main content” is the first focusable element; it targets `#main-content` (the main app region) and is visible when focused.
- **Landmarks:** Demo shell uses `<main id="main-content">`, `<nav aria-label="Screen navigation">`, and `<aside aria-label="Component kit">` for region navigation.
- **Clickable non-buttons:** Overlay backdrops and splash continue use `role="button"`, `tabIndex={0}`, and `onKeyDown` (Enter/Space) so they are keyboard operable.

### Names and semantics

- **Icon-only buttons:** `IconBtn` supports `ariaLabel`; Banner and SmartBanner dismiss buttons use `aria-label="Dismiss"`; Dock tab buttons use `aria-label={tab.label}`.
- **Ic component:** Supports `ariaHidden` (default `true` for decorative use) and optional `ariaLabel` with `role="img"` for meaningful standalone icons.
- **Search input:** Trips search field has `aria-label="Search trips by date, distance, or coverage"`. `autoFocus` was removed from that input.

### Forms

- **FInput / FSelect:** Each control is associated with its label via `id` and `htmlFor`; hint and error text are linked with `aria-describedby`; invalid state uses `aria-invalid`; error messages use `role="alert"`.
- **Date/Time picker triggers:** Labels are associated with their buttons via `id` and `htmlFor`.
- **Phone number label:** Non-control label changed to `<span id="phone-label">` with the container using `aria-labelledby="phone-label"` where appropriate.

### Design system

- **Docs:** [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) includes an Accessibility section: contrast, touch targets, focus, icon names, skip link, landmarks, form association, and decorative icons.

---

## Automated results (after remediation)

- **jsx-a11y:** All reported jsx-a11y rules are addressed (no remaining errors for the files under `src/` when running the demo ESLint config with non-a11y rules disabled or excluded).
- Re-run the command above after changes to confirm zero jsx-a11y violations.

---

## Verification checklist

- [x] Focus indicators visible on all interactive elements
- [x] Skip link present and targets main content
- [x] Landmarks (main, nav, aside) in place
- [x] Icon-only controls have accessible names
- [x] Form labels and errors associated with controls
- [x] No `autoFocus` on search input
- [x] Overlay backdrops keyboard operable
- [ ] Full keyboard pass through all main flows (recommended)
- [ ] Screen reader spot-check on at least one platform (recommended)
- [ ] Color contrast verification for all text/UI pairs (recommended)

---

## Live regions and dynamic content

For success/error toasts or critical status changes that appear after an action:

- Use `aria-live="polite"` (or `assertive` for urgent messages) and `aria-atomic="true"` on the container so screen readers announce updates.
- Inline form errors already use `role="alert"` and `aria-describedby` for immediate feedback.

---

*Last updated after accessibility testing and remediation per the Accessibility Testing and Remediation Plan.*
