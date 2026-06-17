import { Header, EmptyState, VehicleRow, Btn } from "../../ui";

export function ScreenVehicleSelector({ vehicles, selectedVehicle, onSelect, onBack, navigate }) {
  if (vehicles.length === 0) return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header variant="push" title="Select Vehicle" onBack={onBack} />
      <EmptyState fullHeight icon="car"
        title="No vehicles yet"
        text="You have no saved vehicles. Add one to get started."
        cta={{ label: "Add Vehicle", icon: "plus", onClick: () => navigate && navigate("addVehicle") }} />
    </div>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header variant="push" title="Select Vehicle" onBack={onBack} />
      <div className="ds-screen-content" style={{ flex: 1, overflowY: "auto", paddingBottom: 0 }}>
        {vehicles.map((v, i) => (
          <VehicleRow key={v.id} vehicle={v}
            selected={selectedVehicle?.id === v.id}
            onSelect={() => onSelect(v)}
            last={i === vehicles.length - 1} />
        ))}
        <div style={{ paddingTop: 12 }}>
          <Btn variant="ghost" label="Add Vehicle" iconLeft="plus" full
            onClick={() => navigate && navigate("addVehicle")} />
        </div>
      </div>
    </div>
  );
}
