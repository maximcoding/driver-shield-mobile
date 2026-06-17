import { useState } from "react";
import { T } from "../../theme";
import { Ic, Header, SectionHeader, Card, InfoRow, Banner, Btn, ConfirmSheet } from "../../ui";

const retentionOptions = [
  { id: "30d", label: "30 days", detail: "Older sessions deleted automatically", selected: false },
  { id: "90d", label: "90 days", detail: "Recommended for most drivers", selected: true },
  { id: "180d", label: "6 months", detail: "Extended retention for legal needs", selected: false },
  { id: "1y", label: "1 year", detail: "Annual coverage for ongoing cases", selected: false },
  { id: "off", label: "Keep forever", detail: "Manual deletion only", selected: false },
];

const storageItems = [
  { label: "Total sessions", value: "47" },
  { label: "Sessions stored", value: "38" },
  { label: "Storage used", value: "124 MB" },
  { label: "Available", value: "876 MB" },
];

export function ScreenDataRetention({ navigate, onBack }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [selected, setSelected] = useState("90d");

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header variant="push" title="Data Retention" onBack={onBack} />
      <div className="ds-screen-content" style={{ flex: 1, overflowY: "auto" }}>
        <SectionHeader label="Storage" top />
        <Card style={{ marginBottom: 16 }}>
          {storageItems.map((s, i) => (
            <InfoRow key={s.label} icon={i === 0 ? "database" : i === 2 ? "archive" : "eye"}
              label={s.label} value={s.value} last={i === storageItems.length - 1} />
          ))}
        </Card>

        <SectionHeader label="Retention Period" />
        <Card style={{ marginBottom: 16, paddingLeft: T.cardPad, paddingRight: T.cardPad }}>
          {retentionOptions.map((o, i) => (
            <button key={o.id} onClick={() => setSelected(o.id)} style={{
              display: "flex", alignItems: "center", gap: 14,
              padding: `${T.rowVLg}px 0`,
              width: "100%", textAlign: "left", background: "none",
              borderBottom: i < retentionOptions.length - 1 ? `1px solid ${T.div}` : "none"
            }}>
              <div style={{ flex: 1 }}>
                <p style={{ fontFamily: T.fB, fontSize: T.fsMd, fontWeight: 500, color: T.t1 }}>{o.label}</p>
                <p style={{ fontFamily: T.fB, fontSize: T.fsDetail, color: T.t2, marginTop: 2 }}>{o.detail}</p>
              </div>
              {selected === o.id
                ? <Ic n="checkCircle" size={18} color={T.pri} />
                : <div style={{ width: 18, height: 18, borderRadius: 999, border: `2px solid ${T.bd}` }} />
              }
            </button>
          ))}
        </Card>

        <Banner type="warning"
          text="Changing retention to a shorter period will permanently delete sessions that exceed the new limit." />

        <div style={{ height: 20 }} />
        <Btn variant="primary" label="Save Setting" full onClick={() => navigate("settings")} />
        <div style={{ height: 12 }} />
        <Btn variant="danger" label="Clear All Session Data" full onClick={() => setShowConfirm(true)} />
      </div>

      <ConfirmSheet
        visible={showConfirm} onClose={() => setShowConfirm(false)}
        title="Clear all data?"
        body="This will permanently delete all stored sessions from this device. This action cannot be undone."
        confirmLabel="Delete All" danger
        onConfirm={() => {}}
      />
    </div>
  );
}
