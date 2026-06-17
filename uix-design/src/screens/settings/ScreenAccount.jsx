import { useState } from "react";
import { T } from "../../theme";
import { Ic, Header, SectionHeader, Card, SetRow, ConfirmSheet } from "../../ui";

export function ScreenAccount({ navigate, onBack }) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header variant="push" title="Account" onBack={onBack} />
      <div className="ds-screen-content" style={{ flex: 1, overflowY: "auto" }}>
        <section aria-label="Profile">
          <SectionHeader label="Profile" />
          <Card>
            <div style={{ padding: "16px", display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{
                width: 52, height: 52, borderRadius: 999, background: T.priD,
                border: `1.5px solid rgba(61,127,255,0.25)`,
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
              }}>
                <Ic n="eye" size={22} color={T.priT} sw={1.6} />
              </div>
              <div>
                <p style={{ fontFamily: T.fB, fontSize: T.fsMd, fontWeight: 600, color: T.t1 }}>John Driver</p>
                <p style={{ fontFamily: T.fB, fontSize: T.fsDetail, color: T.t2, marginTop: 2 }}>john@example.com</p>
                <p style={{ fontFamily: T.fM, fontSize: T.fsSm, color: T.t3, marginTop: 1 }}>+1 (555) 000-0000</p>
              </div>
            </div>
          </Card>
        </section>

        <section aria-label="Sign-in methods">
          <SectionHeader label="Sign-In Methods" />
          <Card>
            <SetRow icon="phone" label="Phone number" value="+1 (555) 000-0000" onPress={() => {}} />
            <SetRow icon="globe" label="Google account" value="john@gmail.com" onPress={() => {}} />
            <SetRow icon="lock" label="Apple ID" value="Not connected" onPress={() => {}} last />
          </Card>
        </section>

        <section aria-label="Danger zone">
          <SectionHeader label="Danger Zone" />
          <Card style={{ marginBottom: 24 }}>
            <SetRow icon="trash" label="Delete Account" danger onPress={() => setShowDeleteConfirm(true)} last />
          </Card>
        </section>
      </div>

      <ConfirmSheet
        visible={showDeleteConfirm}
        onClose={() => setShowDeleteConfirm(false)}
        title="Delete your account?"
        body="This will permanently delete your account, all recorded sessions, evidence records, and vehicle data. This action cannot be undone."
        confirmLabel="Delete Account"
        onConfirm={() => { setShowDeleteConfirm(false); navigate("sessionExpired"); }} />
    </div>
  );
}
