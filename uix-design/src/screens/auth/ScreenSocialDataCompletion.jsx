import { useState } from "react";
import { T } from "../../theme";
import { Ic, Btn, FInput } from "../../ui";

export function ScreenSocialDataCompletion({ navigate, params = {} }) {
  const provider = params.provider || "Google";
  const [name, setName] = useState("");
  const [email, setEmail] = useState(params.email || "");
  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");

  const handleContinue = () => {
    let valid = true;
    if (!name.trim()) {
      setNameErr("Name is required");
      valid = false;
    } else {
      setNameErr("");
    }
    if (!email.includes("@")) {
      setEmailErr("Enter a valid email address");
      valid = false;
    } else {
      setEmailErr("");
    }
    if (valid) navigate("terms");
  };

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
          <Ic n="eye" size={34} color={T.priT} sw={1.5} />
        </div>
        <h1
          style={{
            fontFamily: T.fD,
            fontSize: 22,
            fontWeight: 800,
            color: T.t1,
            letterSpacing: "-0.02em",
            marginBottom: 8,
            textAlign: "center",
          }}
        >
          Complete your profile
        </h1>
        <p
          style={{
            fontFamily: T.fB,
            fontSize: 14,
            color: T.t2,
            textAlign: "center",
            maxWidth: 256,
            lineHeight: 1.65,
            marginBottom: 28,
          }}
        >
          {provider} didn&apos;t share all required details. Please fill in the missing information.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            width: "100%",
          }}
        >
          <FInput
            label="Full name"
            value={name}
            onChange={setName}
            placeholder="Your name"
            iconLeft="eye"
            error={nameErr}
          />
          <FInput
            label="Email address"
            value={email}
            onChange={setEmail}
            placeholder="you@example.com"
            iconLeft="globe"
            type="email"
            error={emailErr}
          />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <Btn variant="primary" label="Continue" full onClick={handleContinue} />
        <Btn
          variant="ghost"
          label="Use a different method"
          full
          onClick={() => navigate("welcome")}
        />
      </div>
    </div>
  );
}
