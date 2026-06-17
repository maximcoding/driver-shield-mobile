import { useState } from "react";
import { Header, FInput, Btn } from "../../ui";

export function ScreenAddVehicle({ onBack, onSave }) {
  const [form, setForm] = useState({ make: "", model: "", year: "", plate: "", color: "", nickname: "" });
  const set = k => v => setForm(f => ({ ...f, [k]: v }));
  const valid = form.make && form.model && form.year && form.plate;
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header variant="push" title="Add Vehicle" onBack={onBack}
        actionLabel="Save" onAction={() => valid && onSave && onSave(form)} />
      <div className="ds-screen-content" style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: 16 }}>
        <FInput label="Make" value={form.make} onChange={set("make")} placeholder="e.g. Toyota" iconLeft="car" />
        <FInput label="Model" value={form.model} onChange={set("model")} placeholder="e.g. Camry" />
        <FInput label="Year" value={form.year} onChange={set("year")} placeholder="e.g. 2022" type="number" iconLeft="calendar" />
        <FInput label="License Plate" value={form.plate} onChange={set("plate")} placeholder="e.g. ABC-1234" />
        <FInput label="Color (optional)" value={form.color} onChange={set("color")} placeholder="e.g. Silver" />
        <FInput label="Nickname (optional)" value={form.nickname} onChange={set("nickname")} placeholder="e.g. Daily driver"
          hint="Used to identify this vehicle quickly in the app." />
        <div style={{ marginTop: 8 }}>
          <Btn variant={valid ? "primary" : "secondary"} label="Save Vehicle" full
            disabled={!valid} onClick={() => onSave && onSave(form)} />
        </div>
      </div>
    </div>
  );
}
