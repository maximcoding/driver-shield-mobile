import { useState } from "react";
import { T } from "../../theme";
import { ShieldLogo, AuthBtn } from "../../ui";

export function ScreenSignInHub({ navigate }) {
  const [tab, setTab] = useState("signin");

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
          alignItems: "center",
          justifyContent: "center",
          gap: 0,
        }}
      >
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
            marginBottom: 20,
          }}
        >
          <ShieldLogo size={50} />
        </div>
        <h1
          style={{
            fontFamily: T.fD,
            fontSize: 24,
            fontWeight: 700,
            color: T.t1,
            letterSpacing: "-0.02em",
            marginBottom: 6,
          }}
        >
          {tab === "signin" ? "Welcome back" : "Create account"}
        </h1>
        <p
          style={{
            fontFamily: T.fB,
            fontSize: 14,
            color: T.t2,
            textAlign: "center",
            maxWidth: 240,
            lineHeight: 1.6,
          }}
        >
          {tab === "signin"
            ? "Sign in to access your drive history and evidence records."
            : "Start protecting your drives with DriveShield."}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: 0,
          background: T.s2,
          borderRadius: 10,
          padding: 3,
          marginBottom: 20,
        }}
      >
        {["signin", "signup"].map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            style={{
              flex: 1,
              padding: "8px 0",
              borderRadius: 8,
              border: "none",
              fontFamily: T.fB,
              fontSize: 13,
              fontWeight: 600,
              background: tab === t ? T.s : "transparent",
              color: tab === t ? T.t1 : T.t2,
              boxShadow: tab === t ? "0 1px 4px rgba(0,0,0,0.3)" : "none",
              transition: "all 0.18s ease",
            }}
          >
            {t === "signin" ? "Sign in" : "Sign up"}
          </button>
        ))}
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
