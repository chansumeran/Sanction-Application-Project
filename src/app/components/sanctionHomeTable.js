"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { HashtagIcon } from '@heroicons/react/24/solid';

const SanctionHomeTable = () => {
  
  
  const [students, setStudents] = useState([]);

  const displayData = async () => {

    try {
      const response = await axios.get(
        `https://enormous-boat-production.up.railway.app/students/all`
      );

      const fetchedStudents = response.data;
      setStudents(fetchedStudents);

    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  useEffect(() => {
    displayData();
  }, []); 


  return (
    <div className="relative overflow-x-auto mt-10" id="table">
      <table id="sanction-list" className="w-full text-sm text-left rtl:text-right text-secondary  ">
        <thead className="text-xs text-softWhite uppercase bg-gray-700 font-bold border-b-2 border-gray-200">
          <tr className="text-center">
            <th scope="col" className="px-6 py-3 ">
              <div className="flex justify-center items-center gap-1">
              <HashtagIcon className="h-3 w-3" />
              ID Number
              </div>
              
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Department
            </th>
            <th scope="col" className="px-6 py-3">
              Course
            </th>
            <th scope="col" className="px-6 py-3">
              Year
            </th>
            <th scope="col" className="px-6 py-3">
              Total Absences
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Sanction
            </th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.studentId} className="bg-white border-b text-gray-700 text-center font-semibold">
              <td className="px-6 py-4">{student.studentId}</td>
              <td className="px-6 py-4">{student.fullName}</td>
              <td className="px-6 py-4">{student.department}</td>
              <td className="px-6 py-4">{student.course}</td>
              <td className="px-6 py-4">{student.yearLevel}</td>
              <td className="px-6 py-4">{student.totalAbsences}</td>
              <td className="px-6 py-4">
                {/* Conditionally set background color based on sanction description */}
                <div
                  className={`rounded-xl p-2 text-xs ${
                    student.sanction !== null
                      ? student.sanction.sanctionId === 1
                        ? 'bg-lowSanc text-white'
                        : student.sanction.sanctionId === 2
                        ? 'bg-medSanc text-white'
                        : student.sanction.sanctionId === 3
                        ? 'bg-highSanc text-white'
                        : 'bg-gray-300'
                      : 'bg-gray-300'
                  }`}
                >
                {student.sanction !== null
                ? student.sanction.description
                : 'No sanction'}
              </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SanctionHomeTable;
