/**
 * Maps screen id to the corresponding screen element. Used by the app root to
 * resolve which component to render without keeping a giant switch in the root.
 * Receives a context object with navigation, state, and data.
 */
import { ScreenSessionExpired, ScreenError, ScreenNoInternet, ScreenMaintenance, ScreenUpdateRequired, ScreenUIKit } from "../screens/system";
import { ScreenSplash } from "../screens/splash";
import { ScreenWelcome, ScreenSocialCallback, ScreenSignInHub, ScreenSocialDataCompletion, ScreenPhoneEntry, ScreenSMSVerify, ScreenTerms } from "../screens/auth";
import { ScreenOnboardDefaultVehicle, ScreenOnboardIntro, ScreenGPSOff, ScreenOnboardComplete, ScreenOnboardVehicle, ScreenOnboardUnits, ScreenOnboardReminder, ScreenLaunch } from "../screens/onboard";
import { ScreenHome, ScreenTrips, ScreenEvidence, ScreenCoverageDetails, ScreenGapIntervals, ScreenEvidenceResult, ScreenEventDetails, ScreenSessionSummary, ScreenTripDetails } from "../screens/main";
import { ScreenSettings, ScreenAddVehicle, ScreenEditVehicle, ScreenVehicleSelector, ScreenAccount, ScreenHowCoverageWorks, ScreenWhatVerdictsMean, ScreenHelp, ScreenContact, ScreenReportProblem, ScreenDataSecurity, ScreenAbout, ScreenPermRequired, ScreenSystemStatus, ScreenNotifications, ScreenNotificationDetail, ScreenFeedbackSent, ScreenDefaultVehicle, ScreenDataRetention, ScreenExportData } from "../screens/settings";
import { ScreenPaywall, ScreenPurchaseSuccess, ScreenPurchaseFailed, ScreenFreeTrial, ScreenCheckout, ScreenSubscriptionExpired, ScreenManageSubscription, ScreenInvoiceHistory, ScreenInvoiceDetails } from "../screens/subscription";

/**
 * @param {string} screenId - Current screen id from app state
 * @param {object} ctx - Context: navigate, onBack, screenParams, vehicles, trips, selectedVehicle, setSelectedVehicle, protectionOn, setProtectionOn, homeState, setHomeState, switchTab
 * @returns {React.ReactNode|null}
 */
