import { SCREEN_GROUPS } from "../registry/screenGroups.js";

export function LeftMenu({
  screen,
  homeState,
  setScreen,
  setScreenParams,
  setHomeState,
  setDockTab,
  setHistory,
}) {
  return (
    <div className="ds-panel ds-panel--left">
      <p className="ds-panel__title">DriveShield UI Kit</p>
      {SCREEN_GROUPS.map(({ group, items }) => (
        <div key={group} className="ds-section">
          <p className="ds-section__label">{group}</p>
          {items.map(item => {
            const isActive = screen === item.id && (!item.hs || homeState === item.hs);
            return (
              <button
                key={item.label}
                type="button"
                className={isActive ? "ds-nav-btn ds-nav-btn--active" : "ds-nav-btn"}
                onClick={() => {
                  if (item.hs) {
                    setHomeState(item.hs);
                    setScreen("home");
                    setDockTab("home");
                    setHistory([]);
                    setScreenParams({});
                  } else {
                    setScreenParams(item.params || {});
                    setScreen(item.id);
                    if (["home", "trips", "evidence", "settings"].includes(item.id)) {
                      setDockTab(item.id);
                      setHistory([]);
                    }
                  }
                }}
              >
                ◀ {item.label}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}
