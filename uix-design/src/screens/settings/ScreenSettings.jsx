import { useState } from "react";
import { T } from "../../theme";
import {
  Ic,
  Btn,
  Card,
  SetRow,
  PermRow,
  PageHeader,
  SectionHeader,
  RetRow,
  HBadge,
  Seg,
  CtrlRow,
  TogRow,
  SelectRow,
  Sheet,
  Modal,
  ConfirmSheet,
  ProgressBar,
  Banner,
} from "../../ui";

export function ScreenSettings({ vehicles, selectedVehicle, setSelectedVehicle, navigate, onLogout }) {
  const [theme, setTheme] = useState("dark");
  const [lang, setLang] = useState("English");
  const [units, setUnits] = useState("imperial");
  const [reminder, setReminder] = useState(true);
  const [showLogout, setShowLogout] = useState(false);
  const [drivingAlert, setDrivingAlert] = useState(false);
  const [showTheme, setShowTheme] = useState(false);
  const [showLang, setShowLang] = useState(false);
  const [showVSel, setShowVSel] = useState(false);
  const [permState, setPermState] = useState("healthy");
  const [showPermHelp, setShowPermHelp] = useState(false);

  const permRestricted = permState === "restricted";

  const themeOpts = [
    { id: "dark", label: "Dark", sub: "Default — dark background" },
    { id: "light", label: "Light", sub: "Light background" },
    { id: "system", label: "System", sub: "Follows device setting" },
  ];
  const langOpts = [
    { id: "en", label: "English" },
    { id: "fr", label: "Français" },
    { id: "de", label: "Deutsch" },
    { id: "es", label: "Español" },
    { id: "he", label: "עברית" },
  ];

  const hasVehicle = !!selectedVehicle;
  const vaultUsedPct = 38;
  const vaultUsedGB = "1.9 GB";
  const vaultTotalGB = "5.0 GB";

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", position: "relative" }}>
      <PageHeader title="Settings"
        right={
          <button onClick={() => setPermState(s => s === "healthy" ? "restricted" : "healthy")}
            style={{
              padding: `4px ${T.rowVSm}px`, borderRadius: T.rPill,
              background: permRestricted ? T.LD : T.HD,
              border: `1px solid ${permRestricted ? T.erB : T.suB}`,
              fontFamily: T.fB, fontSize: T.fsXs, fontWeight: 600,
              color: permRestricted ? T.L : T.H
            }}>
            {permRestricted ? "Demo: restricted" : "Demo: healthy"}
          </button>
        } />

      <div className="ds-screen-content" style={{ flex: 1, overflowY: "auto", paddingBottom: 100 }}>
        <SectionHeader label="System Health" top />
        <Card style={{ overflow: "visible" }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 12,
            padding: "14px 16px 12px",
            borderBottom: `1px solid ${T.div}`,
            background: permRestricted
              ? `linear-gradient(135deg,${T.LFaint},transparent)`
              : `linear-gradient(135deg,${T.HFaint},transparent)`,
          }}>
            <div style={{
              width: 38, height: 38, borderRadius: T.r, flexShrink: 0,
              background: permRestricted ? T.LD : T.HD,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Ic n="shield" size={18} color={permRestricted ? T.L : T.H} sw={1.6} />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{
                fontFamily: T.fD, fontSize: 14, fontWeight: 700, color: T.t1,
                letterSpacing: "-0.01em"
              }}>DriveShield Core</p>
              <p style={{ fontFamily: T.fB, fontSize: 11, color: permRestricted ? T.M : T.H, marginTop: 2 }}>
                {permRestricted
                  ? "One or more permissions require attention"
                  : "All systems operational"}
              </p>
            </div>
            <HBadge status={permRestricted ? "warning" : "healthy"} />
          </div>

          <PermRow icon="location"
            label="GPS Location"
            detail="Always-on access required for background recording"
            status={permRestricted ? "restricted" : "healthy"} />
          <PermRow icon="bell"
            label="Notifications"
            detail="Reminders and session summaries"
            status={permRestricted ? "off" : "allowed"}
            last={!permRestricted} />

          {permRestricted && (
            <div style={{ padding: `${T.rowVSm}px ${T.rowH}px` }}>
              <Btn variant="danger" iconLeft="lock" label="Fix Permissions" full
                onClick={() => setShowPermHelp(true)} />
            </div>
          )}
        </Card>

        <SectionHeader label="Permissions" />
        <Card>
          <SetRow icon="location" label="Location Access"
            value={permRestricted ? "Restricted — tap to open device settings" : "Always — background access enabled"}
            onPress={() => setShowPermHelp(true)}
            last
            right={<div style={{ display: "flex", alignItems: "center", gap: T.gapSm }}>
              <HBadge status={permRestricted ? "restricted" : "healthy"} />
              <Ic n="chevR" size={13} color={T.t3} />
            </div>} />
        </Card>

        <SectionHeader label="Preferences" />
        <Card>
          <SetRow icon="eye" label="Theme"
            value={themeOpts.find(o => o.id === theme)?.label}
            onPress={() => setShowTheme(true)} />
          <SetRow icon="globe" label="Language"
            value={langOpts.find(o => o.id === lang)?.label}
            onPress={() => setShowLang(true)} />
          <CtrlRow icon="gauge" label="Speed Units" last
            right={
              <Seg
                options={[{ id: "imperial", label: "MPH" }, { id: "metric", label: "KM/H" }]}
                value={units}
                onChange={setUnits} />
            } />
        </Card>

        <SectionHeader label="Notifications" />
        <Card>
          <TogRow
            icon="bell"
            label="Auto-Record Reminder"
            detail="Prompt to enable protection before typical drive times"
            on={reminder}
            onToggle={() => setReminder(v => !v)} />
          <TogRow
            icon="car"
            label="Driving Reminder"
            detail="Alert if a drive is detected without protection active"
            on={drivingAlert}
            onToggle={() => setDrivingAlert(v => !v)}
            last />
        </Card>

        <SectionHeader label="Vehicle" />
        <Card>
          <SetRow icon="car" label="Default Vehicle"
            value={hasVehicle
              ? `${selectedVehicle.year} ${selectedVehicle.make} ${selectedVehicle.model} · ${selectedVehicle.plate}`
              : "Not set — tap to select"}
            onPress={() => setShowVSel(true)} />
          <SetRow icon="plus" label="Add Vehicle" onPress={() => navigate("addVehicle")} last />
        </Card>

        <SectionHeader label="Data Retention Standards" />
        <Card style={{ marginBottom: 12 }}>
          <RetRow
            icon="database"
            label="Hot Storage (Raw)"
            period="90 days"
            detail="Full-resolution telemetry stored locally on-device. Not synced to any external service." />
          <RetRow
            icon="lock"
            label="Evidence Vault"
            period="2 years"
            detail="Flagged session records retained for legal reference. Hash-verified. Device-only."
            last />
          <div style={{ padding: "12px 16px", borderTop: `1px solid ${T.div}` }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{
                fontFamily: T.fB, fontSize: 11, fontWeight: 600, color: T.t2,
                letterSpacing: "0.07em", textTransform: "uppercase"
              }}>Vault Capacity</span>
              <span style={{ fontFamily: T.fM, fontSize: 11, color: T.t2 }}>
                {vaultUsedGB}
                <span style={{ color: T.t3 }}> / {vaultTotalGB}</span>
              </span>
            </div>
            <ProgressBar pct={vaultUsedPct} color={vaultUsedPct > 80 ? T.L : vaultUsedPct > 60 ? T.M : T.H} />
            <p style={{ fontFamily: T.fB, fontSize: 10, color: T.t3, marginTop: 6, lineHeight: 1.5 }}>
              {vaultUsedPct}% used — all data stays on this device under your control.
            </p>
          </div>
        </Card>

        <div style={{ marginBottom: T.rowVSm }}>
          <Btn variant="ghost" iconLeft="upload" label="Export My Data" full />
        </div>

        <SectionHeader label="About" />
        <Card style={{ marginBottom: 16 }}>
          <SetRow icon="info"  label="App Version" value="2.1.0 (build 241)" />
          <SetRow icon="globe" label="Terms & Privacy" onPress={() => navigate("terms")} />
          <SetRow icon="question" label="Help & FAQ"    onPress={() => navigate("help")} />
          <SetRow icon="eye"   label="Contact Support"  onPress={() => navigate("contact")} />
          <SetRow icon="check" label="About DriveShield" onPress={() => navigate("about")} last />
        </Card>

        <SectionHeader label="Account" />
        <Card style={{ marginBottom: 32 }}>
          <SetRow icon="eye"  label="Account Settings" onPress={() => navigate("account")} />
          <SetRow icon="lock" label="Sign Out" danger onPress={() => setShowLogout(true)} last />
        </Card>
      </div>

      <Modal visible={showTheme} onClose={() => setShowTheme(false)} title="Appearance">
        {themeOpts.map((t, i) => (
          <SelectRow key={t.id} label={t.label} sublabel={t.sub}
            selected={theme === t.id}
            onSelect={() => { setTheme(t.id); setShowTheme(false); }}
            last={i === themeOpts.length - 1} />
        ))}
      </Modal>

      <Modal visible={showLang} onClose={() => setShowLang(false)} title="Language">
        {langOpts.map((l, i) => (
          <SelectRow key={l.id} label={l.label}
            selected={lang === l.id}
            onSelect={() => { setLang(l.id); setShowLang(false); }}
            last={i === langOpts.length - 1} />
        ))}
      </Modal>

      <Sheet visible={showVSel} onClose={() => setShowVSel(false)} title="Default Vehicle">
        {vehicles.map((v, i) => (
          <SelectRow key={v.id}
            label={`${v.year} ${v.make} ${v.model}`}
            sublabel={v.plate}
            selected={selectedVehicle?.id === v.id}
            onSelect={() => { setSelectedVehicle(v); setShowVSel(false); }}
            last={i === vehicles.length - 1} />
        ))}
        <div style={{ padding: "8px 0 4px" }}>
          <Btn variant="ghost" label="Add Vehicle" iconLeft="plus" full
            onClick={() => { setShowVSel(false); navigate("addVehicle"); }} />
        </div>
      </Sheet>

      <Sheet visible={showPermHelp} onClose={() => setShowPermHelp(false)} title="Permission Guidance">
        <div style={{ padding: "8px 0 0" }}>
          <Banner type="warning"
            title="Location access is restricted"
            text="DriveShield requires always-on location access to record evidence while driving. Open device Settings to update permissions." />
        </div>
        <div style={{ padding: "12px 0 0", display: "flex", flexDirection: "column", gap: 8 }}>
          <Btn variant="primary" label="Open Device Settings" full onClick={() => setShowPermHelp(false)} />
          <Btn variant="secondary" label="Not now" full onClick={() => setShowPermHelp(false)} />
        </div>
      </Sheet>

      <ConfirmSheet
        visible={showLogout}
        onClose={() => setShowLogout(false)}
        title="Sign out?"
        body="You will be signed out of DriveShield on this device. Your locally recorded telemetry will not be deleted."
        confirmLabel="Sign Out"
        onConfirm={() => { onLogout?.(); setShowLogout(false); }}
        danger />
    </div>
  );
}