export function getScreenElement(screenId, ctx) {
  const shared = { navigate: ctx.navigate, onBack: ctx.onBack };
  const { screenParams, vehicles, trips, selectedVehicle, setSelectedVehicle, protectionOn, setProtectionOn, homeState, setHomeState, switchTab } = ctx;

  switch (screenId) {
    case "splash":
      return <ScreenSplash onContinue={() => ctx.navigate("welcome")} />;
    case "welcome":
      return <ScreenWelcome {...shared} />;
    case "phoneEntry":
      return <ScreenPhoneEntry {...shared} />;
    case "smsVerify":
      return <ScreenSMSVerify {...shared} />;
    case "terms":
      return <ScreenTerms {...shared} />;
    case "socialCallback":
      return <ScreenSocialCallback navigate={ctx.navigate} params={screenParams} />;
    case "signInHub":
      return <ScreenSignInHub navigate={ctx.navigate} />;
    case "socialDataCompletion":
      return <ScreenSocialDataCompletion navigate={ctx.navigate} params={screenParams} />;
    case "onboardDefaultVehicle":
      return <ScreenOnboardDefaultVehicle navigate={ctx.navigate} />;
    case "onboardIntro":
      return <ScreenOnboardIntro {...shared} />;
    case "launch":
      return <ScreenLaunch onContinue={() => ctx.navigate("onboardComplete")} />;
    case "gpsOff":
      return <ScreenGPSOff onBack={ctx.onBack} />;
    case "onboardVehicle":
      return <ScreenOnboardVehicle {...shared} />;
    case "onboardUnits":
      return <ScreenOnboardUnits navigate={ctx.navigate} />;
    case "onboardReminder":
      return <ScreenOnboardReminder navigate={ctx.navigate} />;
    case "onboardComplete":
      return <ScreenOnboardComplete onComplete={() => switchTab("home")} />;
    case "home":
      return (
        <ScreenHome
          {...shared}
          vehicles={vehicles}
          selectedVehicle={selectedVehicle}
          setSelectedVehicle={setSelectedVehicle}
          protectionOn={protectionOn}
          setProtectionOn={setProtectionOn}
          homeState={homeState}
          setHomeState={setHomeState}
        />
      );
    case "trips":
      return <ScreenTrips trips={trips} {...shared} />;
    case "evidence":
      return <ScreenEvidence {...shared} vehicles={vehicles} selectedVehicle={selectedVehicle} />;
    case "evidenceResult":
      return <ScreenEvidenceResult {...shared} params={screenParams} />;
    case "eventDetails":
      return <ScreenEventDetails {...shared} params={screenParams} />;
    case "sessionSummary":
      return <ScreenSessionSummary {...shared} params={screenParams} />;
    case "tripDetails":
      return <ScreenTripDetails {...shared} params={screenParams} />;
    case "coverageDetails":
      return <ScreenCoverageDetails params={screenParams} onBack={ctx.onBack} />;
    case "gapIntervals":
      return <ScreenGapIntervals {...shared} params={screenParams} />;
    case "sessionExpired":
      return <ScreenSessionExpired {...shared} />;
    case "error":
      return <ScreenError {...shared} params={screenParams} />;
    case "noInternet":
      return <ScreenNoInternet onRetry={ctx.onBack} />;
    case "maintenance":
      return <ScreenMaintenance />;
    case "updateRequired":
      return <ScreenUpdateRequired />;
    case "account":
      return <ScreenAccount {...shared} />;
    case "help":
      return <ScreenHelp onBack={ctx.onBack} />;
    case "contact":
      return <ScreenContact onBack={ctx.onBack} />;
    case "about":
      return <ScreenAbout {...shared} />;
    case "permRequired":
      return <ScreenPermRequired onBack={ctx.onBack} navigate={ctx.navigate} />;
    case "notifications":
      return <ScreenNotifications {...shared} />;
    case "notificationDetail":
      return <ScreenNotificationDetail params={screenParams} onBack={ctx.onBack} />;
    case "feedbackSent":
      return <ScreenFeedbackSent navigate={ctx.navigate} />;
    case "reportProblem":
      return <ScreenReportProblem onBack={ctx.onBack} navigate={ctx.navigate} />;
    case "dataSecurity":
      return <ScreenDataSecurity onBack={ctx.onBack} />;
    case "freeTrial":
      return <ScreenFreeTrial {...shared} />;
    case "checkout":
      return <ScreenCheckout navigate={ctx.navigate} params={screenParams} />;
    case "paywall":
      return <ScreenPaywall {...shared} />;
    case "purchaseSuccess":
      return <ScreenPurchaseSuccess navigate={ctx.navigate} />;
    case "purchaseFailed":
      return <ScreenPurchaseFailed {...shared} />;
    case "manageSubscription":
      return <ScreenManageSubscription {...shared} />;
    case "invoiceHistory":
      return <ScreenInvoiceHistory onBack={ctx.onBack} navigate={ctx.navigate} />;
    case "invoiceDetails":
      return <ScreenInvoiceDetails params={screenParams} onBack={ctx.onBack} />;
    case "subscriptionExpired":
      return <ScreenSubscriptionExpired navigate={ctx.navigate} />;
    case "defaultVehicle":
      return <ScreenDefaultVehicle navigate={ctx.navigate} onBack={ctx.onBack} />;
    case "dataRetention":
      return <ScreenDataRetention navigate={ctx.navigate} onBack={ctx.onBack} />;
    case "exportData":
      return <ScreenExportData navigate={ctx.navigate} onBack={ctx.onBack} />;
    case "systemStatus":
      return <ScreenSystemStatus navigate={ctx.navigate} onBack={ctx.onBack} />;
    case "howCoverageWorks":
      return <ScreenHowCoverageWorks onBack={ctx.onBack} />;
    case "whatVerdictsMean":
      return <ScreenWhatVerdictsMean onBack={ctx.onBack} />;
    case "settings":
      return (
        <ScreenSettings
          {...shared}
          vehicles={vehicles}
          selectedVehicle={selectedVehicle}
          setSelectedVehicle={setSelectedVehicle}
          onLogout={() => ctx.navigate("sessionExpired")}
        />
      );
    case "uiKit":
      return <ScreenUIKit onBack={ctx.onBack} />;
    case "vehicleSelector":
      return (
        <ScreenVehicleSelector
          vehicles={vehicles}
          selectedVehicle={selectedVehicle}
          onSelect={(v) => {
            setSelectedVehicle(v);
            ctx.onBack();
          }}
          onBack={ctx.onBack}
          navigate={ctx.navigate}
        />
      );
    case "addVehicle":
      return <ScreenAddVehicle onBack={ctx.onBack} onSave={ctx.onBack} />;
    case "editVehicle":
      return <ScreenEditVehicle params={screenParams} onBack={ctx.onBack} />;
    default:
      return null;
  }
}
