# Screen Specs — DriveShield

Defines layout structure and component composition for each screen.

All screens must use components from `COMPONENT_INVENTORY.md`.

---

# Launch / Permissions

## Goal
Ensure required permissions before the user can operate the app.

## Layout
1. Top header / app identity
2. Intro text
3. Permission explanation
4. Banner if permission denied
5. Primary CTA

## Components
- Section/Header
- Banner/Permission
- Button/Primary
- Button/Secondary

## States
- Permission required
- Permission denied
- Permission granted

---

# Dashboard

## Goal
Show current protection status and main actions.

## Layout
1. Header
2. Vehicle summary card
3. Protection toggle card
4. Status rows
5. Warning or offline banner when needed
6. Evidence Check CTA
7. Bottom navigation if used

## Components
- Card/Base
- Button/Primary
- Row/Status
- Badge/Coverage
- Banner/Warning
- Banner/Offline
- BottomNavigation

## States
- Protection OFF
- Protection ON
- GPS unavailable
- Permission missing
- Offline
- Buffering data
- One vehicle
- Multiple vehicles

---

# Vehicle Selector

## Goal
Allow user to select active vehicle.

## Layout
1. Header
2. Vehicle list
3. Add vehicle CTA

## Components
- Row/Selectable
- Button/Primary
- Section/Header

## States
- Empty list
- Single vehicle
- Multiple vehicles

---

# Add Vehicle

## Goal
Register a vehicle.

## Layout
1. Header
2. Plate field
3. Nickname field
4. Bottom actions

## Components
- Input/Text
- Button/Primary
- Button/Secondary
- BottomActionBar

## States
- Default
- Validation error
- Submitting

---

# Edit Vehicle

## Goal
Update or archive a vehicle.

## Layout
1. Header
2. Plate field
3. Nickname field
4. Archive action
5. Bottom actions

## Components
- Input/Text
- Button/Primary
- Button/Secondary
- Modal/Confirmation
- BottomActionBar

## States
- Default
- Validation error
- Submitting
- Archive confirmation

---

# Evidence Check

## Goal
User selects vehicle + date + time for evidence check.

## Layout
1. Header
2. Vehicle selector
3. Date field
4. Time field
5. Submit CTA

## Components
- Select/Dropdown
- Input/Date
- Input/Time
- Button/Primary

## States
- Default
- Validation error
- Checking

---

# Evidence Result

## Goal
Show coverage badge, verdict, details, and actions.

## Layout
1. Header
2. Result card
3. Coverage details section
4. Optional event CTA
5. Export CTA

## Components
- Card/Result
- Badge/Coverage
- Tile/Stat
- Banner/Warning
- Button/Primary
- Button/Secondary

## States
- HIGH + no event
- HIGH + event
- MEDIUM
- LOW
- NOT MONITORED

---

# Event Details

## Goal
Display event detail.

## Layout
1. Header
2. Speed graph
3. Event summary card
4. Export CTA

## Components
- Chart/SpeedGraph
- Card/Base
- Tile/Metric
- Button/Primary

## States
- Default
- Loading

---

# Session Summary

## Goal
Show session results.

## Layout
1. Header
2. Stats section
3. Session/event list
4. Primary action

## Components
- Tile/Stat
- Row/Session
- Card/Session
- Button/Primary

## States
- No events
- Has events
- Limited coverage

---

# History

## Goal
Show previous sessions or reports.

## Layout
1. Header
2. Optional filter or info row
3. History list
4. Empty state if no data

## Components
- Row/Session
- Row/Selectable
- State/Empty
- Section/Header

## States
- Empty
- Populated

---

# Settings

## Goal
Manage app preferences.

## Layout
1. Header
2. Theme row
3. Language row
4. Units row
5. Default vehicle row
6. Reminder toggle row
7. Permissions health section
8. Retention info section

## Components
- Row/Selectable
- Row/Status
- Select/Dropdown
- Modal/ThemeSelector
- Modal/LanguageSelector
- Modal/VehicleSelector
- Banner/Info

## States
- Default