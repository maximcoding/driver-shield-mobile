/**
 * DriveShield app root. Holds app state and navigation; screen routing lives in getScreenElement.jsx.
 */
import { useState } from "react";
import { DS } from "../theme";
import { DemoShell } from "./DemoShell.jsx";
import { getScreenElement } from "./getScreenElement.jsx";
import { DOCK_SCREENS } from "../registry/dock.js";
import { VEHICLES, TRIPS } from "../data";

export default function App() {
  const [screen, setScreen] = useState("launch");
  const [history, setHistory] = useState([]);
  const [dockTab, setDockTab] = useState("home");
  const [screenParams, setScreenParams] = useState({});
  const [protectionOn, setProtectionOn] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(VEHICLES[0]);
  const [homeState, setHomeState] = useState("off");

  const navigate = (to, params = {}) => {
    setHistory((h) => [...h, { screen, params: screenParams }]);
    setScreen(to);
    setScreenParams(params);
  };

  const goBack = () => {
    if (history.length > 0) {
      const prev = history[history.length - 1];
      setHistory((h) => h.slice(0, -1));
      setScreen(prev.screen);
      setScreenParams(prev.params);
    }
  };

  const switchTab = (tab) => {
    setDockTab(tab);
    setScreen(tab);
    setHistory([]);
    setScreenParams({});
  };

  const showDock = DOCK_SCREENS.includes(screen);

  const context = {
    navigate,
    onBack: goBack,
    screenParams,
    vehicles: VEHICLES,
    trips: TRIPS,
    selectedVehicle,
    setSelectedVehicle,
    protectionOn,
    setProtectionOn,
    homeState,
    setHomeState,
    switchTab,
  };

  const renderScreen = () => getScreenElement(screen, context);

  return (
    <>
      <DS />
      <DemoShell
        screen={screen}
        homeState={homeState}
        setScreen={setScreen}
        setScreenParams={setScreenParams}
        setHomeState={setHomeState}
        setDockTab={setDockTab}
        setHistory={setHistory}
        showDock={showDock}
        renderScreen={renderScreen}
        dockTab={dockTab}
        switchTab={switchTab}
      />
    </>
  );
}
