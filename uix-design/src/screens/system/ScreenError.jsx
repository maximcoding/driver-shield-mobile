import { T } from "../../theme";
import { Ic, Btn } from "../../ui";

export function ScreenError({ navigate, onBack, params = {} }) {
  const { title = "Something went wrong", message = "An unexpected error occurred. Please try again or restart the app." } = params;
  return (
    <div className="fu ds-screen-root">
      <div className="ds-screen-center">
        <div className="ds-icon-badge--error">
          <Ic n="xCircle" size={44} color={T.er} sw={1.5} />
        </div>
        <p className="ds-label-uppercase">Error</p>
        <h1 className="ds-heading-hero ds-heading-hero--sm">{title}</h1>
        <p className="ds-body-copy">{message}</p>
      </div>
      <div className="ds-screen-actions">
        <Btn variant="primary" label="Try Again" iconLeft="check" full onClick={onBack} />
        <Btn variant="ghost" label="Go to Home" iconLeft="home" full onClick={() => navigate("home")} />
      </div>
    </div>
  );
}
