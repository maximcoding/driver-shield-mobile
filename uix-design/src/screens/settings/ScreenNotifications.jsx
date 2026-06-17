import { useState } from "react";
import { Header, EmptyState, NotifRow } from "../../ui";
import { getNotifData } from "../../data";
import { T } from "../../theme";

export function ScreenNotifications({ navigate, onBack }) {
  const [items, setItems] = useState(() => getNotifData(T));
  const unread = items.filter(n => !n.read).length;

  const markAllRead = () => setItems(prev => prev.map(n => ({ ...n, read: true })));

  if (items.length === 0) return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header variant="push" title="Notifications" onBack={onBack} />
      <EmptyState fullHeight icon="bell" title="No notifications" text="You're all caught up. Notifications about your drives and protection status appear here." />
    </div>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header variant="push" title="Notifications" onBack={onBack}
        actionLabel={unread > 0 ? "Mark all read" : undefined}
        onAction={unread > 0 ? markAllRead : undefined} />
      <div className="ds-screen-content" style={{ flex: 1, overflowY: "auto" }}>
        {items.map((n, i) => (
          <NotifRow
            key={n.id}
            icon={n.icon}
            iconColor={n.color}
            iconBg={n.bg}
            title={n.title}
            body={n.body}
            time={n.time}
            read={n.read}
            last={i === items.length - 1}
            onClick={() => {
              setItems(prev => prev.map(x => x.id === n.id ? { ...x, read: true } : x));
              navigate("notificationDetail", { notif: n });
            }}
          />
        ))}
      </div>
    </div>
  );
}
