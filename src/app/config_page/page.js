import SanctionNavConfig from "../components/sanctionNavConfig";
import SanctionConfigInput from "../components/sanctionConfigInput";
export default function Configuration() {
  return (
    <div className="">
      <div className="bg-primary rounded-[15px] max-w-5xl p-3 mt-20 shadow-md mx-auto ">
        <div className="flex ">
          <h1 className="text-[36px] text-white font-bold italic ">
            Configuration
          </h1>
        </div>
      </div>

      <div
        className="main-container max-w-5xl mx-auto bg-white rounded-[15px] h-[560px] mt-8 shadow-md p-10"
        style={{ boxShadow: "0 10px 20px rgba(65, 84, 241, 0.35)" }}
      >
        <div className="flex flex-row justify-between items-center ">
          <div>
            <h1 className="text-xl italic text-primary font-bold">
              Frequency Configurations
            </h1>
          </div>
        </div>
        <div>
          <h4 className="text-m font-bold italic text-primary font-bold pt-2.5">
            Abscences
          </h4>
        </div>
        <div className="space-x-4 mb-3 pt-4">
          <div className="inline-block">
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
          <div className="inline-block">
            <SanctionConfigInput />
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

      <SanctionNavConfig />
    </div>
  );
}
