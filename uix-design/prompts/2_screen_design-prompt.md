# Screen Design Prompt — DriveShield

Use this prompt only after the design foundation is approved:
- design system
- tokens
- component inventory
- design rules
- screen inventory
- state matrix
- screen specs

## Role
You are designing actual mobile screens for **DriveShield – Legal Black Box**.

Use only the approved design system and approved components.

## Hard Constraints
- **Tokens only.** Use only approved tokens for colors, spacing, typography, radius, elevation, opacity, and icon sizes.
- **Approved components only.** Use only components from the approved component inventory.
- **No scope invention.** Do not invent new flows, features, screens, or components outside the approved docs.
- **Tone.** Keep the product calm, neutral, trustworthy, and evidence-oriented.
- **No raw styling.** No raw hex, ad-hoc spacing, arbitrary radius, arbitrary shadows, or arbitrary font sizes.
- **Use Auto Layout everywhere.**
- **Use semantic naming for frames, layers, and components.**

## Approved Screens
Design these screens only:
- Launch / Permissions
- Dashboard
- Vehicle Selector
- Add Vehicle
- Edit Vehicle
- Evidence Check
- Evidence Result
- Event Details
- Session Summary
- History
- Settings

## Use These Approved Inputs
Base the screens on:
- approved design system
- approved component inventory
- approved screen inventory
- approved state matrix
- approved screen specs

## Screen Requirements
For each screen define and generate:

1. **Purpose**
2. **Top-to-bottom layout sections**
3. **Components used**
4. **Primary action**
5. **Secondary actions**
6. **Required states**

## States to Support
Support these states where relevant:

### Coverage
- High
- Medium
- Low
- Not Monitored

### Protection
- On
- Off

### System / UX
- Loading
- Empty
- Error
- Offline
- Permission Required
- Disabled

Do not rely on color alone to communicate state.

## Use Approved Modal / Sheet Components Only
Where relevant, use only approved modal/sheet components:
- Modal/Base
- Modal/Confirmation
- Modal/ThemeSelector
- Modal/LanguageSelector
- Modal/VehicleSelector
- Modal/PermissionInfo
- BottomSheet/Base

## Critical Product Copy
Use these exact verdict texts for Evidence Result:

- **No speeding events found (High coverage)**
- **Speeding event recorded (High coverage)**
- **Insufficient coverage to verify**
- **Not monitored (Protection was OFF)**

## Screen-specific Notes

### Dashboard
Must support:
- Protection ON
- Protection OFF
- GPS unavailable
- permission missing
- network offline
- buffering data
- single vehicle
- multiple vehicles

### Evidence Check
Must support:
- default
- validation error
- checking

### Evidence Result
Must support:
- HIGH + no event
- HIGH + event
- MEDIUM
- LOW
- NOT MONITORED

### History
Must support:
- empty history
- populated history

### Settings
Must support:
- theme selection
- language selection
- units selection
- reminder toggle
- permissions health
- retention info

## Output Format
Produce concrete mobile screen layouts suitable for Figma.

Requirements:
- one frame per important screen state
- semantic frame names such as:
  - Screen/Dashboard/On
  - Screen/EvidenceResult/HighNoEvent
  - Screen/Settings/Default
- semantic layer and component names
- reusable component composition
- no duplicated one-off design patterns unless necessary

## Goal
Generate a complete, consistent DriveShield mobile screen set that is fully based on the approved design foundation and ready for frontend handoff.