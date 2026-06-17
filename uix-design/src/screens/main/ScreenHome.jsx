import { useState, useEffect } from "react";
import { T } from "../../theme";
import { PageHeader, StatusBadge, EmptyState, Card, Ic, Btn, SmartBanner, Sheet, SelectRow, ConfirmSheet, StatRow, Banner } from "../../ui";
import { BANNER_STATES } from "../../data";

export function ScreenHome({ vehicles, selectedVehicle, setSelectedVehicle, protectionOn, setProtectionOn, homeState, setHomeState, navigate }) {
  const [showVSel, setShowVSel] = useState(false);
  const [showStartConfirm, setShowStartConfirm] = useState(false);
  const [showStopConfirm, setShowStopConfirm] = useState(false);
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const multi = vehicles.length > 1;

  useEffect(() => {
    if (!BANNER_STATES.includes(homeState)) setBannerDismissed(false);
  }, [homeState]);

  // Derive display values from homeState
  const noVehicles = homeState === "no_vehicles" || !selectedVehicle;
  const canActivate = !["gps_off", "perm", "no_vehicles"].includes(homeState);
  const isOn = ["on", "gps_weak", "offline", "driving"].includes(homeState);
  const isSessionEnded = homeState === "session_ended";

  const gps = homeState === "gps_weak" ? "weak"
    : homeState === "gps_off" ? "off"
      : isOn ? "strong" : "off";

  const cov = homeState === "gps_weak" || homeState === "offline" ? "medium"
    : isOn ? "high" : "off";

  const hb = homeState === "offline" ? "pending"
    : homeState === "driving" ? "uploading"
      : isOn ? "synced" : "off";

  const gpsConfig = {
    strong: { text: "Strong", color: T.H, detail: "8 satellites acquired" },
    weak: { text: "Weak", color: T.M, detail: "Signal degraded — move to open area" },
    acquiring: { text: "Acquiring", color: T.M, detail: "Searching for signal…" },
    off: { text: "Off", color: T.t3, detail: "Enable protection to activate" },
  };
  const covConfig = {
    high: { text: "High", color: T.H, detail: "Full evidence capture active" },
    medium: { text: "Medium", color: T.M, detail: "Partial coverage — check GPS signal" },
    low: { text: "Low", color: T.L, detail: "Poor coverage — move to open area" },
    off: { text: "Off", color: T.t3, detail: "Enable protection to activate" },
  };
  const hbConfig = {
    uploading: { text: "Uploading", color: T.inf, detail: "Sending telemetry…" },
    synced: { text: "Synced", color: T.H, detail: "Last upload: just now" },
    pending: { text: "Pending", color: T.M, detail: "Buffered — waiting for connection" },
    off: { text: "Off", color: T.t3, detail: "Enable protection to activate" },
  };

  const badgeLabel = homeState === "gps_off" ? "GPS Off"
    : homeState === "perm" ? "No Permission"
      : isOn ? "Active" : "Standby";
  const badgeColor = homeState === "perm" ? T.er
    : homeState === "gps_off" ? T.t3
      : isOn ? T.pri : T.t3;
  const badgeBg = homeState === "perm" ? T.erD
    : homeState === "gps_off" ? T.nmD
      : isOn ? T.priD : T.nmD;

  // No vehicles state
  if (noVehicles) return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <PageHeader
        title={<span style={{ fontSize: 18 }}>DriveShield</span>}
        right={<StatusBadge label="Standby" color={T.t3} bg={T.nmD} />} />
      <div className="ds-screen-content" style={{ flex: 1, display: "flex", flexDirection: "column", minHeight: 0 }}>
        <EmptyState fullHeight noHorizontalPadding icon="car"
          title="No vehicle added"
          text="Add a vehicle to start using Protection and recording evidence."
          cta={{ label: "Add Vehicle", icon: "plus", onClick: () => navigate("addVehicle") }}
          cta2={{ label: "Choose Vehicle", icon: "car", variant: "secondary", onClick: () => navigate("vehicleSelector") }} />
      </div>
    </div>
  );

  const showStateBanner = BANNER_STATES.includes(homeState) && !bannerDismissed;
  const dismissBanner = () => setBannerDismissed(true);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", position: "relative" }}>
      <PageHeader
        title={<span style={{ fontSize: 18 }}>DriveShield</span>}
        right={<StatusBadge label={badgeLabel} color={badgeColor} bg={badgeBg} />} />

      {/* Floating banners — over Protection button, same position and style */}
      {showStateBanner && (
        <div style={{
          position: "absolute", top: "34%", left: T.pagePadX, right: T.pagePadX, zIndex: 50,
          borderRadius: T.rLg, overflow: "hidden",
          boxShadow: "0 12px 40px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.08)"
        }}>
          {homeState === "gps_off" && (
            <SmartBanner type="warning" title="GPS unavailable"
              text="Enable Location Services in your device settings to use Protection."
              autoCloseMs={10000} onClose={dismissBanner} floating />
          )}
          {homeState === "perm" && (
            <SmartBanner type="permission" title="Location access required"
              text="Go to Settings → Privacy → Location Services and set DriveShield to Always."
              autoCloseMs={10000} onClose={dismissBanner} floating />
          )}
          {homeState === "gps_weak" && (
            <SmartBanner type="warning" title="GPS signal weak"
              text="Coverage quality may be reduced. Move to an open area for better recording."
              autoCloseMs={10000} onClose={dismissBanner} floating />
          )}
          {homeState === "offline" && (
            <SmartBanner type="offline" title="No internet connection"
              text="Telemetry is being buffered locally and will sync when reconnected."
              autoCloseMs={10000} onClose={dismissBanner} floating />
          )}
        </div>
      )}
      {isSessionEnded && (
        <div style={{
          position: "absolute", top: "34%", left: T.pagePadX, right: T.pagePadX, zIndex: 50,
          borderRadius: T.rLg, overflow: "hidden",
          boxShadow: "0 12px 40px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.08)"
        }}>
          <SmartBanner
            type="success"
            title="Session saved"
            text="Your drive was recorded and saved. Processing upload…"
            floating
          />
        </div>
      )}

      <div className="ds-screen-content" style={{ flex: 1, overflowY: "auto" }}>
        {/* Vehicle summary */}
        <Card style={{ marginBottom: T.rowH }}>
          <div style={{
            display: "flex", alignItems: "flex-start", gap: T.rowGap,
            padding: `${T.rowVLg}px ${T.rowH}px`
          }}>
            <div style={{
              width: 24, height: 24, flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <Ic n="car" size={16} color={T.t2} />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: T.fB, fontSize: T.fsMd, fontWeight: 500, color: T.t1 }}>
                {selectedVehicle.nickname || `${selectedVehicle.year} ${selectedVehicle.make} ${selectedVehicle.model}`}
              </p>
              <p style={{ fontFamily: T.fB, fontSize: T.fsDetail, color: T.t2, marginTop: 1 }}>
                {selectedVehicle.plate}
              </p>
            </div>
            {multi && <Btn size="sm" variant="secondary" label="Change" onClick={() => setShowVSel(true)} />}
          </div>
        </Card>

        {/* Protection toggle hero */}
        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center",
          paddingTop: 12, paddingBottom: 16, gap: 0
        }}>
          {(() => {
            const healthy = homeState === "on" || homeState === "driving";
            const warning = homeState === "gps_weak" || homeState === "offline";
            const shieldBg = healthy ? T.pri : warning ? T.MD : canActivate ? T.s2 : T.s2;
            const shieldBorder = healthy ? T.pri : warning ? "rgba(240,160,32,0.35)" : T.bd;
            const shieldGlow = healthy ? `0 8px 36px ${T.priG}` : warning ? "0 8px 36px rgba(240,160,32,0.25)" : "none";
            const shieldIcon = healthy ? T.white : warning ? T.M : canActivate ? T.t2 : T.t1;
            return (
              <button
                onClick={() => {
                  if (!canActivate) return;
                  if (homeState === "off") { setShowStartConfirm(true); }
                  else { setShowStopConfirm(true); }
                }}
                className={healthy ? "pp" : ""}
                style={{
                  width: 148, height: 148, borderRadius: 999,
                  background: shieldBg,
                  border: `2px solid ${shieldBorder}`,
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                  gap: 8, transition: "background 0.3s ease, border-color 0.3s ease",
                  cursor: canActivate ? "pointer" : "not-allowed",
                  boxShadow: shieldGlow,
                  opacity: canActivate ? 1 : 0.5
                }}>
                <Ic n="shield" size={48} color={shieldIcon} sw={1.5} ariaLabel={isOn ? "Protection on" : "Protection off"} />
              </button>
            );
          })()}
          <p style={{
            fontFamily: T.fD, fontSize: 20, fontWeight: 800, color: T.t1,
            marginTop: 20, letterSpacing: "-0.02em"
          }}>
            {homeState === "gps_off" ? "GPS Required"
              : homeState === "perm" ? "Permission Required"
                : isOn ? "Protection ON"
                  : "Protection OFF"}
          </p>
          <p style={{ fontFamily: T.fB, fontSize: 13, color: T.t2, marginTop: 4, textAlign: "center" }}>
            {homeState === "gps_off" ? "Enable GPS to start recording"
              : homeState === "perm" ? "Location access is required"
                : homeState === "driving" ? "Session in progress"
                  : isOn ? "Recording in progress"
                    : "Tap to begin recording"}
          </p>
        </div>

        {/* In-drive live session card */}
        {homeState === "driving" && (
          <div className="fu" style={{ marginBottom: 12 }}>
            <div style={{
              background: T.HD, border: `1px solid rgba(45,212,160,0.25)`,
              borderRadius: 16, padding: "14px 16px"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <span className="blink" style={{
                  width: 8, height: 8, borderRadius: 999,
                  background: T.L, display: "block", flexShrink: 0
                }} />
                <span style={{
                  fontFamily: T.fB, fontSize: 10, fontWeight: 700, color: T.H,
                  letterSpacing: "0.12em", textTransform: "uppercase"
                }}>Recording</span>
              </div>
              <div style={{ display: "flex", gap: 20 }}>
                <div>
                  <p style={{
                    fontFamily: T.fM, fontSize: T.fsMetric, fontWeight: 700, color: T.t1,
                    letterSpacing: "0.02em"
                  }}>00:24:07</p>
                  <p style={{ fontFamily: T.fB, fontSize: T.fsXs, color: T.t2, marginTop: 2 }}>Elapsed</p>
                </div>
                <div>
                  <p style={{ fontFamily: T.fM, fontSize: T.fsMetric, fontWeight: 700, color: T.t1 }}>4.2</p>
                  <p style={{ fontFamily: T.fB, fontSize: T.fsXs, color: T.t2, marginTop: 2 }}>Miles</p>
                </div>
                <div>
                  <p style={{ fontFamily: T.fM, fontSize: T.fsMetric, fontWeight: 700, color: T.H }}>0</p>
                  <p style={{ fontFamily: T.fB, fontSize: T.fsXs, color: T.t2, marginTop: 2 }}>Events</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Status rows — shown when protection is on */}
        {isOn && (
          <div className="fu" style={{ marginTop: 4 }}>
            <Card>
              <StatRow icon="location" label="GPS"
                statusText={gpsConfig[gps].text} statusColor={gpsConfig[gps].color}
                detail={gpsConfig[gps].detail} />
              <StatRow icon="eye" label="Coverage"
                statusText={covConfig[cov].text} statusColor={covConfig[cov].color}
                detail={covConfig[cov].detail} />
              <StatRow icon="upload" label="Upload"
                statusText={hbConfig[hb].text} statusColor={hbConfig[hb].color}
                detail={hbConfig[hb].detail} last />
            </Card>
          </div>
        )}

        {/* Info note — protection off and no blocking issue */}
        {!isOn && homeState === "off" && (
          <div style={{ marginTop: 16 }}>
            <Banner type="info"
              text="No telemetry is collected while protection is off. Evidence checks are available in the Evidence tab." />
          </div>
        )}
      </div>

      {/* Vehicle Selector Sheet */}
      <Sheet visible={showVSel} onClose={() => setShowVSel(false)} title="Select Vehicle">
        {vehicles.map((v, i) => (
          <SelectRow key={v.id} label={`${v.year} ${v.make} ${v.model}`}
            sublabel={v.plate}
            selected={selectedVehicle.id === v.id}
            onSelect={() => { setSelectedVehicle(v); setShowVSel(false); }}
            last={i === vehicles.length - 1} />
        ))}
        <div style={{ padding: "8px 20px" }}>
          <Btn variant="ghost" label="Add Vehicle" iconLeft="plus" full
            onClick={() => { setShowVSel(false); navigate("addVehicle"); }} />
        </div>
      </Sheet>

      <ConfirmSheet
        visible={showStartConfirm}
        onClose={() => setShowStartConfirm(false)}
        title="Start protection?"
        body={`DriveShield will begin recording your drive for ${selectedVehicle?.year} ${selectedVehicle?.make} ${selectedVehicle?.model}. Your GPS data will be stored securely.`}
        confirmLabel="Start Recording"
        danger={false}
        onConfirm={() => { setHomeState("on"); setProtectionOn(true); }}
      />

      <ConfirmSheet
        visible={showStopConfirm}
        onClose={() => setShowStopConfirm(false)}
        title="Stop protection?"
        body="Stopping will end the current recording session. The session will be saved and uploaded automatically."
        confirmLabel="Stop Recording"
        danger={false}
        onConfirm={() => { setHomeState("session_ended"); setProtectionOn(false); }}
      />
    </div>
  );
}
