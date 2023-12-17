"use client";
import React, { useState } from "react";

const SanctionHomeTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const openModal = (data) => {
    setSelectedData(data);
    setIsModalOpen(true);
  };
  return (
    <div className="relative overflow-x-auto mt-10" id="table">
      <table className="w-full text-sm text-left rtl:text-right text-secondary  ">
        <thead className="text-xs text-secondary uppercase bg-neutral font-bold border-b-2 border-gray-200">
          <tr>
            <th scope="col" className="px-6 py-3 ">
              Student ID
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Course
            </th>
            <th scope="col" className="px-6 py-3">
              Year
            </th>
            <th scope="col" className="px-6 py-3">
              Remarks
            </th>
            <th scope="col" className="px-6 py-3">
              Sanction
            </th>
          </tr>
        </thead>
        <tbody>
          {/* <tr
            className="bg-white border-b hover:bg-gray-100 cursor-pointer"
            onClick={() => openModal()}
          > */}
          <tr className="bg-white border-b " onClick={() => openModal()}>
            <td className="px-6 py-4 ">1801831</td>
            <td className="px-6 py-4">Angelo Valdez</td>
            <td className="px-6 py-4">BSCS</td>
            <td className="px-6 py-4">4</td>
            <td className="px-6 py-4">Absent</td>
            <td className="px-6 py-4">Default</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SanctionHomeTable;
