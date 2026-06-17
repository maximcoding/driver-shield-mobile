import { T } from "../../theme";
import { Ic, Btn } from "../../ui";

export function ScreenOnboardComplete({ onComplete }) {
  return (
    <div
      className="fu ds-screen-root"
      style={{ display: "flex", flexDirection: "column", minHeight: "100%" }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: 88,
            height: 88,
            borderRadius: 999,
            background: T.HD,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 28,
            boxShadow: "0 8px 32px rgba(45,212,160,0.25)",
          }}
        >
          <Ic n="checkCircle" size={44} color={T.H} sw={1.5} />
        </div>
        <h1
          style={{
            fontFamily: T.fD,
            fontSize: 28,
            fontWeight: 800,
            color: T.t1,
            letterSpacing: "-0.02em",
            marginBottom: 12,
          }}
        >
          You&apos;re all set
        </h1>
        <p
          style={{
            fontFamily: T.fB,
            fontSize: 15,
            color: T.t2,
            lineHeight: 1.65,
            maxWidth: 280,
          }}
        >
          DriveShield is ready. Start protection before your next drive to begin recording.
        </p>
      </div>
      <div style={{ paddingBottom: 20 }}>
        <Btn variant="primary" label="Go to Home" full onClick={onComplete} />
        <div style={{ marginTop: 12, minHeight: 37 }} aria-hidden="true" />
      </div>
    </div>
  );
}
