import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { T, L } from "../theme";
import { DOCK_TABS } from "../registry/dock.js";

// ═══════════════════════════════════════════════════════════════════
// ICON LIBRARY (Heroicons outline, 24×24)
// ═══════════════════════════════════════════════════════════════════
const Ic = ({ n, size = 24, color, sw = 1.8, ariaHidden = true, ariaLabel }) => {
  const p = {
    home: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
    trips: "M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z",
    evidence: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
    settings: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    shield: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
    shieldOff: "M12 9v3.75m0-3.75c-1.5 0-3 .5-3 .5V6.75a11.959 11.959 0 003 0m0 0V9m0 3.75h.008v.008H12v-.008zm0 0V15m3-3.75A11.959 11.959 0 0121 9.749c0 5.592-3.824 10.29-9 11.623-1.293-.332-2.512-.906-3.574-1.676",
    location: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
    eye: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    upload: "M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z",
    checkCircle: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    xCircle: "M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    alertTri: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z",
    info: "M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z",
    car: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12",
    calendar: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5",
    clock: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
    arrowLeft: "M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18",
    close: "M6 18L18 6M6 6l12 12",
    plus: "M12 4.5v15m7.5-7.5h-15",
    edit: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10",
    chevR: "M8.25 4.5l7.5 7.5-7.5 7.5",
    chevD: "M19.5 8.25l-7.5 7.5-7.5-7.5",
    trash: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0",
    bell: "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0",
    database: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125m0 5.625c0 2.278 3.694 4.125 8.25 4.125s8.25-1.847 8.25-4.125",
    globe: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253",
    lock: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z",
    question: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z",
    check: "M4.5 12.75l6 6 9-13.5",
    spinner: "M12 3v3m0 12v3M5.636 5.636l2.121 2.121m8.486 8.486l2.121 2.121M3 12h3m12 0h3M5.636 18.364l2.121-2.121m8.486-8.486l2.121-2.121",
    minus: "M5 12h14",
    satellite: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
    ruler: "M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z",
    phone: "M2.25 6.338c0-1.371 1.045-2.5 2.288-2.5h.44c.872 0 1.608.628 1.741 1.49l.292 1.944c.12.799-.308 1.583-1.048 1.923l-.437.206c-.544.257-.893.81-.807 1.41.372 2.566 2.48 4.674 5.046 5.046.6.086 1.153-.263 1.41-.807l.205-.438c.34-.74 1.124-1.168 1.924-1.048l1.943.292c.862.133 1.49.87 1.49 1.741v.44c0 1.243-1.129 2.288-2.5 2.288-7.456 0-13.5-6.044-13.5-13.5z",
    wifi: "M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0M5.093 11.865c3.759-3.759 9.856-3.759 13.614 0M8.815 15.587c1.759-1.759 4.607-1.759 6.366 0M12 19.5h.008v.008H12v-.008z",
    gauge: "M3 16a9 9 0 0118 0M12 7v2M12 16l2.5-5",
    search: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
    archive: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z",
  };
  const svgProps = {
    className: "ds-icon",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color || "currentColor",
    strokeWidth: sw,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...(ariaLabel ? { role: "img", "aria-label": ariaLabel } : { "aria-hidden": ariaHidden }),
  };
  return <svg {...svgProps}><path d={p[n] || ""} /></svg>;
};

// Branded shield logo — same elegant Heroicon path, larger with subtle fill for depth
// The closed shield sub-path gets the fill; the open checkmark lines stay stroke-only.
const ShieldLogo = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      fill="rgba(61,127,255,0.15)"
      stroke={T.priT} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
    />
  </svg>
);

// ═══════════════════════════════════════════════════════════════════
// PRIMITIVE COMPONENTS
// ═══════════════════════════════════════════════════════════════════

const COV_LABELS = { high: "High", medium: "Medium", low: "Low", none: "Not monitored" };
const CovBadge = ({ level }) => {
  const v = ["high", "medium", "low", "none"].includes(level) ? level : "none";
  return (
    <span className={`ds-cov-badge ds-cov-badge--${v}`}>
      <span className="ds-cov-badge__dot" />
      {COV_LABELS[v]}
    </span>
  );
};

// Status Badge — truncates long labels (e.g. localized "No permission"); full text in title for a11y
const STATUS_BADGE_MAX_WIDTH = 140;
const StatusBadge = ({ label, color, bg, maxWidth = STATUS_BADGE_MAX_WIDTH }) => (
  <span
    title={label}
    style={{
      display: "inline-flex", alignItems: "center",
      padding: "4px 10px", borderRadius: 999, background: bg,
      fontFamily: T.fB, fontSize: T.fsSm, fontWeight: 600, color,
      letterSpacing: "0.02em",
      maxWidth: maxWidth ?? STATUS_BADGE_MAX_WIDTH,
      overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
      minWidth: 0
    }}
  >
    {label}
  </span>
);

// Banner config — shared by Banner and SmartBanner
const BANNER_CFG = {
  warning: { color: T.wa, bg: T.waD, border: T.waB, ico: "alertTri" },
  error: { color: T.er, bg: T.erD, border: T.erB, ico: "xCircle" },
  success: { color: T.su_, bg: T.suD, border: T.suB, ico: "checkCircle" },
  info: { color: T.inf, bg: T.infD, border: T.infB, ico: "info" },
  offline: { color: T.of_, bg: T.ofD, border: T.ofB, ico: "spinner" },
  permission: { color: T.per, bg: T.perD, border: T.perB, ico: "lock" },
};

// Banner — only predefined classes; color from token via variant. floating = overlay + slim (title only).
const Banner = ({ type, icon, title, text, onDismiss, floating }) => {
  const c = BANNER_CFG[type] || BANNER_CFG.info;
  const variant = type || "info";
  return (
    <div className={`ds-banner ds-banner--${variant}${floating ? " ds-banner--floating" : ""}`} title={floating && text ? text : undefined}>
      <div className="ds-icon-slot ds-banner__icon"><Ic n={icon || c.ico} size={16} color={c.color} /></div>
      <div className="ds-content">
        {title && <p className="ds-banner__title">{title}</p>}
        {(!floating || !title) && text && <p className="ds-banner__text">{text}</p>}
      </div>
      {onDismiss && (
        <button type="button" onClick={onDismiss} className="ds-right ds-banner__dismiss" aria-label="Dismiss">
          <Ic n="close" size={14} color={c.color} />
        </button>
      )}
    </div>
  );
};

// SmartBanner — dismissable + optional auto-close with progress strip. floating = overlay with solid background.
const SmartBanner = ({ type, icon, title, text, autoCloseMs, onClose, floating }) => {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(100);
  const c = BANNER_CFG[type] || BANNER_CFG.info;

  const dismiss = () => { setVisible(false); onClose?.(); };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!autoCloseMs) return;
    const start = Date.now();
    const tick = setInterval(() => {
      const pct = Math.max(0, 1 - (Date.now() - start) / autoCloseMs) * 100;
      setProgress(pct);
      if (pct <= 0) { clearInterval(tick); dismiss(); }
    }, 50);
    return () => clearInterval(tick);
  }, [autoCloseMs]);

  if (!visible) return null;

  const variant = type || "info";
  return (
    <div className={`ds-card ds-smart-banner ds-banner--${variant}${floating ? " ds-smart-banner--floating" : ""}`}>
      <div className="ds-row ds-row-pad-sm">
        <div className="ds-icon-slot"><Ic n={icon || c.ico} size={16} color={c.color} /></div>
        <div className="ds-content">
          {title && <p className="ds-banner__title">{title}</p>}
          <p className="ds-banner__text">{text}</p>
        </div>
        <button type="button" onClick={dismiss} className="ds-right ds-banner__dismiss ds-dismiss-btn" aria-label="Dismiss">
          <Ic n="close" size={14} color={c.color} />
        </button>
      </div>
      {autoCloseMs && (
        <div className="ds-smart-banner__track" style={{ ["--progress-pct"]: progress }}>
          <div className="ds-smart-banner__progress" />
        </div>
      )}
    </div>
  );
};

// Buttons — only predefined classes
const Btn = ({ variant = "primary", label, iconLeft, iconRight, onClick, disabled, full, size = "md" }) => {
  const v = variant in { primary: 1, secondary: 1, ghost: 1, danger: 1, link: 1 } ? variant : "primary";
  const cn = ["ds-btn", `ds-btn--${v}`, full && "ds-btn--full", size === "sm" && "ds-btn--sm"].filter(Boolean).join(" ");
  return (
    <button type="button" className={cn} onClick={disabled ? null : onClick} disabled={disabled}>
      {iconLeft && <Ic n={iconLeft} size={16} color="currentColor" />}
      {label}
      {iconRight && <Ic n={iconRight} size={16} color="currentColor" />}
    </button>
  );
};

const IconBtn = ({ icon, onClick, color, size = 36, bgVariant, ariaLabel }) => {
  const cn = ["ds-icon-btn", size === 40 && "ds-icon-btn--40", bgVariant && `ds-icon-btn--${bgVariant}-bg`].filter(Boolean).join(" ");
  return (
    <button type="button" className={cn} onClick={onClick} aria-label={ariaLabel}>
      <Ic n={icon} size={16} color={color || T.t2} />
    </button>
  );
};

