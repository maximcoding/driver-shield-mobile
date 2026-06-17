import { T } from "../../theme";
import { Header, MapCard, StatTile, CollapsibleSection, StatRow, TextRow, Banner } from "../../ui";
import { EVIDENCE_ITEMS } from "../../data";

export function ScreenEventDetails({ params = {}, onBack }) {
  const evt = params.event || { time: "08:32", speed: 87, limit: 65 };
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header variant="push" title="Event Details" onBack={onBack} />
      <div className="ds-screen-content" style={{ flex: 1, overflowY: "auto" }}>
        {/* Route map with event marker */}
        <MapCard height={160} showEvent label={`${evt.time} — ${evt.speed} mph`} />

        <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
          <StatTile label="Recorded Speed" value={evt.speed} valueColor={T.L} unit="mph" />
          <StatTile label="Speed Limit" value={evt.limit} unit="mph" />
        </div>

        <CollapsibleSection label="Event metadata" defaultOpen={false}>
          <StatRow icon="clock" label="Time of event" statusText={evt.time} statusColor={T.t2} />
          <StatRow icon="location" label="GPS fix quality" statusText="Strong" statusColor={T.H} />
          <StatRow icon="eye" label="Coverage" statusText="High" statusColor={T.H} />
          <StatRow icon="upload" label="Archive status" statusText="Confirmed" statusColor={T.H} last />
        </CollapsibleSection>

        <CollapsibleSection label="Evidence chain" defaultOpen={false} dividerAbove>
          {EVIDENCE_ITEMS.map((item, i, arr) => (
            <TextRow key={item} icon="checkCircle" iconColor={T.H} text={item} last={i === arr.length - 1} />
          ))}
        </CollapsibleSection>

        <Banner type="info" title="Legal note"
          text="This record reflects data captured locally on your device. Consult a legal professional for admissibility guidance." />
      </div>
    </div>
  );
}
