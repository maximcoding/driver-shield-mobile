import { T } from "../../theme";
import { Header, Banner, SectionHeader, Card, CovBadge, CtrlRow } from "../../ui";

const levels = [
  { badge: "high", color: T.H, bg: T.HD, title: "High coverage", text: "GPS signal was strong and continuous throughout the session. The record is reliable and suitable for evidence purposes." },
  { badge: "medium", color: T.M, bg: T.MD, title: "Medium coverage", text: "Coverage was partial due to tunnels, urban canyons, or signal interference. The record has some gaps but may still support a defence." },
  { badge: "low", color: T.L, bg: T.LD, title: "Low coverage", text: "Significant gaps were detected. The record is incomplete. It should not be relied upon as standalone evidence." },
  { badge: "none", color: T.t3, bg: T.s2, title: "No coverage / not monitored", text: "Protection was off or the vehicle was not monitored during this period. No record exists." },
];

const factors = [
  { icon: "location", label: "GPS signal quality", detail: "Satellites in view and fix accuracy" },
  { icon: "eye", label: "Session continuity", detail: "Gaps in the recording stream" },
  { icon: "trips", label: "Drive duration", detail: "Minimum 90 seconds to produce a record" },
  { icon: "archive", label: "Upload completeness", detail: "All telemetry chunks confirmed uploaded" },
];

export function ScreenHowCoverageWorks({ onBack }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header variant="push" title="How Coverage Works" onBack={onBack} />
      <div className="ds-screen-content" style={{ flex: 1, overflowY: "auto" }}>
        <Banner type="info"
          text="Coverage represents how complete and reliable the recorded telemetry is for a given session." />

        <SectionHeader label="Coverage levels" />
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {levels.map(l => (
            <Card key={l.badge} style={{ padding: `${T.secTop}px ${T.cardPad}px` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <CovBadge level={l.badge} />
                <p style={{ fontFamily: T.fB, fontSize: T.fsMd, fontWeight: 600, color: T.t1 }}>{l.title}</p>
              </div>
              <p style={{ fontFamily: T.fB, fontSize: 13, color: T.t2, lineHeight: 1.6 }}>{l.text}</p>
            </Card>
          ))}
        </div>

        <SectionHeader label="What affects coverage" />
        <Card>
          {factors.map((f, i) => (
            <CtrlRow key={f.label} icon={f.icon} label={f.label} detail={f.detail} last={i === factors.length - 1} />
          ))}
        </Card>

        <div style={{ height: 20 }} />
        <Banner type="warning"
          title="Legal disclaimer"
          text="Coverage levels are indicators only. Always consult a qualified legal professional before relying on any DriveShield record in legal proceedings." />
      </div>
    </div>
  );
}
