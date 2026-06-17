import { T } from "../../theme";
import { Ic } from "../../ui";

export function ScreenMaintenance() {
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
          background: T.waD, border: `1.5px solid rgba(240,160,32,0.28)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: `0 0 0 1px rgba(240,160,32,0.08), 0 16px 48px rgba(240,160,32,0.18)`,
          marginBottom: 24,
        }}>
          <Ic n="settings" size={40} color={T.wa} sw={1.5} />
        </div>
        <p style={{
          fontFamily: T.fB, fontSize: 12, fontWeight: 400, color: T.t2,
          letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6
        }}>
          Scheduled Maintenance
        </p>
        <h1 style={{
          fontFamily: T.fD, fontSize: 26, fontWeight: 800, color: T.t1,
          letterSpacing: "-0.02em", marginBottom: 14
        }}>Back soon</h1>
        <p style={{ fontFamily: T.fB, fontSize: 14, color: T.t2, lineHeight: 1.65, maxWidth: 268 }}>
          DriveShield is down for scheduled maintenance. We're making improvements and will be back shortly.
        </p>
        <p style={{
          fontFamily: T.fM, fontSize: 12, color: T.t3, marginTop: 20,
          letterSpacing: "0.04em"
        }}>
          status.driveshield.app
        </p>
      </div>
    </div>
  );
}
