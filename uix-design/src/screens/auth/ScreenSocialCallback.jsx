import { useEffect } from "react";
import { BrandLoader } from "../../ui";

export function ScreenSocialCallback({ navigate, params = {} }) {
  const provider = params.provider === "apple" ? "Apple" : "Google";

  useEffect(() => {
    const t = setTimeout(() => navigate("terms"), 1800);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div
      className="fu ds-screen-root"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100%",
        gap: 0,
      }}
    >
      <BrandLoader
        size="md"
        label={`Signing in with ${provider}…`}
        sublabel="Verifying your account"
      />
    </div>
  );
}
