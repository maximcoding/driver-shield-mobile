import { T } from "../../theme";
import { Ic, Btn } from "../../ui";

export function ScreenSessionExpired({ navigate }) {
  return (
    <div className="fu ds-screen-root">
      <div className="ds-screen-center">
        <div className="ds-icon-badge--error">
          <Ic n="lock" size={40} color={T.er} sw={1.5} />
        </div>
        <p className="ds-label-uppercase">Session Expired</p>
        <h1 className="ds-heading-hero">Sign in again</h1>
        <p className="ds-body-copy">
          Your session has expired for security reasons. Sign in again to continue using DriveShield.
        </p>
      </div>
      <div className="ds-screen-actions">
        <Btn variant="primary" label="Sign In Again" full onClick={() => navigate("welcome")} />
        <Btn variant="ghost" label="Contact Support" full onClick={() => {}} />
        <p className="ds-body-copy-sm">
          Your recorded data is safe and will be available after you sign in.
        </p>
      </div>
    </div>
  );
}
