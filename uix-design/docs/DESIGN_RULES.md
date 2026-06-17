# Design Rules — DriveShield

Non-negotiable constraints for all UIX work.

---

## 1. Tokens only
Every visual property must use a design-system token:
- color
- spacing
- typography
- radius
- elevation
- border

No raw values in components or screens.

---

## 2. No raw hex in components
Component definitions and screens must reference token names only.

Allowed:
- `Color/Primary`
- `Spacing/M`
- `Radius/Medium`

Not allowed:
- `#123456`
- `16px`
- `8px radius`

---

## 3. No arbitrary spacing
Use the approved 4px-based spacing scale only.

No values like:
- 7px
- 13px
- 18px

---

## 4. Semantic naming only
Use names that describe intent.

Good:
- `Button/Primary`
- `Badge/Coverage/High`
- `Card/Result`
- `Screen/Dashboard/On`

Bad:
- `Frame 12`
- `Group 41`
- `Rectangle 9`

---

## 5. Status must not rely on color alone
Coverage and all semantic states must use color plus:
- icon
- label
- or both

---

## 6. Calm warnings
Warnings and errors must stay clear but calm.
No flashing, heavy red dominance, or alarm-style treatment.

---

## 7. Tone must stay consistent
The UI must remain:
- calm
- neutral
- trustworthy
- readable
- evidence-oriented

Avoid:
- sporty UI
- racing UI
- gaming UI
- police/enforcement style
- flashy automotive styling
- cyber/security cliché aesthetics

---

## 8. No invented screens
Only screens listed in `SCREEN_INVENTORY.md` are in scope.

Any new screen or flow requires product review first.