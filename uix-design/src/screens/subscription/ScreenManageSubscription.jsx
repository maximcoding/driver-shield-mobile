import { useState } from "react";
import { T } from "../../theme";
import { Header, Card, SectionHeader, SetRow, StatusBadge, ConfirmSheet } from "../../ui";

export function ScreenManageSubscription({ navigate, onBack }) {
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header variant="push" title="Subscription" onBack={onBack} />
      <div className="ds-screen-content" style={{ flex: 1, overflowY: "auto" }}>

        {/* Current plan — standard Card with accent border */}
        <Card style={{ marginBottom: 12, borderColor: "rgba(61,127,255,0.35)", padding: `${T.rowVLg}px ${T.cardPad}px` }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <p style={{ fontFamily: T.fB, fontSize: T.fsSm, fontWeight: 600, color: T.t2, letterSpacing: "0.02em", margin: 0 }}>Active plan</p>
            <StatusBadge label="Active" color={T.H} bg={T.HD} />
          </div>
          <p style={{ fontFamily: T.fD, fontSize: 20, fontWeight: 700, color: T.t1, margin: "0 0 10px 0" }}>Annual</p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            <p style={{ fontFamily: T.fM, fontSize: T.fsBrand, fontWeight: 700, color: T.t1, margin: 0 }}>
              $39.99<span style={{ fontFamily: T.fB, fontSize: T.fsDetail, color: T.t2, fontWeight: 400 }}>/yr</span>
            </p>
            <p style={{ fontFamily: T.fB, fontSize: T.fsDetail, color: T.t2, margin: 0 }}>Renews Apr 1, 2026</p>
          </div>
        </Card>

        <SectionHeader label="Billing Status" />
        <Card style={{ marginBottom: 12, paddingLeft: T.cardPad, paddingRight: T.cardPad }}>
          <div style={{ padding: "14px 0", display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { label: "Status",          value: "Active",        valueColor: T.H },
              { label: "Auto-renew",      value: "On",            valueColor: T.H },
              { label: "Next charge",     value: "$39.99",        valueColor: T.t1 },
              { label: "Renewal date",    value: "Apr 1, 2026",   valueColor: T.t1 },
              { label: "Payment method",  value: "Visa ···· 4242",valueColor: T.t2 },
            ].map((row, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <p style={{ fontFamily: T.fB, fontSize: T.fsBody, color: T.t2 }}>{row.label}</p>
                <p style={{ fontFamily: T.fM, fontSize: T.fsDetail, color: row.valueColor }}>{row.value}</p>
              </div>
            ))}
          </div>
        </Card>

        <SectionHeader label="Invoices" />
        <Card style={{ marginBottom: 12 }}>
          <SetRow label="Invoice history" value="View all" onPress={() => navigate("invoiceHistory")} last />
        </Card>

        <SectionHeader label="Plan" />
        <Card>
          <SetRow icon="check"  label="Switch to Monthly"  value="$4.99/mo" onPress={() => {}} />
          <SetRow icon="upload" label="Restore Purchase"              onPress={() => {}} last />
        </Card>

        <SectionHeader label="Danger Zone" />
        <Card style={{ marginBottom: 32 }}>
          <SetRow icon="xCircle" label="Cancel Subscription" danger onPress={() => setShowCancelConfirm(true)} last />
        </Card>
      </div>

      <ConfirmSheet
        visible={showCancelConfirm}
        onClose={() => setShowCancelConfirm(false)}
        title="Cancel subscription?"
        body="Your subscription will remain active until Apr 1, 2026. After that, drive recording and evidence checks will be disabled."
        confirmLabel="Cancel Subscription"
        onConfirm={() => { setShowCancelConfirm(false); onBack(); }} />
    </div>
  );
}
