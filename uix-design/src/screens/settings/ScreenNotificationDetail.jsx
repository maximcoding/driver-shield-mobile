import { T } from "../../theme";
import { Ic, Header } from "../../ui";
import { getNotifData } from "../../data";

export function ScreenNotificationDetail({ params = {}, onBack }) {
  const notifData = getNotifData(T);
  const n = params.notif || notifData[0];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header variant="push" title="Notification" onBack={onBack} />
      <div
        className="ds-screen-content"
        style={{
          flex: 1,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center",
          textAlign: "center", paddingBottom: 24, borderBottom: `1px solid ${T.div}`, marginBottom: 20
        }}>
          <div style={{
            width: 64, height: 64, borderRadius: 18, background: n.bg,
            display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16
          }}>
            <Ic n={n.icon} size={28} color={n.color} sw={1.6} />
          </div>
          <h1 style={{
            fontFamily: T.fD, fontSize: 20, fontWeight: 800, color: T.t1,
            letterSpacing: "-0.01em", marginBottom: 8
          }}>{n.title}</h1>
          <p style={{ fontFamily: T.fB, fontSize: 14, color: T.t2, lineHeight: 1.65, maxWidth: 280 }}>{n.body}</p>
        </div>
        <p style={{
          fontFamily: T.fB, fontSize: T.fsSm, color: T.t3, textAlign: "center",
          letterSpacing: "0.04em"
        }}>{n.time}</p>
      </div>
    </div>
  );
}
