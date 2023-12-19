"use client";
import { motion } from "framer-motion";
import React, { Fragment } from "react";
import { useState } from 'react';
import axios from 'axios';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';


const SanctionConfigInput = () => {
  
  const [frequency1, setFrequency1] = useState('');
  const [frequency2, setFrequency2] = useState('');
  const [frequency3, setFrequency3] = useState('');
  const [blankInput, setBlankInput] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  const updateTriggers = async () => {

    // Check if any of the input values are blank
    if (frequency1.trim() === '' || frequency2.trim() === '' || frequency3.trim() === '') {
      setBlankInput(true);
      setTimeout(() => {
        setBlankInput(false);
      }, 3000);
      return;
    }

    try {
      const defaultFrequency1 = 1;
      const defaultFrequency2 = 4;
      const defaultFrequency3 = 7;
  
      const payload = [
        { sanctionId: 2, newTrigger: parseInt(frequency1, 10) || defaultFrequency1 },
        { sanctionId: 3, newTrigger: parseInt(frequency2, 10) || defaultFrequency2 },
        { sanctionId: 4, newTrigger: parseInt(frequency3, 10) || defaultFrequency3 },
      ];
  
      const response = await axios.put(
        'https://wecomplyapi-production.up.railway.app/config/update-triggers',
        payload
      );
      setSuccessMsg(true);

      setTimeout(() => {
        setSuccessMsg(false);
      }, 3000);

      setBlankInput(false);
    } catch (error) {
      setServerError(true);

      setTimeout(() => {
        setServerError(false);
      }, 3000);
    }
  };
  
  return (
    <Fragment>
      <div className="flex justify-between items-end space-x-7 ">
        {/* Flex container for alignment */}
        <div className="flex-1">
          {/* Flex child for input */}
          <label
            htmlFor="frequency1"
            className="block text-xs font-bold mb-1 italic text-gray-300 "
          >
            Frequency 1 (Low)
          </label>
          <input
            style={{ backgroundColor: "#EDF1F7" }}
            className="border-none rounded-md py-3 px-6 text-sm w-64  focus:outline-none focus:ring focus:ring-gray-700 focus:ring-opacity-50"
            type="text"
            id="frequency1"
            placeholder="Default value of 1 "
            value={frequency1}
            onChange={(e) => setFrequency1(e.target.value)}
          />
        </div>
        <div className="flex-1">
          {/* Flex child for input */}
          <label
            htmlFor="frequency2"
            className="block text-xs font-bold mb-1 italic text-gray-300 "
          >
            Frequency 2 (Medium)
          </label>
          <input
            style={{ backgroundColor: "#EDF1F7" }}
            className="border-none rounded-md py-3 px-6 text-sm w-64  focus:outline-none focus:ring focus:ring-gray-700 focus:ring-opacity-50"
            id="frequency2"
            placeholder="Default value of 4"
            value={frequency2}
            onChange={(e) => setFrequency2(e.target.value)}
          />
        </div>
        <div className="flex-1">
          {/* Flex child for input */}
          <label
            htmlFor="frequency3"
            className="block text-xs font-bold mb-1 italic text-gray-300"
          >
            Frequency 3 (High)
          </label>
          <input
            style={{ backgroundColor: "#EDF1F7" }}
            className="border-none rounded-md py-3 px-6 text-sm w-64  focus:outline-none focus:ring focus:ring-gray-700 focus:ring-opacity-50"
            type="text"
            id="frequency3"
            placeholder="Default value of 7"
            value={frequency3}
            onChange={(e) => setFrequency3(e.target.value)}
          />
        </div>

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
          onClick={updateTriggers}
        >
          Accept
        </motion.button>
      </div>

      {blankInput && (
          <div className='error-message absolute top-8 left-1/2 transform -translate-x-1/2 bg-error flex items-center py-1 md:py-3 px-4 font-semibold text-white text-[12px] md:text-[14px] rounded-lg'>
            <div className='flex items-center gap-1'>
              <ExclamationCircleIcon className="h-7 w-7" />
              <p>Please fill out all fields.</p>
            </div>
          </div>
        )}

      {serverError && (
          <div className='error-message absolute top-8 left-1/2 transform -translate-x-1/2 bg-error flex items-center py-1 md:py-3 px-4 font-semibold text-white text-[12px] md:text-[14px] rounded-lg'>
            <div className='flex items-center gap-1'>
              <ExclamationCircleIcon className="h-7 w-7" />
              <p>Please fill out all fields.</p>
            </div>
          </div>
        )}

      {successMsg && (
          <div className='error-message absolute top-8 left-1/2 transform -translate-x-1/2 bg-success flex items-center py-1 md:py-3 px-4 font-semibold text-white text-[12px] md:text-[14px] rounded-lg'>
            <div className='flex items-center gap-1'>
              <ExclamationCircleIcon className="h-7 w-7" />
              <p>Successfully updated!</p>
            </div>
          </div>
      )}

    </Fragment>
  );
};

export default SanctionConfigInput;
