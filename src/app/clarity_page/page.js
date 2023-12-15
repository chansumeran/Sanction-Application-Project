import SanctionNavClarity from "../components/sanctionNavClarity";
import SanctionClarityInput from "../components/sanctionClarityInput";
export default function Clarity() {
  return (
    <div className="">
      <div className="bg-primary rounded-[15px] max-w-5xl p-3 mt-20 shadow-md mx-auto ">
        <div className="flex ">
          <h1 className="text-[36px] text-white font-bold italic ">
            Clarity AI
          </h1>
        </div>
      </div>

      <div
        className="main-container max-w-5xl mx-auto bg-white rounded-[15px] h-[560px] mt-8 shadow-md p-10"
        style={{ boxShadow: "0 10px 20px rgba(65, 84, 241, 0.35)" }}
      >
        <div className="flex flex-row justify-between items-center ">
          <div>
            <h1 className="text-xl italic text-primary font-bold"></h1>
          </div>
        </div>
        <div className="pt-50">
          {/* padding-top */}
          <SanctionClarityInput />
        </div>
      </div>

      <SanctionNavClarity />
    </div>
  );
}
