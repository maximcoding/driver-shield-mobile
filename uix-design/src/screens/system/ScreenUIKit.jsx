import { useState } from "react";
import { T, L } from "../../theme";
import {
  Ic,
  Btn,
  IconBtn,
  CovBadge,
  StatusBadge,
  Banner,
  SmartBanner,
  FInput,
  FSelect,
  Card,
  SetRow,
  Header,
  SessionCard,
  StatRow,
  TogRow,
  PermRow,
  RetRow,
  SelectRow,
  ProgressBar,
  MapCard,
  SpeedGraph,
  EmptyState,
  LoadingRow,
  BrandLoader,
  DatePickerSheet,
  TimePickerSheet,
  SectionHeader,
} from "../../ui";

function KitSection({ title }) {
  return (
    <div style={{ padding: "20px 20px 8px", marginTop: 8 }}>
      <p style={{
        fontFamily: T.fB, fontSize: 10, fontWeight: 700, color: T.t3,
        letterSpacing: "0.12em", textTransform: "uppercase"
      }}>{title}</p>
    </div>
  );
}

function KitDivider() {
  return (
    <div style={{ height: 1, background: T.div, margin: "16px 0 0" }} />
  );
}

function FSelectAndPickersDemo() {
  const [selVal, setSelVal] = useState("");
  const [pickDate, setPickDate] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <FSelect
        label="FSelect — Default"
        value={selVal}
        onChange={setSelVal}
        iconLeft="car"
        options={[
          { value: "sedan", label: "Sedan" },
          { value: "suv", label: "SUV / Crossover" },
          { value: "truck", label: "Pickup Truck" },
          { value: "ev", label: "Electric Vehicle" },
        ]}
        hint="Select your vehicle category."
      />
      <FSelect
        label="FSelect — Disabled"
        value="sedan"
        onChange={() => {}}
        disabled
        options={[{ value: "sedan", label: "Sedan" }]}
      />
      <FSelect
        label="FSelect — Error"
        value=""
        onChange={() => {}}
        iconLeft="car"
        options={[{ value: "sedan", label: "Sedan" }]}
        error="Vehicle type is required"
      />

      <div style={{ height: 1, background: T.div, margin: "4px 0" }} />

      <div style={{ display: "flex", flexDirection: "column", gap: T.gapSm }}>
        <label id="date-picker-label" htmlFor="date-picker-trigger" style={{ fontFamily: T.fB, fontSize: T.fsSm, fontWeight: 600, color: T.t2, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          DatePickerSheet
        </label>
        <button id="date-picker-trigger" type="button" onClick={() => setShowDate(true)} style={{
          ...L.inputRow, border: `1px solid ${T.bd}`, cursor: "pointer",
          justifyContent: "space-between"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: T.rowGap }}>
            <Ic n="calendar" size={16} color={T.t3} />
            <span style={{ fontFamily: T.fB, fontSize: T.fsMd, color: pickDate ? T.t1 : T.t3 }}>
              {pickDate
                ? new Date(pickDate + "T00:00:00").toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })
                : "Select a date…"}
            </span>
          </div>
          <Ic n="chevD" size={14} color={T.t3} />
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: T.gapSm }}>
        <label id="time-picker-label" htmlFor="time-picker-trigger" style={{ fontFamily: T.fB, fontSize: T.fsSm, fontWeight: 600, color: T.t2, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          TimePickerSheet
        </label>
        <button id="time-picker-trigger" type="button" onClick={() => setShowTime(true)} style={{
          ...L.inputRow, border: `1px solid ${T.bd}`, cursor: "pointer",
          justifyContent: "space-between"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: T.rowGap }}>
            <Ic n="clock" size={16} color={T.t3} />
            <span style={{ fontFamily: T.fB, fontSize: T.fsMd, color: pickTime ? T.t1 : T.t3 }}>
              {pickTime || "Select a time…"}
            </span>
          </div>
          <Ic n="chevD" size={14} color={T.t3} />
        </button>
      </div>

      <DatePickerSheet visible={showDate} onClose={() => setShowDate(false)}
        value={pickDate} onChange={setPickDate} />
      <TimePickerSheet visible={showTime} onClose={() => setShowTime(false)}
        value={pickTime} onChange={setPickTime} />
    </div>
  );
}

