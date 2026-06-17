import { useState } from "react";
import { T } from "../../theme";
import { Ic, Header, Banner, Card, Btn } from "../../ui";
import { DEMO_VEHICLES_DEF } from "../../data";

export function ScreenDefaultVehicle({ navigate, onBack }) {
  const [selected, setSelected] = useState("v1");
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header variant="push" title="Default Vehicle" onBack={onBack} />
      <div className="ds-screen-content" style={{ flex: 1, overflowY: "auto" }}>
        <Banner type="info"
          text="Your default vehicle is automatically selected when you start a new protection session. You can still change it per-trip." />

        <div style={{ height: 16 }} />

        <Card style={{ paddingLeft: T.cardPad, paddingRight: T.cardPad }}>
          {DEMO_VEHICLES_DEF.map((v, i) => (
            <button key={v.id} onClick={() => setSelected(v.id)} style={{
              display: "flex", alignItems: "center", gap: 14, padding: `${T.rowVLg}px 0`,
              width: "100%", textAlign: "left", background: "none",
              borderBottom: i < DEMO_VEHICLES_DEF.length - 1 ? `1px solid ${T.div}` : "none"
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10, background: v.color, flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <Ic n="car" size={16} color="#fff" />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontFamily: T.fB, fontSize: T.fsMd, fontWeight: 500, color: T.t1 }}>
                  {v.year} {v.make} {v.model}
                </p>
                <p style={{ fontFamily: T.fB, fontSize: T.fsDetail, color: T.t2, marginTop: 2 }}>{v.plate}</p>
              </div>
              {selected === v.id
                ? <Ic n="checkCircle" size={18} color={T.pri} />
                : <div style={{ width: 18, height: 18, borderRadius: 999, border: `2px solid ${T.bd}` }} />
              }
            </button>
          ))}
        </Card>

        <div style={{ height: 24 }} />
        <Btn variant="primary" label="Save Default" full onClick={() => navigate("settings")} />
      </div>
    </div>
  );
}
