import { T } from "../../theme";
import { Ic, Btn } from "../../ui";

export function ScreenFeedbackSent({ navigate }) {
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
          boxShadow: `0 8px 32px rgba(45,212,160,0.25)`
        }}>
          <Ic n="checkCircle" size={44} color={T.H} sw={1.5} />
        </div>
        <h1 style={{
          fontFamily: T.fD, fontSize: 26, fontWeight: 800, color: T.t1,
          letterSpacing: "-0.02em", marginBottom: 12
        }}>Message sent</h1>
        <p style={{ fontFamily: T.fB, fontSize: 14, color: T.t2, lineHeight: 1.65, maxWidth: 268 }}>
          Thanks for reaching out. Our team will get back to you within 1–2 business days.
        </p>
      </div>
      <Btn variant="primary" label="Back to Settings" full onClick={() => navigate("settings")} />
    </div>
  );
}
