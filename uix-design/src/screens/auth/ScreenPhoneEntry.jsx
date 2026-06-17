import { useState } from "react";
import { T } from "../../theme";
import { Ic, Btn, Header, NumericKeyboard } from "../../ui";
import { maskPhone } from "../../utils";

export function ScreenPhoneEntry({ navigate, onBack }) {
  const [digits, setDigits] = useState("55500");
  const masked = maskPhone(digits);
  const canSend = digits.length >= 10;

  const handleKey = (k) => {
    if (k === "⌫") setDigits((d) => d.slice(0, -1));
    else if (k !== "*") setDigits((d) => (d.length < 10 ? d + k : d));
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
      <Header variant="push" title="Enter Phone Number" onBack={onBack} />
      <div
        className="ds-screen-content"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 20,
          justifyContent: "center",
          overflowY: "auto",
        }}
      >
        <p
          style={{
            fontFamily: T.fB,
            fontSize: 15,
            color: T.t2,
            lineHeight: 1.6,
            textAlign: "center",
          }}
        >
          We&apos;ll send a one-time verification code to confirm your number.
        </p>
        <div
          style={{
            display: "flex",
            gap: 10,
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              padding: "0 14px",
              height: 48,
              borderRadius: 12,
              background: T.s2,
              border: `1px solid ${T.bd}`,
              display: "flex",
              alignItems: "center",
              fontFamily: T.fB,
              fontSize: 15,
              color: T.t1,
              flexShrink: 0,
            }}
          >
            +1
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
            aria-labelledby="phone-label"
          >
            <span
              id="phone-label"
              style={{
                fontFamily: T.fB,
                fontSize: 11,
                fontWeight: 600,
                color: T.t2,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Phone number
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "0 14px",
                height: 48,
                borderRadius: 12,
                background: T.s2,
                border: `1.5px solid ${T.pri}`,
              }}
            >
              <Ic n="phone" size={16} color={T.t3} />
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  minWidth: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: T.fB,
                    fontSize: 15,
                    color: masked ? T.t1 : T.t3,
                  }}
                >
                  {masked || "(555) 000-0000"}
                </span>
                {masked && (
                  <span
                    className="blink"
                    style={{
                      width: 2,
                      height: 18,
                      background: T.priT,
                      display: "inline-block",
                      borderRadius: 1,
                      flexShrink: 0,
                      marginLeft: 1,
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <p
          style={{
            fontFamily: T.fB,
            fontSize: 12,
            color: T.t2,
            lineHeight: 1.55,
            textAlign: "center",
          }}
        >
          Standard message and data rates may apply.
        </p>
      </div>
      <div className="ds-screen-content" style={{ paddingTop: 0, paddingBottom: 12 }}>
        <Btn
          variant={canSend ? "primary" : "secondary"}
          label="Send Code"
          full
          disabled={!canSend}
          onClick={() => navigate("smsVerify")}
        />
      </div>
      <NumericKeyboard onPress={handleKey} variant="phone" />
    </div>
  );
}
