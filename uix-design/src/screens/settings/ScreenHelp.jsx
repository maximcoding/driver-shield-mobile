import { useState } from "react";
import { T } from "../../theme";
import { Ic, Header, Banner } from "../../ui";
import { FAQ_ITEMS } from "../../data";

export function ScreenHelp({ onBack }) {
  const [open, setOpen] = useState(null);
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header variant="push" title="Help & FAQ" onBack={onBack} />
      <div className="ds-screen-content" style={{ flex: 1, overflowY: "auto", paddingBottom: 24 }}>
        {FAQ_ITEMS.map((item, i) => (
          <div key={i} style={{
            marginBottom: 0,
            borderBottom: `1px solid ${T.div}`,
          }}>
            <button onClick={() => setOpen(open === i ? null : i)} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              width: "100%", padding: `${T.rowVLg}px ${T.rowH}px`,
              textAlign: "left", background: "none",
            }}>
              <p style={{
                fontFamily: T.fB, fontSize: T.fsBody, fontWeight: 500, color: T.t1,
                flex: 1, paddingRight: 12, lineHeight: 1.4
              }}>{item.q}</p>
              <Ic n={open === i ? "chevD" : "chevR"} size={16} color={T.t3} />
            </button>
            {open === i && (
              <div style={{ padding: `0 ${T.rowH}px 16px` }}>
                <p style={{ fontFamily: T.fB, fontSize: T.fsDetail, color: T.t2, lineHeight: 1.65 }}>
                  {item.a}
                </p>
              </div>
            )}
          </div>
        ))}
        <div style={{ padding: "20px 0 0" }}>
          <Banner type="info"
            title="Still need help?"
            text="Contact our support team for personalised assistance." />
        </div>
      </div>
    </div>
  );
}
