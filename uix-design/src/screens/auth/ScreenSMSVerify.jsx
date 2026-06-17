import { useState } from "react";
import { T } from "../../theme";
import { Btn, Header, SmartBanner, NumericKeyboard } from "../../ui";

export function ScreenSMSVerify({ navigate, onBack }) {
  const [otp, setOtp] = useState(["4", "2", "0", "", "", ""]);
  const [resent, setResent] = useState(false);
  const filled = otp.filter(Boolean).length;
  const canVerify = filled === 6;

  const handleKey = (k) => {
    if (k === "⌫") {
      setOtp((prev) => {
        const next = [...prev];
        const lastFilled = [...next.keys()].filter((i) => next[i]).pop();
        if (lastFilled !== undefined) next[lastFilled] = "";
        return next;
      });
    } else {
      setOtp((prev) => {
        const next = [...prev];
        const emptyIdx = next.findIndex((v) => !v);
        if (emptyIdx >= 0) next[emptyIdx] = k;
        return next;
      });
    }
  };

  const handleResend = () => {
    setOtp(["", "", "", "", "", ""]);
    setResent(true);
  };

  return (
    <div
      className="fu"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <Header variant="push" title="Verify Your Number" onBack={onBack} />
      {resent && (
        <SmartBanner
          type="success"
          title="Code resent"
          text="A new code was sent to +1 (555) 000-0000"
          autoCloseMs={3500}
          onClose={() => setResent(false)}
        />
      )}
      <div
        className="ds-screen-content"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 24,
          justifyContent: "center",
          overflowY: "auto",
        }}
      >
        <div style={{ textAlign: "center", paddingBottom: 6 }}>
          <h2
            style={{
              fontFamily: T.fD,
              fontSize: T.fsDisplay,
              fontWeight: 700,
              color: T.t1,
              letterSpacing: "-0.02em",
              marginBottom: 8,
            }}
          >
            Enter the 6-digit code
          </h2>
          <p
            style={{
              fontFamily: T.fB,
              fontSize: 14,
              color: T.t2,
              lineHeight: 1.55,
            }}
          >
            Sent to{" "}
            <span style={{ color: T.t1, fontWeight: 500 }}>+1 (555) 000-0000</span>
          </p>
        </div>

        <div style={{ display: "flex", gap: 6 }}>
          {otp.map((digit, i) => {
            const isCursor = i === filled;
            return (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: 52,
                  borderRadius: 12,
                  background: T.s2,
                  border: `1.5px solid ${digit ? T.pri : isCursor ? T.priT : T.bd}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "border-color 0.15s",
                }}
              >
                {digit ? (
                  <span
                    style={{
                      fontFamily: T.fM,
                      fontSize: 20,
                      fontWeight: 700,
                      color: T.t1,
                    }}
                  >
                    {digit}
                  </span>
                ) : isCursor ? (
                  <span
                    className="blink"
                    style={{
                      width: 2,
                      height: 20,
                      background: T.priT,
                      display: "block",
                      borderRadius: 1,
                    }}
                  />
                ) : null}
              </div>
            );
          })}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
          }}
        >
          <button
            type="button"
            onClick={handleResend}
            style={{
              fontFamily: T.fB,
              fontSize: 13,
              fontWeight: 500,
              color: T.priT,
              background: "none",
              textAlign: "center",
              padding: "4px 0",
            }}
          >
            Resend code
          </button>
          <button
            type="button"
            onClick={onBack}
            style={{
              fontFamily: T.fB,
              fontSize: 12,
              fontWeight: 400,
              color: T.t2,
              background: "none",
              textAlign: "center",
              padding: "4px 0",
            }}
          >
            Change number
          </button>
        </div>
      </div>
      <div className="ds-screen-content" style={{ paddingTop: 0, paddingBottom: 12 }}>
        <Btn
          variant={canVerify ? "primary" : "secondary"}
          label="Verify"
          full
          disabled={!canVerify}
          onClick={() => navigate("terms")}
        />
      </div>
      <NumericKeyboard onPress={handleKey} variant="otp" />
    </div>
  );
}
