import { Btn, CovBadge, Banner } from "../ui";

const PALETTE = [
  { token: "pri", label: "Primary" }, { token: "H", label: "High" }, { token: "M", label: "Medium" },
  { token: "L", label: "Low" }, { token: "per", label: "Perm" }, { token: "inf", label: "Info" }, { token: "nm", label: "Muted" },
];

export function RightKitPanel() {
  return (
    <div className="ds-panel ds-panel--right">
      <p className="ds-panel__title">Component Kit</p>
      <p className="ds-kit-label">Buttons</p>
      <div className="ds-section__list">
        <Btn variant="primary" label="Primary" size="sm" onClick={() => {}} />
        <Btn variant="secondary" label="Secondary" size="sm" onClick={() => {}} />
        <Btn variant="ghost" label="Ghost" size="sm" onClick={() => {}} />
        <Btn variant="danger" label="Danger" size="sm" onClick={() => {}} />
      </div>
      <p className="ds-kit-label">Coverage Badges</p>
      <div className="ds-section__list ds-section__list--wrap">
        <CovBadge level="high" />
        <CovBadge level="medium" />
        <CovBadge level="low" />
        <CovBadge level="none" />
      </div>
      <p className="ds-kit-label">Banners</p>
      <div className="ds-section__list">
        <Banner type="warning" text="GPS signal weak" />
        <Banner type="error" text="Permission required" />
        <Banner type="info" text="Protection is off" />
        <Banner type="offline" text="No connection" />
        <Banner type="permission" text="Enable location" />
        <Banner type="success" text="Session saved" />
      </div>
      <p className="ds-kit-label">Token Palette</p>
      <div className="ds-section__list ds-section__list--wrap">
        {PALETTE.map(p => (
          <div key={p.label} className={`ds-token-swatch ds-token-swatch--${p.token}`}>
            <div className="ds-token-swatch__box" />
            <span className="ds-token-swatch__label">{p.label}</span>
          </div>
        ))}
      </div>
      <p className="ds-kit-label">Typography</p>
      <div className="ds-typo-showcase">
        <p className="ds-typo-h1">H1 Display</p>
        <p className="ds-typo-h2">H2 Title</p>
        <p className="ds-typo-h3">H3 Section</p>
        <p className="ds-typo-body">Body text</p>
        <p className="ds-typo-body-sm">Body small / secondary</p>
        <p className="ds-typo-caption">Label / Caption</p>
        <p className="ds-typo-mono">00:00 Mono</p>
      </div>
    </div>
  );
}
