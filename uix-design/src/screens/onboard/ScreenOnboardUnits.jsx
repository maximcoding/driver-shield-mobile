import { useState } from "react";
import { T } from "../../theme";
import { Ic, Btn } from "../../ui";

export function ScreenOnboardUnits({ navigate }) {
  const [units, setUnits] = useState("imperial");

  const options = [
    { id: "imperial", label: "Miles & MPH", sublabel: "Used in the US" },
    { id: "metric", label: "Kilometres & KM/H", sublabel: "Used internationally" },
  ];

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
          gap: 32,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: T.priD,
              border: "1.5px solid rgba(61,127,255,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
            }}
          >
            <Ic n="trips" size={28} color={T.priT} sw={1.6} />
          </div>
          <p
            style={{
              fontFamily: T.fB,
              fontSize: 12,
              fontWeight: 400,
              color: T.t2,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 6,
            }}
          >
            Step 4 of 5
          </p>
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
            How do you measure distance?
          </h1>
          <p
            style={{
              fontFamily: T.fB,
              fontSize: 14,
              color: T.t2,
              lineHeight: 1.6,
            }}
          >
            Used for speed readings and trip distances throughout the app.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {options.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setUnits(opt.id)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 18px",
                borderRadius: T.rLg,
                background: units === opt.id ? T.priD : T.s,
                border: `1.5px solid ${units === opt.id ? T.pri : T.bd}`,
                transition: "all 0.15s",
                textAlign: "left",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: T.fB,
                    fontSize: 15,
                    fontWeight: 600,
                    color: T.t1,
                    marginBottom: 2,
                  }}
                >
                  {opt.label}
                </p>
                <p
                  style={{
                    fontFamily: T.fB,
                    fontSize: 12,
                    color: T.t2,
                  }}
                >
                  {opt.sublabel}
                </p>
              </div>
              {units === opt.id && (
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: 999,
                    background: T.pri,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Ic n="checkCircle" size={14} color="#fff" sw={2} />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
      <div style={{ paddingBottom: 20 }}>
        <Btn
          variant="primary"
          label="Continue"
          full
          onClick={() => navigate("onboardReminder")}
        />
        <div style={{ marginTop: 12, minHeight: 37 }} aria-hidden="true" />
      </div>
    </div>
  );
}
