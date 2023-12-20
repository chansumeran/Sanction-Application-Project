"use client";
import Navbar from "../components/navbar";
import Header from "../components/header";
import { ArrowUpTrayIcon } from '@heroicons/react/24/solid';
import { convertTableToCSV } from '../utils/convertTableToCsv';
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { HashtagIcon } from '@heroicons/react/24/solid';
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import "flowbite/dist/flowbite.css";
import { ArrowSmallLeftIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

const Dashboard = () => {

  const [selectedEvent, setSelectedEvent] = React.useState(new Set(["Event"]));
  const [selectedDept, setSelectedDept] = React.useState(new Set(["Department"]));
  const [selectedCourse, setSelectedCourse] = React.useState(new Set(["Course"]));
  const [selectedYear, setSelectedYear] = React.useState(new Set(["Year Level"]));
  
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleArrowLeftClick = () => {
    setIsOpen(false);
  };

  const replaceWhitespaceWithAmpersand = (value) => {
    return value.replace(/\s/g, "%");
  };

  const handleFilters = async () => {

    
    };


  {/* ..... */}
  const [students, setStudents] = useState([]);

  const displayData = async () => {

    let event = Array.from(selectedEvent).join(", ");
    let dept = Array.from(selectedDept).join(", ");
    let course = Array.from(selectedCourse).join(", ");
    let year = Array.from(selectedYear).join(", ");
    
    event = replaceWhitespaceWithAmpersand(event);
    dept = replaceWhitespaceWithAmpersand(dept);
    course = replaceWhitespaceWithAmpersand(course);
    year = replaceWhitespaceWithAmpersand(year);

      if(event === 'Event') {
        event = '';
      }
      else{
        event = `eventCode=${event}&`;
      }

      if(dept === 'Department') {
        dept = '';
      }
      else{
        dept = `departmentCode=${dept}&`;
      }

      if(course === 'Course') {
        course = '';
      }
      else{
        course = `course=${course}&`;
      }

      if(year === 'Year Level') {
        year = '';
      }
      else{
        year = `yearLevel=${year}&`;
      }    

    try {
      const response = await axios.get(
        `https://wecomplyapi-production.up.railway.app/students/filter?${event}${dept}${course}${year}`
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

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="flex w-8/12 h-[700px] bg-white p-14 rounded-2xl mt-6 shadow-lg  flex-col overflow-y-auto"
        style={{ boxShadow: "0 10px 20px 10px rgba(134, 104, 255, 0.2)" }}
      >
        {/* flex container for the header and search/buttons */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-700">
            List of Students 2024
          </h1>
          <div className="flex space-x-4 items-center">
            <motion.input
              whileHover={{ scale: 1.04 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 20,
                when: "afterChildren",
                duration: 0.5,
                ease: "easeInOut",
              }}
              style={{ backgroundColor: "#EDF1F7" }}
              className="rounded-full py-3 px-6 text-sm focus:outline-none focus:ring"
              type="text"
              id="searchInput"
              placeholder="Search..."
            />


          <div className="inset-0 flex items-center justify-center relative  text-left bg-primary rounded-lg">
            <motion.button
              whileHover={{
                scale: 1.05, backgroundColor: '#4d48a8'
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
              type="button"
              onClick={openModal}
              className="cursor-pointer inline-flex w-full justify-center gap-x-1.5 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300"
            >
              Filters
            </motion.button>
          </div>

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

          </div>
        </div>
        
        
      <div className="relative overflow-x-auto mt-10" id="table">
      {students.length === 0 ? (
            // Display a message when there are no results
            <div className="flex items-center justify-center mt-40">
              <p className="text-2xl text-gray-500">
                No results found for the selected filters.
              </p>
            </div>
          ) : (
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
                      ? student.sanction.sanctionId === 2
                        ? 'bg-lowSanc text-white'
                        : student.sanction.sanctionId === 3
                        ? 'bg-medSanc text-white'
                        : student.sanction.sanctionId === 4
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
      )}

      {/* Filter */}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" w-6/12 h-[700]px transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div>

                  {/* Header */}
                  <div className="flex gap-4 pb-2 border-b border-gray-200">
                    <div onClick={handleArrowLeftClick} className='cursor-pointer'>
                      <ArrowSmallLeftIcon className="h-6 w-6 pl-0.5" />
                    </div>
                    
                    <div className="flex justify-between items-center pb-2">
                      <Dialog.Title
                        as="h3"
                        className="text-small italic font-medium leading-6 text-gray-900 "
                      >
                        Set Filters Accordingly
                      </Dialog.Title>                
                    </div>
                  </div>   

                    {/* Events */}
                    <div>
                        <div className="my-3 px-2 text-lg text-primary">
                          <h1>
                            Event
                          </h1>
                        </div>
                      <Dropdown>
                        <DropdownTrigger>
                        
                          <Button 
                            variant="solid"
                            className="capitalize py-2 w-60 bg-gray-100 rounded-xl flex justify-between px-6 hover:bg-gray-300"
                          >
                            {selectedEvent}
                            <ChevronDownIcon className="h-4 w-4 pl-0.5" />
                          </Button>
                   
                        </DropdownTrigger>

                        <DropdownMenu 
                          aria-label="1"
                          variant="flat"
                          disallowEmptySelection
                          selectionMode="single"
                          selectedKeys={selectedEvent}
                          onSelectionChange={setSelectedEvent}
                          className="bg-gray-100 w-[240px] rounded-md"
                        >
                          <DropdownItem key="Event"  className="hover:bg-gray-200 rounded-lg">Event</DropdownItem>
                          <DropdownItem key="Intramurals 2024"  className="hover:bg-gray-200 rounded-lg">Intramurals 2024</DropdownItem>
                          <DropdownItem key="Foundation Week 2024" className="hover:bg-gray-200 rounded-lg">Foundation Week 2024</DropdownItem>
                          <DropdownItem key="Pailaw 2024" className="hover:bg-gray-200 rounded-lg">Pailaw 2024</DropdownItem>
                          <DropdownItem key="CICM Day 2024" className="hover:bg-gray-200 rounded-lg">CICM Day 2024</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>

                    {/* Advanced  Filters */}
                    <div>
                        <div className="mt-5 my-3 px-2 text-lg text-primary">
                          <h1>
                            Advanced Filter
                          </h1>
                        </div>

                        <div className="flex gap-4">
                          <Dropdown>
                          <DropdownTrigger>
                          
                            <Button 
                              variant="solid"
                              className="capitalize py-2 w-60 bg-gray-100 rounded-xl flex justify-between px-6 hover:bg-gray-300"
                            >
                              {selectedDept}
                              <ChevronDownIcon className="h-4 w-4 pl-0.5" />
                            </Button>
                    
                          </DropdownTrigger>

                          <DropdownMenu 
                            aria-label="2"
                            variant="flat"
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={selectedDept}
                            onSelectionChange={setSelectedDept}
                            className="bg-gray-100 w-[240px] rounded-md"
                          > 
                            <DropdownItem key="Department" className="hover:bg-gray-200 rounded-lg">Department</DropdownItem>
                            <DropdownItem key="SEAITE" className="hover:bg-gray-200 rounded-lg">SEAITE</DropdownItem>
                            <DropdownItem key="SEAS" className="hover:bg-gray-200 rounded-lg">SEAS</DropdownItem>
                            <DropdownItem key="SABH" className="hover:bg-gray-200 rounded-lg">SABH</DropdownItem>
                            <DropdownItem key="SHAS" className="hover:bg-gray-200 rounded-lg">SHAS</DropdownItem>
                            <DropdownItem key="BES" className="hover:bg-gray-200 rounded-lg">BES</DropdownItem>
                          </DropdownMenu>
                          </Dropdown>

                          <Dropdown>
                          <DropdownTrigger>
                          
                            <Button 
                              variant="solid"
                              className="capitalize py-2 w-60 bg-gray-100 rounded-xl flex justify-between px-6 hover:bg-gray-300"
                            >
                              {selectedCourse}
                              <ChevronDownIcon className="h-4 w-4 pl-0.5" />
                            </Button>
                    
                          </DropdownTrigger>

                          <DropdownMenu 
                            aria-label="3"
                            variant="flat"
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={selectedCourse}
                            onSelectionChange={setSelectedCourse}
                            className="bg-gray-100 w-[240px] rounded-md"
                          >
                            <DropdownItem key="Course" className="hover:bg-gray-200 rounded-lg">Course</DropdownItem>
                            <DropdownItem key="BSMT" className="hover:bg-gray-200 rounded-lg">BSMT</DropdownItem>
                            <DropdownItem key="BSN" className="hover:bg-gray-200 rounded-lg">BSN</DropdownItem>
                            <DropdownItem key="BSMA" className="hover:bg-gray-200 rounded-lg">BSMA</DropdownItem>
                            <DropdownItem key="BSBA" className="hover:bg-gray-200 rounded-lg">BSBA</DropdownItem>
                            <DropdownItem key="BSPS" className="hover:bg-gray-200 rounded-lg">BSPS</DropdownItem>
                            <DropdownItem key="BSP" className="hover:bg-gray-200 rounded-lg">BSP</DropdownItem>
                            <DropdownItem key="BSA" className="hover:bg-gray-200 rounded-lg">BSA</DropdownItem>
                            <DropdownItem key="BSCE" className="hover:bg-gray-200 rounded-lg">BSCE</DropdownItem>
                            <DropdownItem key="BSCS" className="hover:bg-gray-200 rounded-lg">BSCS</DropdownItem>
                            <DropdownItem key="BSIT" className="hover:bg-gray-200 rounded-lg">BSIT</DropdownItem>
                          </DropdownMenu>
                          </Dropdown>

                          <Dropdown>
                          <DropdownTrigger>
                          
                            <Button 
                              variant="solid"
                              className="capitalize py-2 w-60 bg-gray-100 rounded-xl flex justify-between px-6 hover:bg-gray-300"
                            >
                              {selectedYear}
                              <ChevronDownIcon className="h-4 w-4 pl-0.5" />
                            </Button>
                    
                          </DropdownTrigger>

                          <DropdownMenu 
                            aria-label="4"
                            variant="flat"
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={selectedYear}
                            onSelectionChange={setSelectedYear}
                            className="bg-gray-100 w-[240px] rounded-md"
                          >
                            <DropdownItem key="Year Level" className="hover:bg-gray-200 rounded-lg">Year Level</DropdownItem>
                            <DropdownItem key="1" className="hover:bg-gray-200 rounded-lg">1</DropdownItem>
                            <DropdownItem key="2" className="hover:bg-gray-200 rounded-lg">2</DropdownItem>
                            <DropdownItem key="3" className="hover:bg-gray-200 rounded-lg">3</DropdownItem>
                            <DropdownItem key="4" className="hover:bg-gray-200 rounded-lg">4</DropdownItem>
                            <DropdownItem key="5" className="hover:bg-gray-200 rounded-lg">5</DropdownItem>
                          </DropdownMenu>
                          </Dropdown>
                          
                        </div>
                      

                    </div>
                
                    {/* Footer */}
                    <div className="mt-4 space-x-4 flex justify-end border-t border-gray-200  p-4">
                       
                        
                        <motion.button
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "#4d48a8",
                        }}
                        whileTap={{
                          scale: 0.98,
                        }}
                        transition={{
                          duration: 0.2,
                          ease: "easeInOut",
                        }}
                        className="bg-primary text-white rounded-md px-6 py-2 font-bold"
                        onClick={displayData}
                      >
                        Apply Filters
                      </motion.button>

                    </div> 

                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>


      </motion.div>
      <Navbar />
    </div>
  );
};

export default Dashboard;