// Brand icons — unified viewBox="0 0 24 24", size tuned per glyph to match optical weight
const BrandIc = ({ brand }) => {
  if (brand === "google") return (
    <svg width={19} height={19} viewBox="0 0 24 24" fill="none">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
  if (brand === "apple") return (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
  return (
    <svg width={21} height={21} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
};

// Auth button — three-column layout pins the icon to the same x regardless of label length
const AuthBtn = ({ brand, label, primary, onClick }) => (
  <button onClick={onClick} style={{
    display: "flex", alignItems: "center",
    width: "100%", padding: "12px 20px", borderRadius: 12,
    fontFamily: T.fB, fontSize: 14, fontWeight: 600, cursor: "pointer",
    transition: "all 0.18s ease",
    ...(primary
      ? { background: T.pri, color: T.white, border: "none", boxShadow: "0 4px 18px rgba(61,127,255,0.28)" }
      : { background: T.s3, color: T.t1, border: `1px solid ${T.bd}`, boxShadow: "none" }),
  }}>
    {/* Left icon chip — fixed 32×32, same position in every button */}
    <span style={{
      width: 32, height: 32, borderRadius: 8, flexShrink: 0,
      background: primary ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.05)",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <BrandIc brand={brand} />
    </span>
    {/* Label centered across remaining space */}
    <span style={{ flex: 1, textAlign: "center" }}>{label}</span>
    {/* Right spacer mirrors icon width so text is truly centered */}
    <span style={{ width: 32, flexShrink: 0 }} />
  </button>
);

// Text Input — states: default / focused (CSS :focus-within) / error / disabled
const FInput = ({ id: idProp, label, value, onChange, placeholder, iconLeft, iconRight, type = "text", hint, error, disabled = false }) => {
  const [focused, setFocused] = useState(false);
  const genId = useRef(`finput-${Math.random().toString(36).slice(2, 9)}`).current;
  const id = idProp || genId;
  const borderColor = error ? T.er : focused ? T.pri : T.bd;
  const boxShadow = focused && !error ? `0 0 0 3px ${T.priD}` : "none";
  const descId = (hint || error) ? `${id}-desc` : undefined;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: T.gapSm, opacity: disabled ? 0.45 : 1 }}>
      {label && <label htmlFor={id} style={{
        fontFamily: T.fB, fontSize: T.fsSm, fontWeight: 600, color: T.t2,
        letterSpacing: "0.08em", textTransform: "uppercase"
      }}>{label}</label>}
      <div style={{
        ...L.inputRow,
        border: `1px solid ${borderColor}`,
        boxShadow,
        transition: "border-color 0.15s, box-shadow 0.15s",
        background: disabled ? T.s2 : T.s
      }}>
        {iconLeft && <div style={L.right}><Ic n={iconLeft} size={16} color={error ? T.er : T.t3} /></div>}
        <input
          id={id}
          type={type}
          value={value}
          onChange={e => !disabled && onChange && onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          aria-invalid={!!error}
          aria-describedby={descId}
          style={{
            ...L.content, fontFamily: T.fB, fontSize: T.fsMd,
            color: disabled ? T.t3 : T.t1, background: "none", padding: 0
          }}
        />
        {iconRight && <div style={L.right}><Ic n={iconRight} size={16} color={T.t3} /></div>}
      </div>
      {hint && !error && <p id={descId} style={{ fontFamily: T.fB, fontSize: T.fsDetail, color: T.t3 }}>{hint}</p>}
      {error && <p id={descId} role="alert" style={{ fontFamily: T.fB, fontSize: T.fsDetail, color: T.er }}>{error}</p>}
    </div>
  );
};

// FSelect — styled dropdown matching FInput anatomy
const FSelect = ({ id: idProp, label, value, onChange, options = [], iconLeft, hint, error, disabled = false, placeholder = "Select…" }) => {
  const genId = useRef(`fselect-${Math.random().toString(36).slice(2, 9)}`).current;
  const id = idProp || genId;
  const descId = (hint || error) ? `${id}-desc` : undefined;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: T.gapSm, opacity: disabled ? 0.45 : 1 }}>
      {label && <label htmlFor={id} style={{
        fontFamily: T.fB, fontSize: T.fsSm, fontWeight: 600, color: T.t2,
        letterSpacing: "0.08em", textTransform: "uppercase"
      }}>{label}</label>}
      <div style={{
        ...L.inputRow,
        border: `1px solid ${error ? T.er : T.bd}`,
        background: disabled ? T.s2 : T.s,
        position: "relative",
      }}>
        {iconLeft && <div style={L.right}><Ic n={iconLeft} size={16} color={error ? T.er : T.t3} /></div>}
        <select
          id={id}
          value={value}
          onChange={e => !disabled && onChange && onChange(e.target.value)}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={descId}
          style={{
            ...L.content, fontFamily: T.fB, fontSize: T.fsMd,
            color: value ? T.t1 : T.t3,
            background: "none", border: "none", appearance: "none",
            paddingRight: 24, cursor: disabled ? "default" : "pointer",
          }}>
          {!value && <option value="" disabled>{placeholder}</option>}
          {options.map(o => (
            <option key={o.value} value={o.value} style={{ background: T.s2, color: T.t1 }}>
              {o.label}
            </option>
          ))}
        </select>
        <div style={{ ...L.right, pointerEvents: "none" }}><Ic n="chevD" size={14} color={T.t3} /></div>
      </div>
      {hint && !error && <p id={descId} style={{ fontFamily: T.fB, fontSize: T.fsDetail, color: T.t3 }}>{hint}</p>}
      {error && <p id={descId} role="alert" style={{ fontFamily: T.fB, fontSize: T.fsDetail, color: T.er }}>{error}</p>}
    </div>
  );
};

// Card
const Card = ({ children, style = {} }) => (
  <div style={{ ...L.card, ...style }}>{children}</div>
);

// Divider
const Div = () => <div style={{ height: 1, background: T.div, margin: `0 ${T.rowH}px` }} />;

// Section Label
const SecLabel = ({ text, action, onAction }) => (
  <div style={{ ...L.rowBetween, padding: "0 2px", marginBottom: T.secBot, marginTop: T.secTop }}>
    <span style={{
      fontFamily: T.fB, fontSize: T.fsSm, fontWeight: 600, color: T.t2,
      letterSpacing: "0.04em"
    }}>{text}</span>
    {action && <button onClick={onAction} style={{
      fontFamily: T.fB, fontSize: T.fsBody,
      fontWeight: 500, color: T.priT, background: "none", border: "none"
    }}>{action}</button>}
  </div>
);

// Status Row — right slot: status text in sentence case, or pass right={<StatusBadge ... />} for pill style
const StatRow = ({ icon, label, statusText, statusColor, detail, last, right }) => {
  const hasRightSlot = right != null;
  const isNumeric = !hasRightSlot && /^\d+$/.test(String(statusText).trim());
  return (
    <div style={{ ...L.row, ...L.rowPad, ...L.rowBorder(last), alignItems: "flex-start" }}>
      <div style={L.iconSlot}><Ic n={icon} size={16} color={T.t2} /></div>
      <div style={L.content}>
        <p style={{ fontFamily: T.fB, fontSize: T.fsBase, fontWeight: 500, color: T.t1 }}>{label}</p>
        {detail && <p style={{ fontFamily: T.fB, fontSize: T.fsDetail, color: T.t2, marginTop: 1 }}>{detail}</p>}
      </div>
      <div style={{ ...L.right, alignSelf: "stretch", display: "flex", alignItems: "center", gap: T.gapSm }}>
        {hasRightSlot ? right : (
          <>
            <span style={{ width: 6, height: 6, borderRadius: T.rPill, background: statusColor, flexShrink: 0 }} />
            <span style={{
              fontFamily: T.fB, fontSize: isNumeric ? T.fsBase : T.fsSm, fontWeight: 600, color: statusColor,
              letterSpacing: isNumeric ? 0 : "0.02em"
            }}>{statusText}</span>
          </>
        )}
      </div>
    </div>
  );
};

// Read-only data row — icon | left label | right-aligned value + optional detail line; detail uses t2 for visibility
const InfoRow = ({ icon, label, value, detail, last }) => (
  <div style={{ ...L.row, ...L.rowPadSm, ...L.rowBorder(last), alignItems: "flex-start" }}>
    <div style={L.iconSlot}><Ic n={icon} size={16} color={T.t2} /></div>
    <p style={{ ...L.content, fontFamily: T.fB, fontSize: T.fsBody, color: T.t2 }}>{label}</p>
    <div style={{ ...L.right, textAlign: "right" }}>
      <p style={{ fontFamily: T.fB, fontSize: T.fsBody, fontWeight: 500, color: T.t1 }}>{value}</p>
      {detail && <p style={{ fontFamily: T.fM, fontSize: T.fsDetail, color: T.t2, marginTop: 1 }}>{detail}</p>}
    </div>
  </div>
);

// Right slot wrapper: stretch to row height and center content so icon stays mid-line with multi-line text
const rightSlotStyle = { ...L.right, alignSelf: "stretch", display: "flex", alignItems: "center" };

// Settings Row (icon optional — omit for iconless rows e.g. Invoice history)
const SetRow = ({ icon, iconColor, label, overline, value, onPress, last, danger, toggle, toggleOn, right }) => (
  <button onClick={onPress} style={{ ...L.row, ...L.rowPadLg, width: "100%", background: "none", ...L.rowBorder(last), textAlign: "left" }}>
    {icon != null && <div style={L.iconSlot}><Ic n={icon} size={16} color={iconColor || (danger ? T.er : T.t2)} /></div>}
    <div style={L.content}>
      {overline && <p style={{
        fontFamily: T.fB, fontSize: T.fsSm, fontWeight: 600, color: T.t2,
        letterSpacing: "0.02em", marginBottom: 2
      }}>{overline}</p>}
      <p style={{ fontFamily: T.fB, fontSize: T.fsMd, fontWeight: 500, color: danger ? T.er : T.t1 }}>{label}</p>
      {value && <p style={{ fontFamily: T.fB, fontSize: T.fsDetail, color: T.t2, marginTop: 1 }}>{value}</p>}
    </div>
    <div style={rightSlotStyle}>
      {toggle !== undefined ? (
        <div style={{
          width: 40, height: 24, borderRadius: T.rPill, background: toggleOn ? T.pri : T.s3,
          border: `1px solid ${toggleOn ? T.pri : T.bd}`, position: "relative", transition: "all 0.2s"
        }}>
          <div style={{
            position: "absolute", top: 3, left: toggleOn ? 18 : 3, width: 16, height: 16,
            borderRadius: T.rPill, background: toggleOn ? T.white : T.t2, transition: "left 0.2s ease"
          }} />
        </div>
      ) : right ? right : (
        !danger && <Ic n="chevR" size={16} color={T.t2} />
      )}
    </div>
  </button>
);

