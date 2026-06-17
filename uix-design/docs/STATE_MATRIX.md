# State Matrix — DriveShield

Defines all system states that must be visually represented in the UI.

---

## 1. Protection State

| State | Description | Where Used |
|---|---|---|
| OFF | Protection not active | Dashboard |
| ON | Protection active | Dashboard |
| STARTING | Protection initializing | Dashboard |
| STOPPING | Protection shutting down | Dashboard |

---

## 2. GPS / Permission State

| State | Description | Where Used |
|---|---|---|
| AVAILABLE | GPS available | Dashboard |
| UNAVAILABLE | GPS disabled or no signal | Dashboard |
| PERMISSION_MISSING | Location permission not granted | Launch / Dashboard / Settings |

---

## 3. Coverage State

| State | Description | Where Used |
|---|---|---|
| HIGH | Strong monitoring coverage | Evidence Result |
| MEDIUM | Partial coverage | Evidence Result |
| LOW | Weak coverage | Evidence Result |
| NOT_MONITORED | Protection OFF during target window | Evidence Result |

---

## 4. Network State

| State | Description | Where Used |
|---|---|---|
| ONLINE | Upload working normally | Dashboard |
| OFFLINE | No internet | Dashboard / Settings |
| BUFFERING | Local buffer waiting to upload | Dashboard |

---

## 5. Evidence Check State

| State | Description | Where Used |
|---|---|---|
| IDLE | Form not submitted | Evidence Check |
| VALIDATION_ERROR | Invalid input | Evidence Check |
| CHECKING | Evidence window being evaluated | Evidence Check |
| RESULT_AVAILABLE | Result ready | Evidence Result |

---

## 6. Evidence Result State

| State | Verdict | UI Output |
|---|---|---|
| HIGH_NO_EVENT | No speeding events found (High coverage) | Badge HIGH |
| HIGH_EVENT | Speeding event recorded (High coverage) | Badge HIGH |
| MEDIUM | Insufficient coverage to verify | Badge MEDIUM |
| LOW | Insufficient coverage to verify | Badge LOW |
| OFF | Not monitored (Protection was OFF) | Badge NOT MONITORED |

---

## 7. Vehicle State

| State | Description | Where Used |
|---|---|---|
| NO_VEHICLES | No registered vehicles | Vehicle Selector / Dashboard |
| ONE_VEHICLE | Single vehicle available | Dashboard |
| MULTIPLE_VEHICLES | Multiple vehicles available | Vehicle Selector / Dashboard |
| ACTIVE_VEHICLE_SELECTED | Current vehicle selected | Dashboard / Evidence Check |

---

## 8. History State

| State | Description | Where Used |
|---|---|---|
| EMPTY | No previous sessions or reports | History |
| POPULATED | History list available | History |

---

## 9. Session Summary State

| State | Description | Where Used |
|---|---|---|
| NO_EVENTS | Session had no speeding events | Session Summary |
| HAS_EVENTS | Session contains events | Session Summary |
| LIMITED_COVERAGE | Session had poor monitoring coverage | Session Summary |

---

## 10. Generic UI State

| State | Description | Where Used |
|---|---|---|
| LOADING | Content loading | Any screen |
| EMPTY | No data available | Any screen |
| ERROR | Recoverable UI error | Any screen |
| DISABLED | Action unavailable | Any interactive screen |