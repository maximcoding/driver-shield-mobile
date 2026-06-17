export const BANNER_STATES = ["gps_off", "perm", "gps_weak", "offline"];

export const COVERAGE_DETAIL_SEGS = [
  { start: "08:14", end: "08:31", duration: "17 min", quality: "high", pct: 100, sats: 9, gps: "Strong", note: null },
  { start: "08:31", end: "08:38", duration: "7 min", quality: "medium", pct: 62, sats: 4, gps: "Partial", note: "Urban canyon — signal partially blocked" },
  { start: "08:38", end: "08:44", duration: "6 min", quality: "low", pct: 28, sats: 2, gps: "Weak", note: "Tunnel / underpass — GPS signal lost" },
  { start: "08:44", end: "08:52", duration: "8 min", quality: "high", pct: 100, sats: 10, gps: "Strong", note: null },
];

export const GAP_INTERVALS = [
  { gapStart: "08:31", gapEnd: "08:38", duration: "7 min", reason: "Urban canyon — high-rise buildings blocked satellite signal", speedBefore: 62, speedAfter: 55, beforeLabel: "Dual carriageway", afterLabel: "Motorway" },
  { gapStart: "08:38", gapEnd: "08:44", duration: "6 min", reason: "Tunnel / underpass — complete GPS signal loss", speedBefore: 55, speedAfter: 38, beforeLabel: "Motorway", afterLabel: "Motorway exit" },
];

export const EVIDENCE_ITEMS = ["GPS timestamp logged", "Speed telemetry captured", "Session hash verified", "Archive entry confirmed"];

export const SESS_DEMO_STATES = ["no-events", "events", "limited"];

export const TRIP_DEMO_STATES = ["no-events", "events", "limited"];

export const WAYPOINTS_BASE = [
  { t: "08:14", speed: 0, label: "Departure" },
  { t: "08:17", speed: 28, label: "Residential" },
  { t: "08:20", speed: 42, label: "Main road" },
  { t: "08:24", speed: 58, label: "Dual carriageway" },
  { t: "08:29", speed: 62, label: "A-road" },
  { t: "08:33", speed: 71, label: "Motorway entry" },
  { t: "08:38", speed: 68, label: "Motorway" },
  { t: "08:43", speed: 55, label: "Motorway exit" },
  { t: "08:47", speed: 38, label: "Urban road" },
  { t: "08:51", speed: 12, label: "Approach" },
  { t: "08:52", speed: 0, label: "Arrival" },
];

export const COVERAGE_SEGS = [
  { label: "08:14–08:31", pct: 100, quality: "high" },
  { label: "08:31–08:38", pct: 100, quality: "high" },
  { label: "08:38–08:44", pct: 60, quality: "medium" },
  { label: "08:44–08:52", pct: 100, quality: "high" },
];
