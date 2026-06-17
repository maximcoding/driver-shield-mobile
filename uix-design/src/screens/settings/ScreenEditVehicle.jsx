import { useState } from "react";
import { Header, FInput, Btn, ConfirmSheet } from "../../ui";

export function ScreenEditVehicle({ params = {}, onBack }) {
  const v = params.vehicle || { make: "Tesla", model: "Model 3", year: "2023", plate: "ABC-1234", color: "White", nickname: "" };
  const [form, setForm] = useState({ ...v });
  const [showConfirm, setShowConfirm] = useState(false);
  const set = k => val => setForm(f => ({ ...f, [k]: val }));
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header variant="push" title="Edit Vehicle" onBack={onBack}
        actionIcon="trash" actionVariant="danger" onAction={() => setShowConfirm(true)} />
      <div className="ds-screen-content" style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: 16 }}>
        <FInput label="Make" value={form.make} onChange={set("make")} iconLeft="car" />
        <FInput label="Model" value={form.model} onChange={set("model")} />
        <FInput label="Year" value={form.year} onChange={set("year")} iconLeft="calendar" type="number" />
        <FInput label="License Plate" value={form.plate} onChange={set("plate")} />
        <FInput label="Color" value={form.color} onChange={set("color")} />
        <FInput label="Nickname" value={form.nickname} onChange={set("nickname")} />
        <div style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 10 }}>
          <Btn variant="primary" label="Save Changes" full onClick={onBack} />
          <Btn variant="danger" label="Delete Vehicle" full onClick={() => setShowConfirm(true)} />
        </div>
      </div>

      <ConfirmSheet
        visible={showConfirm}
        onClose={() => setShowConfirm(false)}
        title="Delete vehicle?"
        body={`This will permanently remove ${form.year} ${form.make} ${form.model} and all associated trip data. This cannot be undone.`}
        confirmLabel="Delete Vehicle"
        onConfirm={onBack} />
    </div>
  );
}
