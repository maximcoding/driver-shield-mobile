/** Mock data and constants for subscription / paywall / checkout / invoices. */

export const PLANS = [
  {
    id: "monthly",
    label: "Monthly",
    price: "$4.99",
    period: "/mo",
    detail: "Billed monthly · cancel anytime",
  },
  {
    id: "annual",
    label: "Annual",
    price: "$39.99",
    period: "/yr",
    detail: "Save 33% · billed once a year",
    badge: "Best value",
  },
];

export const CHECKOUT_STATES = ["loading", "success-redirect", "failed-redirect"];

export const SUB_EXPIRED_STATES = ["expired", "payment-failed", "trial-ended"];

export const MOCK_INVOICES = [
  {
    id: "inv-1",
    date: "Apr 1, 2025",
    amount: "$39.99",
    status: "Paid",
    planLabel: "Annual plan",
    invoiceNumber: "INV-2025-004",
    paymentMethod: "Visa ···· 4242",
  },
  {
    id: "inv-2",
    date: "Apr 1, 2024",
    amount: "$39.99",
    status: "Paid",
    planLabel: "Annual plan",
    invoiceNumber: "INV-2024-004",
    paymentMethod: "Visa ···· 4242",
  },
  {
    id: "inv-3",
    date: "Apr 1, 2023",
    amount: "$34.99",
    status: "Paid",
    planLabel: "Annual plan",
    invoiceNumber: "INV-2023-004",
    paymentMethod: "Visa ···· 4242",
  },
];
