import { useState } from "react";
import { T } from "../../theme";
import { Ic, Card, Btn, TogRow } from "../../ui";

export function ScreenOnboardReminder({ navigate }) {
  const [autoReminder, setAutoReminder] = useState(true);
  const [driveAlert, setDriveAlert] = useState(true);

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
            <Ic n="bell" size={28} color={T.priT} sw={1.6} />
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
            Step 5 of 5
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
            Stay protected
          </h1>
          <p
            style={{
              fontFamily: T.fB,
              fontSize: 14,
              color: T.t2,
              lineHeight: 1.6,
            }}
          >
            Let DriveShield remind you when you might need protection. You can change these anytime in Settings.
          </p>
        </div>
        <Card>
          <TogRow
            icon="bell"
            label="Auto-Record Reminder"
            detail="Prompt to enable protection before typical drive times"
            on={autoReminder}
            onToggle={() => setAutoReminder((v) => !v)}
          />
          <TogRow
            icon="car"
            label="Driving Reminder"
            detail="Alert if a drive is detected without protection active"
            on={driveAlert}
            onToggle={() => setDriveAlert((v) => !v)}
            last
          />
        </Card>
      </div>
      <div style={{ paddingBottom: 20 }}>
        <Btn
          variant="primary"
          label="Finish Setup"
          full
          onClick={() => navigate("onboardComplete")}
        />
        <div style={{ marginTop: 12, minHeight: 37 }} aria-hidden="true" />
      </div>
    </div>
  );
}
