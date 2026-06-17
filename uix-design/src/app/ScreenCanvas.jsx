import { motion, AnimatePresence } from "framer-motion";
import { T } from "../theme";
import { Ic, Dock } from "../ui";

export function ScreenCanvas({
  screen,
  showDock,
  renderScreen,
  dockTab,
  switchTab,
}) {
  return (
    <div className="ds-frame">
      <div className="ds-status-bar">
        <span className="ds-status-time">9:41</span>
        <div className="ds-status-notch" />
        <div className="ds-status-icons">
          <Ic n="wifi" size={14} color={T.t1} sw={2} />
          <Ic n="shield" size={13} color={T.t1} sw={2} />
        </div>
      </div>
      <div className="ds-frame-inner">
        <AnimatePresence mode="wait">
          <motion.div
            key={screen}
            className={`ds-scroll-area ${showDock ? "ds-scroll-area--with-dock" : ""}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </div>
      {showDock && <Dock active={dockTab} onChange={switchTab} />}
    </div>
  );
}
