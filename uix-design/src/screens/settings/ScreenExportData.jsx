import { useState } from "react";
import { T } from "../../theme";
import { Ic, Header, Banner, SectionHeader, Card, SmartBanner, Btn, ExportSheet } from "../../ui";

const dataTypes = [
  { icon: "trips", label: "Trip sessions", detail: "All recorded drives with timestamps and coverage" },
  { icon: "evidence", label: "Evidence records", detail: "All evidence check results and event details" },
  { icon: "car", label: "Vehicle profiles", detail: "Make, model, year, plate for all vehicles" },
  { icon: "settings", label: "Account preferences", detail: "Settings, units, notification config" },
];

export function ScreenExportData({ navigate, onBack }) {
  const [showExport, setShowExport] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [exported, setExported] = useState(false);

  const handleExport = (fmt) => {
    setExporting(true);
    setExported(false);
    setTimeout(() => { setExporting(false); setExported(true); }, 2000);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header variant="push" title="Export My Data" onBack={onBack} />
      <div className="ds-screen-content" style={{ flex: 1, overflowY: "auto" }}>
        {exported && (
          <SmartBanner type="success" text="Export package ready — check your Downloads folder."
            autoCloseMs={4000} onClose={() => setExported(false)} />
        )}

        <Banner type="info"
          text="Your data export includes all records stored on this device. Exports are encrypted and password-protected." />

        <SectionHeader label="What's included" />
        <Card style={{ marginBottom: 16, paddingLeft: T.cardPad, paddingRight: T.cardPad }}>
          {dataTypes.map((d, i) => (
            <div key={d.label} style={{
              display: "flex", alignItems: "center", gap: 14,
              padding: `${T.rowVLg}px 0`,
              borderBottom: i < dataTypes.length - 1 ? `1px solid ${T.div}` : "none"
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10, background: T.s2, flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <Ic n={d.icon} size={16} color={T.t2} />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontFamily: T.fB, fontSize: T.fsMd, fontWeight: 500, color: T.t1 }}>{d.label}</p>
                <p style={{ fontFamily: T.fB, fontSize: T.fsDetail, color: T.t2, marginTop: 2 }}>{d.detail}</p>
              </div>
              <Ic n="checkCircle" size={16} color={T.H} />
            </div>
          ))}
        </Card>

        <div style={{ height: 8 }} />
        {exporting
          ? <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center", padding: 20 }}>
              <span className="spin"><Ic n="spinner" size={18} color={T.t3} /></span>
              <span style={{ fontFamily: T.fB, fontSize: 14, color: T.t2 }}>Preparing export…</span>
            </div>
          : <Btn variant="primary" label="Export All Data" iconLeft="upload" full
              onClick={() => setShowExport(true)} />
        }
      </div>

      <ExportSheet visible={showExport} onClose={() => setShowExport(false)}
        title="Export Format" onExport={handleExport} />
    </div>
  );
}
