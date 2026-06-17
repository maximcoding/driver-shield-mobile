# UI Foundation — DriveShield

## Cards
- `Card/Base`: grouped content container. Use `Color/Surface`, `Radius/Medium`, `Elevation/Low`, `Spacing/L`.
- `Card/Result`: result summary card. Structure: title → verdict → coverage badge → optional details.
- `Card/Session`: recap or grouped session content.
- `Card/Metric`: stat-focused content.

Rules:
- one main idea per card
- no unnecessary nested cards
- internal spacing uses token scale only

---

## Lists
- Row minimum height: 56px
- Divider: `Color/Divider`, 1px, between rows only
- `Row/Status`: icon + label + trailing value/badge
- `Row/Session`: primary line + secondary metadata line
- `Row/Selectable`: row with selected state and trailing check or indicator

Section spacing:
- `Spacing/L` between section header and first row
- `Spacing/XL` between major list groups

---

## Forms
- Labels above fields using `Text/FieldLabel`
- Label-to-field gap: `Spacing/XS`
- Field-to-field gap: `Spacing/M`
- Logical group gap: `Spacing/L`
- Error state uses error token + text label, not color only
- Form sections use `Spacing/L` internal padding

---

## Banners
- `Banner/Info`: neutral informational content
- `Banner/Warning`: caution or limited confidence
- `Banner/Error`: failure / blocking issue
- `Banner/Success`: positive confirmation
- `Banner/Offline`: connectivity issue
- `Banner/Permission`: permission guidance

Rules:
- icon + title/label + message
- place above affected content
- spacing below banner: `Spacing/M`

---

## Modals / Sheets
- `Modal/Base`: centered dialog for short actions and confirmations
- `BottomSheet/Base`: long option list or mobile selection flow
- Modal surface: `Color/Surface`, `Radius/Large`, `Elevation/Medium`, `Spacing/L`
- Actions use approved buttons only
- Dismiss affordance must be explicit

Use modal for:
- confirmation
- short form
- destructive action

Use bottom sheet for:
- theme selection
- language selection
- vehicle selection
- longer pick lists

---

## Bottom actions
- `BottomActionBar`: sticky bottom action zone
- Respect safe area
- Use `Color/Surface` + top divider
- Padding: `Spacing/M`
- One primary CTA preferred
- Secondary action may use `Button/Secondary` or `Button/Ghost`
- Gap between actions: `Spacing/S`

---

## Vertical rhythm
- Screen horizontal padding: `Spacing/M`
- Major section spacing: `Spacing/L` or `Spacing/XL`
- Card internal padding: `Spacing/L`
- Tight inline icon/text gap: `Spacing/XS`
- Comfortable inline icon/text gap: `Spacing/S`

---

## State presentation
- Loading: spinner or skeleton, scoped to the loading block when possible
- Empty: simple message + one clear CTA if appropriate
- Error: banner or inline error with recovery action
- Status: badge + icon and/or label, never color alone
- Disabled: still readable and clearly inactive