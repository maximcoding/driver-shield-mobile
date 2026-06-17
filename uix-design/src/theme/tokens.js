// Design tokens — single source of truth for colors, typography, spacing, radius, elevation.
// L (layout contracts) depends on T; both are used by ui/ and screens/.

export const T = {
  bg: "#08090C", s: "#10121A", s2: "#161923", s3: "#1B2030",
  bd: "#1C2336", div: "#1C2336",
  pri: "#3D7FFF", priD: "rgba(61,127,255,0.14)", priG: "rgba(61,127,255,0.3)", priT: "#6FA3FF",
  t1: "#E8EDF5", t2: "#6E80A0", t3: "#2A3550",
  H: "#2DD4A0", HD: "rgba(45,212,160,0.12)",
  M: "#F0A020", MD: "rgba(240,160,32,0.12)",
  L: "#EF5B5B", LD: "rgba(239,91,91,0.12)",
  nm: "#3A4560", nmD: "rgba(58,69,96,0.12)",
  su_: "#2DD4A0", suD: "rgba(45,212,160,0.10)",
  wa: "#F0A020", waD: "rgba(240,160,32,0.10)",
  er: "#EF5B5B", erD: "rgba(239,91,91,0.10)",
  inf: "#5BA4F5", infD: "rgba(91,164,245,0.10)",
  of_: "#56687A", ofD: "rgba(86,104,122,0.10)",
  per: "#A07AF5", perD: "rgba(160,122,245,0.10)",
  fD: "'Syne',sans-serif", fB: "'DM Sans',sans-serif", fM: "'JetBrains Mono',monospace",
  waB: "rgba(240,160,32,0.2)", erB: "rgba(239,91,91,0.2)", suB: "rgba(45,212,160,0.2)",
  infB: "rgba(91,164,245,0.2)", ofB: "rgba(86,104,122,0.2)", perB: "rgba(160,122,245,0.2)",
  fsXs: 10, fsSm: 11, fsDetail: 12, fsBody: 13, fsBase: 14, fsMd: 15,
  fsBrand: 18, fsDisplay: 22, fsMetric: 22, fsLg: 24,
  lhBody: 1.5, lhSnug: 1.4, lhTight: 1.3, lhNone: 1,
  lhSafe: 1.65,
  pbDescender: 6,
  pbDescenderBody: 2,
  rXs: 4, rSm: 8, r: 12, rLg: 16, rXl: 24, rPill: 999,
  shadow: "0 1px 4px rgba(0,0,0,0.30)",
  shadowMd: "0 4px 16px rgba(0,0,0,0.40)",
  shadowLg: "0 8px 32px rgba(0,0,0,0.55)",
  rowH: 16, rowV: 13, rowVSm: 12, rowVLg: 14, modalH: 20,
  rowGap: 12, gapSm: 6,
  secTop: 24, secBot: 8,
  cardPad: 14,
  navClear: 80,
  pagePadX: 28,
  pagePadXCompact: 20,
  pagePadTop: 16,
  pagePadBottom: 36,
  badgeLgSize: 88,
  badgeLgR: 22,
  erBorder: "1.5px solid rgba(239,91,91,0.28)",
  erShadow: "0 0 0 1px rgba(239,91,91,0.08), 0 16px 48px rgba(239,91,91,0.2)",
  scrollAreaWithDockBottom: 120,
  white: "#fff",
  overlay: "rgba(0,0,0,0.65)",
  HFaint: "rgba(45,212,160,0.04)", MFaint: "rgba(240,160,32,0.04)", LFaint: "rgba(239,91,91,0.04)",
};

const T_UNITLESS = ["lhBody", "lhSnug", "lhTight", "lhNone", "lhSafe"];

export function tokensToCssVars() {
  return Object.entries(T)
    .map(([k, v]) => {
      if (typeof v === "string") return `--t-${k}:${v};`;
      if (typeof v === "number") return `--t-${k}:${T_UNITLESS.includes(k) ? v : v + "px"};`;
      return "";
    })
    .filter(Boolean)
    .join(" ");
}

export const L = {
  row: { display: "flex", alignItems: "flex-start", gap: T.rowGap },
  rowPad: { padding: `${T.rowV}px ${T.rowH}px` },
  rowPadSm: { padding: `${T.rowVSm}px ${T.rowH}px` },
  rowPadLg: { padding: `${T.rowVLg}px ${T.rowH}px` },
  rowPadModal: { padding: `${T.rowVLg}px 0` },
  rowBorder: (last) => ({ borderBottom: last ? "none" : `1px solid ${T.div}` }),
  iconSlot: { width: 24, height: 24, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" },
  iconSlot40: { width: 40, height: 40, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" },
  content: { flex: 1, minWidth: 0 },
  right: { flexShrink: 0 },
  card: { background: T.s, border: `1px solid ${T.bd}`, borderRadius: T.rLg },
  bannerRow: { display: "flex", alignItems: "center", gap: T.rowGap, padding: `${T.rowVSm}px ${T.rowH}px`, borderRadius: T.r },
  pageRow: { display: "flex", alignItems: "flex-start", justifyContent: "space-between" },
  rowBetween: { display: "flex", alignItems: "center", justifyContent: "space-between" },
  rowCenter: { display: "flex", alignItems: "center", gap: T.gapSm },
  inputRow: { display: "flex", alignItems: "center", gap: T.rowGap, padding: `11px ${T.rowH}px`, minHeight: 48, borderRadius: T.r, background: T.s2 },
};
