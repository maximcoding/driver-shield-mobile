import { useState } from "react";
import { T } from "../../theme";
import { Ic, Btn, ShieldLogo } from "../../ui";

const PERMS = [
  {
    id: "location",
    icon: "location",
    title: "Location (Always)",
    desc: "GPS tracking for background drive recording.",
  },
  {
    id: "motion",
    icon: "satellite",
    title: "Motion & Fitness",
    desc: "Detects driving and records telemetry.",
  },
  {
    id: "notifications",
    icon: "bell",
    title: "Notifications",
    desc: "Alerts for protection status and drive summaries.",
  },
];

export function ScreenLaunch({ onContinue }) {
  const [granted, setGranted] = useState({
    location: false,
    motion: false,
    notifications: false,
  });
  const all = granted.location && granted.motion && granted.notifications;

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
              width: 72,
              height: 72,
              borderRadius: 20,
              background: T.priD,
              border: "1.5px solid rgba(61,127,255,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
            }}
          >
            <ShieldLogo size={54} />
          </div>
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
            DriveShield
          </h1>
          <p
            style={{
              fontFamily: T.fB,
              fontSize: 15,
              color: T.t2,
              lineHeight: 1.65,
              maxWidth: 280,
              margin: "0 auto",
            }}
          >
            Legal Black Box needs a few permissions to protect you while you drive.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {PERMS.map((p) => (
            <div
              key={p.id}
              style={{
                background: T.s,
                border: `1px solid ${granted[p.id] ? "rgba(45,212,160,0.3)" : T.bd}`,
                borderRadius: 16,
                padding: "16px",
                transition: "border-color 0.2s",
                display: "flex",
                gap: 14,
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 11,
                  background: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Ic n={p.icon} size={18} color={T.t2} />
              </div>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    fontFamily: T.fD,
                    fontSize: 14,
                    fontWeight: 600,
                    color: T.t1,
                    marginBottom: 4,
                  }}
                >
                  {p.title}
                </p>
                <p
                  style={{
                    fontFamily: T.fB,
                    fontSize: 13,
                    color: T.t2,
                    lineHeight: 1.4,
                  }}
                >
                  {p.desc}
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  setGranted((g) => ({ ...g, [p.id]: !g[p.id] }))
                }
                style={{
                  padding: "6px 12px",
                  borderRadius: 8,
                  background: granted[p.id] ? T.HD : "transparent",
                  border: `1px solid ${granted[p.id] ? "rgba(45,212,160,0.4)" : T.bd}`,
                  fontFamily: T.fB,
                  fontSize: 12,
                  fontWeight: 600,
                  color: granted[p.id] ? T.H : T.t2,
                  flexShrink: 0,
                  transition: "all 0.2s",
                  width: "76px",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                }}
              >
                {granted[p.id] ? "Granted" : "Allow"}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div style={{ paddingBottom: 20 }}>
        <Btn
          variant={all ? "primary" : "secondary"}
          label="Continue"
          full
          onClick={onContinue}
        />
        <p
          style={{
            fontFamily: T.fB,
            fontSize: 12,
            color: T.t3,
            textAlign: "center",
            marginTop: 12,
            lineHeight: 1.55,
          }}
        >
          Permissions are used only for evidence recording. No data is shared without your action.
        </p>
      </div>
    </div>
  );
}
