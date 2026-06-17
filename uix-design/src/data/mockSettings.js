/** Mock data for settings, help, report problem, and system status screens. */

export const FAQ_ITEMS = [
  { q: "How does DriveShield record my drives?", a: "DriveShield uses your device's GPS and motion sensors to silently record speed, location, and telemetry data whenever Protection is active. Sessions are stored encrypted on-device." },
  { q: "Can I use this evidence in court?", a: "DriveShield captures tamper-resistant telemetry records. While many users have successfully used these records in legal proceedings, admissibility depends on your jurisdiction. Always consult a legal professional." },
  { q: "Is my location data shared with anyone?", a: "No. All location and telemetry data is stored locally on your device. DriveShield does not sell, share, or upload your data to any third party without your explicit consent." },
  { q: "Why is my coverage showing as low?", a: "Low coverage usually means GPS signal was weak or intermittent. Try driving in open areas, ensure Location access is set to 'Always', and check that Background App Refresh is enabled." },
  { q: "How do I cancel my subscription?", a: "Subscriptions are managed through the App Store or Google Play. Go to your device's subscription settings to manage or cancel. Your data will remain accessible until the end of your billing period." },
  { q: "What happens if I delete the app?", a: "Deleting the app removes all locally stored telemetry data. If you have synced records, those may be recoverable. Export any important evidence before uninstalling." },
];

export const PROBLEM_CATEGORIES = [
  "Recording not starting",
  "GPS signal issues",
  "Session not saved",
  "Evidence check failed",
  "App crash / freeze",
  "Incorrect vehicle data",
  "Subscription / billing issue",
  "Other",
];

export const SYSTEM_STATES = ["bg-restricted", "buffer-full", "sync-recovered", "offline-mode"];

export const DEMO_VEHICLES_DEF = [
  { id: "v1", year: "2023", make: "Tesla", model: "Model 3", plate: "7XSF422", color: "#C0C0C0" },
  { id: "v2", year: "2019", make: "Toyota", model: "Camry", plate: "5HGJ812", color: "#1C3FAA" },
  { id: "v3", year: "2021", make: "Honda", model: "Civic", plate: "3MKP991", color: "#222" },
];
