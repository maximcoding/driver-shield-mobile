import { T } from "../../theme";
import { Ic, Btn } from "../../ui";

export function ScreenPurchaseFailed({ navigate, onBack }) {
  return (
    <div className="fu ds-screen-root" style={{
      display: "flex", flexDirection: "column",
      minHeight: "100%"
    }}>
      <div style={{
        flex: 1, display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", textAlign: "center"
      }}>
        <div style={{
          width: 88, height: 88, borderRadius: 22,
          background: T.erD, border: `1.5px solid rgba(239,91,91,0.28)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: `0 0 0 1px rgba(239,91,91,0.08), 0 16px 48px rgba(239,91,91,0.2)`,
          marginBottom: 24,
        }}>
          <Ic n="xCircle" size={40} color={T.er} sw={1.5} />
        </div>
        <p style={{
          fontFamily: T.fB, fontSize: 12, color: T.t2,
          letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6
        }}>
          Payment Failed
        </p>
        <h1 style={{
          fontFamily: T.fD, fontSize: 26, fontWeight: 800, color: T.t1,
          letterSpacing: "-0.02em", marginBottom: 14
        }}>Couldn't complete purchase</h1>
        <p style={{ fontFamily: T.fB, fontSize: 14, color: T.t2, lineHeight: 1.65, maxWidth: 268 }}>
          Your payment was not processed. Check your payment method in the App Store and try again.
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <Btn variant="primary" label="Try Again" full onClick={() => navigate("paywall")} />
        <Btn variant="ghost" label="Restore purchase" full onClick={() => {}} />
        <Btn variant="ghost" label="Contact Support" full onClick={() => navigate("contact")} />
      </div>
    </div>
  );
}
