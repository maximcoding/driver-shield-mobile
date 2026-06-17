/** Mock notification items. Accepts theme T to resolve color/bg tokens. */
export function getNotifData(T) {
  return [
    { id: 1, icon: "shield", color: T.H, bg: T.HD, title: "Protection started", body: "Recording began for Toyota Camry.", time: "Just now", read: false },
    { id: 2, icon: "alertTri", color: T.M, bg: T.MD, title: "GPS signal weak", body: "Coverage may be reduced on your current drive.", time: "12 min ago", read: false },
    { id: 3, icon: "checkCircle", color: T.H, bg: T.HD, title: "Session saved", body: "24 min · 4.2 mi · No events detected.", time: "1 hr ago", read: true },
    { id: 4, icon: "eye", color: T.inf, bg: T.infD, title: "Evidence check ready", body: "Your check for Mar 7 is complete. Tap to view results.", time: "Yesterday", read: true },
    { id: 5, icon: "lock", color: T.per, bg: T.perD, title: "Location permission changed", body: "Background GPS was restricted. Tap to fix.", time: "2 days ago", read: true },
    { id: 6, icon: "bell", color: T.t2, bg: T.s2, title: "Reminder: Start Protection", body: "Your typical drive time is approaching.", time: "3 days ago", read: true },
  ];
}
