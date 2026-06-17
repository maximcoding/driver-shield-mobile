import { T } from "../../theme";
import { Ic, ShieldLogo, Btn } from "../../ui";

export function ScreenFreeTrial({ navigate, onBack }) {
  return (
    <div className="fu ds-screen-root" style={{ display: "flex", flexDirection: "column", minHeight: "100%" }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 0 }}>

        {/* Hero badge */}
        <div style={{
          padding: "5px 16px", borderRadius: T.rPill,
          background: T.MD, border: `1px solid ${T.waB}`,
          marginBottom: 20
        }}>
          <span style={{ fontFamily: T.fB, fontSize: 12, fontWeight: 700, color: T.M, letterSpacing: "0.06em" }}>
            LIMITED OFFER
          </span>
        </div>

        <div style={{
          width: 96, height: 96, borderRadius: 24, background: T.priD,
          border: `1.5px solid rgba(61,127,255,0.25)`,
          display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24,
          boxShadow: `0 8px 36px rgba(61,127,255,0.2)`
        }}>
          <ShieldLogo size={68} />
        </div>

        <h1 style={{
          fontFamily: T.fD, fontSize: 28, fontWeight: 800, color: T.t1,
          letterSpacing: "-0.02em", marginBottom: 8, textAlign: "center"
        }}>7 days free</h1>

        <p style={{
          fontFamily: T.fB, fontSize: 14, color: T.t2, lineHeight: 1.65,
          textAlign: "center", maxWidth: 268, marginBottom: 28
        }}>
          Try DriveShield Pro free for 7 days. Cancel anytime before your trial ends — no charge.
        </p>

        {[
          "Unlimited evidence checks",
          "Full telemetry archive",
          "Legal-grade PDF export",
          "Priority support",
        ].map((f, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, width: "100%" }}>
            <Ic n="checkCircle" size={16} color={T.H} />
            <p style={{ fontFamily: T.fB, fontSize: 14, color: T.t1 }}>{f}</p>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <Btn variant="primary" label="Start Free Trial" full onClick={() => navigate("checkout", { plan: "trial" })} />
        <Btn variant="ghost" label="See all plans" full onClick={() => navigate("paywall")} />
        <p style={{ fontFamily: T.fB, fontSize: 11, color: T.t3, textAlign: "center", lineHeight: 1.55 }}>
          After 7 days, $39.99/yr unless cancelled. No charge during trial.
        </p>
      </div>
    </div>
  );
}
