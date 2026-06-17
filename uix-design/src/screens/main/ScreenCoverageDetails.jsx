import { T } from "../../theme";
import { Header, Card, StatTile, CovBadge, Banner, SectionHeader, ProgressBar } from "../../ui";
import { COVERAGE_DETAIL_SEGS } from "../../data";

export function ScreenCoverageDetails({ params = {}, onBack }) {
  const overall = params.coverage || "medium";
  const covColor = (q) => q === "high" ? T.H : q === "medium" ? T.M : T.L;
  const covLabel = (q) => q === "high" ? "High" : q === "medium" ? "Medium" : "Low";

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header variant="push" title="Coverage Details" onBack={onBack} />
      <div className="ds-screen-content" style={{ flex: 1, overflowY: "auto" }}>

        {/* Overall summary */}
        <Card style={{ marginBottom: 16 }}>
          <div style={{ display: "flex", gap: 0 }}>
            <StatTile label="Overall" badge={<CovBadge level={overall} />} />
            <StatTile label="Segments" value="4" />
            <StatTile label="Full coverage" value="65%" valueColor={T.H} />
          </div>
        </Card>

        <Banner type="info"
          text="Coverage is calculated per monitoring segment. Gaps reduce overall reliability." />

        <SectionHeader label="Monitoring segments" />
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {COVERAGE_DETAIL_SEGS.map((seg, i) => {
            const c = covColor(seg.quality);
            return (
              <Card key={i} style={{ padding: "14px 16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <div style={{
                    width: 8, height: 8, borderRadius: 999, background: c, flexShrink: 0,
                    boxShadow: `0 0 6px ${c}60`
                  }} />
                  <p style={{ fontFamily: T.fM, fontSize: T.fsMd, fontWeight: 600, color: T.t1, flex: 1 }}>
                    {seg.start} – {seg.end}
                  </p>
                  <span style={{
                    fontFamily: T.fB, fontSize: 10, fontWeight: 700, color: c,
                    letterSpacing: "0.06em", textTransform: "uppercase"
                  }}>{covLabel(seg.quality)}</span>
                </div>

                <ProgressBar pct={seg.pct} color={c} />

                <div style={{ display: "flex", gap: 16, marginTop: 8 }}>
                  <div>
                    <p style={{ fontFamily: T.fB, fontSize: 10, color: T.t3, letterSpacing: "0.06em", textTransform: "uppercase" }}>Duration</p>
                    <p style={{ fontFamily: T.fM, fontSize: 12, color: T.t1 }}>{seg.duration}</p>
                  </div>
                  <div>
                    <p style={{ fontFamily: T.fB, fontSize: 10, color: T.t3, letterSpacing: "0.06em", textTransform: "uppercase" }}>GPS</p>
                    <p style={{ fontFamily: T.fM, fontSize: 12, color: c }}>{seg.gps}</p>
                  </div>
                  <div>
                    <p style={{ fontFamily: T.fB, fontSize: 10, color: T.t3, letterSpacing: "0.06em", textTransform: "uppercase" }}>Satellites</p>
                    <p style={{ fontFamily: T.fM, fontSize: 12, color: T.t1 }}>{seg.sats}</p>
                  </div>
                  <div>
                    <p style={{ fontFamily: T.fB, fontSize: 10, color: T.t3, letterSpacing: "0.06em", textTransform: "uppercase" }}>Coverage</p>
                    <p style={{ fontFamily: T.fM, fontSize: 12, color: c }}>{seg.pct}%</p>
                  </div>
                </div>

                {seg.note && (
                  <p style={{
                    fontFamily: T.fB, fontSize: 12, color: T.t2, marginTop: 8,
                    padding: "6px 10px", borderRadius: 8, background: T.s2, lineHeight: 1.5
                  }}>{seg.note}</p>
                )}
              </Card>
            );
          })}
        </div>

        <div style={{ height: 20 }} />
        <Banner type="warning"
          title="Legal note"
          text="Segments with less than 80% coverage may carry reduced evidentiary weight. Consult a legal professional." />

      </div>
    </div>
  );
}
