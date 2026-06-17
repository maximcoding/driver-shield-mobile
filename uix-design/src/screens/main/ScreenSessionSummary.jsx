import { useState } from "react";
import { T } from "../../theme";
import { Header, MapCard, Card, InfoRow, SecLabel, StatRow, SetRow, Btn, ExportSheet, ShareSheet, StatusBadge, TextRow } from "../../ui";
import { SESS_DEMO_STATES } from "../../data";

export function ScreenSessionSummary({ params = {}, onBack, navigate }) {
  const trip = params.trip || {
    id: "t1", date: "Today, Mar 9", timeStart: "08:14", timeEnd: "08:52",
    duration: "38 min", distance: "12.4 mi", events: 1, coverage: "high",
    vehicle: { year: "2023", make: "Tesla", model: "Model 3", plate: "7XSF422" },
  };
  const [demoState, setDemoState] = useState("no-events");
  const [showExport, setShowExport] = useState(false);
  const [showShare, setShowShare] = useState(false);

  const coverage = demoState === "limited" ? "medium" : "high";
  const eventCount = demoState === "events" ? 2 : 0;
  const limited = demoState === "limited";

  const gpsText = limited ? "Degraded" : "Strong";
  const gpsColor = limited ? T.M : T.H;
  const monText = limited ? "Gaps detected" : "Continuous";
  const monColor = limited ? T.M : T.H;

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header variant="push" title="Session Summary" onBack={onBack}
        actionIcon="upload" onAction={() => setShowShare(true)} />

      <div className="ds-screen-content" style={{ flex: 1, overflowY: "auto" }}>

        {/* Demo state switcher */}
        <div style={{ marginBottom: 16 }}>
          <p style={{
            fontFamily: T.fB, fontSize: 11, color: T.t3, letterSpacing: "0.08em",
            textTransform: "uppercase", marginBottom: 6
          }}>Demo — try each state:</p>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {SESS_DEMO_STATES.map(s => (
              <button key={s} onClick={() => setDemoState(s)}
                style={{
                  padding: "4px 10px", borderRadius: 8,
                  background: demoState === s ? T.priD : "transparent",
                  border: `1px solid ${demoState === s ? T.pri : T.bd}`,
                  fontFamily: T.fB, fontSize: 11, color: demoState === s ? T.priT : T.t3
                }}>
                {s.replace(/-/g, " ")}
              </button>
            ))}
          </div>
        </div>

        {/* Mini route map */}
        <MapCard height={140} showEvent={eventCount > 0}
          label={`${trip.timeStart} – ${trip.timeEnd} · ${trip.distance}`}
          style={{ marginBottom: 12 }} />

        {/* Session overview card */}
        <Card style={{ marginBottom: 16 }}>
          <InfoRow icon="car" label="Vehicle"
            value={`${trip.vehicle.year} ${trip.vehicle.make} ${trip.vehicle.model}`}
            detail={trip.vehicle.plate} />
          <InfoRow icon="calendar" label="Date" value={trip.date} />
          <InfoRow icon="clock" label="Time"
            value={`${trip.timeStart} – ${trip.timeEnd}`}
            detail={trip.duration} />
          <InfoRow icon="trips" label="Distance" value={trip.distance} last />
        </Card>

        {/* Coverage & Events — same row style as Monitoring */}
        <SecLabel text="Summary" />
        <Card style={{ marginBottom: 16 }}>
          <StatRow icon="eye" label="Coverage"
            statusText={coverage === "high" ? "High" : coverage === "medium" ? "Medium" : "Low"}
            statusColor={coverage === "high" ? T.H : coverage === "medium" ? T.M : T.L} />
          <StatRow icon="alertTri" label="Events"
            statusText={String(eventCount)}
            statusColor={eventCount > 0 ? T.M : T.H} last />
        </Card>

        {/* Limited coverage warning banner */}
        {limited && (
          <Banner type="warning"
            title="Limited coverage detected"
            text="Coverage during this session was not continuous. Records from gaps cannot be verified." />
        )}

        {/* Monitoring section */}
        <SecLabel text="Monitoring" />
        <Card style={{ marginBottom: 4 }}>
          <StatRow icon="satellite" label="GPS quality"
            right={<StatusBadge label={gpsText} color={gpsColor} bg={gpsColor === T.H ? T.HD : T.MD} />} />
          <StatRow icon="eye" label="Monitoring quality"
            right={<StatusBadge label={monText} color={monColor} bg={monColor === T.H ? T.HD : T.MD} />} />
          <StatRow icon="upload" label="Archive status"
            right={<StatusBadge label="Confirmed" color={T.H} bg={T.HD} />} last />
        </Card>

        {/* Events section */}
        <SecLabel text="Events" />
        <Card style={{ marginBottom: 20 }}>
          {eventCount === 0 ? (
            <TextRow icon="checkCircle" iconColor={T.H} text="No speeding events recorded" last />
          ) : (
            <SetRow icon="alertTri" iconColor={T.M}
              label={`${eventCount} speeding event${eventCount > 1 ? "s" : ""}`}
              value="Tap to review each event in detail"
              onPress={() => navigate("eventDetails", { event: { time: "08:32", speed: 87, limit: 65 } })}
              last />
          )}
        </Card>

        {/* Actions */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {eventCount > 0 && (
            <Btn variant="primary" label="Review Events" iconRight="evidence" full
              onClick={() => navigate("eventDetails", { event: { time: "08:32", speed: 87, limit: 65 } })} />
          )}
          <Btn variant="secondary" label="View Speed Details" iconRight="trips" full
            onClick={() => navigate("tripDetails", { trip })} />
          <Btn variant="ghost" label="Export" iconLeft="upload" full onClick={() => setShowExport(true)} />
          <Btn variant="ghost" label="Done" full onClick={onBack} />
        </div>

      </div>

      <ExportSheet visible={showExport} onClose={() => setShowExport(false)} title="Export Session" />
      <ShareSheet visible={showShare} onClose={() => setShowShare(false)} title="Share Session" />
    </div>
  );
}
