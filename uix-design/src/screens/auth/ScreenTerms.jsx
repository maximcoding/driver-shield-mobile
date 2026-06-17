import { useState, useRef } from "react";
import { T } from "../../theme";
import { Btn, Header } from "../../ui";
import { TERMS_SECTIONS } from "../../data";

export function ScreenTerms({ navigate, onBack }) {
  const scrollRef = useRef(null);
  const [reachedBottom, setReachedBottom] = useState(true);
  const [agreed, setAgreed] = useState(true);
  const canContinue = reachedBottom && agreed;

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el || reachedBottom) return;
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 12) {
      setReachedBottom(true);
    }
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
      <Header variant="push" title="Terms & Privacy" onBack={onBack} />

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="ds-screen-content"
        style={{ flex: 1, overflowY: "auto", paddingBottom: 0 }}
      >
        {TERMS_SECTIONS.map((s) => {
          const spaceIdx = s.title.indexOf(" ");
          const num = s.title.slice(0, spaceIdx);
          const title = s.title.slice(spaceIdx + 1);
          return (
            <div key={s.title} style={{ marginBottom: 20 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 5,
                  marginBottom: 6,
                }}
              >
                <span
                  style={{
                    fontFamily: T.fD,
                    fontSize: 13,
                    fontWeight: 700,
                    color: T.t1,
                    letterSpacing: "-0.01em",
                    lineHeight: 1.4,
                    flexShrink: 0,
                  }}
                >
                  {num}
                </span>
                <span
                  style={{
                    fontFamily: T.fD,
                    fontSize: 13,
                    fontWeight: 700,
                    color: T.t1,
                    letterSpacing: "-0.01em",
                    lineHeight: 1.4,
                  }}
                >
                  {title}
                </span>
              </div>
              <p
                style={{
                  fontFamily: T.fB,
                  fontSize: 13,
                  color: T.t2,
                  lineHeight: 1.65,
                }}
              >
                {s.body}
              </p>
            </div>
          );
        })}

        <button
          type="button"
          onClick={() => reachedBottom && setAgreed((a) => !a)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            width: "100%",
            padding: "16px 0 28px",
            background: "none",
            cursor: reachedBottom ? "pointer" : "default",
            opacity: reachedBottom ? 1 : 0.35,
            transition: "opacity 0.25s",
            border: "none",
          }}
        >
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: 6,
              flexShrink: 0,
              background: agreed ? T.pri : T.s3,
              border: `1.5px solid ${agreed ? T.pri : T.bd}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.15s, border-color 0.15s",
            }}
          >
            {agreed && (
              <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                <path
                  d="M1.5 5L5 8.5L11.5 1.5"
                  stroke={T.white}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
          <span
            style={{
              fontFamily: T.fB,
              fontSize: 13,
              color: reachedBottom ? T.t1 : T.t2,
              textAlign: "left",
              lineHeight: 1.55,
              transition: "color 0.25s",
            }}
          >
            I have read and agree to the Terms of Service and Privacy Policy.
          </span>
        </button>
      </div>

      <div
        className="ds-screen-content"
        style={{
          paddingTop: 12,
          paddingBottom: 40,
          borderTop: `1px solid ${T.div}`,
        }}
      >
        <p
          style={{
            fontFamily: T.fB,
            fontSize: 12,
            color: T.t3,
            textAlign: "center",
            marginBottom: 10,
            visibility: reachedBottom ? "hidden" : "visible",
          }}
        >
          Scroll down to read all terms
        </p>
        <Btn
          variant={canContinue ? "primary" : "secondary"}
          label="I Agree & Continue"
          full
          disabled={!canContinue}
          onClick={() => navigate("onboardIntro")}
        />
      </div>
    </div>
  );
}
