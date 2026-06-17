import { T } from "../../theme";
import { Ic, Btn } from "../../ui";

export function ScreenPurchaseSuccess({ navigate }) {
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
          width: 88, height: 88, borderRadius: 999, background: T.HD,
          display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24,
          boxShadow: `0 8px 32px rgba(45,212,160,0.3)`
        }}>
          <Ic n="checkCircle" size={44} color={T.H} sw={1.5} />
        </div>
        <p style={{
          fontFamily: T.fB, fontSize: 12, color: T.H, letterSpacing: "0.1em",
          textTransform: "uppercase", marginBottom: 6, fontWeight: 600
        }}>
          Subscription Active
        </p>
        <h1 style={{
          fontFamily: T.fD, fontSize: 28, fontWeight: 800, color: T.t1,
          letterSpacing: "-0.02em", marginBottom: 12
        }}>You're protected</h1>
        <p style={{ fontFamily: T.fB, fontSize: 14, color: T.t2, lineHeight: 1.65, maxWidth: 268 }}>
          DriveShield is now active on your account. Start protection before your next drive to begin recording.
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <Btn variant="primary" label="Start Using DriveShield" iconLeft="shield" full onClick={() => navigate("home")} />
        <p style={{ fontFamily: T.fB, fontSize: 11, color: T.t3, textAlign: "center", lineHeight: 1.5 }}>
          Trial ends in 7 days. Manage subscription in App Store.
        </p>
      </div>
    </div>
  );
}