// Invoice list row — two-band layout: date↔amount on top, plan↔status on bottom.
const InvoiceRow = ({ date, planLabel, amount, status, onPress, last }) => (
  <button
    type="button"
    onClick={onPress}
    aria-label={`View invoice ${date}`}
    style={{
      display: "flex", alignItems: "center", gap: T.gapSm,
      padding: `${T.rowVLg}px ${T.rowH}px`,
      width: "100%", background: "none", ...L.rowBorder(last), textAlign: "left", cursor: "pointer",
    }}
  >
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 3 }}>
        <p style={{ fontFamily: T.fB, fontSize: T.fsMd, fontWeight: 500, color: T.t1 }}>{date}</p>
        <p style={{ fontFamily: T.fM, fontSize: T.fsMd, fontWeight: 600, color: T.t1 }}>{amount}</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <p style={{ fontFamily: T.fB, fontSize: T.fsDetail, color: T.t2 }}>{planLabel}</p>
        <p style={{ fontFamily: T.fB, fontSize: T.fsDetail, color: T.H }}>{status}</p>
      </div>
    </div>
    <Ic n="chevR" size={16} color={T.t3} style={{ flexShrink: 0 }} />
  </button>
);

// Notification list row — fixed height, single-line description, unread state.
const NOTIF_ROW_HEIGHT = 72;
const NotifRow = ({ icon, iconColor, iconBg, title, body, time, read, onClick, last }) => (
  <button
    type="button"
    onClick={onClick}
    style={{
      display: "flex",
      alignItems: "center",
      gap: 12,
      minHeight: NOTIF_ROW_HEIGHT,
      padding: `${T.rowVLg}px ${T.rowH}px`,
      width: "100%",
      textAlign: "left",
      background: read ? "none" : T.priD,
      borderBottom: last ? "none" : `1px solid ${T.div}`,
      borderLeft: `3px solid ${read ? "transparent" : T.pri}`,
      transition: "background 0.15s",
    }}
  >
    <div style={{
      width: 38,
      height: 38,
      borderRadius: 11,
      background: iconBg,
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <Ic n={icon} size={16} color={iconColor} />
    </div>
    <div style={{ flex: 1, minWidth: 0, minHeight: 44, display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
        <p style={{
          fontFamily: T.fB,
          fontSize: T.fsBody,
          fontWeight: read ? 400 : 600,
          color: T.t1,
          flex: 1,
          marginRight: 8,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}>{title}</p>
      </div>
      <p style={{
        fontFamily: T.fB,
        fontSize: T.fsDetail,
        color: T.t2,
        lineHeight: 1.45,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      }}>{body}</p>
    </div>
    <div style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 10, minWidth: 56 }}>
      <p style={{ fontFamily: T.fB, fontSize: T.fsXs, color: T.t3 }}>{time}</p>
      <div style={{
        width: 7,
        height: 7,
        borderRadius: 999,
        background: read ? "transparent" : T.pri,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }} />
    </div>
  </button>
);

// Session Card — elegant, token-driven
const SessionCard = ({ dateLabel, timeStart, timeEnd, duration, distance, events, coverage, gapDetected, onClick }) => {
  const covCfg = {
    high: { color: T.H, bg: T.HD, footerBg: T.HFaint, label: "High coverage" },
    medium: { color: T.M, bg: T.MD, footerBg: T.MFaint, label: "Medium coverage" },
    low: { color: T.L, bg: T.LD, footerBg: T.LFaint, label: "Low coverage" },
    none: { color: T.t3, bg: T.nmD, footerBg: "transparent", label: "Not monitored" },
  };
  const cfg = gapDetected
    ? { color: T.M, bg: T.MD, footerBg: T.MFaint, label: "GPS gap detected", pulse: true }
    : (covCfg[coverage] || covCfg.none);
  const hasEvents = events > 0;

  return (
    <button onClick={onClick} style={{
      display: "block", width: "100%", textAlign: "left", marginBottom: 8,
      ...L.card, borderLeft: `2px solid ${cfg.color}`,
    }}>
      {/* Body */}
      <div style={L.rowPad}>
        {/* Date + chevron */}
        <div style={{ ...L.rowBetween, marginBottom: T.secBot }}>
          <span style={{
            fontFamily: T.fB, fontSize: T.fsDetail, fontWeight: 600, color: T.t2,
            letterSpacing: "0.02em"
          }}>{dateLabel}</span>
          <Ic n="chevR" size={13} color={T.t3} />
        </div>

        {/* Times */}
        <div style={{ display: "flex", alignItems: "baseline", gap: 0, marginBottom: 0 }}>
          <span style={{
            fontFamily: T.fM, fontSize: T.fsLg, fontWeight: 700, color: T.t1,
            letterSpacing: "-0.02em", lineHeight: 1.2
          }}>{timeStart}</span>
          <span style={{
            fontFamily: T.fM, fontSize: T.fsDetail, color: T.t3, margin: `0 ${T.gapSm}px`, lineHeight: 1.2,
            position: "relative", top: -1
          }}>{"–"}</span>
          <span style={{
            fontFamily: T.fM, fontSize: T.fsLg, fontWeight: 400, color: T.t2,
            letterSpacing: "-0.02em", lineHeight: 1.2, opacity: 0.65
          }}>{timeEnd}</span>
          {(duration || distance) && (
            <div style={{ marginLeft: "auto", ...L.rowCenter }}>
              {duration && <span style={{ fontFamily: T.fB, fontSize: 11, color: T.t3 }}>{duration}</span>}
              {duration && distance && <span style={{ color: T.t3, opacity: 0.35, fontSize: 10 }}>/</span>}
              {distance && <span style={{ fontFamily: T.fB, fontSize: 11, color: T.t3 }}>{distance}</span>}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div style={{
        ...L.rowBetween,
        padding: `${T.secBot}px ${T.rowH}px`,
        background: cfg.footerBg,
        borderTop: `1px solid ${T.div}`,
      }}>
        <div style={L.rowCenter}>
          <span className={cfg.pulse ? "blink" : ""} style={{
            width: 5, height: 5, borderRadius: 999, background: cfg.color,
            flexShrink: 0, display: "block",
          }} />
          <span style={{
            fontFamily: T.fB, fontSize: T.fsSm, fontWeight: 600, color: cfg.color,
            letterSpacing: "0.02em"
          }}>{cfg.label}</span>
        </div>

        <div style={{
          display: "flex", alignItems: "center", gap: 4,
          padding: "2px 7px", borderRadius: 999,
          background: hasEvents ? T.MD : "transparent",
          border: hasEvents ? `1px solid rgba(240,160,32,0.22)` : "1px solid transparent",
        }}>
          <Ic n={hasEvents ? "alertTri" : "shield"} size={10} color={hasEvents ? T.M : T.t3} />
          <span style={{
            fontFamily: T.fB, fontSize: 10, fontWeight: hasEvents ? 600 : 400,
            color: hasEvents ? T.M : T.t3, letterSpacing: "0.03em"
          }}>
            {hasEvents ? `${events} event${events > 1 ? "s" : ""}` : "0 events"}
          </span>
        </div>
      </div>
    </button>
  );
};

// Empty State — noHorizontalPadding: use when inside ds-screen-content so gap comes from parent (28px)
const EmptyState = ({ icon, title, text, cta, cta2, fullHeight, noHorizontalPadding }) => (
  <div style={{
    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
    padding: noHorizontalPadding ? "48px 0" : "48px 32px", textAlign: "center", gap: 12,
    ...(fullHeight ? { flex: 1, minHeight: 300 } : {})
  }}>
    <div style={{
      width: 56, height: 56, borderRadius: 16, background: T.s2,
      display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 4
    }}>
      <Ic n={icon} size={24} color={T.t3} />
    </div>
    <p style={{ fontFamily: T.fD, fontSize: 17, fontWeight: 600, color: T.t1 }}>{title}</p>
    <p style={{ fontFamily: T.fB, fontSize: 14, color: T.t2, lineHeight: 1.6, maxWidth: 240 }}>{text}</p>
    {cta && (
      <div style={{ marginTop: 4, width: "100%", maxWidth: 220, display: "flex", flexDirection: "column", gap: 8 }}>
        <Btn variant={cta.variant || "primary"} label={cta.label} iconLeft={cta.icon}
          onClick={cta.onClick} full />
        {cta2 && <Btn variant={cta2.variant || "ghost"} label={cta2.label} iconLeft={cta2.icon}
          onClick={cta2.onClick} full />}
      </div>
    )}
  </div>
);

// Inline error state — use for failed data loads within a screen (not full-screen)
const ErrorState = ({ icon = "xCircle", title = "Something went wrong", text, cta, fullHeight }) => (
  <div style={{
    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
    padding: "40px 32px", textAlign: "center", gap: 10,
    ...(fullHeight ? { flex: 1, minHeight: 300 } : {})
  }}>
    <div style={{
      width: 52, height: 52, borderRadius: 14, background: T.erD,
      display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 4
    }}>
      <Ic n={icon} size={22} color={T.er} />
    </div>
    <p style={{ fontFamily: T.fD, fontSize: 17, fontWeight: 600, color: T.t1 }}>{title}</p>
    {text && <p style={{ fontFamily: T.fB, fontSize: 14, color: T.t2, lineHeight: 1.6, maxWidth: 240 }}>{text}</p>}
    {cta && (
      <div style={{ marginTop: 4, width: "100%", maxWidth: 220 }}>
        <Btn variant={cta.variant || "ghost"} label={cta.label} iconLeft={cta.icon}
          onClick={cta.onClick} full />
      </div>
    )}
  </div>
);

// Known units for StatTile: when value is "12.4 mi" we split so only the number truncates
const STAT_TILE_UNITS = ["mi", "min", "mph", "hr", "km"];
function parseValueUnit(str) {
  if (typeof str !== "string" || !str.trim()) return null;
  const parts = str.trim().split(/\s+/);
  const last = parts[parts.length - 1];
  if (STAT_TILE_UNITS.includes(last) && parts.length >= 2) {
    return { value: parts.slice(0, -1).join(" "), unit: last };
  }
  return null;
}

// Metric tile — label above value or badge; centered, tokens only; long values truncate with ellipsis
const StatTile = ({ label, icon, value, valueColor, unit, badge }) => {
  const parsed = unit == null && typeof value === "string" ? parseValueUnit(value) : null;
  const displayValue = unit != null ? value : (parsed ? parsed.value : value);
  const displayUnit = unit ?? (parsed ? parsed.unit : null);
  const fullTitle = value != null ? (displayUnit != null ? `${displayValue} ${displayUnit}` : String(value)) : undefined;

  return (
    <div style={{
      flex: 1, minWidth: 0, ...L.card, padding: T.cardPad,
      display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center"
    }}>
      <div style={{ ...L.rowCenter, marginBottom: T.gapSm, justifyContent: "center" }}>
        {icon && <Ic n={icon} size={16} color={T.t2} />}
        <p style={{
          fontFamily: T.fB, fontSize: T.fsSm, fontWeight: 600, color: T.t2,
          textTransform: "uppercase", letterSpacing: "0.08em"
        }}>{label}</p>
      </div>
      {badge ?? (
        <div style={{
          display: "flex", alignItems: "baseline", justifyContent: "center",
          flexWrap: "nowrap", gap: "2px 6px", minWidth: 0, overflow: "hidden", maxWidth: "100%"
        }}>
          <span
            title={fullTitle}
            style={{
              fontFamily: T.fM, fontSize: T.fsBrand, fontWeight: 700,
              color: valueColor || T.t1,
              overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", minWidth: 0
            }}
          >
            {displayValue}
          </span>
          {displayUnit != null && (
            <span style={{ fontFamily: T.fB, fontSize: T.fsDetail, color: T.t2, flexShrink: 0 }}>
              {displayUnit}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

// Tab / page top bar — title centered, right slot aligned; used by Home, Trips, Evidence, Settings
const PageHeader = ({ title, subtitle, right }) => (
  <div style={{
    padding: `${T.rowH}px ${T.pagePadX}px ${T.rowVSm}px`,
    borderBottom: `1px solid ${T.div}`, flexShrink: 0
  }}>
    <div style={{ display: "flex", alignItems: "center", minHeight: 44 }}>
      <div style={{ flex: 1, minWidth: 0 }} />
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "0 12px" }}>
        <p style={{
          fontFamily: T.fD, fontSize: T.fsDisplay, fontWeight: 800, color: T.t1,
          letterSpacing: "-0.02em", lineHeight: 1.3
        }}>{title}</p>
        {subtitle && <p style={{ fontFamily: T.fB, fontSize: T.fsDetail, color: T.t2, marginTop: 4 }}>{subtitle}</p>}
      </div>
      <div style={{ flex: 1, minWidth: 0, maxWidth: "50%", display: "flex", justifyContent: "flex-end", alignItems: "center", paddingLeft: 12 }}>
        {right || null}
      </div>
    </div>
  </div>
);

// Vehicle list row — icon avatar tile + name + plate + nickname + selection indicator. Right slot always reserved for alignment.
const VehicleRow = ({ vehicle, selected, onSelect, last }) => (
  <button
    type="button"
    onClick={onSelect}
    aria-pressed={selected}
    aria-label={`${vehicle.year} ${vehicle.make} ${vehicle.model}${selected ? ", selected" : ""}`}
    style={{
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: T.rowH,
      ...L.rowPadModal,
      background: "none",
      border: "none",
      cursor: "pointer",
      ...L.rowBorder(last),
      textAlign: "left",
    }}
  >
    <div style={{
      ...L.iconSlot40,
      borderRadius: T.r,
      background: selected ? T.priD : T.s2,
      border: `1px solid ${selected ? T.priG : T.bd}`,
    }}>
      <Ic n="car" size={18} color={selected ? T.pri : T.t3} sw={1.8} />
    </div>
    <div style={L.content}>
      <p style={{
        fontFamily: T.fD,
        fontSize: T.fsMd,
        fontWeight: 700,
        color: T.t1,
        letterSpacing: "-0.01em",
        marginBottom: 2,
      }}>
        {vehicle.year} {vehicle.make} {vehicle.model}
      </p>
      <p style={{ fontFamily: T.fM, fontSize: T.fsSm, color: T.t2, letterSpacing: "0.04em" }}>{vehicle.plate}</p>
      {vehicle.nickname && <p style={{ fontFamily: T.fB, fontSize: T.fsSm, color: T.t3, marginTop: 1 }}>{vehicle.nickname}</p>}
    </div>
    <div
      style={{
        width: 20,
        height: 20,
        borderRadius: T.rPill,
        background: selected ? T.pri : "transparent",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      aria-hidden
    >
      {selected && <Ic n="check" size={12} color={T.white} sw={2.5} />}
    </div>
  </button>
);

// Icon + text row — no right value; used for evidence chains and simple list items
const TextRow = ({ icon, iconColor, text, last }) => (
  <div style={{ ...L.row, ...L.rowPadSm, ...L.rowBorder(last) }}>
    <div style={L.iconSlot}><Ic n={icon} size={16} color={iconColor || T.t2} /></div>
    <p style={{ ...L.content, fontFamily: T.fB, fontSize: T.fsBase, color: T.t1 }}>{text}</p>
  </div>
);

// Loading Spinner Row
const LoadingRow = () => (
  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 32, gap: 10 }}>
    <span className="spin"><Ic n="spinner" size={18} color={T.t3} /></span>
    <span style={{ fontFamily: T.fB, fontSize: 14, color: T.t2 }}>Checking records…</span>
  </div>
);

// Brand Loader — DriveShield circular arc spinner
const BrandLoader = ({ label = "Loading…", sublabel, size = "lg" }) => {
  const dim = size === "sm" ? 80 : size === "md" ? 120 : 160;
  const iconSize = size === "sm" ? 22 : size === "md" ? 34 : 48;
  const sw = size === "sm" ? 2 : size === "md" ? 2.5 : 3;
  const r = dim / 2 - sw - 1;
  const circ = 2 * Math.PI * r;
  const arcLen = circ * 0.28;   // visible arc = 28% of circumference
  const gapLen = circ - arcLen;

  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center",
      gap: size === "sm" ? 12 : 20, padding: size === "sm" ? "24px 20px" : "40px 32px"
    }}>

      {/* Ring + icon stack */}
      <div style={{
        position: "relative", width: dim, height: dim,
        display: "flex", alignItems: "center", justifyContent: "center"
      }}>

        {/* Subtle track ring */}
        <svg width={dim} height={dim} viewBox={`0 0 ${dim} ${dim}`}
          style={{ position: "absolute", inset: 0 }}>
          <circle cx={dim / 2} cy={dim / 2} r={r}
            fill="none" stroke={T.bd} strokeWidth={sw} />
        </svg>

        {/* Spinning arc */}
        <svg className="arc" width={dim} height={dim} viewBox={`0 0 ${dim} ${dim}`}
          style={{ position: "absolute", inset: 0 }}>
          <defs>
            <linearGradient id={`arcGrad${size}`} x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={T.pri} stopOpacity="1" />
              <stop offset="100%" stopColor={T.pri} stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <circle cx={dim / 2} cy={dim / 2} r={r}
            fill="none"
            stroke={`url(#arcGrad${size})`}
            strokeWidth={sw}
            strokeLinecap="round"
            strokeDasharray={`${arcLen} ${gapLen}`}
            strokeDashoffset={0}
            style={{ filter: `drop-shadow(0 0 ${size === "sm" ? 4 : 7}px ${T.pri})` }}
          />
        </svg>

        {/* Inner circle */}
        <div style={{
          width: dim - sw * 2 - 8, height: dim - sw * 2 - 8, borderRadius: 999,
          background: `radial-gradient(circle at 50% 38%, ${T.s2} 0%, ${T.bg} 100%)`,
          border: `1px solid ${T.bd}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: `inset 0 2px 12px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03)`
        }}>
          <Ic n="shield" size={iconSize} color={T.pri} sw={1.5} />
        </div>
      </div>

      {/* Label */}
      {(label || sublabel) && (
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: 4 }}>
          {label && (
            <p style={{
              fontFamily: T.fD, fontSize: size === "sm" ? 13 : 16, fontWeight: 700,
              color: T.t1, letterSpacing: "-0.01em"
            }}>
              DriveShield
            </p>
          )}
          {sublabel && (
            <p style={{ fontFamily: T.fB, fontSize: size === "sm" ? 11 : 13, color: T.t2 }}>
              {sublabel}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════
// LAYOUT COMPONENTS
// ═══════════════════════════════════════════════════════════════════

// Header — A: modal (close left) / B: push (back left)
// actionVariant: "default" (gray chip) | "danger" (red-tinted chip)
// actionLabel: text string — renders a text button instead of an icon button
const Header = ({ variant = "push", title, onBack, onClose,
  actionIcon, actionLabel, actionVariant = "default", onAction }) => {
  const rightBg = actionVariant === "danger" ? T.erD : T.s2;
  const rightColor = actionVariant === "danger" ? T.er : T.t2;
  return (
    <div style={{
      display: "flex", alignItems: "center", height: 56, padding: "0 20px",
      borderBottom: `1px solid ${T.div}`, background: T.bg, flexShrink: 0
    }}>
      <div style={{ width: 44, display: "flex", justifyContent: "flex-start" }}>
        {variant === "modal" && onClose && (
          <button type="button" onClick={onClose} aria-label="Close" style={{
            width: 36, height: 36, borderRadius: 999,
            background: T.s2, display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <Ic n="close" size={16} color={T.t2} />
          </button>
        )}
        {variant === "push" && onBack && (
          <button type="button" onClick={onBack} aria-label="Back" style={{
            width: 36, height: 36, borderRadius: 999,
            background: "none", display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <Ic n="arrowLeft" size={20} color={T.t1} />
          </button>
        )}
      </div>
      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <p style={{
          fontFamily: T.fD, fontSize: T.fsBrand, fontWeight: 700, color: T.t1,
          letterSpacing: "-0.01em"
        }}>{title}</p>
      </div>
      <div style={{
        width: actionLabel && !actionIcon ? "auto" : 44,
        minWidth: 44,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}>
        {actionIcon && onAction && (
          <button type="button" onClick={onAction} aria-label={actionLabel || "Action"} style={{
            width: 36, height: 36, borderRadius: 999,
            background: actionVariant === "danger" ? rightBg : "none",
            display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <Ic n={actionIcon} size={16} color={rightColor} />
          </button>
        )}
        {actionLabel && onAction && !actionIcon && (
          <button type="button" onClick={onAction}
            style={{
              fontFamily: T.fB, fontSize: 13, fontWeight: 600, color: T.priT,
              background: "none", border: "none", padding: "0 4px",
              whiteSpace: "nowrap",
            }}>
            {actionLabel}
          </button>
        )}
      </div>
    </div>
  );
};

// Bottom Sheet
const Sheet = ({ visible, onClose, title, children, height = "auto" }) => {
  if (!visible) return null;
  return (
    <div style={{
      position: "absolute", inset: 0, zIndex: 200, display: "flex", flexDirection: "column",
      justifyContent: "flex-end"
    }}>
      <div
        role="button"
        tabIndex={0}
        onClick={onClose}
        onKeyDown={e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClose(); } }}
        aria-label="Close"
        style={{ position: "absolute", inset: 0, background: T.overlay }}
      />
      <div className="su" style={{
        position: "relative", background: T.s, borderRadius: `${T.rLg}px ${T.rLg}px 0 0`,
        border: `1px solid ${T.bd}`, borderBottom: "none", overflow: "hidden"
      }}>
        <div style={{ ...L.rowBetween, padding: `${T.rowH}px ${T.pagePadX}px ${T.rowVSm}px`, borderBottom: `1px solid ${T.div}` }}>
          {title && <p style={{ fontFamily: T.fD, fontSize: T.fsBrand, fontWeight: 700, color: T.t1 }}>{title}</p>}
          <button type="button" onClick={onClose} aria-label="Close" style={{ ...L.iconSlot, width: 32, height: 32, borderRadius: T.rPill, background: T.s2, marginLeft: "auto" }}>
            <Ic n="close" size={14} color={T.t2} />
          </button>
        </div>
        <div style={{ padding: `${T.secBot}px ${T.pagePadX}px ${T.secTop}px`, maxHeight: 480, overflowY: "auto" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

// Modal (centered overlay)
const Modal = ({ visible, onClose, title, children }) => {
  if (!visible) return null;
  return (
    <div style={{
      position: "absolute", inset: 0, zIndex: 300, display: "flex",
      alignItems: "center", justifyContent: "center", padding: 24
    }}>
      <div
        role="button"
        tabIndex={0}
        onClick={onClose}
        onKeyDown={e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClose(); } }}
        aria-label="Close"
        style={{ position: "absolute", inset: 0, background: T.overlay }}
      />
      <div className="si" style={{ position: "relative", ...L.card, width: "100%", boxShadow: "0 24px 64px rgba(0,0,0,0.5)" }}>
        <div style={{ ...L.rowBetween, padding: `${T.rowVLg}px ${T.pagePadX}px ${T.rowV}px`, borderBottom: `1px solid ${T.div}` }}>
          <p style={{ fontFamily: T.fD, fontSize: T.fsBrand, fontWeight: 700, color: T.t1 }}>{title}</p>
          <button type="button" onClick={onClose} aria-label="Close" style={{ ...L.iconSlot, width: 30, height: 30, borderRadius: T.rPill, background: T.s2 }}>
            <Ic n="close" size={13} color={T.t2} />
          </button>
        </div>
        <div style={{ padding: `8px ${T.pagePadX}px 8px` }}>{children}</div>
      </div>
    </div>
  );
};

// Select Row (for use in modals/sheets)
const SelectRow = ({ label, sublabel, selected, onSelect, last }) => (
  <button onClick={onSelect} style={{ ...L.row, ...L.rowPadModal, width: "100%", background: "none", textAlign: "left", ...L.rowBorder(last) }}>
    <div style={L.content}>
      <p style={{ fontFamily: T.fB, fontSize: T.fsMd, fontWeight: 500, color: T.t1 }}>{label}</p>
      {sublabel && <p style={{ fontFamily: T.fB, fontSize: T.fsDetail, color: T.t2, marginTop: 2 }}>{sublabel}</p>}
    </div>
    {selected && <div style={L.right}><Ic n="check" size={16} color={T.priT} /></div>}
  </button>
);

// Session row — compact list variant (smaller than SessionCard, no footer)
const SessionRow = ({ dateLabel, timeStart, timeEnd, distance, events, coverage, onClick, last }) => {
  const covColor = { high: T.H, medium: T.M, low: T.L, none: T.t3 }[coverage] || T.t3;
  return (
    <button onClick={onClick} style={{
      display: "flex", alignItems: "center", gap: 12,
      padding: `10px 16px`, width: "100%", textAlign: "left", background: "none",
      borderBottom: last ? "none" : `1px solid ${T.div}`,
      borderLeft: `2px solid ${covColor}`,
    }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ fontFamily: T.fB, fontSize: 10, fontWeight: 600, color: T.t2, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 2 }}>
          {dateLabel}
        </p>
        <p style={{ fontFamily: T.fM, fontSize: T.fsMd, fontWeight: 700, color: T.t1, letterSpacing: "-0.01em" }}>
          {timeStart} – {timeEnd}
        </p>
      </div>
      <div style={{ textAlign: "right", flexShrink: 0 }}>
        <p style={{ fontFamily: T.fM, fontSize: T.fsMd, color: T.t1 }}>{distance}</p>
        {events > 0 && (
          <p style={{ fontFamily: T.fB, fontSize: 10, color: T.M, marginTop: 2 }}>
            {events} event{events > 1 ? "s" : ""}
          </p>
        )}
      </div>
      <Ic n="chevR" size={13} color={T.t3} />
    </button>
  );
};

// Confirmation / destructive action sheet
// DatePickerSheet — full calendar month view, returns "YYYY-MM-DD" string
const DatePickerSheet = ({ visible, onClose, value, onChange }) => {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  useEffect(() => {
    if (visible && value) {
      const d = new Date(value + "T00:00:00");
      setViewYear(d.getFullYear());
      setViewMonth(d.getMonth());
    }
  }, [visible]);

  if (!visible) return null;

  const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const DAYS = ["Su","Mo","Tu","We","Th","Fr","Sa"];

  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const selDay   = value ? parseInt(value.split("-")[2]) : null;
  const selMonth = value ? parseInt(value.split("-")[1]) - 1 : null;
  const selYear  = value ? parseInt(value.split("-")[0]) : null;
  const isSelected = (d) => d && selYear === viewYear && selMonth === viewMonth && selDay === d;
  const isTodayCell = (d) => d && today.getDate() === d && today.getMonth() === viewMonth && today.getFullYear() === viewYear;

  const prevMonth = () => { if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); } else setViewMonth(m => m - 1); };
  const nextMonth = () => { if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); } else setViewMonth(m => m + 1); };

  const pick = (d) => {
    if (!d) return;
    const mm = String(viewMonth + 1).padStart(2, "0");
    const dd = String(d).padStart(2, "0");
    onChange(`${viewYear}-${mm}-${dd}`);
    onClose();
  };

  return (
    <Sheet visible={visible} onClose={onClose} title="Select Date">
      <div style={{ padding: "0 16px 16px" }}>
        <div style={{ ...L.rowBetween, marginBottom: 16 }}>
          <button onClick={prevMonth} style={{
            width: 32, height: 32, borderRadius: T.rSm, border: "none",
            background: T.s2, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer"
          }}>
            <Ic n="arrowLeft" size={16} color={T.t2} />
          </button>
          <p style={{ fontFamily: T.fD, fontSize: 16, fontWeight: 700, color: T.t1 }}>
            {MONTHS[viewMonth]} {viewYear}
          </p>
          <button onClick={nextMonth} style={{
            width: 32, height: 32, borderRadius: T.rSm, border: "none",
            background: T.s2, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
            transform: "rotate(180deg)"
          }}>
            <Ic n="arrowLeft" size={16} color={T.t2} />
          </button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4, marginBottom: 8 }}>
          {DAYS.map(d => (
            <div key={d} style={{ textAlign: "center" }}>
              <p style={{ fontFamily: T.fB, fontSize: 10, fontWeight: 700, color: T.t3, letterSpacing: "0.06em" }}>{d}</p>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4 }}>
          {cells.map((d, i) => {
            const sel = isSelected(d);
            const tod = isTodayCell(d);
            return (
              <button key={i} onClick={() => pick(d)} disabled={!d} style={{
                height: 36, borderRadius: T.rSm, border: "none",
                background: sel ? T.pri : tod && !sel ? T.priD : "transparent",
                color: sel ? "#fff" : tod ? T.priT : d ? T.t1 : "transparent",
                fontFamily: T.fM, fontSize: 13, fontWeight: sel ? 700 : 400,
                cursor: d ? "pointer" : "default",
              }}>
                {d || ""}
              </button>
            );
          })}
        </div>
      </div>
    </Sheet>
  );
};

// TimePickerSheet — hour + minute grid, returns "HH:MM" string
const TimePickerSheet = ({ visible, onClose, value, onChange }) => {
  const [selHour, setSelHour] = useState(null);
  const [selMinute, setSelMinute] = useState(null);

  useEffect(() => {
    if (visible) {
      if (value) {
        const [h, m] = value.split(":").map(Number);
        setSelHour(h);
        setSelMinute(m);
      } else {
        setSelHour(null);
        setSelMinute(null);
      }
    }
  }, [visible]);

  const hours   = Array.from({ length: 24 }, (_, i) => i);
  const minutes = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

  const confirm = () => {
    if (selHour !== null && selMinute !== null) {
      onChange(`${String(selHour).padStart(2,"0")}:${String(selMinute).padStart(2,"0")}`);
      onClose();
    }
  };

  const cellStyle = (selected) => ({
    height: 36, borderRadius: T.rSm, border: "none",
    background: selected ? T.pri : T.s2,
    color: selected ? "#fff" : T.t2,
    fontFamily: T.fM, fontSize: 13, fontWeight: selected ? 700 : 400,
    cursor: "pointer",
  });

  return (
    <Sheet visible={visible} onClose={onClose} title="Select Time">
      <div style={{ padding: "0 16px 16px" }}>
        <p style={{ fontFamily: T.fB, fontSize: T.fsSm, fontWeight: 600, color: T.t3, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>Hour</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 4, marginBottom: 16 }}>
          {hours.map(h => (
            <button key={h} onClick={() => setSelHour(h)} style={cellStyle(selHour === h)}>
              {String(h).padStart(2, "0")}
            </button>
          ))}
        </div>

        <p style={{ fontFamily: T.fB, fontSize: T.fsSm, fontWeight: 600, color: T.t3, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>Minute</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 4, marginBottom: 20 }}>
          {minutes.map(m => (
            <button key={m} onClick={() => setSelMinute(m)} style={cellStyle(selMinute === m)}>
              {String(m).padStart(2, "0")}
            </button>
          ))}
        </div>

        <Btn variant="primary" label="Confirm" full
          disabled={selHour === null || selMinute === null} onClick={confirm} />
      </div>
    </Sheet>
  );
};

const ConfirmSheet = ({ visible, onClose, title, body, confirmLabel = "Confirm", onConfirm, danger = true }) => {
  if (!visible) return null;
  return (
    <div style={{
      position: "absolute", inset: 0, zIndex: 300,
      display: "flex", alignItems: "center", justifyContent: "center", padding: 24,
      background: T.overlay
    }}>
      <div className="si" style={{
        position: "relative", ...L.card, width: "100%", padding: T.secTop,
        boxShadow: "0 24px 64px rgba(0,0,0,0.5)"
      }}>
        <p style={{
          fontFamily: T.fD, fontSize: T.fsBrand, fontWeight: 800, color: T.t1,
          letterSpacing: "-0.01em", marginBottom: 10
        }}>{title}</p>
        {body && <p style={{
          fontFamily: T.fB, fontSize: 14, color: T.t2,
          lineHeight: 1.6, marginBottom: 20
        }}>{body}</p>}
        <div style={{ display: "flex", flexDirection: "column", gap: T.rowGap }}>
          <Btn variant={danger ? "danger" : "primary"} label={confirmLabel} full
            onClick={() => { onConfirm(); onClose(); }} />
          <Btn variant="secondary" label="Cancel" full onClick={onClose} />
        </div>
      </div>
    </div>
  );
};

// Export options sheet — reusable for any content type
const ExportSheet = ({ visible, onClose, title = "Export", onExport }) => {
  const formats = [
    { id: "pdf",  icon: "eye",      label: "PDF Report",       detail: "Formatted for legal / insurance use" },
    { id: "csv",  icon: "database", label: "CSV Spreadsheet",  detail: "Raw data for analysis" },
    { id: "json", icon: "globe",    label: "JSON Archive",     detail: "Machine-readable full record" },
  ];
  return (
    <Sheet visible={visible} onClose={onClose} title={title}>
      {formats.map((f, i) => (
        <button key={f.id} onClick={() => { onExport?.(f.id); onClose(); }} style={{
          display: "flex", alignItems: "center", gap: 14,
          padding: `${T.rowVLg}px ${T.pagePadX}px`,
          width: "100%", textAlign: "left", background: "none",
          borderBottom: i < formats.length - 1 ? `1px solid ${T.div}` : "none"
        }}>
          <div style={{
            width: 38, height: 38, borderRadius: 11, background: T.priD, flexShrink: 0,
            display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <Ic n={f.icon} size={16} color={T.priT} />
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontFamily: T.fB, fontSize: T.fsMd, fontWeight: 500, color: T.t1 }}>{f.label}</p>
            <p style={{ fontFamily: T.fB, fontSize: T.fsDetail, color: T.t2, marginTop: 2 }}>{f.detail}</p>
          </div>
          <Ic n="chevR" size={14} color={T.t3} />
        </button>
      ))}
    </Sheet>
  );
};

// Share options sheet — reusable for any content type
const ShareSheet = ({ visible, onClose, title = "Share" }) => {
  const options = [
    { id: "copy",  icon: "eye",    label: "Copy link",         detail: "Share a secure view-only link" },
    { id: "email", icon: "globe",  label: "Send via email",    detail: "Attach record to an email" },
    { id: "airdrop", icon: "upload", label: "AirDrop / Files", detail: "Send directly to another device" },
    { id: "legal", icon: "lock",   label: "Send to solicitor", detail: "Direct secure transfer" },
  ];
  return (
    <Sheet visible={visible} onClose={onClose} title={title}>
      {options.map((o, i) => (
        <button key={o.id} onClick={onClose} style={{
          display: "flex", alignItems: "center", gap: 14,
          padding: `${T.rowVLg}px ${T.pagePadX}px`,
          width: "100%", textAlign: "left", background: "none",
          borderBottom: i < options.length - 1 ? `1px solid ${T.div}` : "none"
        }}>
          <div style={{
            width: 38, height: 38, borderRadius: 11, background: T.s2, flexShrink: 0,
            display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <Ic n={o.icon} size={16} color={T.t2} />
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontFamily: T.fB, fontSize: T.fsMd, fontWeight: 500, color: T.t1 }}>{o.label}</p>
            <p style={{ fontFamily: T.fB, fontSize: T.fsDetail, color: T.t2, marginTop: 2 }}>{o.detail}</p>
          </div>
          <Ic n="chevR" size={14} color={T.t3} />
        </button>
      ))}
    </Sheet>
  );
};

// Sort & Filter bottom sheet
const SortFilterSheet = ({ visible, onClose, value, onApply }) => {
  const [local, setLocal] = useState(value);

  useEffect(() => { if (visible) setLocal(value); }, [visible, value]);

  if (!visible) return null;

  const sections = [...new Set(SORT_OPTIONS.map(o => o.section))];

  return (
    <div style={{
      position: "absolute", inset: 0, zIndex: 200, display: "flex", flexDirection: "column",
      justifyContent: "flex-end"
    }}>
      <div
        role="button"
        tabIndex={0}
        onClick={onClose}
        onKeyDown={e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClose(); } }}
        aria-label="Close"
        style={{ position: "absolute", inset: 0, background: T.overlay }}
      />
      <div className="su" style={{
        position: "relative", background: T.s,
        borderRadius: `${T.rLg}px ${T.rLg}px 0 0`, border: `1px solid ${T.bd}`, borderBottom: "none", overflow: "hidden"
      }}>

        {/* Drag handle */}
        <div style={{ display: "flex", justifyContent: "center", paddingTop: 12, paddingBottom: 4 }}>
          <div style={{ width: 36, height: 4, borderRadius: 999, background: T.t3 }} />
        </div>

        {/* Header */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: `10px ${T.pagePadX}px 12px`, borderBottom: `1px solid ${T.div}`
        }}>
          <p style={{ fontFamily: T.fD, fontSize: T.fsBrand, fontWeight: 700, color: T.t1 }}>Sort & Filter</p>
          <button onClick={() => setLocal("newest")} style={{
            fontFamily: T.fB, fontSize: 13, fontWeight: 500, color: T.t2, background: "none"
          }}>
            Reset
          </button>
        </div>

        {/* Options */}
        <div style={{ padding: `8px ${T.pagePadX}px 0` }}>
          {sections.map((section, si) => (
            <div key={section} style={{ marginTop: si > 0 ? 8 : 0 }}>
              <p style={{
                fontFamily: T.fB, fontSize: 10, fontWeight: 700, color: T.t3,
                letterSpacing: "0.1em", textTransform: "uppercase",
                padding: "12px 4px 6px"
              }}>{section}</p>
              {SORT_OPTIONS.filter(o => o.section === section).map(opt => {
                const sel = local === opt.id;
                return (
                  <button key={opt.id} onClick={() => setLocal(opt.id)} style={{
                    display: "flex", alignItems: "center", gap: 12, width: "100%",
                    padding: `${T.rowVSm}px ${T.cardPad}px`, borderRadius: T.r, marginBottom: 2,
                    background: sel ? T.pri : "transparent",
                    border: "none", textAlign: "left", transition: "background 0.15s",
                  }}>
                    <span style={{
                      flex: 1, fontFamily: T.fB, fontSize: T.fsBase, fontWeight: sel ? 600 : 400,
                      color: sel ? T.white : T.t1
                    }}>{opt.label}</span>
                    <div style={{
                      width: 18, height: 18, borderRadius: T.rPill, flexShrink: 0,
                      background: sel ? T.white : "transparent",
                      border: sel ? "none" : `2px solid ${T.bd}`,
                      display: "flex", alignItems: "center", justifyContent: "center"
                    }}>
                      {sel && <div style={{ width: 8, height: 8, borderRadius: 999, background: T.pri }} />}
                    </div>
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ padding: "16px 16px 32px" }}>
          <button onClick={() => { onApply(local); onClose(); }} style={{
            width: "100%", padding: `${T.rowVLg}px 0`, borderRadius: T.r,
            background: T.pri, border: "none",
            fontFamily: T.fD, fontSize: T.fsMd, fontWeight: 700, color: T.white,
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            letterSpacing: "-0.01em",
          }}>
            Apply Filters
            <Ic n="chevR" size={14} color={T.white} sw={2.2} />
          </button>
          <p style={{ fontFamily: T.fB, fontSize: 11, color: T.t3, textAlign: "center", marginTop: 10 }}>
            Filters apply to visible driving history only.
          </p>
        </div>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════
// SORT & FILTER — DATA
// ═══════════════════════════════════════════════════════════════════
export const SORT_OPTIONS = [
  { section: "SORT BY DATE", id: "newest", label: "Newest First" },
  { section: "SORT BY DATE", id: "oldest", label: "Oldest First" },
  { section: "SORT BY COVERAGE", id: "covHigh", label: "Highest Integrity Score" },
  { section: "SORT BY COVERAGE", id: "covLow", label: "Lowest Integrity Score" },
  { section: "SORT BY EVENTS", id: "eventsMore", label: "Most Safety Events" },
  { section: "SORT BY EVENTS", id: "eventsFewer", label: "Fewest Safety Events" },
];

const COVERAGE_RANK = { high: 2, medium: 1, low: 0 };

export function applySortToTrips(trips, sortBy) {
  const arr = [...trips];
  if (sortBy === "oldest") return arr.reverse();
  if (sortBy === "covHigh") return arr.sort((a, b) => COVERAGE_RANK[b.coverage] - COVERAGE_RANK[a.coverage]);
  if (sortBy === "covLow") return arr.sort((a, b) => COVERAGE_RANK[a.coverage] - COVERAGE_RANK[b.coverage]);
  if (sortBy === "eventsMore") return arr.sort((a, b) => b.events - a.events);
  if (sortBy === "eventsFewer") return arr.sort((a, b) => a.events - b.events);
  return arr;
}

// ═══════════════════════════════════════════════════════════════════
// FLOATING DOCK NAVIGATION
// ═══════════════════════════════════════════════════════════════════
const Dock = ({ active, onChange }) => {
  const activeIndex = DOCK_TABS.findIndex(t => t.id === active);

  const handleDragEnd = (e, info) => {
    const threshold = 50;
    if (info.offset.x < -threshold && activeIndex < DOCK_TABS.length - 1) {
      onChange(DOCK_TABS[activeIndex + 1].id);
    } else if (info.offset.x > threshold && activeIndex > 0) {
      onChange(DOCK_TABS[activeIndex - 1].id);
    }
  };

  return (
    <div style={{
      position: "absolute", bottom: 0, left: 0, right: 0, height: 120,
      pointerEvents: "none", zIndex: 50, display: "flex", justifyContent: "center",
      alignItems: "flex-end", paddingBottom: 28, overflow: "hidden"
    }}>

      {/* Full-area swipe capture layer */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.15}
        onDragEnd={handleDragEnd}
        style={{ position: "absolute", inset: 0, pointerEvents: "auto" }}
      />

      {/* Icon arc */}
      <div style={{
        position: "relative", width: "100%", maxWidth: 390, height: "100%",
        display: "flex", justifyContent: "center", alignItems: "flex-end",
        pointerEvents: "none"
      }}>
        {DOCK_TABS.map((tab, i) => {
          const isActive = i === activeIndex;
          const offset = i - activeIndex;
          const x = offset * 78;
          const y = Math.abs(offset) * 16;
          const scale = isActive ? 1 : 0.78;
          const opacity = isActive ? 1 : Math.abs(offset) > 1 ? 0.55 : 0.80;

          return (
            <motion.button
              key={tab.id}
              type="button"
              onClick={() => onChange(tab.id)}
              aria-label={tab.label}
              initial={false}
              animate={{ x, y, scale, opacity }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              style={{
                position: "absolute", bottom: 0, display: "flex", flexDirection: "column",
                alignItems: "center", gap: 5, pointerEvents: "auto", background: "none",
                border: "none", cursor: "pointer", padding: 0, transformOrigin: "50% 100%"
              }}>

              <div style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                borderRadius: 999,
                background: isActive ? T.priD : T.s2,
                border: isActive ? `1.5px solid ${T.priG}` : `1px solid ${T.bd}`,
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                padding: isActive ? 15 : 11,
                boxShadow: isActive
                  ? `0 0 0 6px rgba(61,127,255,0.08), 0 6px 24px ${T.priG}`
                  : "0 2px 8px rgba(0,0,0,0.4)"
              }}>
                <Ic n={tab.icon} size={isActive ? 24 : 18}
                  color={isActive ? T.pri : T.t2} sw={isActive ? 2 : 1.8} />
              </div>

              <span style={{
                fontFamily: T.fB, fontSize: T.fsXs, fontWeight: 700,
                color: T.priT, letterSpacing: "0.08em",
                textTransform: "uppercase", lineHeight: 1,
                opacity: isActive ? 1 : 0,
                transition: "opacity 0.18s ease"
              }}>
                {tab.label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

// Keyboard layouts for NumericKeyboard (used by phone entry / OTP screens)
const PHONE_KB_ROWS = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"], ["*", "0", "⌫"]];
const OTP_KB_ROWS = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"], ["", "0", "⌫"]];

const NumericKeyboard = ({ onPress, variant = "phone" }) => {
  const rows = variant === "otp" ? OTP_KB_ROWS : PHONE_KB_ROWS;
  return (
    <div style={{
      background: T.s2, borderTop: `1px solid ${T.bd}`,
      padding: "8px 12px 28px", display: "flex", flexDirection: "column", gap: 6, flexShrink: 0
    }}>
      {rows.map((row, ri) => (
        <div key={ri} style={{ display: "flex", gap: 6 }}>
          {row.map((k, ki) => (
            <button key={ki} onClick={() => k && onPress(k)} style={{
              flex: 1, height: 46, borderRadius: 10,
              background: k === "" ? "transparent" : T.s3,
              border: k === "" ? "none" : `1px solid ${T.bd}`,
              fontFamily: T.fM, fontSize: k === "⌫" ? 18 : 20, fontWeight: 500,
              color: k === "" ? "transparent" : T.t1,
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: k ? "pointer" : "default",
              transition: "background 0.1s",
            }}>
              {k}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

const SectionHeader = ({ label, top = false }) => (
  <div style={{
    padding: top ? "20px 0 8px" : "28px 0 8px",
    display: "flex", alignItems: "center", gap: 10,
  }}>
    <span style={{
      fontFamily: T.fB, fontSize: 10, fontWeight: 700, color: T.t2,
      letterSpacing: "0.12em", textTransform: "uppercase"
    }}>{label}</span>
    <div style={{ flex: 1, height: 1, background: `linear-gradient(to right,${T.bd},transparent)` }} />
  </div>
);

// Collapsible section — card with tappable header; label + chevron make expand/collapse obvious.
const CollapsibleSection = ({ label, children, defaultOpen = false, dividerAbove = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  const id = `collapsible-${label.replace(/\s/g, "-")}`;
  return (
    <div style={{
      marginBottom: 12,
      ...(dividerAbove && { marginTop: 4 }),
    }}>
      <div style={{ ...L.card, overflow: "hidden" }}>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={id}
          aria-label={open ? `${label}, collapse` : `${label}, expand`}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: `${T.rowVLg}px ${T.rowH}px`,
            background: "none",
            border: "none",
            textAlign: "left",
            cursor: "pointer",
          }}
        >
          <span style={{
            fontFamily: T.fB, fontSize: T.fsMd, fontWeight: 600, color: T.t1,
            letterSpacing: "0.02em"
          }}>{label}</span>
          <span style={{
            display: "flex", alignItems: "center", gap: 4,
            fontFamily: T.fB, fontSize: T.fsDetail, color: T.t2,
          }}>
            <span style={{ opacity: 0.9 }}>{open ? "Collapse" : "Expand"}</span>
            <Ic n={open ? "chevD" : "chevR"} size={18} color={T.t2} />
          </span>
        </button>
        {open && (
          <div id={id} style={{
            borderTop: `1px solid ${T.div}`,
            padding: `0 ${T.cardPad}px ${T.cardPad}px`,
          }}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

const HBadge = ({ status }) => {
  const cfg = {
    healthy: { label: "Enabled", color: T.H, bg: T.HD },
    warning: { label: "Action Needed", color: T.M, bg: T.MD },
    error: { label: "Required", color: T.L, bg: T.LD },
    off: { label: "Off", color: T.t3, bg: T.nmD },
    allowed: { label: "Allowed", color: T.H, bg: T.HD },
    denied: { label: "Denied", color: T.L, bg: T.LD },
    restricted: { label: "Restricted", color: T.M, bg: T.MD },
  };
  const c = cfg[status] || cfg.off;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 4,
      padding: "3px 8px", borderRadius: 999, background: c.bg,
      fontFamily: T.fB, fontSize: 10, fontWeight: 700, color: c.color,
      letterSpacing: "0.06em", textTransform: "uppercase", flexShrink: 0
    }}>
      <span style={{ width: 5, height: 5, borderRadius: 999, background: c.color }} />
      {c.label}
    </span>
  );
};

const PermRow = ({ icon, label, detail, status, last }) => (
  <div style={{ ...L.row, ...L.rowPadSm, ...L.rowBorder(last) }}>
    <div style={L.iconSlot}><Ic n={icon} size={16} color={T.t2} /></div>
    <div style={L.content}>
      <p style={{ fontFamily: T.fB, fontSize: T.fsBody, fontWeight: 500, color: T.t1 }}>{label}</p>
      {detail && <p style={{ fontFamily: T.fB, fontSize: T.fsSm, color: T.t3, marginTop: 1, lineHeight: 1.45 }}>{detail}</p>}
    </div>
    <div style={{ ...L.right, alignSelf: "stretch", display: "flex", alignItems: "center" }}><HBadge status={status} /></div>
  </div>
);

const Seg = ({ options, value, onChange }) => (
  <div style={{
    display: "inline-flex", alignItems: "center", background: T.s3, borderRadius: 8,
    padding: 3, gap: 2, border: `1px solid ${T.bd}`, flexShrink: 0
  }}>
    {options.map(opt => (
      <button key={opt.id} onClick={() => onChange(opt.id)} style={{
        padding: "4px 10px", borderRadius: 6, lineHeight: 1,
        background: value === opt.id ? T.pri : "transparent",
        border: `1px solid ${value === opt.id ? T.pri : "transparent"}`,
        fontFamily: T.fB, fontSize: T.fsDetail, fontWeight: value === opt.id ? 700 : 500,
        color: value === opt.id ? T.white : T.t2,
        transition: "all 0.15s",
      }}>{opt.label}</button>
    ))}
  </div>
);

const TogRow = ({ icon, label, detail, on, onToggle, last }) => (
  <div style={{ ...L.row, ...L.rowPad, ...L.rowBorder(last) }}>
    <div style={L.iconSlot}><Ic n={icon} size={16} color={T.t2} /></div>
    <div style={L.content}>
      <p style={{ fontFamily: T.fB, fontSize: T.fsMd, fontWeight: 500, color: T.t1 }}>{label}</p>
      {detail && <p style={{ fontFamily: T.fB, fontSize: T.fsDetail, color: T.t2, marginTop: 2, lineHeight: 1.45 }}>{detail}</p>}
    </div>
    <div style={L.right}>
      <button onClick={onToggle} style={{
        width: 40, height: 24, borderRadius: T.rPill, flexShrink: 0,
        background: on ? T.pri : T.s3,
        border: `1px solid ${on ? T.pri : T.bd}`,
        position: "relative", transition: "background 0.2s,border-color 0.2s",
      }}>
        <div style={{
          position: "absolute", top: 3,
          left: on ? 18 : 3,
          width: 16, height: 16, borderRadius: T.rPill,
          background: on ? T.white : T.t2,
          transition: "left 0.2s ease",
          boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
        }} />
      </button>
    </div>
  </div>
);

const CtrlRow = ({ icon, label, detail, right, last }) => (
  <div style={{ ...L.row, ...L.rowPad, ...L.rowBorder(last) }}>
    <div style={L.iconSlot}><Ic n={icon} size={16} color={T.t2} /></div>
    <div style={L.content}>
      <p style={{ fontFamily: T.fB, fontSize: T.fsMd, fontWeight: 500, color: T.t1 }}>{label}</p>
      {detail && <p style={{ fontFamily: T.fB, fontSize: T.fsDetail, color: T.t2, marginTop: 2, lineHeight: 1.45 }}>{detail}</p>}
    </div>
    <div style={L.right}>{right}</div>
  </div>
);

const ProgressBar = ({ pct, color }) => (
  <div style={{ height: 4, borderRadius: 999, background: T.s2, overflow: "hidden" }}>
    <div style={{
      height: "100%", width: `${Math.min(100, pct)}%`,
      borderRadius: 999, background: color || T.pri,
      transition: "width 0.4s ease"
    }} />
  </div>
);

const MapCard = ({ height = 180, showEvent = false, eventPct = 0.42, label, style = {} }) => {
  const W = 360;
  const H = height;
  const pts = [
    [18,  H * 0.78], [54,  H * 0.72], [90,  H * 0.62], [126, H * 0.52], [162, H * 0.47],
    [200, H * 0.44], [238, H * 0.38], [276, H * 0.32], [315, H * 0.28], [342, H * 0.24],
  ];
  const smooth = pts.reduce((acc, pt, i) => {
    if (i === 0) return `M${pt[0]},${pt[1]}`;
    const prev = pts[i - 1];
    const mx = (prev[0] + pt[0]) / 2;
    const my = (prev[1] + pt[1]) / 2;
    return acc + ` Q${prev[0]},${prev[1]} ${mx},${my}`;
  }, "") + ` L${pts[pts.length - 1][0]},${pts[pts.length - 1][1]}`;
  const gx = []; const gy = [];
  for (let x = 0; x < W; x += 28) gx.push(x);
  for (let y = 0; y < H; y += 28) gy.push(y);
  const roads = [
    { x1: 60,  y1: 0,    x2: 55,  y2: H,   w: 5 },
    { x1: 160, y1: 0,    x2: 170, y2: H,   w: 4 },
    { x1: 0,   y1: H*0.22, x2: W,   y2: H*0.22, w: 4 },
    { x1: 0,   y1: H*0.58, x2: W,   y2: H*0.60, w: 5 },
    { x1: 260, y1: 0,    x2: 255, y2: H,   w: 3 },
  ];
  const evIdx = Math.min(Math.floor(eventPct * (pts.length - 1)), pts.length - 2);
  const t = (eventPct * (pts.length - 1)) - evIdx;
  const evX = pts[evIdx][0] + t * (pts[evIdx + 1][0] - pts[evIdx][0]);
  const evY = pts[evIdx][1] + t * (pts[evIdx + 1][1] - pts[evIdx][1]);
  const start = pts[0];
  const end   = pts[pts.length - 1];
  return (
    <div style={{ borderRadius: T.rLg, overflow: "hidden", position: "relative", ...style }}>
      <svg width="100%" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" style={{ display: "block", background: T.bg }}>
        {gx.map(x => <line key={"gx"+x} x1={x} y1={0} x2={x} y2={H} stroke={T.s3} strokeWidth={0.6} />)}
        {gy.map(y => <line key={"gy"+y} x1={0} y1={y} x2={W} y2={y} stroke={T.s3} strokeWidth={0.6} />)}
        {roads.map((r, i) => (
          <line key={i} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2} stroke={T.s2} strokeWidth={r.w} strokeLinecap="round" />
        ))}
        <path d={smooth} fill="none" stroke={T.H} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" opacity={0.18} />
        <path d={smooth} fill="none" stroke={T.H} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
        <circle cx={start[0]} cy={start[1]} r={9} fill={T.H} opacity={0.2} />
        <circle cx={start[0]} cy={start[1]} r={5} fill={T.H} />
        <circle cx={end[0]} cy={end[1]} r={9} fill={T.t3} opacity={0.25} />
        <circle cx={end[0]} cy={end[1]} r={5} fill={T.t2} />
        {showEvent && (<><circle cx={evX} cy={evY} r={14} fill={T.L} opacity={0.22} /><circle cx={evX} cy={evY} r={8}  fill={T.L} /></>)}
        {label && (<defs><linearGradient id="mapFade" x1="0" y1="0" x2="0" y2="1"><stop offset="50%" stopColor={T.bg} stopOpacity={0} /><stop offset="100%" stopColor={T.bg} stopOpacity={0.75} /></linearGradient></defs>)}
        {label && <rect x={0} y={0} width={W} height={H} fill="url(#mapFade)" />}
      </svg>
      <div style={{ position: "absolute", bottom: 10, left: 12, right: 12, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {label && <span style={{ fontFamily: T.fB, fontSize: T.fsDetail, color: T.t2, background: "rgba(8,9,12,0.7)", padding: "2px 8px", borderRadius: T.rPill }}>{label}</span>}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginLeft: "auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}><div style={{ width: 8, height: 8, borderRadius: 999, background: T.H }} /><span style={{ fontFamily: T.fB, fontSize: 9, color: T.t2 }}>Route</span></div>
          {showEvent && <div style={{ display: "flex", alignItems: "center", gap: 4 }}><div style={{ width: 8, height: 8, borderRadius: 999, background: T.L }} /><span style={{ fontFamily: T.fB, fontSize: 9, color: T.t2 }}>Event</span></div>}
        </div>
      </div>
    </div>
  );
};

const SpeedGraph = ({ points, limit, eventIndices = [] }) => {
  const W = 300; const H = 96;
  const padX = 2; const padY = 10;
  const speeds = points.map(p => p.speed);
  const maxSpeed = Math.ceil(Math.max(...speeds, limit || 0) * 1.25 / 10) * 10;
  const toX = (i) => padX + (i / Math.max(points.length - 1, 1)) * (W - 2 * padX);
  const toY = (s) => H - padY - (s / maxSpeed) * (H - 2 * padY);
  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${toX(i).toFixed(1)} ${toY(p.speed).toFixed(1)}`).join(" ");
  const areaPath = `${linePath} L ${toX(points.length - 1).toFixed(1)} ${H} L ${toX(0).toFixed(1)} ${H} Z`;
  const limitY = limit ? toY(limit) : null;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: 110, display: "block" }} preserveAspectRatio="none">
      <defs><linearGradient id="sgGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={T.pri} stopOpacity="0.28" /><stop offset="100%" stopColor={T.pri} stopOpacity="0" /></linearGradient></defs>
      {limitY !== null && <line x1={padX} y1={limitY} x2={W - padX} y2={limitY} stroke={T.L} strokeWidth="1" strokeDasharray="5 4" opacity="0.7" />}
      <path d={areaPath} fill="url(#sgGrad)" />
      <path d={linePath} fill="none" stroke={T.pri} strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
      {eventIndices.map(idx => (<g key={idx}><line x1={toX(idx).toFixed(1)} y1="0" x2={toX(idx).toFixed(1)} y2={H} stroke={T.L} strokeWidth="1" strokeDasharray="3 3" opacity="0.8" /><circle cx={toX(idx).toFixed(1)} cy={toY(points[idx].speed).toFixed(1)} r="4" fill={T.L} stroke="#08090C" strokeWidth="1.5" /></g>))}
    </svg>
  );
};

const RetRow = ({ icon, label, period, detail, last }) => (
  <div style={{ ...L.row, ...L.rowPad, ...L.rowBorder(last) }}>
    <div style={L.iconSlot}><Ic n={icon} size={16} color={T.t2} /></div>
    <div style={L.content}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 2 }}>
        <p style={{ fontFamily: T.fB, fontSize: T.fsMd, fontWeight: 500, color: T.t1 }}>{label}</p>
        <span style={{ fontFamily: T.fM, fontSize: T.fsSm, fontWeight: 700, color: T.priT, letterSpacing: "0.04em", flexShrink: 0, marginLeft: 8 }}>{period}</span>
      </div>
      <p style={{ fontFamily: T.fB, fontSize: T.fsDetail, color: T.t2, lineHeight: 1.5 }}>{detail}</p>
    </div>
  </div>
);

export { Ic, ShieldLogo, CovBadge, StatusBadge, Banner, SmartBanner, Btn, IconBtn, BrandIc, AuthBtn, FInput, FSelect, Card, Div, SecLabel, StatRow, InfoRow, SetRow, InvoiceRow, NotifRow, SessionCard, EmptyState, ErrorState, StatTile, PageHeader, VehicleRow, TextRow, LoadingRow, BrandLoader, Header, Sheet, Modal, SelectRow, SessionRow, DatePickerSheet, TimePickerSheet, ConfirmSheet, ExportSheet, ShareSheet, SortFilterSheet, Dock, NumericKeyboard, SectionHeader, CollapsibleSection, HBadge, PermRow, Seg, TogRow, CtrlRow, ProgressBar, MapCard, SpeedGraph, RetRow };
