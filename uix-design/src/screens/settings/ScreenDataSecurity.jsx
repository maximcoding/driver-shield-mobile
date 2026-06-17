import { T } from "../../theme";
import { Ic, Header, Banner, SectionHeader, Card } from "../../ui";

const sections = [
  { icon: "lock", iconColor: T.H, iconBg: T.HD, title: "End-to-end encryption", text: "All telemetry data is encrypted in transit using TLS 1.3 and at rest using AES-256. Your data cannot be read by anyone except you." },
  { icon: "database", iconColor: T.inf, iconBg: T.infD, title: "Local-first storage", text: "Trip data is stored on your device first. Cloud sync only happens over WiFi by default. You can export or delete your data at any time." },
  { icon: "eye", iconColor: T.M, iconBg: T.MD, title: "No data selling", text: "We do not sell, share, or license your personal data or telemetry to any third parties — including insurers, advertisers, or law enforcement." },
  { icon: "globe", iconColor: T.priT, iconBg: T.priD, title: "Your data, your control", text: "You can export all your data in machine-readable format, or permanently delete your account and all associated records from our servers." },
  { icon: "check", iconColor: T.H, iconBg: T.HD, title: "GDPR & CCPA compliant", text: "DriveShield is designed to comply with GDPR (EU), CCPA (California), and UK data protection law. Data requests handled within 30 days." },
];

export function ScreenDataSecurity({ onBack }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header variant="push" title="Security & Privacy" onBack={onBack} />
      <div className="ds-screen-content" style={{ flex: 1, overflowY: "auto" }}>
        <Banner type="info"
          text="DriveShield is built on a privacy-first architecture. Your evidence records are yours and yours alone." />

        <div style={{ height: 16 }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {sections.map(s => (
            <Card key={s.title} style={{ padding: `${T.secTop}px ${T.cardPad}px` }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 12, background: s.iconBg, flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                  <Ic n={s.icon} size={18} color={s.iconColor} sw={1.5} />
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: T.fB, fontSize: T.fsMd, fontWeight: 600, color: T.t1, marginBottom: 6 }}>
                    {s.title}
                  </p>
                  <p style={{ fontFamily: T.fB, fontSize: 13, color: T.t2, lineHeight: 1.6 }}>{s.text}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div style={{ height: 20 }} />
        <Banner type="warning"
          title="Legal disclaimer"
          text="DriveShield is not a legal service. Evidence records are provided as-is. Consult a solicitor before relying on any record in legal proceedings." />
      </div>
    </div>
  );
}
