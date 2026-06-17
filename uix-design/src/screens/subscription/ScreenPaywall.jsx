import { useState } from "react";
import { T } from "../../theme";
import { Ic, ShieldLogo, Btn } from "../../ui";
import { PLANS } from "../../data";

export function ScreenPaywall({ navigate, onBack }) {
  const [plan, setPlan] = useState("annual");
  return (
    <div className="fu ds-screen-root" style={{ display: "flex", flexDirection: "column", minHeight: "100%" }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 24 }}>

        {/* Hero */}
        <div style={{ textAlign: "center" }}>
          <div style={{
            width: 72, height: 72, borderRadius: 20, background: T.priD,
            border: `1.5px solid rgba(61,127,255,0.25)`,
            display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px"
          }}>
            <ShieldLogo size={52} />
          </div>
          <h1 style={{
            fontFamily: T.fD, fontSize: 24, fontWeight: 800, color: T.t1,
            letterSpacing: "-0.02em", marginBottom: 8
          }}>Protect every drive</h1>
          <p style={{ fontFamily: T.fB, fontSize: 14, color: T.t2, lineHeight: 1.6 }}>
            Unlimited drive recording, evidence checks, and legal-grade telemetry storage.
          </p>
        </div>

        {/* Feature list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            "Unlimited trip recording",
            "Tamper-proof evidence archive",
            "Instant evidence checks",
            "2-year data retention",
            "Priority support",
          ].map((f, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                width: 20, height: 20, borderRadius: 999, background: T.HD, flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <Ic n="check" size={11} color={T.H} sw={2.5} />
              </div>
              <p style={{ fontFamily: T.fB, fontSize: 14, color: T.t1 }}>{f}</p>
            </div>
          ))}
        </div>

        {/* Plan selector */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {PLANS.map(p => (
            <button key={p.id} onClick={() => setPlan(p.id)} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "14px 16px", borderRadius: T.rLg,
              background: plan === p.id ? T.priD : T.s,
              border: `1.5px solid ${plan === p.id ? T.pri : T.bd}`,
              transition: "all 0.15s", textAlign: "left",
            }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
                  <p style={{ fontFamily: T.fB, fontSize: 15, fontWeight: 600, color: T.t1 }}>{p.label}</p>
                  {p.badge && (
                    <span style={{
                      fontFamily: T.fB, fontSize: 10, fontWeight: 700, color: T.H,
                      background: T.HD, borderRadius: 6, padding: "2px 7px",
                      letterSpacing: "0.04em", textTransform: "uppercase"
                    }}>{p.badge}</span>
                  )}
                </div>
                <p style={{ fontFamily: T.fB, fontSize: 12, color: T.t2 }}>{p.detail}</p>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0, marginLeft: 12 }}>
                <span style={{ fontFamily: T.fM, fontSize: 18, fontWeight: 700, color: T.t1 }}>{p.price}</span>
                <span style={{ fontFamily: T.fB, fontSize: 12, color: T.t2 }}>{p.period}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div style={{ paddingBottom: 20, display: "flex", flexDirection: "column", gap: 8 }}>
        <Btn variant="primary" label="Start Free Trial" full onClick={() => navigate("purchaseSuccess")} />
        <Btn variant="ghost" label="Restore purchase" full onClick={() => {}} />
        <p style={{
          fontFamily: T.fB, fontSize: 11, color: T.t3, textAlign: "center", lineHeight: 1.55
        }}>
          7-day free trial, then {PLANS.find(p => p.id === plan)?.price} per {plan === "annual" ? "year" : "month"}.
          Cancel anytime in the App Store. Subscription auto-renews.
        </p>
      </div>
    </div>
  );
}
