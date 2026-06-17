import { T } from "../../theme";
import { ShieldLogo } from "../../ui";

export function ScreenSplash({ onContinue }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onContinue();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onContinue}
      onKeyDown={handleKeyDown}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100%",
        cursor: "default",
        gap: 32,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient background glow */}
      <div
        className="spl-bg-glow"
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 320,
          height: 320,
          borderRadius: 999,
          background: "radial-gradient(circle, rgba(61,127,255,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      {/* Animated logo lockup */}
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 180,
          height: 180,
        }}
      >
        {/* One-shot glow burst on landing */}
        <div
          className="spl-flash"
          style={{
            position: "absolute",
            width: 88,
            height: 88,
            borderRadius: 24,
            background: "rgba(61,127,255,0.35)",
            animationDelay: "0.48s",
          }}
        />
        {/* Pulse rings — start after logo lands */}
        {[0.9, 1.7, 2.5].map((delay, i) => (
          <div
            key={i}
            className="spl-ring"
            style={{
              position: "absolute",
              width: 88,
              height: 88,
              borderRadius: 24,
              background: `rgba(61,127,255,${0.18 - i * 0.04})`,
              animationDelay: `${delay}s`,
            }}
          />
        ))}
        {/* Outer arc — wrapper fades in, inner div rotates independently */}
        <div
          className="fu"
          style={{
            position: "absolute",
            animationDelay: "0.85s",
            animationFillMode: "both",
            opacity: 0,
          }}
        >
          <div
            style={{
              width: 128,
              height: 128,
              borderRadius: 999,
              border: "1.5px solid transparent",
              borderTopColor: "rgba(61,127,255,0.75)",
              borderRightColor: "rgba(61,127,255,0.3)",
              animation: "splashArc 3s linear infinite",
            }}
          />
        </div>
        {/* Inner arc — same pattern, counter-spin */}
        <div
          className="fu"
          style={{
            position: "absolute",
            animationDelay: "0.9s",
            animationFillMode: "both",
            opacity: 0,
          }}
        >
          <div
            style={{
              width: 108,
              height: 108,
              borderRadius: 999,
              border: "1px solid transparent",
              borderBottomColor: "rgba(61,127,255,0.55)",
              borderLeftColor: "rgba(61,127,255,0.2)",
              animation: "splashArcRev 5s linear infinite",
            }}
          />
        </div>
        {/* Logo tile — single animation value combines grow + breath, GPU-promoted */}
        <div
          style={{
            width: 88,
            height: 88,
            borderRadius: 24,
            background: T.priD,
            border: "1.5px solid rgba(61,127,255,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow:
              "0 0 0 1px rgba(61,127,255,0.15), 0 16px 64px rgba(61,127,255,0.5)",
            position: "relative",
            zIndex: 1,
            willChange: "transform, opacity",
            animation:
              "splashGrow 0.85s cubic-bezier(0.34,1.2,0.64,1) both, splashBreath 3s 0.85s ease-in-out infinite",
          }}
        >
          <ShieldLogo size={66} />
        </div>
      </div>

      {/* Wordmark — slides up after logo lands */}
      <h1
        className="spl-wi spl-shine"
        style={{
          fontFamily: T.fD,
          fontSize: 32,
          fontWeight: 800,
          letterSpacing: "-0.03em",
          animationDelay: "0.75s",
        }}
      >
        DriveShield
      </h1>
    </div>
  );
}
