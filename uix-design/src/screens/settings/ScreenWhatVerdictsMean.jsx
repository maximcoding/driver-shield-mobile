import { T } from "../../theme";
import { Ic, Header, Banner, Card } from "../../ui";

const verdicts = [
  { icon: "checkCircle", iconColor: T.H, iconBg: T.HD, title: "No events found", text: "The telemetry archive contains no speeding events for the specified vehicle, date, and time. This is a positive result and may support a defence." },
  { icon: "alertTri", iconColor: T.M, iconBg: T.MD, title: "Event recorded", text: "At least one speeding event was captured. Tap the event to see timestamp, speed, and location. Consider consulting a solicitor." },
  { icon: "question", iconColor: T.t2, iconBg: T.s2, title: "Insufficient coverage", text: "The archive data is too incomplete to produce a reliable result. The evidence check is inconclusive and cannot be used for or against a claim." },
  { icon: "minus", iconColor: T.t3, iconBg: T.nmD, title: "Not monitored", text: "Protection was not active during this window. No record exists. Ensure protection is enabled before every journey." },
];

export function ScreenWhatVerdictsMean({ onBack }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header variant="push" title="What Verdicts Mean" onBack={onBack} />
      <div className="ds-screen-content" style={{ flex: 1, overflowY: "auto" }}>
        <Banner type="info"
          text="An Evidence Check searches the telemetry archive for the vehicle and time window you specify. Here's what each outcome means." />

        <div style={{ height: 12 }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {verdicts.map(v => (
            <Card key={v.title} style={{ padding: `${T.secTop}px ${T.cardPad}px` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 12, background: v.iconBg, flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                  <Ic n={v.icon} size={20} color={v.iconColor} sw={1.5} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontFamily: T.fB, fontSize: T.fsMd, fontWeight: 600, color: T.t1, marginBottom: 6 }}>{v.title}</p>
                  <p style={{ fontFamily: T.fB, fontSize: 13, color: T.t2, lineHeight: 1.6 }}>{v.text}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div style={{ height: 20 }} />
        <Banner type="warning"
          title="Important"
          text="DriveShield provides recorded telemetry data only. It is not legal advice. Consult a solicitor for guidance on how to use this data in legal proceedings." />
      </div>
    </div>
  );
}
