import { T } from "../../theme";
import { Header, SectionHeader, Card, SetRow } from "../../ui";

export function ScreenContact({ onBack, navigate }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header variant="push" title="Contact Support" onBack={onBack} />
      <div className="ds-screen-content" style={{ flex: 1, overflowY: "auto" }}>
        <SectionHeader label="Get in Touch" />
        <Card>
          <SetRow icon="globe"    label="Email Support"    value="support@driveshield.app" onPress={() => {}} />
          <SetRow icon="info"     label="Report a Problem" onPress={() => navigate("reportProblem")} />
          <SetRow icon="edit"     label="Send Feedback"    onPress={() => navigate("feedbackSent")} last />
        </Card>

        <SectionHeader label="Response Times" />
        <Card style={{ marginBottom: 24 }}>
          <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { label: "General enquiries", time: "1–2 business days" },
              { label: "Legal / evidence requests", time: "Same business day" },
              { label: "Technical issues", time: "Within 24 hours" },
            ].map((row, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <p style={{ fontFamily: T.fB, fontSize: T.fsBody, color: T.t2 }}>{row.label}</p>
                <p style={{ fontFamily: T.fM, fontSize: T.fsDetail, color: T.t1 }}>{row.time}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
