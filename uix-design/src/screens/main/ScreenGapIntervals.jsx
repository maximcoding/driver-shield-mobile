import { T } from "../../theme";
import { Header, Banner, SectionHeader, Card, Ic, Btn } from "../../ui";
import { GAP_INTERVALS } from "../../data";

export function ScreenGapIntervals({ params = {}, onBack, navigate }) {
  return (
  <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
    <Header variant="push" title="Monitoring Gaps" onBack={onBack} />
    <div className="ds-screen-content" style={{ flex: 1, overflowY: "auto" }}>

      <Banner type="warning"
        title={`${GAP_INTERVALS.length} gap${GAP_INTERVALS.length > 1 ? "s" : ""} detected`}
        text="Periods where GPS signal was lost or severely degraded. Data during these windows cannot be verified." />

      <SectionHeader label="Gap intervals" />
      {GAP_INTERVALS.map((g, i) => (
        <Card key={i} style={{ padding: "14px 16px", marginBottom: 12 }}>
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 10, background: T.LD, flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <Ic n="alertTri" size={15} color={T.L} />
            </div>
            <div>
              <p style={{ fontFamily: T.fM, fontSize: T.fsMd, fontWeight: 600, color: T.t1 }}>
                {g.gapStart} – {g.gapEnd}
              </p>
              <p style={{ fontFamily: T.fB, fontSize: T.fsDetail, color: T.t3 }}>
                Gap duration: {g.duration}
              </p>
            </div>
          </div>

          {/* Before / after timeline */}
          <div style={{
            display: "flex", alignItems: "center", gap: 6, marginBottom: 10,
            padding: "8px 10px", borderRadius: 8, background: T.s2
          }}>
            <div style={{ flex: 1, textAlign: "center" }}>
              <p style={{ fontFamily: T.fM, fontSize: 11, color: T.H }}>{g.speedBefore} mph</p>
              <p style={{ fontFamily: T.fB, fontSize: 10, color: T.t3 }}>{g.beforeLabel}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 0, flex: 2 }}>
              <div style={{ flex: 1, height: 1, background: T.H }} />
              <div style={{
                padding: "3px 8px", borderRadius: 6,
                background: T.LD, border: `1px solid ${T.L}40`,
                flexShrink: 0
              }}>
                <span style={{ fontFamily: T.fB, fontSize: 10, color: T.L, fontWeight: 600 }}>GAP</span>
              </div>
              <div style={{ flex: 1, height: 1, background: T.t3, borderTop: "1px dashed", borderColor: T.t3 }} />
            </div>
            <div style={{ flex: 1, textAlign: "center" }}>
              <p style={{ fontFamily: T.fM, fontSize: 11, color: T.H }}>{g.speedAfter} mph</p>
              <p style={{ fontFamily: T.fB, fontSize: 10, color: T.t3 }}>{g.afterLabel}</p>
            </div>
          </div>

          {/* Reason */}
          <p style={{ fontFamily: T.fB, fontSize: 12, color: T.t2, lineHeight: 1.55 }}>
            <span style={{ color: T.t3, fontWeight: 600 }}>Reason: </span>{g.reason}
          </p>
        </Card>
      ))}

      <Banner type="info"
        text="Gaps are logged to preserve the integrity of the evidence chain. Evidence checks flag these windows automatically." />

      <div style={{ height: 16 }} />
      <Btn variant="secondary" label="View Coverage Details" iconRight="eye" full
        onClick={() => navigate("coverageDetails")} />

    </div>
  </div>
  );
}
