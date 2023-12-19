import OnboardingInfo from "./onboardingInfo";
import OnboardingInfoConfig from "./onboardingInfoConfig";
import OnboardingInfoClarity from "./onboardingInfoClarity";
import { motion } from "framer-motion";

const Header = ({ title, onboardingType }) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      className="flex justify-between items-center w-8/12 h-20 bg-primary p-10 rounded-2xl mt-14 shadow-lg"
      style={{ boxShadow: "0 10px 20px 10px rgba(134, 104, 255, 0.2)" }}
    >
      <h1 className="text-2xl font-semibold text-white ">{title}</h1>
      {/* Header to Pages*/}
      {onboardingType === "dashboard" && <OnboardingInfo />}
      {onboardingType === "config" && <OnboardingInfoConfig />}
      {onboardingType === "clarity" && <OnboardingInfoClarity />}
    </motion.div>
  );
};

export default Header;
