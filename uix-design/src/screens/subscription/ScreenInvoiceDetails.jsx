import { T } from "../../theme";
import { Header, Card, Btn } from "../../ui";
import { MOCK_INVOICES } from "../../data";

export function ScreenInvoiceDetails({ params = {}, onBack }) {
  const inv = params.invoice || MOCK_INVOICES[0];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header variant="push" title="Invoice" onBack={onBack} />
      <div className="ds-screen-content" style={{ flex: 1, overflowY: "auto" }}>
        <Card style={{ marginBottom: 16, paddingLeft: T.cardPad, paddingRight: T.cardPad, paddingTop: T.secTop, paddingBottom: T.secTop }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: T.fB, fontSize: T.fsDetail, color: T.t2 }}>Date</span>
              <span style={{ fontFamily: T.fM, fontSize: T.fsBody, color: T.t1 }}>{inv.date}</span>
            </div>
            {inv.invoiceNumber && (
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: T.fB, fontSize: T.fsDetail, color: T.t2 }}>Invoice number</span>
                <span style={{ fontFamily: T.fM, fontSize: T.fsBody, color: T.t1 }}>{inv.invoiceNumber}</span>
              </div>
            )}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: T.fB, fontSize: T.fsDetail, color: T.t2 }}>Plan</span>
              <span style={{ fontFamily: T.fM, fontSize: T.fsBody, color: T.t1 }}>{inv.planLabel}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: T.fB, fontSize: T.fsDetail, color: T.t2 }}>Amount</span>
              <span style={{ fontFamily: T.fM, fontSize: T.fsMd, fontWeight: 600, color: T.t1 }}>{inv.amount}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: T.fB, fontSize: T.fsDetail, color: T.t2 }}>Status</span>
              <span style={{ fontFamily: T.fB, fontSize: T.fsBody, color: T.H }}>{inv.status}</span>
            </div>
            {inv.paymentMethod && (
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: T.fB, fontSize: T.fsDetail, color: T.t2 }}>Payment method</span>
                <span style={{ fontFamily: T.fM, fontSize: T.fsBody, color: T.t2 }}>{inv.paymentMethod}</span>
              </div>
            )}
          </div>
        </Card>
        <div style={{ display: "flex", flexDirection: "column", gap: T.rowGap }}>
          {/* Will be wired to invoice PDF endpoint later */}
          <Btn variant="primary" label="Download PDF" full onClick={() => {}} />
          {/* Will open share sheet / API later */}
          <Btn variant="secondary" label="Share" full onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}
