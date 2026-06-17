import { useState } from "react";
import { T } from "../../theme";
import { Ic, Card, Btn } from "../../ui";
import { DEMO_VEHICLES_ONBOARD } from "../../data";

export function ScreenOnboardDefaultVehicle({ navigate }) {
  const [selected, setSelected] = useState("v1");
  const step = "Step 3.5 of 5";

  return (
    <div
      className="fu ds-screen-root"
      style={{ display: "flex", flexDirection: "column", minHeight: "100%" }}
    >
      <div style={{ paddingTop: 48, paddingBottom: 28 }}>
        <p
          style={{
            fontFamily: T.fB,
            fontSize: 11,
            fontWeight: 700,
            color: T.priT,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          {step}
        </p>
        <h1
          style={{
            fontFamily: T.fD,
            fontSize: 24,
            fontWeight: 800,
            color: T.t1,
            letterSpacing: "-0.02em",
            marginBottom: 8,
          }}
        >
          Set default vehicle
        </h1>
        <p
          style={{
            fontFamily: T.fB,
            fontSize: 14,
            color: T.t2,
            lineHeight: 1.65,
          }}
        >
          Your default vehicle is automatically selected when you start a session.
        </p>
      </div>

      <div style={{ flex: 1 }}>
        <Card>
          {DEMO_VEHICLES_ONBOARD.map((v, i) => (
            <button
              key={v.id}
              type="button"
              onClick={() => setSelected(v.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "14px 16px",
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                borderBottom:
                  i < DEMO_VEHICLES_ONBOARD.length - 1
                    ? `1px solid ${T.div}`
                    : "none",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: v.color,
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ic n="car" size={16} color="#fff" />
              </div>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    fontFamily: T.fB,
                    fontSize: 14,
                    fontWeight: 500,
                    color: T.t1,
                  }}
                >
                  {v.year} {v.make} {v.model}
                </p>
                <p
                  style={{
                    fontFamily: T.fB,
                    fontSize: 12,
                    color: T.t2,
                    marginTop: 2,
                  }}
                >
                  {v.plate}
                </p>
              </div>
              {selected === v.id ? (
                <Ic n="checkCircle" size={18} color={T.pri} />
              ) : (
                <div
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: 999,
                    border: `2px solid ${T.bd}`,
                  }}
                />
              )}
            </button>
          ))}
        </Card>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <Btn
          variant="primary"
          label="Set as Default & Continue"
          full
          onClick={() => navigate("onboardUnits")}
        />
        <Btn
          variant="ghost"
          label="Skip"
          full
          onClick={() => navigate("onboardUnits")}
        />
      </div>
    </div>
  );
}
