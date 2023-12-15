import Link from "next/link";
import SanctionNav from "@/app/components/sanctionNav";
import SanctionButton from "@/app/components/sanctionEventButton";
import SanctionAdvancedButton from "@/app/components/sanctionAdvanceButton";
import SanctionHomeTable from "@/app/components/sanctionHomeTable";

export default function Dashboard() {
  return (
    <div className="">
      <div className="bg-primary rounded-[15px] max-w-5xl p-3 mt-20 shadow-md mx-auto ">
        <div className="flex ">
          <h1 className="text-[36px] text-white font-bold italic ">Home</h1>
        </div>
      </div>

      <div
        className="main-container max-w-5xl mx-auto bg-white rounded-[15px] h-[560px] mt-8 shadow-md p-10"
        style={{ boxShadow: "0 10px 20px rgba(65, 84, 241, 0.35)" }}
      >
        <div className="flex flex-row justify-between items-center ">
          <div>
            <h1 className="text-xl italic text-primary font-bold">
              Search for students with sanction
            </h1>
          </div>

          <div className="space-x-4">
            <input
              style={{ backgroundColor: "#EDF1F7" }}
              className="rounded-full py-3 px-6 text-sm"
              type="text"
              id="myInput"
              placeholder="Type here..."
            />
            <SanctionButton />
            <SanctionAdvancedButton />
          </div>
        </div>

        <SanctionHomeTable />
      </div>

      <SanctionNav />
    </div>
  );
}
