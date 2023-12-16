import Navbar from "../components/navbar";
import Header from "../components/header";
import SanctionConfigInput from "../components/sanctionConfigInput";
import SanctionConfigInput2 from "../components/sanctionConfigInput2";

const Config = () => {
  // Render the Dashboard content if authenticated
  return (
    <div className="flex flex-col h-screen items-center bg-neutral">
      <Header title="Configuration" onboardingType="config" />

      <div
        className="flex w-8/12 h-[700px] bg-white p-20 rounded-2xl mt-6 shadow-lg   flex-col"
        style={{ boxShadow: "0 10px 20px 10px rgba(134, 104, 255, 0.2)" }}
      >
        <h1 className="text-2xl font-semibold text-primary">
          Frequency Configurations{" "}
        </h1>
        <div>
          <h4 className="text-m font-bold italic text-primary font-bold pt-2.5">
            Abscences
          </h4>
        </div>
        <div className="space-x-4 mb-3 pt-4">
          <div id="input1" className="inline-block">
            <SanctionConfigInput />
          </div>
        </div>
        <div>
          <h4 className="text-xs font-bold italic text-secondary font-bold pt-2.5">
            *2 Lates is equivalent to 1 absent
          </h4>
        </div>
        <div>
          <h4 className="text-m font-bold italic text-primary font-bold pt-6">
            Sanction Description
          </h4>
        </div>
        <div className="space-x-4 mb-3 pt-4">
          <div id="input2" className="inline-block">
            <SanctionConfigInput2 />
          </div>
        </div>
        <div>
          <h4 className="text-m font-bold italic text-primary font-bold pt-10">
            Reset All
          </h4>
        </div>
        <div>
          <h4 className="text-xs font-bold italic text-secondary font-bold pt-2.5">
            *It is recommended to reset the configuration every school year
          </h4>
        </div>
      </div>

      <Navbar />
    </div>
  );
};

export default Config;
