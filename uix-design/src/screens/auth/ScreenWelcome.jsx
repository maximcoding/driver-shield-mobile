import { T } from "../../theme";
import { ShieldLogo, AuthBtn } from "../../ui";

export function ScreenWelcome({ navigate }) {
  return (
    <div
      className="fu ds-screen-root"
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: 0,
        }}
      >
        <div
          style={{
            width: 88,
            height: 88,
            borderRadius: 22,
            background: T.priD,
            border: "1.5px solid rgba(61,127,255,0.28)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 0 1px rgba(61,127,255,0.08), 0 16px 48px rgba(61,127,255,0.3)",
            marginBottom: 24,
          }}
        >
          <ShieldLogo size={62} />
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
          Welcome to
        </p>
        <h1
          style={{
            fontFamily: T.fD,
            fontSize: 28,
            fontWeight: 700,
            color: T.t1,
            letterSpacing: "-0.02em",
            marginBottom: 14,
            textAlign: "center",
          }}
        >
          DriveShield
        </h1>
        <p
          style={{
            fontFamily: T.fB,
            fontSize: 14,
            color: T.t2,
            lineHeight: 1.65,
            maxWidth: 240,
          }}
        >
          Silent, tamper-proof drive recording that protects you when it matters most.
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <AuthBtn
          brand="phone"
          label="Continue with Phone"
          primary
          onClick={() => navigate("phoneEntry")}
        />
        <AuthBtn
          brand="google"
          label="Continue with Google"
          onClick={() => navigate("socialCallback", { provider: "google" })}
        />
        <AuthBtn
          brand="apple"
          label="Continue with Apple"
          onClick={() => navigate("socialCallback", { provider: "apple" })}
        />
        <p
          style={{
            fontFamily: T.fB,
            fontSize: 11,
            color: T.t3,
            textAlign: "center",
            marginTop: 2,
            lineHeight: 1.55,
          }}
        >
          By continuing you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
