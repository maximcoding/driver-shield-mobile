# AGENTS.md — UIX Design Rules

## Scope
This folder is only for UIX design work for DriveShield.

Use it for:
- design system
- tokens
- typography
- icon system
- reusable UI kit components
- variants and states
- modals and sheets
- reference screens
- design handoff artifacts

Do not mix this work into `client/` or `server/`.

---

## Main rule
Build UI in this order:

1. design system
2. tokens
3. reusable UI kit
4. variants and states
5. screen examples
6. handoff artifacts

Do not jump straight to screens.

---

## Start from UI kit
Before building or changing any screen:

- check whether the needed element already exists in the UI kit
- if it does not exist, add it to the UI kit first
- only then use it in the screen
- if a component already exists, reuse or extend it
- do not create one-off screen-only components if they should be reusable

UI kit is the source of truth for all reusable design parts.

---

## Design system rules

- use one consistent token system
- use one consistent typography system
- use one consistent spacing rhythm
- use one consistent radius system
- use one consistent icon family
- use one consistent component family
- keep dark theme first unless another mode is explicitly required
- keep everything mobile-first

Required token groups:
- colors
- status colors
- typography
- spacing
- radius
- elevation
- icon sizes

---

## Styling rules

- use tokens only
- no raw hex values
- no random spacing
- no one-off radius values
- no arbitrary shadows
- no arbitrary font sizes
- no hardcoded visual fixes if the rule should live in the system
- repeated layout decisions must become shared tokens or shared component rules

If a spacing, padding, gap, radius, border, or text pattern repeats, move it into the system first.

---

## Component rules

Every reusable component must have:
- clear purpose
- consistent anatomy
- approved variants
- approved states
- token-based styling

At minimum, normalize these families:
- buttons
- badges
- cards
- banners
- inputs
- selectors
- rows
- toggles
- tiles
- headers
- modals
- sheets
- empty states
- loading states

Do not mix different visual families for the same component type.

---

## State rules

Design states as first-class UI, not as afterthoughts.

At minimum support:
- default
- pressed
- focused
- disabled
- loading
- empty
- error
- offline
- permission required
- active / inactive
- warning / success / destructive

Status must never rely on color alone.
Always support color + label and/or icon.

---

## Header rules

Use consistent header patterns only.

Allowed header patterns:
- primary app header
- secondary pushed-screen header
- full-screen modal header

Do not mix random header styles between screens.

Headers must:
- stay visible
- keep consistent alignment
- follow the same content edges as the screen body

---

## Navigation rules

Navigation must be system-driven and reusable.

If a navigation pattern exists:
- reuse it consistently
- do not invent a different pattern per screen
- active and inactive states must be explicit
- labels, icons, spacing, and motion must follow one system

---

## Screen rules

Screens must be assembled from the approved UI kit.

For every screen:
- reuse existing components first
- add missing reusable components to the UI kit before using them
- do not patch screens with one-off styling
- do not hide product logic in decorative widgets
- keep hierarchy clear and scannable
- body content may scroll, header should remain fixed if that is the chosen pattern

Do not invent:
- extra tabs
- extra widgets
- extra charts
- extra flows
- extra screens
- extra product features

Only design what is approved by the product docs.

---

## Naming rules

Use semantic naming only.

Good examples:
- Button/Primary
- Badge/Coverage/High
- Card/Result
- Row/Status
- Modal/Confirmation
- Header/Secondary
- Screen/Home

Bad examples:
- Frame 12
- Group 41
- Rectangle 9
- Text Copy 2

---

## Quality rules

The design must feel:
- calm
- minimal
- trustworthy
- modern
- readable
- system-driven

The design must not feel:
- sporty
- gaming-like
- flashy automotive
- police / enforcement themed
- cyber-security cliché
- noisy
- overdesigned

---

## Review rules

Before considering any output done:

- review token consistency
- review typography consistency
- review spacing consistency
- review icon consistency
- review component reuse
- review state coverage
- review header consistency
- review navigation consistency
- review screen hierarchy
- review accessibility basics

A screen is not done if:
- it uses elements missing from the UI kit
- it introduces a one-off reusable element
- its important states are missing
- it breaks the system
- it invents new product scope

---

## Prompt usage

Use prompts in this order:

1. master prompt for design system + UI kit
2. refinement prompts for specific components or screens
3. audit / handoff prompts only after the system is stable

Do not generate frontend handoff from unstable UI.

Do not use screen refinement prompts before the design system exists.

---

## Final principle

First make the system.
Then make components.
Then make states.
Then make screens.

Never the other way around.