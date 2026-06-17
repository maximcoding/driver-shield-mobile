export const SCREEN_GROUPS = [
  {
    group: "Auth", items: [
      { label: "Splash", id: "splash" },
      { label: "Welcome", id: "welcome" },
      { label: "Sign In / Sign Up Hub", id: "signInHub" },
      { label: "Social Auth (Google)", id: "socialCallback", params: { provider: "google" } },
      { label: "Social Auth (Apple)", id: "socialCallback", params: { provider: "apple" } },
      { label: "Complete Profile (Google)", id: "socialDataCompletion", params: { provider: "Google" } },
      { label: "Complete Profile (Apple)", id: "socialDataCompletion", params: { provider: "Apple", email: "" } },
      { label: "Phone Entry", id: "phoneEntry" },
      { label: "SMS Verify", id: "smsVerify" },
      { label: "Terms & Privacy", id: "terms" },
      { label: "Session Expired", id: "sessionExpired" },
    ]
  },
  {
    group: "Onboarding", items: [
      { label: "Product Intro", id: "onboardIntro" },
      { label: "GPS Off", id: "gpsOff" },
      { label: "Launch / Permissions", id: "launch" },
      { label: "Vehicle Setup", id: "onboardVehicle" },
      { label: "Default Vehicle (Onboard)", id: "onboardDefaultVehicle" },
      { label: "Units", id: "onboardUnits" },
      { label: "Reminder Setup", id: "onboardReminder" },
      { label: "Onboard Complete", id: "onboardComplete" },
    ]
  },
  {
    group: "Home", items: [
      { label: "Home (Off)", id: "home", hs: "off" },
      { label: "Home (Active)", id: "home", hs: "on" },
      { label: "Home (GPS Weak)", id: "home", hs: "gps_weak" },
      { label: "Home (GPS Off)", id: "home", hs: "gps_off" },
      { label: "Home (No Permission)", id: "home", hs: "perm" },
      { label: "Home (Offline)", id: "home", hs: "offline" },
      { label: "Home (In Drive)", id: "home", hs: "driving" },
      { label: "Home (Session Ended)", id: "home", hs: "session_ended" },
      { label: "Home (No Vehicles)", id: "home", hs: "no_vehicles" },
    ]
  },
  {
    group: "Trips", items: [
      { label: "Trips", id: "trips" },
      { label: "Session Summary", id: "sessionSummary" },
      { label: "Trip Details", id: "tripDetails" },
    ]
  },
  {
    group: "Evidence", items: [
      { label: "Evidence", id: "evidence" },
      { label: "Result — Clean (High)", id: "evidenceResult", params: { result: "no-events-high" } },
      { label: "Result — Clean (Medium)", id: "evidenceResult", params: { result: "no-events-medium" } },
      { label: "Result — Clean (Low)", id: "evidenceResult", params: { result: "no-events-low" } },
      { label: "Result — Event (High)", id: "evidenceResult", params: { result: "event-high" } },
      { label: "Result — Event (Medium)", id: "evidenceResult", params: { result: "event-medium" } },
      { label: "Result — Insufficient", id: "evidenceResult", params: { result: "insufficient" } },
      { label: "Result — Not Monitored", id: "evidenceResult", params: { result: "not-monitored" } },
      { label: "Result — No Data", id: "evidenceResult", params: { result: "empty" } },
      { label: "Event Details", id: "eventDetails" },
      { label: "Coverage Details", id: "coverageDetails" },
      { label: "Gap Intervals", id: "gapIntervals" },
    ]
  },
  {
    group: "Vehicles", items: [
      { label: "Vehicle Selector (active)", id: "vehicleSelector" },
      { label: "Add Vehicle", id: "addVehicle" },
      { label: "Edit Vehicle", id: "editVehicle" },
      { label: "Set Default Vehicle", id: "defaultVehicle" },
    ]
  },
  {
    group: "Settings / Support", items: [
      { label: "Settings", id: "settings" },
      { label: "Account", id: "account" },
      { label: "Default Vehicle", id: "defaultVehicle" },
      { label: "Data Retention", id: "dataRetention" },
      { label: "Export My Data", id: "exportData" },
      { label: "Help & FAQ", id: "help" },
      { label: "Contact Support", id: "contact" },
      { label: "Feedback Sent", id: "feedbackSent" },
      { label: "Report a Problem", id: "reportProblem" },
      { label: "Security & Privacy", id: "dataSecurity" },
      { label: "About DriveShield", id: "about" },
    ]
  },
  {
    group: "Subscription", items: [
      { label: "Free Trial Offer", id: "freeTrial" },
      { label: "Checkout (loading)", id: "checkout", params: { plan: "annual" } },
      { label: "Checkout (trial)", id: "checkout", params: { plan: "trial" } },
      { label: "Paywall", id: "paywall" },
      { label: "Purchase Success", id: "purchaseSuccess" },
      { label: "Purchase Failed", id: "purchaseFailed" },
      { label: "Manage Subscription", id: "manageSubscription" },
      { label: "Invoice History", id: "invoiceHistory" },
      { label: "Invoice Details", id: "invoiceDetails", params: { invoice: { id: "inv-1", date: "Apr 1, 2025", amount: "$39.99", status: "Paid", planLabel: "Annual plan", invoiceNumber: "INV-2025-004", paymentMethod: "Visa ···· 4242" } } },
      { label: "Subscription Expired", id: "subscriptionExpired" },
    ]
  },
  {
    group: "Notifications", items: [
      { label: "Notifications", id: "notifications" },
      { label: "Notification Detail", id: "notificationDetail" },
    ]
  },
  {
    group: "Education", items: [
      { label: "How Coverage Works", id: "howCoverageWorks" },
      { label: "What Verdicts Mean", id: "whatVerdictsMean" },
    ]
  },
  {
    group: "Global", items: [
      { label: "Error Screen", id: "error" },
      { label: "No Internet", id: "noInternet" },
      { label: "Maintenance", id: "maintenance" },
      { label: "Update Required", id: "updateRequired" },
      { label: "Permission Required", id: "permRequired" },
      { label: "System Status", id: "systemStatus" },
    ]
  },
  {
    group: "Dev", items: [
      { label: "UI Kit", id: "uiKit" },
    ]
  }
];
