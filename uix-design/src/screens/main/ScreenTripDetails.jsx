import { useState } from "react";
import { T, L } from "../../theme";
import { Header, MapCard, Card, StatTile, CovBadge, SecLabel, SpeedGraph, ProgressBar, ShareSheet, Banner } from "../../ui";
import { TRIP_DEMO_STATES, WAYPOINTS_BASE, COVERAGE_SEGS } from "../../data";

export function ScreenTripDetails({ params = {}, onBack, navigate }) {
  const trip = params.trip || {
    id: "t1", date: "Monday, Mar 9", timeStart: "08:14", timeEnd: "08:52",
    duration: "38 min", distance: "12.4 mi", coverage: "high",
    vehicle: { year: "2023", make: "Tesla", model: "Model 3", plate: "7XSF422" },
  };
  const [demoState, setDemoState] = useState("no-events");
  const [showShare, setShowShare] = useState(false);

  const hasEvents = demoState === "events";
  const limited   = demoState === "limited";

  const points = WAYPOINTS_BASE.map((w, i) => ({
    ...w,
    speed: limited && i >= 4 && i <= 6
      ? Math.max(w.speed - 8, 0)
      : hasEvents && i === 4
        ? 87
        : w.speed,
  }));

  const speedLimit = 70;
  const eventIndices = hasEvents ? [4] : [];

  const covColor = (q) => q === "high" ? T.H : q === "medium" ? T.M : T.L;

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header variant="push" title="Trip Details" onBack={onBack}
        actionIcon="upload" onAction={() => setShowShare(true)} />

      <div className="ds-screen-content" style={{ flex: 1, overflowY: "auto" }}>
        <div style={{ padding: "16px 0 80px" }}>

          {/* Demo switcher */}
          <div style={{ marginBottom: 16 }}>
            <p style={{ fontFamily: T.fB, fontSize: 11, color: T.t3, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>
              Demo — try each state:
            </p>
            <div style={{ display: "flex", gap: 6 }}>
              {TRIP_DEMO_STATES.map(s => (
                <button key={s} onClick={() => setDemoState(s)} style={{
                  padding: "4px 10px", borderRadius: 8,
                  background: demoState === s ? T.priD : "transparent",
                  border: `1px solid ${demoState === s ? T.pri : T.bd}`,
                  fontFamily: T.fB, fontSize: 11, color: demoState === s ? T.priT : T.t3
                }}>{s.replace(/-/g, " ")}</button>
              ))}
            </div>
          </div>

          {/* Route map */}
          <MapCard height={170} showEvent={hasEvents} label={`${trip.timeStart} – ${trip.timeEnd}`}
            style={{ marginBottom: 12 }} />

          {/* Trip header card */}
          <Card style={{ marginBottom: 16 }}>
            <div style={{ display: "flex", gap: 10 }}>
              <StatTile label="Distance" value={trip.distance} />
              <StatTile label="Duration" value={trip.duration} />
              <StatTile label="Coverage" badge={<CovBadge level={limited ? "medium" : trip.coverage} />} />
            </div>
          </Card>

          {/* Speed graph */}
          <SecLabel text="Speed Profile" />
          {hasEvents && (
            <Banner type="warning"
              title="Speeding event at 08:29"
              text="Recorded speed 87 mph — speed limit 70 mph." />
          )}
          {limited && (
            <Banner type="warning"
              title="GPS gap between 08:31–08:38"
              text="Speed data during this window may be incomplete." />
          )}
          <Card style={{ padding: "12px 14px 8px", marginBottom: 4 }}>
            <SpeedGraph points={points} limit={speedLimit} eventIndices={eventIndices} />
            {/* Legend */}
            <div style={{ display: "flex", gap: 16, paddingTop: 8, paddingBottom: 4 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <div style={{ width: 16, height: 2, borderRadius: 999, background: T.pri }} />
                <span style={{ fontFamily: T.fB, fontSize: 10, color: T.t2 }}>Recorded speed</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <svg width="16" height="8"><line x1="0" y1="4" x2="16" y2="4" stroke={T.L} strokeWidth="1" strokeDasharray="4 3" /></svg>
                <span style={{ fontFamily: T.fB, fontSize: 10, color: T.t2 }}>Speed limit ({speedLimit} mph)</span>
              </div>
              {hasEvents && (
                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <div style={{ width: 8, height: 8, borderRadius: 999, background: T.L }} />
                  <span style={{ fontFamily: T.fB, fontSize: 10, color: T.t2 }}>Event</span>
                </div>
              )}
            </div>
          </Card>

          {/* Waypoint timeline — tokens only, accessible contrast */}
          <SecLabel text="Waypoints" />
          <Card style={{ marginBottom: 16, paddingLeft: T.cardPad, paddingRight: T.cardPad }}>
            {points.map((w, i) => (
              <div
                key={i}
                style={{
                  ...L.row,
                  alignItems: "center",
                  gap: T.rowGap,
                  padding: `${T.rowVLg}px 0`,
                  ...L.rowBorder(i === points.length - 1),
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{
                    width: 8, height: 8, borderRadius: 999,
                    background: eventIndices.includes(i) ? T.L : i === 0 || i === points.length - 1 ? T.pri : T.t2,
                    boxShadow: eventIndices.includes(i) ? `0 0 6px ${T.L}` : "none"
                  }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontFamily: T.fB, fontSize: T.fsMd, fontWeight: 500, color: T.t1 }}>{w.label}</p>
                  <p style={{ fontFamily: T.fM, fontSize: T.fsDetail, color: T.t2, marginTop: 2 }}>{w.t}</p>
                </div>
                <div style={{ flexShrink: 0, display: "flex", alignItems: "baseline", gap: 4 }}>
                  <span style={{
                    fontFamily: T.fM, fontSize: T.fsMd, fontWeight: 700,
                    color: eventIndices.includes(i) ? T.L : w.speed > speedLimit ? T.M : T.t1,
                    letterSpacing: "-0.02em"
                  }}>{w.speed}</span>
                  <span style={{ fontFamily: T.fB, fontSize: T.fsDetail, color: T.t2 }}>mph</span>
                </div>
              </div>
            ))}
          </Card>

          {/* Coverage segments */}
          <SecLabel text="Coverage Segments" />
          <Card style={{ padding: "12px 16px", marginBottom: 16 }}>
            {COVERAGE_SEGS.map((seg, i) => {
              const qColor = covColor(limited && i === 2 ? "medium" : seg.quality);
              return (
                <div key={i} style={{ marginBottom: i < COVERAGE_SEGS.length - 1 ? 12 : 0 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                    <span style={{ fontFamily: T.fM, fontSize: 11, color: T.t2 }}>{seg.label}</span>
                    <span style={{ fontFamily: T.fB, fontSize: 11, fontWeight: 600, color: qColor }}>
                      {limited && i === 2 ? "60%" : `${seg.pct}%`}
                    </span>
                  </div>
                  <ProgressBar
                    pct={limited && i === 2 ? 60 : seg.pct}
                    color={qColor}
                  />
                </div>
              );
            })}
          </Card>

        </div>
      </div>

      <ShareSheet visible={showShare} onClose={() => setShowShare(false)} title="Share Trip Details" />
    </div>
  );
}
