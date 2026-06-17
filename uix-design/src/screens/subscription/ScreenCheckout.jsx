import { useState, useEffect } from "react";
import { T } from "../../theme";
import { BrandLoader } from "../../ui";

export function ScreenCheckout({ navigate, params = {} }) {
  const plan = params.plan || "annual";
  const [phase, setPhase] = useState("loading");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("processing"), 1200);
    const t2 = setTimeout(() => {
      const ok = params.forceFail ? false : true;
      navigate(ok ? "purchaseSuccess" : "purchaseFailed");
    }, 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const planLabel = plan === "trial" ? "7-Day Free Trial"
    : plan === "monthly" ? "Monthly Plan · $4.99/mo"
    : "Annual Plan · $39.99/yr";

  return (
    <div className="fu" style={{
      display: "flex", flexDirection: "column", minHeight: "100%",
      alignItems: "center", justifyContent: "center", padding: "0 28px"
    }}>
      <BrandLoader
        size="md"
        label={phase === "loading" ? "Connecting to App Store…" : "Processing payment…"}
        sublabel={planLabel}
      />
      <p style={{ fontFamily: T.fB, fontSize: 12, color: T.t3, marginTop: 24, textAlign: "center" }}>
        Please don't close the app
      </p>
    </div>
  );
}
