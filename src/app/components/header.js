import OnboardingInfo from "./onboardingInfo";
import OnboardingInfoConfig from "./onboardingInfoConfig";
import OnboardingInfoClarity from "./onboardingInfoClarity";

const Header = ({ title, onboardingType }) => {
  return (
    <div
      className="overflow-y-auto flex justify-between items-center w-8/12 h-20 bg-primary p-5 pl-12 rounded-2xl mt-14 shadow-lg"
      style={{ boxShadow: "0 10px 20px 10px rgba(134, 104, 255, 0.2)" }}
    >
      <h1 className="text-2xl font-semibold text-white">{title}</h1>
      {/* <OnboardingInfo onInfoClick={onInfoClick} /> */}
      {onboardingType === "dashboard" && <OnboardingInfo />}
      {onboardingType === "config" && <OnboardingInfoConfig />}
      {onboardingType === "clarity" && <OnboardingInfoClarity />}
    </div>
  );
};

export default Header;