export function ScreenUIKit({ onBack }) {
  const [inputVal, setInputVal] = useState("");
  const [toggleA, setToggleA] = useState(true);
  const [toggleB, setToggleB] = useState(false);
  const [bannerKey, setBannerKey] = useState(0);

  const baseColors = [
    { c: T.bg, l: "Background", hex: "#08090C" },
    { c: T.s, l: "Surface", hex: "#10121A" },
    { c: T.s2, l: "Surface 2", hex: "#161923" },
    { c: T.s3, l: "Surface 3", hex: "#1B2030" },
    { c: T.bd, l: "Border", hex: "#1C2336" },
    { c: T.div, l: "Divider", hex: "#0F1118" },
    { c: T.pri, l: "Primary", hex: "#3D7FFF" },
    { c: T.priT, l: "Primary Tint", hex: "#6FA3FF" },
    { c: T.t1, l: "Text Primary", hex: "#E8EDF5" },
    { c: T.t2, l: "Text Secondary", hex: "#6E80A0" },
    { c: T.t3, l: "Text Muted", hex: "#2A3550" },
  ];
  const statusColors = [
    { c: T.H, l: "Cov High", hex: "#2DD4A0" },
    { c: T.M, l: "Cov Medium", hex: "#F0A020" },
    { c: T.L, l: "Cov Low", hex: "#EF5B5B" },
    { c: T.nm, l: "Not Mon.", hex: "#3A4560" },
    { c: T.su_, l: "Success", hex: "#2DD4A0" },
    { c: T.wa, l: "Warning", hex: "#F0A020" },
    { c: T.er, l: "Error", hex: "#EF5B5B" },
    { c: T.inf, l: "Info", hex: "#5BA4F5" },
    { c: T.of_, l: "Offline", hex: "#56687A" },
    { c: T.per, l: "Permission", hex: "#A07AF5" },
  ];

  const icons = [
    "home", "trips", "evidence", "settings", "shield", "shieldOff",
    "location", "eye", "upload", "checkCircle", "xCircle", "alertTri",
    "info", "car", "calendar", "clock", "arrowLeft", "close", "plus",
    "edit", "chevR", "chevD", "trash", "bell", "database", "globe",
    "lock", "question", "check", "spinner", "minus", "satellite", "ruler",
    "wifi", "phone", "gauge", "search", "archive",
  ];

  const spacing = [4, 8, 12, 16, 24, 32, 48];

  const radii = [
    { v: 0, l: "None", tok: "—" },
    { v: T.rXs, l: "XS", tok: "rXs" },
    { v: T.rSm, l: "SM", tok: "rSm" },
    { v: T.r, l: "MD", tok: "r" },
    { v: T.rLg, l: "LG", tok: "rLg" },
    { v: T.rXl, l: "XL", tok: "rXl" },
    { v: T.rPill, l: "Pill", tok: "rPill" },
  ];

  const surfaces = [
    { bg: T.bg, label: "bg", desc: "Background" },
    { bg: T.s, label: "s", desc: "Surface" },
    { bg: T.s2, label: "s2", desc: "Surface 2" },
    { bg: T.s3, label: "s3", desc: "Surface 3" },
  ];

  const typeStyles = [
    { label: "H1 / Display", style: { fontFamily: T.fD, fontSize: 26, fontWeight: 800, color: T.t1, letterSpacing: "-0.02em", lineHeight: 1.1 } },
    { label: "H2 / Title", style: { fontFamily: T.fD, fontSize: 20, fontWeight: 700, color: T.t1, letterSpacing: "-0.01em" } },
    { label: "H3 / Section", style: { fontFamily: T.fD, fontSize: 15, fontWeight: 600, color: T.t1 } },
    { label: "Subtitle", style: { fontFamily: T.fB, fontSize: 16, fontWeight: 500, color: T.t1 } },
    { label: "Body", style: { fontFamily: T.fB, fontSize: 15, color: T.t1 } },
    { label: "Body Small", style: { fontFamily: T.fB, fontSize: 13, color: T.t2 } },
    { label: "Caption", style: { fontFamily: T.fB, fontSize: 11, color: T.t3 } },
    { label: "Field Label", style: { fontFamily: T.fB, fontSize: 11, fontWeight: 600, color: T.t2, letterSpacing: "0.08em", textTransform: "uppercase" } },
    { label: "Button Label", style: { fontFamily: T.fB, fontSize: 14, fontWeight: 600, color: T.t1 } },
    { label: "Status Label", style: { fontFamily: T.fB, fontSize: 11, fontWeight: 600, color: T.H, letterSpacing: "0.04em", textTransform: "uppercase" } },
    { label: "Numeric Metric", style: { fontFamily: T.fM, fontSize: 28, fontWeight: 700, color: T.t1, letterSpacing: "-0.02em", lineHeight: 1 } },
    { label: "Overline", style: { fontFamily: T.fB, fontSize: 10, fontWeight: 700, color: T.t3, letterSpacing: "0.12em", textTransform: "uppercase" } },
    { label: "Mono / Time", style: { fontFamily: T.fM, fontSize: 16, fontWeight: 500, color: T.t1 } },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>

      <div style={{
        display: "flex", alignItems: "center", height: 52, padding: "0 6px",
        borderBottom: `1px solid ${T.div}`, background: T.bg, flexShrink: 0
      }}>
        <button onClick={onBack} style={{
          width: 40, height: 40, borderRadius: 999,
          background: T.s2, border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center"
        }}>
          <Ic n="arrowLeft" size={16} color={T.t2} />
        </button>
        <div style={{ flex: 1, textAlign: "center" }}>
          <p style={{ fontFamily: T.fD, fontSize: 14, fontWeight: 700, color: T.t1 }}>UI Kit</p>
        </div>
        <div style={{ width: 40 }} />
      </div>

      <div className="ds-screen-content" style={{ flex: 1, overflowY: "auto", paddingBottom: 24 }}>

        <KitSection title="01 · Foundations · Color Tokens" />
        <div>
          <p style={{
            fontFamily: T.fB, fontSize: 10, color: T.t3, letterSpacing: "0.08em",
            textTransform: "uppercase", marginBottom: 8
          }}>Base Palette</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
            {baseColors.map(p => (
              <div key={p.l} style={{ width: 52, display: "flex", flexDirection: "column", gap: 4 }}>
                <div style={{
                  height: 36, borderRadius: 8, background: p.c,
                  border: `1px solid rgba(255,255,255,0.07)`
                }} />
                <p style={{ fontFamily: T.fB, fontSize: 8, color: T.t3, lineHeight: 1.4, textAlign: "center" }}>{p.l}</p>
                <p style={{ fontFamily: T.fM, fontSize: 7, color: T.t3, textAlign: "center", opacity: 0.7 }}>{p.hex}</p>
              </div>
            ))}
          </div>

          <p style={{
            fontFamily: T.fB, fontSize: 10, color: T.t3, letterSpacing: "0.08em",
            textTransform: "uppercase", marginBottom: 8
          }}>Status / Semantic</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 4 }}>
            {statusColors.map(p => (
              <div key={p.l} style={{ width: 52, display: "flex", flexDirection: "column", gap: 4 }}>
                <div style={{
                  height: 36, borderRadius: 8, background: p.c,
                  border: `1px solid rgba(255,255,255,0.07)`
                }} />
                <p style={{ fontFamily: T.fB, fontSize: 8, color: T.t3, lineHeight: 1.4, textAlign: "center" }}>{p.l}</p>
                <p style={{ fontFamily: T.fM, fontSize: 7, color: T.t3, textAlign: "center", opacity: 0.7 }}>{p.hex}</p>
              </div>
            ))}
          </div>
        </div>

        <KitDivider />
        <KitSection title="01 · Foundations · Surfaces & Elevation" />
        <div style={{ display: "flex", gap: 8 }}>
          {surfaces.map((s, i) => (
            <div key={s.label} style={{
              flex: 1, borderRadius: 10,
              background: s.bg, border: `1px solid ${T.bd}`,
              padding: "12px 8px", textAlign: "center",
              boxShadow: i === 0 ? "none" : i === 1 ? T.shadow : i === 2 ? T.shadowMd : T.shadowLg
            }}>
              <p style={{ fontFamily: T.fM, fontSize: 10, fontWeight: 700, color: T.priT, marginBottom: 3 }}>{s.label}</p>
              <p style={{ fontFamily: T.fB, fontSize: 8, color: T.t3 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <KitDivider />
        <KitSection title="01 · Foundations · Spacing Scale" />
        <div style={{ display: "flex", alignItems: "flex-end", gap: 8 }}>
          {spacing.map(v => (
            <div key={v} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
              <div style={{
                width: v * 0.7 + 8, height: v * 0.7 + 8, borderRadius: 4,
                background: T.priD, border: `1px solid ${T.priG}`
              }} />
              <p style={{ fontFamily: T.fM, fontSize: 8, color: T.t3 }}>{v}</p>
            </div>
          ))}
        </div>

        <KitDivider />
        <KitSection title="01 · Foundations · Radius Scale" />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {radii.map(r => (
            <div key={r.l} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
              <div style={{
                width: 38, height: 38, borderRadius: Math.min(r.v, 19),
                background: T.s2, border: `1px solid ${T.bd}`
              }} />
              <p style={{ fontFamily: T.fB, fontSize: 8, color: T.t3, textAlign: "center" }}>{r.l}</p>
              <p style={{ fontFamily: T.fM, fontSize: 7, color: T.priT, opacity: 0.85 }}>T.{r.tok}</p>
              <p style={{ fontFamily: T.fM, fontSize: 7, color: T.t3, opacity: 0.7 }}>{r.v === 999 ? "∞" : r.v}</p>
            </div>
          ))}
        </div>

        <KitDivider />
        <KitSection title="02 · Typography System" />
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {typeStyles.map(ts => (
            <div key={ts.label} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <p style={{
                fontFamily: T.fB, fontSize: 8, color: T.t3,
                letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2
              }}>{ts.label}</p>
              <p style={ts.style}>{ts.label.split("/")[0].trim()}</p>
            </div>
          ))}
        </div>

        <KitDivider />
        <KitSection title="03 · Icon Library" />
        <div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {icons.map(ic => (
              <div key={ic} style={{
                width: 44, height: 52, borderRadius: 10,
                background: T.s2, border: `1px solid ${T.bd}`,
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", gap: 3
              }}>
                <Ic n={ic} size={18} color={T.t2} sw={1.6} />
                <p style={{
                  fontFamily: T.fB, fontSize: 6.5, color: T.t3,
                  textAlign: "center", lineHeight: 1.4
                }}>{ic}</p>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: T.fB, fontSize: 10, color: T.t3, marginTop: 10 }}>
            Sizes: 16 · 24 · 32 — Heroicons outline family
          </p>
        </div>

        <KitDivider />
        <KitSection title="04 · Components · Buttons" />
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Btn variant="primary" label="Primary Button" iconLeft="shield" onClick={() => { }} full />
          <Btn variant="secondary" label="Secondary Button" iconLeft="check" onClick={() => { }} full />
          <Btn variant="ghost" label="Ghost Button" iconLeft="info" onClick={() => { }} full />
          <Btn variant="danger" label="Danger Button" iconLeft="trash" onClick={() => { }} full />
          <Btn variant="link" label="Link / Text" onClick={() => { }} />
          <Btn variant="primary" label="Disabled" disabled onClick={() => { }} full />
          <div style={{ display: "flex", gap: 8 }}>
            <Btn variant="primary" label="Sm Primary" size="sm" onClick={() => { }} />
            <Btn variant="secondary" label="Sm Secondary" size="sm" onClick={() => { }} />
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <IconBtn icon="arrowLeft" onClick={() => { }} />
            <IconBtn icon="edit" onClick={() => { }} color={T.pri} bgVariant="pri" />
            <IconBtn icon="trash" onClick={() => { }} color={T.er} bgVariant="er" />
            <IconBtn icon="bell" onClick={() => { }} />
            <p style={{ fontFamily: T.fB, fontSize: 10, color: T.t3 }}>Icon Buttons</p>
          </div>
        </div>

        <KitDivider />
        <KitSection title="04 · Components · Badges" />
        <div>
          <p style={{
            fontFamily: T.fB, fontSize: 10, color: T.t3, letterSpacing: "0.08em",
            textTransform: "uppercase", marginBottom: 8
          }}>Coverage</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
            <CovBadge level="high" />
            <CovBadge level="medium" />
            <CovBadge level="low" />
            <CovBadge level="none" />
          </div>
          <p style={{
            fontFamily: T.fB, fontSize: 10, color: T.t3, letterSpacing: "0.08em",
            textTransform: "uppercase", marginBottom: 8
          }}>Status</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            <StatusBadge label="Success" color={T.su_} bg={T.suD} />
            <StatusBadge label="Warning" color={T.wa} bg={T.waD} />
            <StatusBadge label="Error" color={T.er} bg={T.erD} />
            <StatusBadge label="Info" color={T.inf} bg={T.infD} />
            <StatusBadge label="Offline" color={T.of_} bg={T.ofD} />
            <StatusBadge label="Permission" color={T.per} bg={T.perD} />
          </div>
        </div>

        <KitDivider />
        <KitSection title="04 · Components · Banners" />
        <div>
          <p style={{
            fontFamily: T.fB, fontSize: 11, color: T.t3, marginBottom: 10,
            letterSpacing: "0.06em", textTransform: "uppercase"
          }}>Static variants</p>
          <Banner type="success" text="Trip session saved successfully" />
          <Banner type="warning" text="GPS signal weak — gap detected" />
          <Banner type="error" text="Location permission required" />
          <Banner type="info" text="Protection is currently off" />
          <Banner type="offline" text="No internet connection" />
          <Banner type="permission" text="Enable Always On location" />
          <Banner type="warning" title="Coverage gap" text="Recording paused for 4 min" />

          <p style={{
            fontFamily: T.fB, fontSize: 11, color: T.t3, marginTop: 20, marginBottom: 4,
            letterSpacing: "0.06em", textTransform: "uppercase"
          }}>
            Dismissable + auto-close
          </p>
          <p style={{ fontFamily: T.fB, fontSize: 12, color: T.t2, marginBottom: 12, lineHeight: 1.5 }}>
            SmartBanner — close button always shown; <code style={{ color: T.pri }}>autoCloseMs</code> adds a timed progress strip.
          </p>
          <div key={bannerKey}>
            <SmartBanner type="warning"
              title="Location permission required"
              text="Enable location access to allow background GPS recording." />
            <SmartBanner type="error"
              title="Recording interrupted"
              text="Protection paused due to a system error. Restart to continue."
              autoCloseMs={6000} />
            <SmartBanner type="success"
              title="Trip saved"
              text="Your session has been recorded and is ready for review."
              autoCloseMs={4000} />
            <SmartBanner type="info"
              title="Legal note"
              text="Recordings are encrypted and only shared when you consent."
              autoCloseMs={8000} />
            <SmartBanner type="offline"
              title="You're offline"
              text="Evidence checks require a connection. Results will sync when back online." />
            <SmartBanner type="permission"
              title="Always On location"
              text="Set location access to Always to enable continuous trip logging." />
          </div>
          <Btn variant="ghost" size="sm" iconLeft="refresh" label="Reset dismissable demos"
            onClick={() => setBannerKey(k => k + 1)} />
        </div>

        <KitDivider />
        <KitSection title="04 · Components · Cards" />
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Card>
            <div style={{ padding: "14px 16px" }}>
              <p style={{
                fontFamily: T.fB, fontSize: 10, color: T.t3, letterSpacing: "0.08em",
                textTransform: "uppercase", marginBottom: 6
              }}>Base Card</p>
              <p style={{ fontFamily: T.fB, fontSize: 14, color: T.t1, marginBottom: 4 }}>
                Card content goes here.
              </p>
              <p style={{ fontFamily: T.fB, fontSize: 12, color: T.t2, lineHeight: 1.5 }}>
                Token-driven, border-radius 16, surface background.
              </p>
            </div>
          </Card>

          <div style={{ display: "flex", gap: 8 }}>
            {[
              { label: "Distance", val: "12.4 mi", icon: "trips", color: T.pri },
              { label: "Duration", val: "38 min", icon: "clock", color: T.H },
              { label: "Events", val: "2", icon: "alertTri", color: T.M },
            ].map(m => (
              <div key={m.label} style={{
                flex: 1, background: T.s, border: `1px solid ${T.bd}`,
                borderRadius: 14, padding: "12px 12px 10px", display: "flex",
                flexDirection: "column", gap: 6
              }}>
                <Ic n={m.icon} size={16} color={m.color} />
                <p style={{
                  fontFamily: T.fM, fontSize: 18, fontWeight: 700, color: T.t1,
                  letterSpacing: "-0.02em"
                }}>{m.val}</p>
                <p style={{
                  fontFamily: T.fB, fontSize: 10, color: T.t2,
                  textTransform: "uppercase", letterSpacing: "0.06em"
                }}>{m.label}</p>
              </div>
            ))}
          </div>

          <SessionCard
            dateLabel="MONDAY, MAR 9"
            timeStart="08:14" timeEnd="08:52"
            duration="38 min" distance="12.4 mi"
            events={1} coverage="high"
            onClick={() => { }}
          />
          <SessionCard
            dateLabel="FRIDAY, MAR 7"
            timeStart="09:00" timeEnd="09:42"
            duration="42 min" distance="15.1 mi"
            events={0} coverage="medium"
            gapDetected={true}
            onClick={() => { }}
          />
          <SessionCard
            dateLabel="WEDNESDAY, FEB 5"
            timeStart="07:50" timeEnd="08:40"
            duration="50 min" distance="18.3 mi"
            events={0} coverage="low"
            onClick={() => { }}
          />
        </div>

        <KitDivider />
        <KitSection title="04 · Components · Inputs" />
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <FInput label="Default" value={inputVal}
            onChange={setInputVal} placeholder="Enter text…" />
          <FInput label="With icon" value="" onChange={() => { }}
            placeholder="Search…" iconLeft="evidence" />
          <FInput label="Date" value="2026-03-09" onChange={() => { }}
            iconLeft="calendar" type="date" />
          <FInput label="Time" value="08:14" onChange={() => { }}
            iconLeft="clock" type="time" />
          <FInput label="With hint" value="" onChange={() => { }}
            placeholder="e.g. ABC-1234"
            hint="Enter your license plate number as shown on the registration." />
          <FInput label="Error state" value="bad input" onChange={() => { }}
            error="This field is required" />
        </div>

        <KitDivider />
        <KitSection title="04 · Components · Select & Pickers" />
        <FSelectAndPickersDemo />

        <KitDivider />
        <KitSection title="04 · Components · Rows & Lists" />
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>

          <p style={{ fontFamily: T.fB, fontSize: 10, color: T.t3, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Status Rows
          </p>
          <p style={{
            fontFamily: T.fB, fontSize: 11, fontWeight: 600, color: T.t2, letterSpacing: "0.1em",
            textTransform: "uppercase", marginTop: 4, marginBottom: -4
          }}>Monitoring Health</p>
          <Card>
            <StatRow icon="location" label="GPS Status" detail="±6 m accuracy" right={<StatusBadge label="Active" color={T.H} bg={T.HD} />} />
            <StatRow icon="eye" label="Coverage" detail="Strong signal" right={<StatusBadge label="High" color={T.H} bg={T.HD} />} />
            <StatRow icon="upload" label="Heartbeat" detail="Last: 2 min ago" right={<StatusBadge label="Sync" color={T.pri} bg={T.priD} />} last />
          </Card>
          <Card>
            <StatRow icon="location" label="GPS Status" right={<StatusBadge label="OFF" color={T.er} bg={T.erD} />} />
            <StatRow icon="eye" label="Coverage" right={<StatusBadge label="Not Monitored" color={T.t2} bg={T.nmD} />} />
            <StatRow icon="upload" label="Heartbeat" right={<StatusBadge label="Inactive" color={T.t2} bg={T.nmD} />} last />
          </Card>

          <p style={{ fontFamily: T.fB, fontSize: 10, color: T.t3, letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 4 }}>
            Settings Rows
          </p>
          <Card>
            <SetRow icon="globe" label="Language" value="English" onPress={() => { }} />
            <SetRow icon="eye" label="Theme" value="Dark" onPress={() => { }} />
            <SetRow icon="bell" label="Reminders" toggle toggleOn={toggleA} onPress={() => setToggleA(v => !v)} />
            <SetRow icon="database" label="Clear data" onPress={() => { }} danger last />
          </Card>

          <p style={{ fontFamily: T.fB, fontSize: 10, color: T.t3, letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 4 }}>
            Toggle Rows
          </p>
          <Card>
            <TogRow icon="location" label="Background GPS" detail="Required for continuous trip logging" on={true} onToggle={() => { }} />
            <TogRow icon="bell" label="Push notifications" detail="Alerts for coverage gaps and events" on={toggleB} onToggle={() => setToggleB(v => !v)} />
            <TogRow icon="shield" label="Auto-protection" detail="Start recording when driving is detected" on={false} onToggle={() => { }} last />
          </Card>

          <p style={{ fontFamily: T.fB, fontSize: 10, color: T.t3, letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 4 }}>
            Permission Rows
          </p>
          <Card>
            <PermRow icon="location" label="Location (Always)" detail="Required to log GPS while the app is in the background" status="granted" />
            <PermRow icon="bell" label="Notifications" detail="Used to alert you to coverage gaps and session events" status="granted" />
            <PermRow icon="camera" label="Camera" detail="Optional — used to capture vehicle documents" status="denied" last />
          </Card>

          <p style={{ fontFamily: T.fB, fontSize: 10, color: T.t3, letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 4 }}>
            Retention Rows
          </p>
          <Card>
            <RetRow icon="database" label="Trip recordings" period="90 days" detail="Raw GPS and telemetry for all sessions" />
            <RetRow icon="shield" label="Evidence packages" period="2 years" detail="Exported evidence stored until manually deleted" />
            <RetRow icon="clock" label="Session history" period="1 year" detail="Trip metadata and event summaries" last />
          </Card>

          <p style={{ fontFamily: T.fB, fontSize: 10, color: T.t3, letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 4 }}>
            Selectable Rows
          </p>
          <Card style={{ paddingLeft: T.cardPad, paddingRight: T.cardPad }}>
            <SelectRow label="2023 Tesla Model 3" sublabel="ABC-1234" selected={true} onSelect={() => { }} />
            <SelectRow label="2021 Toyota Camry" sublabel="XYZ-5678" selected={false} onSelect={() => { }} last />
          </Card>
        </div>

        <KitDivider />
        <KitSection title="04 · Components · Progress Bars" />
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { pct: 85, color: T.H, label: "High — 85%" },
            { pct: 55, color: T.M, label: "Medium — 55%" },
            { pct: 20, color: T.L, label: "Low — 20%" },
            { pct: 60, color: T.pri, label: "Primary — 60%" },
          ].map(pb => (
            <div key={pb.label} style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ fontFamily: T.fB, fontSize: 11, color: T.t2 }}>{pb.label}</p>
              </div>
              <ProgressBar pct={pb.pct} color={pb.color} />
            </div>
          ))}
        </div>

        <KitDivider />
        <KitSection title="05 · States" />

        <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
          <div style={{
            flex: 1, background: T.priD, border: `1px solid ${T.priG}`,
            borderRadius: 14, padding: "14px 12px", display: "flex", flexDirection: "column",
            alignItems: "center", gap: 6
          }}>
            <div style={{
              width: 40, height: 40, borderRadius: 999, background: T.pri,
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <Ic n="shield" size={20} color={T.white} />
            </div>
            <p style={{ fontFamily: T.fD, fontSize: 12, fontWeight: 700, color: T.priT, textTransform: "uppercase", letterSpacing: "0.06em" }}>Protection ON</p>
          </div>
          <div style={{
            flex: 1, background: T.s2, border: `1px solid ${T.bd}`,
            borderRadius: 14, padding: "14px 12px", display: "flex", flexDirection: "column",
            alignItems: "center", gap: 6
          }}>
            <div style={{
              width: 40, height: 40, borderRadius: 999, background: T.s3,
              border: `1px solid ${T.bd}`, display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <Ic n="shieldOff" size={20} color={T.t3} />
            </div>
            <p style={{ fontFamily: T.fD, fontSize: 12, fontWeight: 700, color: T.t3, textTransform: "uppercase", letterSpacing: "0.06em" }}>Protection OFF</p>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <p style={{ fontFamily: T.fB, fontSize: 10, color: T.t3, letterSpacing: "0.08em", textTransform: "uppercase" }}>App States</p>
          <EmptyState icon="trips" title="No trips yet" text="Start Protection to begin logging your driving sessions." />
          <div style={{ height: 1, background: T.div }} />
          <EmptyState icon="evidence" title="No results found" text="No matching events were found for the selected date range." />
          <div style={{ height: 1, background: T.div }} />
          <LoadingRow />
          <div style={{ height: 1, background: T.div }} />

          <div style={{ background: T.s, border: `1px solid ${T.bd}`, borderRadius: 14, padding: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <div style={{
                width: 32, height: 32, borderRadius: 8, background: T.waD,
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <Ic n="location" size={16} color={T.wa} />
              </div>
              <div>
                <p style={{ fontFamily: T.fB, fontSize: 14, fontWeight: 600, color: T.t1 }}>GPS Unavailable</p>
                <p style={{ fontFamily: T.fB, fontSize: 11, color: T.t2 }}>Waiting for signal…</p>
              </div>
            </div>
            <ProgressBar pct={30} color={T.wa} />
          </div>

          <Banner type="offline" title="You're offline" text="Evidence check requires a connection. Check your network and try again." />

          <Banner type="permission" title="Location required" text="Enable Always On location to log trips while driving." />

          <p style={{ fontFamily: T.fB, fontSize: 10, color: T.t3, letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 4 }}>Evidence Verdicts</p>
          {[
            { icon: "checkCircle", color: T.H, text: "No speeding events found (High coverage)" },
            { icon: "alertTri", color: T.M, text: "Speeding event recorded (High coverage)" },
            { icon: "info", color: T.wa, text: "Insufficient coverage to verify" },
            { icon: "xCircle", color: T.nm, text: "Not monitored (Protection was OFF)" },
          ].map(ev => (
            <div key={ev.text} style={{
              display: "flex", alignItems: "center", gap: 10,
              padding: "12px 14px", borderRadius: 12,
              background: ev.color === T.H ? T.HD : ev.color === T.M ? T.MD : ev.color === T.wa ? T.waD : T.nmD,
              border: `1px solid ${ev.color}22`
            }}>
              <Ic n={ev.icon} size={18} color={ev.color} />
              <p style={{ fontFamily: T.fB, fontSize: 13, color: T.t1, flex: 1, lineHeight: 1.4 }}>{ev.text}</p>
            </div>
          ))}
        </div>

        <KitDivider />
        <KitSection title="05b · Data Visualisation" />
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <p style={{ fontFamily: T.fB, fontSize: 10, color: T.t3, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            MapCard — route with no event
          </p>
          <MapCard height={160} label="08:14 – 08:52 · 12.4 mi" />

          <p style={{ fontFamily: T.fB, fontSize: 10, color: T.t3, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            MapCard — route with speeding event
          </p>
          <MapCard height={160} showEvent label="08:14 – 08:52 · 12.4 mi" />

          <p style={{ fontFamily: T.fB, fontSize: 10, color: T.t3, letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 4 }}>
            SpeedGraph
          </p>
          <Card style={{ padding: "12px 14px 8px" }}>
            <SpeedGraph
              points={[
                { t: "08:14", speed: 0 }, { t: "08:17", speed: 28 }, { t: "08:20", speed: 42 },
                { t: "08:24", speed: 58 }, { t: "08:29", speed: 87 }, { t: "08:33", speed: 71 },
                { t: "08:38", speed: 68 }, { t: "08:43", speed: 55 }, { t: "08:51", speed: 12 },
                { t: "08:52", speed: 0  },
              ]}
              limit={70}
              eventIndices={[4]}
            />
          </Card>
        </div>

        <KitDivider />
        <KitSection title="06 · Header Patterns" />
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <p style={{ fontFamily: T.fB, fontSize: 10, color: T.t3, letterSpacing: "0.08em", textTransform: "uppercase" }}>Push Header</p>
          <div style={{ border: `1px solid ${T.bd}`, borderRadius: 12, overflow: "hidden" }}>
            <Header variant="push" title="Screen Title" onBack={() => { }} />
          </div>
          <p style={{ fontFamily: T.fB, fontSize: 10, color: T.t3, letterSpacing: "0.08em", textTransform: "uppercase" }}>Push + Action</p>
          <div style={{ border: `1px solid ${T.bd}`, borderRadius: 12, overflow: "hidden" }}>
            <Header variant="push" title="Edit Vehicle" onBack={() => { }} actionIcon="trash" onAction={() => { }} />
          </div>
          <p style={{ fontFamily: T.fB, fontSize: 10, color: T.t3, letterSpacing: "0.08em", textTransform: "uppercase" }}>Modal Header</p>
          <div style={{ border: `1px solid ${T.bd}`, borderRadius: 12, overflow: "hidden" }}>
            <Header variant="modal" title="Select Theme" onClose={() => { }} />
          </div>
        </div>

        <KitDivider />
        <KitSection title="07 · Token Reference" />
        <div>
          <div style={{ background: T.bg, border: `1px solid ${T.bd}`, borderRadius: 12, padding: "12px 14px" }}>
            {[
              ["bg", T.bg, "Background"],
              ["s", T.s, "Surface"],
              ["s2", T.s2, "Surface 2"],
              ["pri", T.pri, "Primary"],
              ["priT", T.priT, "Primary Tint"],
              ["t1", T.t1, "Text Primary"],
              ["t2", T.t2, "Text Secondary"],
              ["t3", T.t3, "Text Muted"],
              ["H", T.H, "Coverage High"],
              ["M", T.M, "Coverage Medium"],
              ["L", T.L, "Coverage Low"],
              ["wa", T.wa, "Warning"],
              ["er", T.er, "Error"],
              ["inf", T.inf, "Info"],
              ["per", T.per, "Permission"],
            ].map(([key, val, desc]) => (
              <div key={key} style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "5px 0", borderBottom: `1px solid ${T.div}`
              }}>
                <div style={{ width: 16, height: 16, borderRadius: 4, background: val, flexShrink: 0 }} />
                <span style={{ fontFamily: T.fM, fontSize: 10, color: T.priT, width: 36, flexShrink: 0 }}>{key}</span>
                <span style={{ fontFamily: T.fM, fontSize: 9, color: T.t3, flex: 1 }}>{val}</span>
                <span style={{ fontFamily: T.fB, fontSize: 9, color: T.t2 }}>{desc}</span>
              </div>
            ))}
          </div>
        </div>

        <KitDivider />
        <KitSection title="08 · Empty States" />
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { key: "trips", label: "Trips — No sessions yet", icon: "trips", title: "No trips yet", text: "Completed driving sessions will appear here. Start Protection before your next drive.", cta: { label: "Go to Home", icon: "home", onClick: () => { } } },
            { key: "evidence", label: "Evidence — No vehicle", icon: "car", title: "No vehicle available", text: "Add a vehicle first to run an evidence check for a specific date and time.", cta: { label: "Add Vehicle", icon: "plus", onClick: () => { } } },
            { key: "vehicleSelector", label: "Vehicle Selector — Empty", icon: "car", title: "No vehicles yet", text: "You have no saved vehicles. Add one to get started.", cta: { label: "Add Vehicle", icon: "plus", onClick: () => { } } },
            { key: "home", label: "Home — No active vehicle", icon: "car", title: "No active vehicle", text: "Add a vehicle or choose one before using Protection.", cta: { label: "Add Vehicle", icon: "plus", onClick: () => { } }, cta2: { label: "Choose Vehicle", icon: "car", variant: "secondary", onClick: () => { } } },
            { key: "history", label: "History — Nothing to review", icon: "evidence", title: "Nothing to review yet", text: "Evidence checks and results will appear here once you start using the app." },
            { key: "generic", label: "Generic — No results", icon: "evidence", title: "No results found", text: "Nothing matched your search. Try adjusting the date or vehicle selection." },
          ].map(es => (
            <div key={es.key} style={{
              border: `1px solid ${T.bd}`, borderRadius: 14,
              background: T.s, overflow: "hidden"
            }}>
              <div style={{
                padding: "8px 14px", borderBottom: `1px solid ${T.div}`,
                background: T.s2
              }}>
                <p style={{
                  fontFamily: T.fB, fontSize: 9, fontWeight: 700, color: T.t3,
                  letterSpacing: "0.1em", textTransform: "uppercase"
                }}>{es.label}</p>
              </div>
              <EmptyState
                icon={es.icon}
                title={es.title}
                text={es.text}
                cta={es.cta}
                cta2={es.cta2}
              />
            </div>
          ))}
        </div>

        <KitDivider />
        <KitSection title="09 · Loading States" />
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ border: `1px solid ${T.bd}`, borderRadius: 14, background: T.s, overflow: "hidden" }}>
            <div style={{ padding: "8px 14px", borderBottom: `1px solid ${T.div}`, background: T.s2 }}>
              <p style={{ fontFamily: T.fB, fontSize: 9, fontWeight: 700, color: T.t3, letterSpacing: "0.1em", textTransform: "uppercase" }}>Large — Launch / Full-screen</p>
            </div>
            <BrandLoader size="lg" label sublabel="Checking records…" />
          </div>
          <div style={{ border: `1px solid ${T.bd}`, borderRadius: 14, background: T.s, overflow: "hidden" }}>
            <div style={{ padding: "8px 14px", borderBottom: `1px solid ${T.div}`, background: T.s2 }}>
              <p style={{ fontFamily: T.fB, fontSize: 9, fontWeight: 700, color: T.t3, letterSpacing: "0.1em", textTransform: "uppercase" }}>Medium — Modal / Section loader</p>
            </div>
            <BrandLoader size="md" label sublabel="Verifying evidence…" />
          </div>
          <div style={{ border: `1px solid ${T.bd}`, borderRadius: 14, background: T.s, overflow: "hidden" }}>
            <div style={{ padding: "8px 14px", borderBottom: `1px solid ${T.div}`, background: T.s2 }}>
              <p style={{ fontFamily: T.fB, fontSize: 9, fontWeight: 700, color: T.t3, letterSpacing: "0.1em", textTransform: "uppercase" }}>Small — Inline / compact</p>
            </div>
            <BrandLoader size="sm" label sublabel="Connecting…" />
          </div>
          <div style={{ border: `1px solid ${T.bd}`, borderRadius: 14, background: T.s, overflow: "hidden" }}>
            <div style={{ padding: "8px 14px", borderBottom: `1px solid ${T.div}`, background: T.s2 }}>
              <p style={{ fontFamily: T.fB, fontSize: 9, fontWeight: 700, color: T.t3, letterSpacing: "0.1em", textTransform: "uppercase" }}>Inline Row Spinner</p>
            </div>
            <LoadingRow />
          </div>
        </div>

      </div>
    </div>
  );
}
