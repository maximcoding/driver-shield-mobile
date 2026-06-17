import { T } from "../../theme";
import { Ic, Btn } from "../../ui";
import { ONBOARD_FEATURES } from "../../data";

export function ScreenOnboardIntro({ navigate }) {
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
          justifyContent: "center",
          gap: 28,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              fontFamily: T.fD,
              fontSize: 26,
              fontWeight: 800,
              color: T.t1,
              letterSpacing: "-0.02em",
              marginBottom: 10,
            }}
          >
            How it works
          </h1>
          <p
            style={{
              fontFamily: T.fB,
              fontSize: 14,
              color: T.t2,
              lineHeight: 1.6,
            }}
          >
            DriveShield runs silently in the background, capturing everything you need.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {ONBOARD_FEATURES.map((f, i) => (
            <div
              key={i}
              style={{
                background: T.s,
                border: `1px solid ${T.bd}`,
                borderRadius: 16,
                padding: "18px 16px",
                display: "flex",
                gap: 16,
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: T.priD,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Ic n={f.icon} size={20} color={T.priT} sw={1.6} />
              </div>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    fontFamily: T.fD,
                    fontSize: 15,
                    fontWeight: 700,
                    color: T.t1,
                    marginBottom: 5,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {f.title}
                </p>
                <p
                  style={{
                    fontFamily: T.fB,
                    fontSize: 13,
                    color: T.t2,
                    lineHeight: 1.55,
                  }}
                >
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ paddingBottom: 20 }}>
        <Btn
          variant="primary"
          label="Set Up Permissions"
          full
          onClick={() => navigate("launch")}
        />
        <div style={{ marginTop: 12, minHeight: 37 }} aria-hidden="true" />
      </div>
    </div>
  );
}
