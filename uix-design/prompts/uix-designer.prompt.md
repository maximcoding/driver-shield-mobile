You are a senior mobile product designer.

Create a complete **mobile design system + UI kit** for **DriveShield — Legal Black Box**.

Do **not** design screens, flows, or navigation.
Do **not** create app pages.
Focus only on the reusable **foundations, tokens, UI elements, components, variants, states, and interaction patterns** that will later be used to assemble the app like Lego.

## Product context
DriveShield is a paid mobile app for drivers. The user manually turns **Protection ON** before driving. While Protection is ON, the app records evidence-related telemetry. Later, the user can check a specific **vehicle + date + time** to see whether a speeding event was recorded. The product is built around **honest verification**: if coverage is strong, return a clear result; if coverage is weak, say so instead of guessing.

This app is NOT:
- navigation
- anti-camera
- sporty automotive dashboard
- gaming UI
- police / enforcement UI

## Visual direction
The system must feel:
- calm
- minimal
- trustworthy
- modern
- highly readable
- legal-tech / insurance-dashboard feel
- dark theme first
- mobile-first
- premium but restrained

Do NOT make it feel:
- flashy
- sporty
- playful
- gamified
- cyber-security themed
- automotive-performance themed

## Global system rules
- create one coherent visual system for the whole product
- use one consistent token system
- use one consistent typography system
- use one consistent icon family
- use one spacing rhythm
- use one radius system
- use one component family
- status must not rely on color alone
- no raw one-off styling
- no random component variations
- everything should feel reusable, scalable, and system-driven

## Work in this order

### 1. Foundations / tokens
Create a reusable token system for:

**Colors**
- primary
- secondary
- accent
- background
- surface
- surfaceSecondary
- textPrimary
- textSecondary
- textMuted
- border
- divider

**Status colors**
- coverageHigh
- coverageMedium
- coverageLow
- notMonitored
- protectionOn
- protectionOff
- success
- warning
- error
- info
- disabled
- offline
- permission

**Typography**
- H1
- H2
- H3
- Subtitle
- Body
- BodySmall
- Caption
- FieldLabel
- ButtonLabel
- StatusLabel
- NumericMetric
- Helper

**Spacing scale**
- 4
- 8
- 12
- 16
- 24
- 32
- 48

**Radius scale**
- 0
- 4
- 8
- 12
- 16
- 999

**Elevation**
- none
- low
- medium
- high

**Icon sizes**
- 16
- 24
- 32

Use one consistent icon family.

### 2. Core UI kit components
Create reusable components using only those tokens:

**Buttons**
- primary button
- secondary button
- ghost button
- icon button

**Badges**
- coverage badge
- status badge

**Cards**
- base card
- result card
- session card
- metric card

**Banners**
- warning banner
- info banner
- error banner
- success banner
- offline banner
- permission banner

**Inputs**
- text input
- date input
- time input
- dropdown selector
- segmented selector if needed

**Rows / list items**
- status row
- session row
- selectable row
- selected vehicle summary row
- GPS status row
- coverage status row
- heartbeat / upload status row
- settings row

**Other reusable elements**
- stat tile
- top bar
- modal
- bottom sheet
- confirmation modal
- theme selector modal
- language selector modal
- vehicle selector modal
- toggle row
- progress bar
- loading state
- empty state
- error state
- speed graph area

### 3. Variants / states
Create variants and shared states for:
- Protection ON / OFF
- GPS unavailable
- permission required
- offline
- buffering
- one vehicle / multiple vehicles / no vehicles
- validation error
- submitting
- checking
- loading
- empty
- populated
- Coverage HIGH / MEDIUM / LOW / Not monitored
- warning
- error
- disabled

### 4. Header patterns
Create reusable header patterns:
- full-screen modal header: close left, centered title, optional action right
- secondary pushed-screen header: back left, centered title, optional action right
- primary app top bar for main sections

### 5. Interaction / polish rules
Refine the UI kit so it feels polished and premium without changing the visual direction.

Improve:
- spacing balance
- alignment
- padding consistency
- card proportions
- button proportions
- icon sizing consistency
- text hierarchy clarity
- contrast balance
- component rhythm
- modal polish
- badge and banner polish

## Important constraints
- do not create app screens
- do not create navigation flows
- do not add maps, routes, dashboards, chat, social features, gamification, marketing sections, or unrelated analytics
- do not invent product scope
- do not use inconsistent styles between components
- if two components solve the same problem, unify them into one family

## Output organization
Organize the result like a real UI kit:
- Foundations
- Tokens
- Typography
- Icons
- Components
- States
- Headers
- Modals
- Utility Patterns

## Goal
The final output should be a complete, reusable, token-driven **mobile UI kit** for DriveShield that can later be used to assemble all product screens consistently.