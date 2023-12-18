"use client";
import Navbar from "../components/navbar";
import Header from "../components/header";
import SanctionEventButton from "../components/sanctionEventButton";
import SanctionAdvancedButton from "../components/sanctionAdvanceButton";
import SanctionHomeTable from "../components/sanctionHomeTable";
import { ArrowUpTrayIcon } from '@heroicons/react/24/solid';
import { convertTableToCSV } from '../utils/convertTableToCsv';
import { motion } from "framer-motion";
import FilterButton from "../components/filterButton";

const Dashboard = () => {

  const handleExportCSV = () => {
    // Assuming your table has an id="yourTableId"
    const table = document.getElementById('sanction-list');

    if (table) {
      const csvData = convertTableToCSV(table);

      // Create a Blob and download the CSV file
      const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.setAttribute('download', 'sanction_list_2024.csv');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="flex flex-col h-screen items-center bg-neutral ">
      <Header title="Dashboard" onboardingType="dashboard" />

      <div
        className="flex w-8/12 h-[700px] bg-white p-14 rounded-2xl mt-6 shadow-lg  flex-col overflow-y-auto"
        style={{ boxShadow: "0 10px 20px 10px rgba(134, 104, 255, 0.2)" }}
      >
        {/* flex container for the header and search/buttons */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-700">
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

            <motion.button 
              onClick={handleExportCSV} 
              className="bg-neutral py-2 px-3 rounded-lg flex gap-2 items-center"
              whileHover={{
                scale: 1.05, backgroundColor: '#d4d1e0'
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
            >
              <p className="text-sm">Export</p>
              <ArrowUpTrayIcon className="h-4 w-4" />
            </motion.button>

            <FilterButton />
            {/* <SanctionEventButton id="eventButton" /> */}
            {/* <DropdownFilter id="advanceButton" /> */}
          </div>
        </div>
        <SanctionHomeTable />
      </div>
      <Navbar />
    </div>
  );
};

export default Dashboard;
