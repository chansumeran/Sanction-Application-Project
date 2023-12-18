"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import "flowbite/dist/flowbite.css";

const FilterButton = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [isDepartmentEnabled, setIsDepartmentEnabled] = useState(false);

  const handleCheckboxChangeDept = (event) => {
    setIsDepartmentEnabled(event.target.checked);
  };

  const [isCourseEnabled, setIsCourseEnabled] = useState(false);
  const handleCheckboxChangeCourse = (event) => {
    setIsCourseEnabled(event.target.checked);
  };
  const [isYearEnabled, setIsYearEnabled] = useState(false);
  const handleCheckboxChangeYear = (event) => {
    setIsYearEnabled(event.target.checked);
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center relative inline-block text-left bg-primary rounded-md">
        <button
          type="button"
          onClick={openModal}
          className="cursor-pointer italic inline-flex w-full justify-center gap-x-1.5 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300"
        >
          Filters
        </button>
      </div>

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
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <Dialog.Title
                      as="h3"
                      className="text-small italic font-medium leading-6 text-gray-900 "
                    >
                      Set Filters Accordingly
                    </Dialog.Title>
                    <div className="cursor-pointer" onClick={closeModal}>
                      <button
                        className="focus:outline-none
                        focus:ring
                        inline-flex
                        justify-center
                        rounded-md
                        border
                        border-transparent
                        bg-neutral
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-blue-900
                        hover:bg-blue-200
                        focus:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-blue-500
                        focus-visible:ring-offset-2"
                      >
                        X
                      </button>
                    </div>
                  </div>

                  {/* Filters */}
                  <div className="mt-2 flex">
                    {/* Advanced */}
                    <div className="flex-1"></div>
                    {/* <div className="flex-1"></div> */}
                  </div>
                  {/* Events */}
                  <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
                    Events
                  </h3>
                  {/* Event FirstRow Set */}
                  <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                      <div class="flex items-center ps-3">
                        <input
                          id="firstRow1"
                          type="checkbox"
                          value=""
                          name="default-check-box"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="firstRow1"
                          class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          SEAITE Week
                        </label>
                      </div>
                    </li>
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                      <div class="flex items-center ps-3">
                        <input
                          id="firstRow2"
                          type="checkbox"
                          value=""
                          name="default-check-box"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="firstRow2"
                          class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Foundation Week
                        </label>
                      </div>
                    </li>
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                      <div class="flex items-center ps-3">
                        <input
                          id="firstRow3"
                          type="checkbox"
                          value=""
                          name="default-check-box"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="firstRow3"
                          class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          SIRIB
                        </label>
                      </div>
                    </li>
                  </ul>
                  {/* Event Second Row Set */}
                  <div className="p-1"></div>
                  <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                      <div class="flex items-center ps-3">
                        <input
                          id="secondRow1"
                          type="checkbox"
                          value=""
                          name="default-check-box"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="secondRow1"
                          class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Second Row Event 1
                        </label>
                      </div>
                    </li>
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                      <div class="flex items-center ps-3">
                        <input
                          id="secondRow2"
                          type="checkbox"
                          value=""
                          name="default-check-box"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="secondRow2"
                          class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Second Row Event 2
                        </label>
                      </div>
                    </li>
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                      <div class="flex items-center ps-3">
                        <input
                          id="secondRow3"
                          type="checkbox"
                          value=""
                          name="default-check-box"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="secondRow3"
                          class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Second Row Event 3
                        </label>
                      </div>
                    </li>
                  </ul>
                  {/* Event Third Row Set */}
                  <div className="p-1"></div>
                  <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                      <div class="flex items-center ps-3">
                        <input
                          id="thirdRow1"
                          type="checkbox"
                          value=""
                          name="default-check-box"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="thirdRow1"
                          class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Third Row Event 1
                        </label>
                      </div>
                    </li>
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                      <div class="flex items-center ps-3">
                        <input
                          id="thirdRow2"
                          type="checkbox"
                          value=""
                          name="default-check-box"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="thirdRow2"
                          class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Third Row Event 2
                        </label>
                      </div>
                    </li>
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                      <div class="flex items-center ps-3">
                        <input
                          id="thirdRow3"
                          type="checkbox"
                          value=""
                          name="default-check-box"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="thirdRow3"
                          class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Third Row Event 3
                        </label>
                      </div>
                    </li>
                  </ul>
                  {/* Event Row Fourth Set */}
                  <div className="p-1"></div>
                  <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                      <div class="flex items-center ps-3">
                        <input
                          id="fourthRow1"
                          type="checkbox"
                          value=""
                          name="default-check-box"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="fourthRow1"
                          class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Fourth Row Event 1
                        </label>
                      </div>
                    </li>
                  </ul>

                  {/* Advanced */}
                  <h3 class="pt-2   mb-4 font-semibold text-gray-900 dark:text-white">
                    Advanced Filter
                  </h3>
                  <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                      <div class="flex items-center ps-3">
                        <input
                          id="Department"
                          type="checkbox"
                          value=""
                          name="default-check-box"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          onChange={handleCheckboxChangeDept}
                        />
                        <label
                          for="Department"
                          class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Department
                        </label>
                      </div>
                    </li>
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                      <div class="flex items-center ps-3">
                        <input
                          id="Course"
                          type="checkbox"
                          value=""
                          name="default-check-box"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          onChange={handleCheckboxChangeCourse}
                        />
                        <label
                          for="Course"
                          class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Course
                        </label>
                      </div>
                    </li>
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                      <div class="flex items-center ps-3">
                        <input
                          id="Year"
                          type="checkbox"
                          value=""
                          name="default-check-box"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          onChange={handleCheckboxChangeYear}
                        />
                        <label
                          for="Year"
                          class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Year
                        </label>
                      </div>
                    </li>
                  </ul>
                  <div className="p-1"></div>
                  <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    {/* Department */}
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                      <div class="  pt-5 items-center ps-3">
                        <div class="flex items-center mb-4">
                          <input
                            disabled={!isDepartmentEnabled}
                            id="SEAITE"
                            type="radio"
                            value=""
                            name="default-radio"
                            className={`w-4 h-4  border-gray-300  ${
                              isDepartmentEnabled
                                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
                            }`}
                          />
                          <label
                            for="SEAITE"
                            disabled={!isDepartmentEnabled}
                            class={`ml-2 text-sm font-medium ${
                              isDepartmentEnabled
                                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
                            }`}
                          >
                            SEAITE
                          </label>
                        </div>
                        <div class="flex items-center mb-4">
                          <input
                            disabled={!isDepartmentEnabled}
                            id="SABH"
                            type="radio"
                            value=""
                            name="default-radio"
                            className={`w-4 h-4  border-gray-300  ${
                              isDepartmentEnabled
                                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
                            }`}
                          />
                          <label
                            for="SABH"
                            disabled={!isDepartmentEnabled}
                            class={`ml-2 text-sm font-medium ${
                              isDepartmentEnabled
                                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
                            }`}
                          >
                            SABH
                          </label>
                        </div>
                        <div class="flex items-center mb-4">
                          <input
                            disabled={!isDepartmentEnabled}
                            id="SEAS"
                            type="radio"
                            value=""
                            name="default-radio"
                            className={`w-4 h-4  border-gray-300  ${
                              isDepartmentEnabled
                                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
                            }`}
                          />
                          <label
                            for="SEAS"
                            disabled={!isDepartmentEnabled}
                            class={`ml-2 text-sm font-medium ${
                              isDepartmentEnabled
                                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
                            }`}
                          >
                            SEAS
                          </label>
                        </div>
                        <div class="flex items-center mb-4">
                          <input
                            disabled={!isDepartmentEnabled}
                            id="SHAS"
                            type="radio"
                            value=""
                            name="default-radio"
                            className={`w-4 h-4  border-gray-300  ${
                              isDepartmentEnabled
                                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
                            }`}
                          />
                          <label
                            for="SHAS"
                            disabled={!isDepartmentEnabled}
                            class={`ml-2 text-sm font-medium ${
                              isDepartmentEnabled
                                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
                            }`}
                          >
                            SHAS
                          </label>
                        </div>
                      </div>
                    </li>
                    {/* Courses */}
                    <li class="pt-1 w-full h-40 overflow-y-scroll scroll-smooth focus:scroll-auto border-b  border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                      <div class="items-center ps-3">
                        {/* =======================================================SEAITE==================================================== */}
                        {/* BS ARCHITECTURE */}
                        <div class=" items-center mb-4">
                          <input
                            id="BSA"
                            type="radio"
                            value=""
                            name="default-radio-2"
                            disabled={!isCourseEnabled}
                            className={`w-4 h-4  border-gray-300  ${
                              isCourseEnabled
                                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
                            }`}
                          />
                          <label
                            for="BSA"
                            disabled={!isCourseEnabled}
                            class={`ml-2 text-sm font-medium ${
                              isCourseEnabled
                                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
                            }`}
                          >
                            BSA
                          </label>
                        </div>
                        {/* BS CIVIL ENGINEERING */}
                        <div class="flex items-center mb-4">
                          <input
                            id="BSCE"
                            type="radio"
                            value=""
                            name="default-radio-2"
                            disabled={!isCourseEnabled}
                            className={`w-4 h-4  border-gray-300  ${
                              isCourseEnabled
                                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
                            }`}
                          />
                          <label
                            for="BSCE"
                            disabled={!isCourseEnabled}
                            class={`ml-2 text-sm font-medium ${
                              isCourseEnabled
                                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
                            }`}
                          >
                            BSCE
                          </label>
                        </div>
                        {/* BS Computer Engineering */}
                        <div class="flex items-center mb-4">
                          <input
                            id="BSCpE"
                            type="radio"
                            value=""
                            name="default-radio-2"
                            disabled={!isCourseEnabled}
                            className={`w-4 h-4  border-gray-300  ${
                              isCourseEnabled
                                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
                            }`}
                          />
                          <label
                            for="BSCpE"
                            disabled={!isCourseEnabled}
                            class={`ml-2 text-sm font-medium ${
                              isCourseEnabled
                                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
                            }`}
                          >
                            BSCpE
                          </label>
                        </div>
                        {/* BS Electrical Engineering */}
                        <div class="flex items-center mb-4">
                          <input
                            id="BSEE"
                            type="radio"
                            value=""
                            name="default-radio-2"
                            disabled={!isCourseEnabled}
                            className={`w-4 h-4  border-gray-300  ${
                              isCourseEnabled
                                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
                            }`}
                          />
                          <label
                            for="BSEE"
                            disabled={!isCourseEnabled}
                            class={`ml-2 text-sm font-medium ${
                              isCourseEnabled
                                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
                            }`}
                          >
                            BSEE
                          </label>
                        </div>
                        {/* BS Electronics Engineering*/}
                        <div class="flex items-center mb-4">
                          <input
                            id="BSECE"
                            type="radio"
                            value=""
                            name="default-radio-2"
                            disabled={!isCourseEnabled}
                            className={`w-4 h-4  border-gray-300  ${
                              isCourseEnabled
                                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
                            }`}
                          />
                          <label
                            for="BSECE"
                            disabled={!isCourseEnabled}
                            class={`ml-2 text-sm font-medium ${
                              isCourseEnabled
                                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
                            }`}
                          >
                            BSECE
                          </label>
                        </div>
                        {/* BS Geodetic Engineering */}
                        <div class="flex items-center mb-4">
                          <input
                            id="BSGE"
                            type="radio"
                            value=""
                            name="default-radio-2"
                            disabled={!isCourseEnabled}
                            className={`w-4 h-4  border-gray-300  ${
                              isCourseEnabled
                                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
                            }`}
                          />
                          <label
                            for="BSGE"
                            disabled={!isCourseEnabled}
                            class={`ml-2 text-sm font-medium ${
                              isCourseEnabled
                                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
                            }`}
                          >
                            BSGE
                          </label>
                        </div>
                        {/* BS Computer Science */}
                        <div class="flex items-center mb-4">
                          <input
                            id="BSCS"
                            type="radio"
                            value=""
                            name="default-radio-2"
                            disabled={!isCourseEnabled}
                            className={`w-4 h-4  border-gray-300  ${
                              isCourseEnabled
                                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
                            }`}
                          />
                          <label
                            for="BSCS"
                            disabled={!isCourseEnabled}
                            class={`ml-2 text-sm font-medium ${
                              isCourseEnabled
                                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
                            }`}
                          >
                            BSCS
                          </label>
                        </div>
                        {/* BS Information Technology */}
                        <div class="flex items-center mb-4">
                          <input
                            id="BSIT"
                            type="radio"
                            value=""
                            name="default-radio-2"
                            disabled={!isCourseEnabled}
                            className={`w-4 h-4  border-gray-300  ${
                              isCourseEnabled
                                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
                            }`}
                          />
                          <label
                            for="BSIT"
                            disabled={!isCourseEnabled}
                            class={`ml-2 text-sm font-medium ${
                              isCourseEnabled
                                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
                            }`}
                          >
                            BSIT
                          </label>
                        </div>
                        {/* =======================================================SEAITE==================================================== */}
                        {/* ========================================================SABH===================================================== */}
                        {/* BS Accountancy */}
                        <div class="flex items-center mb-4">
                          <input
                            id="BSACC"
                            type="radio"
                            value=""
                            name="default-radio-2"
                            disabled={!isCourseEnabled}
                            className={`w-4 h-4  border-gray-300  ${
                              isCourseEnabled
                                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
                            }`}
                          />
                          <label
                            for="BSACC"
                            disabled={!isCourseEnabled}
                            class={`ml-2 text-sm font-medium ${
                              isCourseEnabled
                                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
                            }`}
                          >
                            BSACC
                          </label>
                        </div>
                        {/* BS Business Administration */}
                        <div class="flex items-center mb-4">
                          <input
                            id="BSBA"
                            type="radio"
                            value=""
                            name="default-radio-2"
                            disabled={!isCourseEnabled}
                            className={`w-4 h-4  border-gray-300  ${
                              isCourseEnabled
                                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
                            }`}
                          />
                          <label
                            for="BSBA"
                            disabled={!isCourseEnabled}
                            class={`ml-2 text-sm font-medium ${
                              isCourseEnabled
                                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
                            }`}
                          >
                            BSBA
                          </label>
                        </div>
                        {/* BS Management Accounting */}
                        <div class="flex items-center mb-4">
                          <input
                            id="BSMA"
                            type="radio"
                            value=""
                            name="default-radio-2"
                            disabled={!isCourseEnabled}
                            className={`w-4 h-4  border-gray-300  ${
                              isCourseEnabled
                                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
                            }`}
                          />
                          <label
                            for="BSMA"
                            disabled={!isCourseEnabled}
                            class={`ml-2 text-sm font-medium ${
                              isCourseEnabled
                                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
                            }`}
                          >
                            BSMA
                          </label>
                        </div>
                        {/* BS Hospitality Management */}
                        <div class="flex items-center mb-4">
                          <input
                            id="BSHM"
                            type="radio"
                            value=""
                            name="default-radio-2"
                            disabled={!isCourseEnabled}
                            className={`w-4 h-4  border-gray-300  ${
                              isCourseEnabled
                                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
                            }`}
                          />
                          <label
                            for="BSHM"
                            disabled={!isCourseEnabled}
                            class={`ml-2 text-sm font-medium ${
                              isCourseEnabled
                                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
                            }`}
                          >
                            BSHM
                          </label>
                        </div>
                        {/* BS Tourism Management */}
                        <div class="flex items-center mb-4">
                          <input
                            id="BSTM"
                            type="radio"
                            value=""
                            name="default-radio-2"
                            disabled={!isCourseEnabled}
                            className={`w-4 h-4  border-gray-300  ${
                              isCourseEnabled
                                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
                            }`}
                          />
                          <label
                            for="BSTM"
                            disabled={!isCourseEnabled}
                            class={`ml-2 text-sm font-medium ${
                              isCourseEnabled
                                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
                            }`}
                          >
                            BSTM
                          </label>
                        </div>
                        {/* ========================================================SABH===================================================== */}

                        {/* ==========================================================SEAS===================================================== */}
                        {/* BS Political Science */}
                        <div class="flex items-center mb-4">
                          <input
                            id="BSPolScie"
                            type="radio"
                            value=""
                            name="default-radio-2"
                            disabled={!isCourseEnabled}
                            className={`w-4 h-4  border-gray-300  ${
                              isCourseEnabled
                                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
                            }`}
                          />
                          <label
                            for="BSPolScie"
                            disabled={!isCourseEnabled}
                            class={`ml-2 text-sm font-medium ${
                              isCourseEnabled
                                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
                            }`}
                          >
                            BSPolScie
                          </label>
                        </div>
                        {/* BS Psychology*/}
                        <div class="flex items-center mb-4">
                          <input
                            id="BSPsych"
                            type="radio"
                            value=""
                            name="default-radio-2"
                            disabled={!isCourseEnabled}
                            className={`w-4 h-4  border-gray-300  ${
                              isCourseEnabled
                                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
                            }`}
                          />
                          <label
                            for="BSPsych"
                            disabled={!isCourseEnabled}
                            class={`ml-2 text-sm font-medium ${
                              isCourseEnabled
                                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
                            }`}
                          >
                            BSPsych
                          </label>
                        </div>
                        {/* Bachelor of Elementary Education*/}
                        <div class="flex items-center mb-4">
                          <input
                            id="BEE"
                            type="radio"
                            value=""
                            name="default-radio-2"
                            disabled={!isCourseEnabled}
                            className={`w-4 h-4  border-gray-300  ${
                              isCourseEnabled
                                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
                            }`}
                          />
                          <label
                            for="BEE"
                            disabled={!isCourseEnabled}
                            class={`ml-2 text-sm font-medium ${
                              isCourseEnabled
                                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
                            }`}
                          >
                            BEE
                          </label>
                        </div>
                        {/* Bachelor of Secondary Education*/}
                        <div class="flex items-center mb-4">
                          <input
                            id="BSE"
                            type="radio"
                            value=""
                            name="default-radio-2"
                            disabled={!isCourseEnabled}
                            className={`w-4 h-4  border-gray-300  ${
                              isCourseEnabled
                                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
                            }`}
                          />
                          <label
                            for="BSE"
                            disabled={!isCourseEnabled}
                            class={`ml-2 text-sm font-medium ${
                              isCourseEnabled
                                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
                            }`}
                          >
                            BSE
                          </label>
                        </div>
                        {/* Bachelor of Physical Education*/}
                        <div class="flex items-center mb-4">
                          <input
                            id="BPE"
                            type="radio"
                            value=""
                            name="default-radio-2"
                            disabled={!isCourseEnabled}
                            className={`w-4 h-4  border-gray-300  ${
                              isCourseEnabled
                                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
                            }`}
                          />
                          <label
                            for="BPE"
                            disabled={!isCourseEnabled}
                            class={`ml-2 text-sm font-medium ${
                              isCourseEnabled
                                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
                            }`}
                          >
                            BPE
                          </label>
                        </div>
                        {/* BS Criminology*/}
                        <div class="flex items-center mb-4">
                          <input
                            id="BSCrim"
                            type="radio"
                            value=""
                            name="default-radio-2"
                            disabled={!isCourseEnabled}
                            className={`w-4 h-4  border-gray-300  ${
                              isCourseEnabled
                                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
                            }`}
                          />
                          <label
                            for="BSCrim"
                            disabled={!isCourseEnabled}
                            class={`ml-2 text-sm font-medium ${
                              isCourseEnabled
                                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
                            }`}
                          >
                            BSCrim
                          </label>
                        </div>
                        {/* ==========================================================SEAS===================================================== */}
                        {/* ==========================================================SHAS===================================================== */}

                        {/* BS Medical Technology*/}
                        <div class="flex items-center mb-4">
                          <input
                            id="BSMedTech"
                            type="radio"
                            value=""
                            name="default-radio-2"
                            disabled={!isCourseEnabled}
                            className={`w-4 h-4  border-gray-300  ${
                              isCourseEnabled
                                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
                            }`}
                          />
                          <label
                            for="BSMedTech"
                            disabled={!isCourseEnabled}
                            class={`ml-2 text-sm font-medium ${
                              isCourseEnabled
                                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
                            }`}
                          >
                            BSMedTech
                          </label>
                        </div>
                        {/* BS Medical Laboratory Science*/}
                        <div class="flex items-center mb-4">
                          <input
                            id="BSMLS"
                            type="radio"
                            value=""
                            name="default-radio-2"
                            disabled={!isCourseEnabled}
                            className={`w-4 h-4  border-gray-300  ${
                              isCourseEnabled
                                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
                            }`}
                          />
                          <label
                            for="BSMLS"
                            disabled={!isCourseEnabled}
                            class={`ml-2 text-sm font-medium ${
                              isCourseEnabled
                                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
                            }`}
                          >
                            BSMLS
                          </label>
                        </div>
                        {/* BS Nursing*/}
                        <div class="flex items-center mb-4">
                          <input
                            id="BSN"
                            type="radio"
                            value=""
                            name="default-radio-2"
                            disabled={!isCourseEnabled}
                            className={`w-4 h-4  border-gray-300  ${
                              isCourseEnabled
                                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
                            }`}
                          />
                          <label
                            for="BSN"
                            disabled={!isCourseEnabled}
                            class={`ml-2 text-sm font-medium ${
                              isCourseEnabled
                                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
                            }`}
                          >
                            BSN
                          </label>
                        </div>
                        {/* BS Pharmacy*/}
                        <div class="flex items-center mb-4">
                          <input
                            id="BSP"
                            type="radio"
                            value=""
                            name="default-radio-2"
                            disabled={!isCourseEnabled}
                            className={`w-4 h-4  border-gray-300  ${
                              isCourseEnabled
                                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
                            }`}
                          />
                          <label
                            for="BSP"
                            disabled={!isCourseEnabled}
                            class={`ml-2 text-sm font-medium ${
                              isCourseEnabled
                                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
                            }`}
                          >
                            BSP
                          </label>
                        </div>
                        {/* ==========================================================SHAS===================================================== */}
                      </div>
                    </li>
                    {/* YEAR */}
                    <li class="w-full h-40 overflow-y-auto border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                      <div class="  pt-5 items-center ps-3">
                        <div class="flex items-center mb-4">
                          <input
                            disabled={!isYearEnabled}
                            id="FirstYear"
                            type="radio"
                            value=""
                            name="default-radio-3"
                            className={`w-4 h-4  border-gray-300  ${
                              isYearEnabled
                                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
                            }`}
                          />
                          <label
                            for="FirstYear"
                            disabled={!isYearEnabled}
                            class={`ml-2 text-sm font-medium ${
                              isYearEnabled
                                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
                            }`}
                          >
                            First Year
                          </label>
                        </div>
                        <div class="flex items-center mb-4">
                          <input
                            disabled={!isYearEnabled}
                            id="SecondYear"
                            type="radio"
                            value=""
                            name="default-radio-3"
                            className={`w-4 h-4  border-gray-300  ${
                              isYearEnabled
                                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
                            }`}
                          />
                          <label
                            for="SecondYear"
                            disabled={!isYearEnabled}
                            class={`ml-2 text-sm font-medium ${
                              isYearEnabled
                                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
                            }`}
                          >
                            Second Year
                          </label>
                        </div>
                        <div class="flex items-center mb-4">
                          <input
                            disabled={!isYearEnabled}
                            id="ThirdYear"
                            type="radio"
                            value=""
                            name="default-radio-3"
                            className={`w-4 h-4  border-gray-300  ${
                              isYearEnabled
                                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
                            }`}
                          />
                          <label
                            for="ThirdYear"
                            disabled={!isYearEnabled}
                            class={`ml-2 text-sm font-medium ${
                              isYearEnabled
                                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
                            }`}
                          >
                            Third Year
                          </label>
                        </div>
                        <div class="flex items-center mb-4">
                          <input
                            disabled={!isYearEnabled}
                            id="FourthYear"
                            type="radio"
                            value=""
                            name="default-radio-3"
                            className={`w-4 h-4  border-gray-300  ${
                              isYearEnabled
                                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
                            }`}
                          />
                          <label
                            for="FourthYear"
                            disabled={!isYearEnabled}
                            class={`ml-2 text-sm font-medium ${
                              isYearEnabled
                                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
                            }`}
                          >
                            Fourth Year
                          </label>
                        </div>
                        <div class="flex items-center mb-4">
                          <input
                            disabled={!isYearEnabled}
                            id="FifthYear"
                            type="radio"
                            value=""
                            name="default-radio-3"
                            className={`w-4 h-4  border-gray-300  ${
                              isYearEnabled
                                ? "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:ring-2 text-blue-600"
                                : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-gray-500 focus:ring-2 text-gray-200"
                            }`}
                          />
                          <label
                            for="FifthYear"
                            disabled={!isYearEnabled}
                            class={`ml-2 text-sm font-medium ${
                              isYearEnabled
                                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                : "ml-2 text-sm font-medium text-gray-400  dark:text-gray-300"
                            }`}
                          >
                            Fifth Year
                          </label>
                        </div>
                      </div>
                    </li>
                  </ul>

                  {/* Buttons */}
                  <div className="mt-4 space-x-4 flex justify-end border-t border-gray-200  p-4">
                    <button
                      type="button"
                      className="focus:outline-none focus:ring inline-flex rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      Clear
                    </button>
                    <button
                      type="button"
                      className="focus:outline-none focus:ring inline-flex rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      // onClick={closeModal}
                    >
                      Apply Filters
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default FilterButton;
