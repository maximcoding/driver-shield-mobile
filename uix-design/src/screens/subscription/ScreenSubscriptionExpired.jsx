import { useState } from "react";
import { T } from "../../theme";
import { Ic, Btn, Banner } from "../../ui";
import { SUB_EXPIRED_STATES } from "../../data";

export function ScreenSubscriptionExpired({ navigate }) {
  const [demo, setDemo] = useState("expired");

  const configs = {
    "expired": {
      icon: "lock", iconColor: T.L, iconBg: T.LD,
      title: "Subscription expired",
      subtitle: "Your DriveShield subscription has ended. Renew now to restore protection.",
      bannerType: "error", bannerTitle: "Protection paused",
      bannerText: "Your vehicle is no longer being monitored. Trip data is not being recorded.",
    },
    "payment-failed": {
      icon: "alertTri", iconColor: T.M, iconBg: T.MD,
      title: "Payment failed",
      subtitle: "We couldn't process your last payment. Update your billing details to continue.",
      bannerType: "warning", bannerTitle: "Action required",
      bannerText: "Your subscription will be cancelled in 3 days unless payment is resolved.",
    },
    "trial-ended": {
      icon: "clock", iconColor: T.inf, iconBg: T.infD,
      title: "Free trial ended",
      subtitle: "Your 7-day free trial has ended. Subscribe to keep your coverage active.",
      bannerType: "info", bannerTitle: "Trial complete",
      bannerText: "You drove 6 sessions during your trial. Subscribe to protect future trips.",
    },
  };
  const c = configs[demo];

  return (
    <div className="fu ds-screen-root" style={{ display: "flex", flexDirection: "column", minHeight: "100%" }}>

      {/* Demo switcher */}
      <div style={{ paddingTop: 20, marginBottom: 4 }}>
        <p style={{ fontFamily: T.fB, fontSize: 11, color: T.t3, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>Demo state:</p>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {SUB_EXPIRED_STATES.map(s => (
            <button key={s} onClick={() => setDemo(s)} style={{
              padding: "4px 10px", borderRadius: 8,
              background: demo === s ? T.priD : "transparent",
              border: `1px solid ${demo === s ? T.pri : T.bd}`,
              fontFamily: T.fB, fontSize: 11, color: demo === s ? T.priT : T.t3
            }}>{s.replace(/-/g, " ")}</button>
          ))}
        </div>
      </div>

      <div style={{
        flex: 1, display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", textAlign: "center", gap: 0
      }}>
        <div style={{
          width: 88, height: 88, borderRadius: 999, background: c.iconBg,
          display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24
        }}>
          <Ic n={c.icon} size={44} color={c.iconColor} sw={1.5} />
        </div>
        <h1 style={{
          fontFamily: T.fD, fontSize: 24, fontWeight: 800, color: T.t1,
          letterSpacing: "-0.02em", marginBottom: 10
        }}>{c.title}</h1>
        <p style={{ fontFamily: T.fB, fontSize: 14, color: T.t2, lineHeight: 1.65, maxWidth: 280, marginBottom: 24 }}>
          {c.subtitle}
        </p>
        <Banner type={c.bannerType} title={c.bannerTitle} text={c.bannerText} />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: T.rowGap }}>
        <Btn variant="primary" label="Renew Subscription" full onClick={() => navigate("paywall")} />
        <Btn variant="secondary" label="Restore Purchase" full onClick={() => {}} />
        <Btn variant="ghost" label="Contact Support" full onClick={() => navigate("contact")} />
      </div>
    </div>
  );
}
