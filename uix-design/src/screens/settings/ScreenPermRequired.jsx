import { T } from "../../theme";
import { Ic, Btn } from "../../ui";

export function ScreenPermRequired({ onBack, navigate }) {
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
          background: T.perD, border: `1.5px solid rgba(160,122,245,0.28)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: `0 0 0 1px rgba(160,122,245,0.08), 0 16px 48px rgba(160,122,245,0.2)`,
          marginBottom: 24,
        }}>
          <Ic n="lock" size={40} color={T.per} sw={1.5} />
        </div>
        <p style={{
          fontFamily: T.fB, fontSize: 12, fontWeight: 400, color: T.t2,
          letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6
        }}>
          Permission Required
        </p>
        <h1 style={{
          fontFamily: T.fD, fontSize: 26, fontWeight: 800, color: T.t1,
          letterSpacing: "-0.02em", marginBottom: 14
        }}>Access needed</h1>
        <p style={{ fontFamily: T.fB, fontSize: 14, color: T.t2, lineHeight: 1.65, maxWidth: 268 }}>
          DriveShield needs Location (Always) and Motion access to record drives. Without them, protection cannot run.
        </p>
        <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10, width: "100%", maxWidth: 280 }}>
          {[
            { icon: "location", label: "Location (Always)", detail: "GPS tracking for evidence" },
            { icon: "satellite", label: "Motion & Fitness", detail: "Detects driving sessions" },
            { icon: "bell", label: "Notifications", detail: "Status and drive alerts" },
          ].map((p, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 12,
              background: T.s, border: `1px solid ${T.bd}`, borderRadius: 12, padding: "12px 14px"
            }}>
              <Ic n={p.icon} size={16} color={T.per} />
              <div style={{ flex: 1, textAlign: "left" }}>
                <p style={{ fontFamily: T.fB, fontSize: 13, fontWeight: 500, color: T.t1 }}>{p.label}</p>
                <p style={{ fontFamily: T.fB, fontSize: 11, color: T.t2, marginTop: 1 }}>{p.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <Btn variant="primary" label="Open Settings" iconLeft="settings" full onClick={() => {}} />
        <Btn variant="ghost" label="Go Back" full onClick={onBack} />
      </div>
    </div>
  );
}
