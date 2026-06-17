import { useState } from "react";
import { T } from "../../theme";
import { Ic, Banner, Card, StatRow, Btn } from "../../ui";
import { SYSTEM_STATES } from "../../data";

const configs = {
  "bg-restricted": {
    icon: "lock", iconColor: T.M, iconBg: T.MD,
    title: "Background activity restricted",
    subtitle: "DriveShield can't run in the background. Your trips may not be recorded while the app is closed.",
    bannerType: "warning", bannerText: "Open Settings and allow DriveShield to run in the background.",
    cta: "Open Settings", cta2: "Learn More",
    statRows: [
      { icon: "location", label: "Location access", statusText: "Always", statusColor: T.H },
      { icon: "settings", label: "Background app refresh", statusText: "Off", statusColor: T.L },
      { icon: "trips", label: "Recording while minimised", statusText: "Interrupted", statusColor: T.M },
    ],
  },
  "buffer-full": {
    icon: "archive", iconColor: T.L, iconBg: T.LD,
    title: "Upload buffer full",
    subtitle: "Your local trip buffer is full. Older sessions may be overwritten until you connect to WiFi.",
    bannerType: "error", bannerText: "Connect to WiFi to upload and free up buffer space.",
    cta: "View Storage", cta2: "Upload Now",
    statRows: [
      { icon: "database", label: "Buffer used", statusText: "980 / 1000 MB", statusColor: T.L },
      { icon: "upload", label: "Upload status", statusText: "Pending WiFi", statusColor: T.M },
      { icon: "trips", label: "Sessions queued", statusText: "12", statusColor: T.t2 },
    ],
  },
  "sync-recovered": {
    icon: "checkCircle", iconColor: T.H, iconBg: T.HD,
    title: "Sync recovered",
    subtitle: "All buffered trips have been successfully uploaded after coming back online.",
    bannerType: "success", bannerText: "12 sessions uploaded. Evidence records are up to date.",
    cta: "View Trips", cta2: null,
    statRows: [
      { icon: "upload", label: "Upload status", statusText: "Complete", statusColor: T.H },
      { icon: "trips", label: "Sessions synced", statusText: "12", statusColor: T.H },
      { icon: "clock", label: "Last sync", statusText: "Just now", statusColor: T.t2 },
    ],
  },
  "offline-mode": {
    icon: "globe", iconColor: T.t2, iconBg: T.s2,
    title: "Offline mode",
    subtitle: "No internet connection. DriveShield is still recording locally. Data will sync when you reconnect.",
    bannerType: "offline", bannerText: "Offline — trips are being saved locally until you reconnect.",
    cta: "Try Again", cta2: null,
    statRows: [
      { icon: "globe", label: "Internet", statusText: "No connection", statusColor: T.L },
      { icon: "location", label: "GPS recording", statusText: "Active", statusColor: T.H },
      { icon: "upload", label: "Upload queue", statusText: "3 pending", statusColor: T.M },
    ],
  },
};

export function ScreenSystemStatus({ onBack, navigate }) {
  const [demo, setDemo] = useState("bg-restricted");
  const c = configs[demo];

  return (
    <div className="fu ds-screen-root" style={{ display: "flex", flexDirection: "column", minHeight: "100%" }}>
      <div style={{ paddingTop: 20, marginBottom: 4 }}>
        <p style={{ fontFamily: T.fB, fontSize: 11, color: T.t3, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>Demo state:</p>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {SYSTEM_STATES.map(s => (
            <button key={s} onClick={() => setDemo(s)} style={{
              padding: "4px 10px", borderRadius: 8,
              background: demo === s ? T.priD : "transparent",
              border: `1px solid ${demo === s ? T.pri : T.bd}`,
              fontFamily: T.fB, fontSize: 11, color: demo === s ? T.priT : T.t3
            }}>{s.replace(/-/g, " ")}</button>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
        <div style={{
          width: 88, height: 88, borderRadius: 999, background: c.iconBg,
          display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24
        }}>
          <Ic n={c.icon} size={44} color={c.iconColor} sw={1.5} />
        </div>
        <h1 style={{
          fontFamily: T.fD, fontSize: 22, fontWeight: 800, color: T.t1,
          letterSpacing: "-0.02em", marginBottom: 10
        }}>{c.title}</h1>
        <p style={{ fontFamily: T.fB, fontSize: 14, color: T.t2, lineHeight: 1.65, maxWidth: 280, marginBottom: 20 }}>
          {c.subtitle}
        </p>
        <Banner type={c.bannerType} text={c.bannerText} />
        <div style={{ height: 16 }} />
        <Card style={{ width: "100%", textAlign: "left" }}>
          {c.statRows.map((r, i) => (
            <StatRow key={r.label} icon={r.icon} label={r.label}
              statusText={r.statusText} statusColor={r.statusColor}
              last={i === c.statRows.length - 1} />
          ))}
        </Card>
      </div>

      <div style={{ marginTop: T.secTop, display: "flex", flexDirection: "column", gap: T.rowGap }}>
        <Btn variant="primary" label={c.cta} full onClick={() => {}} />
        {c.cta2 && <Btn variant="secondary" label={c.cta2} full onClick={() => {}} />}
        <Btn variant="ghost" label="Back" full onClick={onBack} />
      </div>
    </div>
  );
}
