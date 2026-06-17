import { useState } from "react";
import { T } from "../../theme";
import { Header, Ic, Card, CovBadge, Btn, Banner, ExportSheet, ShareSheet } from "../../ui";

export function ScreenEvidenceResult({ params = {}, onBack, navigate }) {
  const { vehicle = { make: "Tesla", model: "Model 3", plate: "ABC-1234", year: "2023" },
    date = "2025-03-07", time = "08:14", result = "no-events-high" } = params;
  const [sel, setSel] = useState(result);
  const [showExport, setShowExport] = useState(false);
  const [showShare, setShowShare] = useState(false);

  const results = {
    "no-events-high":   { icon: "checkCircle", color: T.H,  bg: T.HD,   title: "No speeding events found",         sub: "High coverage",   detail: "The recorded telemetry for this vehicle, date, and time shows no speeding events. Coverage was strong throughout the session." },
    "no-events-medium": { icon: "checkCircle", color: T.M,  bg: T.MD,   title: "No events found — partial coverage", sub: "Medium coverage", detail: "No speeding events were detected, but coverage during this window was partial. This result may carry less evidentiary weight than a high-coverage check." },
    "no-events-low":    { icon: "checkCircle", color: T.L,  bg: T.LD,   title: "No events — low coverage",          sub: "Low coverage",    detail: "No speeding events were detected, but GPS coverage was consistently weak. The record is incomplete and may not be reliable as standalone evidence." },
    "event-high":       { icon: "alertTri",    color: T.M,  bg: T.MD,   title: "Speeding event recorded",           sub: "High coverage",   detail: "A speeding event was captured in the telemetry archive for this session. Coverage was strong. Tap below to view event details." },
    "event-medium":     { icon: "alertTri",    color: T.M,  bg: T.MD,   title: "Event found — medium coverage",     sub: "Medium coverage", detail: "A potential speeding event was detected, but coverage during this window was partial. Results may not be fully reliable as standalone evidence." },
    "insufficient":     { icon: "question",    color: T.M,  bg: T.MD,   title: "Insufficient coverage to verify",   sub: null,              detail: "Coverage during the specified window was too weak to produce a reliable result. This check cannot be used as evidence either way." },
    "insufficient-low": { icon: "question",    color: T.L,  bg: T.LD,   title: "Low coverage — cannot verify",      sub: "Low coverage",    detail: "GPS signal was consistently poor during this window. The archive record is incomplete and cannot be used as evidence for or against a speeding claim." },
    "not-monitored":    { icon: "minus",       color: T.nm, bg: T.nmD,  title: "Not monitored",                     sub: "Protection was OFF", detail: "Protection was disabled during the specified date and time. No telemetry was recorded for this period." },
    "empty":            { icon: "eye",         color: T.t2, bg: T.s2,   title: "No data available",                 sub: null,              detail: "There is no evidence record for this vehicle, date, and time. The session may not have been captured or may have been deleted." },
  };
  const r = results[sel] || results["no-events-high"];

  const demos = ["no-events-high", "no-events-medium", "no-events-low", "event-high", "event-medium", "insufficient", "insufficient-low", "not-monitored", "empty"];

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header variant="push" title="Evidence Result" onBack={onBack}
        actionIcon="upload" onAction={() => setShowShare(true)} />

      <div className="ds-screen-content" style={{ flex: 1, overflowY: "auto" }}>
        {/* Demo switcher */}
        <div style={{ marginBottom: 16 }}>
          <p style={{
            fontFamily: T.fB, fontSize: 11, color: T.t3, letterSpacing: "0.08em",
            textTransform: "uppercase", marginBottom: 6
          }}>Demo — try each result:</p>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {demos.map(d => (
              <button key={d} onClick={() => setSel(d)}
                style={{
                  padding: "4px 10px", borderRadius: 8,
                  background: sel === d ? T.priD : "transparent",
                  border: `1px solid ${sel === d ? T.pri : T.bd}`,
                  fontFamily: T.fB, fontSize: 11, color: sel === d ? T.priT : T.t3
                }}>
                {d.replace(/-/g, " ")}
              </button>
            ))}
          </div>
        </div>

        {/* Query summary */}
        <Card style={{ marginBottom: 16 }}>
          <div style={{ padding: "12px 16px", display: "flex", gap: 12, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Ic n="car" size={16} color={T.t2} />
              <span style={{ fontFamily: T.fM, fontSize: 12, color: T.t2 }}>
                {vehicle.year} {vehicle.make} {vehicle.model} · {vehicle.plate}
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Ic n="calendar" size={16} color={T.t2} />
              <span style={{ fontFamily: T.fM, fontSize: 12, color: T.t2 }}>{date}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Ic n="clock" size={16} color={T.t2} />
              <span style={{ fontFamily: T.fM, fontSize: 12, color: T.t2 }}>{time}</span>
            </div>
          </div>
        </Card>

        {/* Result card */}
        <div className="fu" key={sel}>
          <Card style={{ marginBottom: 16, border: `1.5px solid ${r.bg === "rgba(58,69,96,0.12)" ? T.bd : r.bg}` }}>
            <div style={{
              padding: "24px 20px", display: "flex", flexDirection: "column", alignItems: "center",
              textAlign: "center", gap: 12
            }}>
              <div style={{
                width: 64, height: 64, borderRadius: 999, background: r.bg,
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <Ic n={r.icon} size={28} color={r.color} sw={1.6} />
              </div>
              <div>
                <p style={{
                  fontFamily: T.fD, fontSize: 19, fontWeight: 800, color: T.t1,
                  letterSpacing: "-0.01em", marginBottom: 4
                }}>{r.title}</p>
                {r.sub && (
                  <CovBadge level={
                    r.sub.includes("High") ? "high" :
                      r.sub.includes("Medium") ? "medium" :
                        r.sub.includes("Low") ? "low" : "none"} />
                )}
              </div>
              <p style={{ fontFamily: T.fB, fontSize: 14, color: T.t2, lineHeight: 1.65, maxWidth: 280 }}>
                {r.detail}
              </p>
            </div>
          </Card>

          {(sel === "event-high" || sel === "event-medium") && (
            <Btn variant="primary" label="View Event Details" iconRight="chevR" full
              onClick={() => navigate("eventDetails", { event: { time: "08:32", speed: 87, limit: 65 } })} />
          )}

          {sel === "no-events-medium" && (
            <Banner type="warning"
              title="Partial coverage advisory"
              text="Coverage was not continuous. This result is weaker than a high-coverage clean check." />
          )}

          {sel === "no-events-low" && (
            <Banner type="error"
              title="Low coverage — limited reliability"
              text="GPS signal was weak for most of this session. This result may not hold up as standalone evidence." />
          )}

          {sel === "event-medium" && (
            <Banner type="warning"
              title="Partial coverage advisory"
              text="Evidence quality may be reduced. Consult a legal professional before relying on this record." />
          )}

          {sel === "insufficient" && (
            <Banner type="warning"
              title="Coverage was insufficient"
              text="This result cannot be used as evidence for or against a speeding claim. Check your GPS and signal settings for future sessions." />
          )}

          {sel === "insufficient-low" && (
            <Banner type="error"
              title="Low coverage — record incomplete"
              text="GPS signal was too poor to maintain a continuous record. This period cannot be verified." />
          )}

          {sel === "empty" && (
            <Banner type="info"
              title="No evidence record found"
              text="Start protection before drives to ensure sessions are captured and available for evidence checks." />
          )}
        </div>

        {sel !== "empty" && sel !== "not-monitored" && (
          <div style={{ display: "flex", flexDirection: "column", gap: T.rowGap, paddingTop: 8 }}>
            {(sel === "no-events-medium" || sel === "no-events-low" || sel === "insufficient" || sel === "insufficient-low") && (
              <Btn variant="secondary" label="View Coverage Details" iconRight="eye" full
                onClick={() => navigate("coverageDetails", { coverage: sel.includes("low") ? "low" : "medium" })} />
            )}
            {(sel === "no-events-medium" || sel === "no-events-low" || sel === "insufficient" || sel === "insufficient-low") && (
              <Btn variant="secondary" label="View Gap Intervals" iconRight="trips" full
                onClick={() => navigate("gapIntervals")} />
            )}
            <Btn variant="primary" label="Export Report" iconLeft="upload" full onClick={() => setShowExport(true)} />
            <Btn variant="ghost" label="Share Record" iconLeft="globe" full onClick={() => setShowShare(true)} />
          </div>
        )}

      </div>

      <ExportSheet visible={showExport} onClose={() => setShowExport(false)} title="Export Evidence Report" />
      <ShareSheet visible={showShare} onClose={() => setShowShare(false)} title="Share Evidence Record" />
    </div>
  );
}
