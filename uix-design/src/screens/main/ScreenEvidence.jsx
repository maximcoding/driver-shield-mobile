import { useState } from "react";
import { T, L } from "../../theme";
import { PageHeader, SetRow, Card, Banner, Btn, LoadingRow, Sheet, SelectRow, DatePickerSheet, TimePickerSheet, Ic, EmptyState } from "../../ui";

export function ScreenEvidence({ vehicles, selectedVehicle, navigate }) {
  const [veh, setVeh] = useState(selectedVehicle?.id || "");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [showVSel, setShowVSel] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [checking, setChecking] = useState(false);
  const selVeh = vehicles.find(v => v.id === veh) || vehicles[0];
  const canRun = veh && date && time;

  const runCheck = () => {
    if (!canRun) return;
    setChecking(true);
    setTimeout(() => {
      setChecking(false);
      navigate("evidenceResult", { vehicle: selVeh, date, time, result: "no-events-high" });
    }, 1800);
  };

  if (vehicles.length === 0) return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <PageHeader title="Evidence Check" />
      <div className="ds-screen-content" style={{ flex: 1, display: "flex", flexDirection: "column", minHeight: 0 }}>
        <p style={{ fontFamily: T.fB, fontSize: T.fsBody, color: T.t2, lineHeight: 1.5, marginBottom: 16, textAlign: "left" }}>
          Verify whether a speeding event was recorded for a specific vehicle, date, and time.
        </p>
        <EmptyState fullHeight noHorizontalPadding icon="car"
          title="No vehicle available"
          text="Add a vehicle first to run an evidence check for a specific date and time."
          cta={{ label: "Add Vehicle", icon: "plus", onClick: () => navigate("addVehicle") }} />
      </div>
    </div>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <PageHeader title="Evidence Check" />

      <div className="ds-screen-content" style={{ flex: 1, overflowY: "auto" }}>
        <p style={{ fontFamily: T.fB, fontSize: T.fsBody, color: T.t2, lineHeight: 1.5, marginBottom: 16, textAlign: "left" }}>
          Verify whether a speeding event was recorded for a specific vehicle, date, and time.
        </p>
        <Banner type="info"
          text="Results are only as reliable as coverage. If coverage was insufficient, we will say so." />

        {/* Form card */}
        <Card style={{ marginTop: 4 }}>
          {/* Vehicle selector row */}
          <SetRow icon="car" overline="Vehicle"
            label={`${selVeh.year} ${selVeh.make} ${selVeh.model}`}
            value={selVeh.plate}
            onPress={() => setShowVSel(true)} />

          {/* Date — opens DatePickerSheet */}
          <button onClick={() => setShowDatePicker(true)} style={{
            ...L.rowPad, ...L.row, background: "none", border: "none",
            borderBottom: `1px solid ${T.div}`, cursor: "pointer", width: "100%", textAlign: "left"
          }}>
            <div style={L.iconSlot}><Ic n="calendar" size={16} color={T.t2} /></div>
            <div style={L.content}>
              <p style={{ fontFamily: T.fB, fontSize: T.fsSm, fontWeight: 600, color: T.t2, letterSpacing: "0.02em", marginBottom: 2 }}>Date</p>
              <p style={{ fontFamily: T.fB, fontSize: T.fsMd, color: date ? T.t1 : T.t2 }}>
                {date ? new Date(date + "T00:00:00").toLocaleDateString(undefined, { weekday: "long", year: "numeric", month: "long", day: "numeric" }) : "Tap to select date"}
              </p>
            </div>
            <div style={L.right}><Ic n="chevR" size={16} color={T.t2} /></div>
          </button>

          {/* Time — opens TimePickerSheet */}
          <button onClick={() => setShowTimePicker(true)} style={{
            ...L.rowPad, ...L.row, background: "none", border: "none",
            cursor: "pointer", width: "100%", textAlign: "left"
          }}>
            <div style={L.iconSlot}><Ic n="clock" size={16} color={T.t2} /></div>
            <div style={L.content}>
              <p style={{ fontFamily: T.fB, fontSize: T.fsSm, fontWeight: 600, color: T.t2, letterSpacing: "0.02em", marginBottom: 2 }}>Time of incident</p>
              <p style={{ fontFamily: T.fB, fontSize: T.fsMd, color: time ? T.t1 : T.t2 }}>
                {time || "Tap to select time"}
              </p>
            </div>
            <div style={L.right}><Ic n="chevR" size={16} color={T.t2} /></div>
          </button>
        </Card>

        <div style={{ marginTop: 20 }}>
          {checking ? (
            <LoadingRow />
          ) : (
            <Btn variant={canRun ? "primary" : "secondary"}
              label="Run Evidence Check" iconRight={canRun ? "evidence" : undefined}
              full disabled={!canRun} onClick={runCheck} />
          )}
        </div>

        <p style={{ fontFamily: T.fB, fontSize: T.fsDetail, color: T.t2, textAlign: "left", marginTop: 12, lineHeight: 1.6 }}>
          Checks query your local telemetry archive only. No data leaves your device.
        </p>
      </div>

      {/* Vehicle selector sheet */}
      <Sheet visible={showVSel} onClose={() => setShowVSel(false)} title="Select Vehicle">
        {vehicles.map((v, i) => (
          <SelectRow key={v.id} label={`${v.year} ${v.make} ${v.model}`} sublabel={v.plate}
            selected={veh === v.id} onSelect={() => { setVeh(v.id); setShowVSel(false); }}
            last={i === vehicles.length - 1} />
        ))}
      </Sheet>

      <DatePickerSheet visible={showDatePicker} onClose={() => setShowDatePicker(false)}
        value={date} onChange={setDate} />

      <TimePickerSheet visible={showTimePicker} onClose={() => setShowTimePicker(false)}
        value={time} onChange={setTime} />
    </div>
  );
}
