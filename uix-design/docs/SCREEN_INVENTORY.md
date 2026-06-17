# Screen Inventory — DriveShield

Approved screens only. Do not add screens outside this file without review.

---

## Launch / Permissions
- Purpose: first launch and permission setup
- Key elements: app identity, permission explanation, permission CTA, settings link when denied
- Primary actions: Continue, Grant permissions, Open settings
- Important states: first launch, returning user, permission denied, permission granted

---

## Dashboard
- Purpose: main protection dashboard
- Key elements: vehicle summary, protection toggle, GPS status, coverage status, heartbeat status, Evidence Check CTA
- Primary actions: toggle protection, open vehicle selector, start evidence check, open settings
- Important states: protection ON/OFF, GPS available/unavailable, coverage high/medium/low/not monitored, heartbeat active/inactive, single vs multiple vehicles, offline, buffering

---

## Vehicle Selector
- Purpose: choose active vehicle
- Key elements: vehicle list, selected state, add vehicle CTA
- Primary actions: select vehicle, add vehicle
- Important states: empty, single vehicle, multiple vehicles

---

## Add Vehicle
- Purpose: register a vehicle
- Key elements: plate input, nickname input
- Primary actions: save, cancel
- Important states: default, validation error, submitting

---

## Edit Vehicle
- Purpose: update or archive vehicle
- Key elements: plate field, nickname field, archive action
- Primary actions: save, archive, cancel
- Important states: default, validation error, submitting, confirmation modal

---

## Evidence Check
- Purpose: input vehicle, date, time for check
- Key elements: vehicle selector, date input, time input, submit CTA
- Primary actions: run check, back
- Important states: default, validation error, checking

---

## Evidence Result
- Purpose: display coverage + verdict + actions
- Key elements: coverage badge, verdict text, coverage details, export action, event details action if relevant
- Primary actions: export PDF, view event, back
- Important states:
  - High + no event
  - High + event
  - Medium
  - Low
  - Not monitored

---

## Event Details
- Purpose: display event detail and graph
- Key elements: speed graph, event summary, export action
- Primary actions: export PDF, back
- Important states: default, loading

---

## Session Summary
- Purpose: session recap
- Key elements: vehicle used, duration, coverage summary, event count
- Primary actions: done, view events
- Important states: no events, has events, limited coverage

---

## History
- Purpose: review previous sessions or reports
- Key elements: list of sessions or reports, filters if approved
- Primary actions: open item, back
- Important states: empty history, populated history

---

## Settings
- Purpose: app preferences and informational settings
- Key elements: theme, language, units, default vehicle, reminder toggle, permissions health, retention info
- Primary actions: back, save if needed
- Important states: default