import Navbar from "../components/navbar";
import Header from "../components/header";
import SanctionEventButton from "../components/sanctionEventButton";
import SanctionAdvancedButton from "../components/sanctionAdvanceButton";
import SanctionHomeTable from "../components/sanctionHomeTable";

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen items-center bg-neutral ">
      <Header title="Dashboard" onboardingType="dashboard" />

      <div
        className="flex w-8/12 h-[700px] bg-white p-20 rounded-2xl mt-6 shadow-lg  flex-col overflow-y-auto"
        style={{ boxShadow: "0 10px 20px 10px rgba(134, 104, 255, 0.2)" }}
      >
        {/* flex container for the header and search/buttons */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-secondary">
            Search for student with sanctions
          </h1>
          <div className="flex space-x-4 items-center">
            <input
              style={{ backgroundColor: "#EDF1F7" }}
              className="rounded-full py-3 px-6 text-sm focus:outline-none focus:ring"
              type="text"
              id="searchInput"
              placeholder="Search..."
            />
            <SanctionEventButton id="eventButton" />
            <SanctionAdvancedButton id="advanceButton" />
          </div>
        </div>
        <SanctionHomeTable />
      </div>

      <Navbar />
    </div>
  );
};

export default Dashboard;
