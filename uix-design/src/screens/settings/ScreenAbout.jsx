import { T } from "../../theme";
import { ShieldLogo, Header, SectionHeader, Card, SetRow } from "../../ui";

export function ScreenAbout({ navigate, onBack }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header variant="push" title="About DriveShield" onBack={onBack} />
      <div className="ds-screen-content" style={{ flex: 1, overflowY: "auto" }}>
        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center",
          textAlign: "center", padding: "28px 0 20px"
        }}>
          <div style={{
            width: 72, height: 72, borderRadius: 20, background: T.priD,
            border: `1.5px solid rgba(61,127,255,0.25)`,
            display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16
          }}>
            <ShieldLogo size={52} />
          </div>
          <p style={{ fontFamily: T.fD, fontSize: 20, fontWeight: 700, color: T.t1, marginBottom: 4 }}>DriveShield</p>
          <p style={{ fontFamily: T.fM, fontSize: T.fsDetail, color: T.t2 }}>Version 2.1.0 (build 241)</p>
        </div>

        <SectionHeader label="Legal" />
        <Card>
          <SetRow icon="globe"  label="Terms of Service"   onPress={() => navigate("terms")} />
          <SetRow icon="lock"   label="Privacy Policy"     onPress={() => navigate("terms")} />
          <SetRow icon="check"  label="Security & Privacy" onPress={() => navigate("dataSecurity")} last />
        </Card>

        <SectionHeader label="Build Info" />
        <Card style={{ marginBottom: 24 }}>
          <SetRow icon="info"  label="App Version"  value="2.1.0 (build 241)" />
          <SetRow icon="check" label="Environment"  value="Production" />
          <SetRow icon="globe" label="Region"       value="US" last />
        </Card>
      </div>
    </div>
  );
}
