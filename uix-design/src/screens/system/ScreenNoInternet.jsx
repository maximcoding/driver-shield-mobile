import { T } from "../../theme";
import { Ic, Btn } from "../../ui";

export function ScreenNoInternet({ onRetry }) {
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
          background: T.ofD, border: `1.5px solid rgba(86,104,122,0.28)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: `0 0 0 1px rgba(86,104,122,0.08), 0 16px 48px rgba(86,104,122,0.18)`,
          marginBottom: 24,
        }}>
          <Ic n="wifi" size={40} color={T.of_} sw={1.5} />
        </div>
        <p style={{
          fontFamily: T.fB, fontSize: 12, fontWeight: 400, color: T.t2,
          letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6
        }}>
          No Connection
        </p>
        <h1 style={{
          fontFamily: T.fD, fontSize: 26, fontWeight: 800, color: T.t1,
          letterSpacing: "-0.02em", marginBottom: 14
        }}>No internet connection</h1>
        <p style={{ fontFamily: T.fB, fontSize: 14, color: T.t2, lineHeight: 1.65, maxWidth: 268 }}>
          Check your Wi-Fi or mobile data and try again. Your recorded sessions are safe and available offline.
        </p>
      </div>
      <Btn variant="primary" label="Try Again" iconLeft="check" full onClick={onRetry || (() => {})} />
    </div>
  );
}
