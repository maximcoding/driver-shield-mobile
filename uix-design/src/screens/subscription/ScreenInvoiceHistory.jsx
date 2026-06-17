import { Header, Card, InvoiceRow } from "../../ui";
import { MOCK_INVOICES } from "../../data";

export function ScreenInvoiceHistory({ onBack, navigate }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header variant="push" title="Invoice History" onBack={onBack} />
      <div className="ds-screen-content" style={{ flex: 1, overflowY: "auto" }}>
        <Card style={{ marginBottom: 16 }}>
          {MOCK_INVOICES.map((inv, i, arr) => (
            <InvoiceRow
              key={inv.id}
              date={inv.date}
              planLabel={inv.planLabel}
              amount={inv.amount}
              status={inv.status}
              onPress={() => navigate("invoiceDetails", { invoice: inv })}
              last={i === arr.length - 1}
            />
          ))}
        </Card>
      </div>
    </div>
  );
}
