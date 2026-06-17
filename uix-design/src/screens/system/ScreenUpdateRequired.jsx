import { T } from "../../theme";
import { Ic, Btn } from "../../ui";

export function ScreenUpdateRequired() {
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
          background: T.infD, border: `1.5px solid rgba(91,164,245,0.28)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: `0 0 0 1px rgba(91,164,245,0.08), 0 16px 48px rgba(91,164,245,0.18)`,
          marginBottom: 24,
        }}>
          <Ic n="upload" size={40} color={T.inf} sw={1.5} />
        </div>
        <p style={{
          fontFamily: T.fB, fontSize: 12, fontWeight: 400, color: T.t2,
          letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6
        }}>
          Update Required
        </p>
        <h1 style={{
          fontFamily: T.fD, fontSize: 26, fontWeight: 800, color: T.t1,
          letterSpacing: "-0.02em", marginBottom: 14
        }}>New version available</h1>
        <p style={{ fontFamily: T.fB, fontSize: 14, color: T.t2, lineHeight: 1.65, maxWidth: 268 }}>
          This version of DriveShield is no longer supported. Update to the latest version to continue.
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <Btn variant="primary" label="Update DriveShield" iconLeft="upload" full onClick={() => {}} />
        <p style={{
          fontFamily: T.fB, fontSize: 11, color: T.t3, textAlign: "center", marginTop: 2
        }}>
          Version 2.1.0 installed · 3.0.0 available
        </p>
      </div>
    </div>
  );
}
