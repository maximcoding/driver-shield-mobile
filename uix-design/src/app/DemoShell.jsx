import { T } from "../theme";
import { LeftMenu } from "./LeftMenu.jsx";
import { ScreenCanvas } from "./ScreenCanvas.jsx";
import { RightKitPanel } from "./RightKitPanel.jsx";

export function DemoShell({
  screen,
  homeState,
  setScreen,
  setScreenParams,
  setHomeState,
  setDockTab,
  setHistory,
  showDock,
  renderScreen,
  dockTab,
  switchTab,
}) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(145deg,#05060A 0%,#0B0E16 60%,#070911 100%)",
        fontFamily: T.fB,
        padding: "20px 0",
        position: "relative",
      }}
    >
      <a href="#main-content" className="ds-skip-link">
        Skip to main content
      </a>
      <nav aria-label="Screen navigation">
        <LeftMenu
          screen={screen}
          homeState={homeState}
          setScreen={setScreen}
          setScreenParams={setScreenParams}
          setHomeState={setHomeState}
          setDockTab={setDockTab}
          setHistory={setHistory}
        />
      </nav>
      <main id="main-content">
        <ScreenCanvas
          screen={screen}
          showDock={showDock}
          renderScreen={renderScreen}
          dockTab={dockTab}
          switchTab={switchTab}
        />
      </main>
      <aside aria-label="Component kit">
        <RightKitPanel />
      </aside>
    </div>
  );
}
