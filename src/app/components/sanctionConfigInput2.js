"use client";
import React, { Fragment, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';

const SanctionConfigInput2 = () => {
  const [description1, setDescription1] = useState('');
  const [description2, setDescription2] = useState('');
  const [description3, setDescription3] = useState('');
  const [blankInput, setBlankInput] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  const updateTriggers = async () => {

    // Check if any of the input values are blank
    if (description1.trim() === '' || description2.trim() === '' || description3.trim() === '') {
      setBlankInput(true);
      setTimeout(() => {
        setBlankInput(false);
      }, 3000);
      return;
    }

    try {
      const defaultDescription1 = 'Warning';
      const defaultDescription2 = 'Probation';
      const defaultDescription3 = 'Suspension';

      const payload = [
        { sanctionId: 2, newDescription: description1 || defaultDescription1 },
        { sanctionId: 3, newDescription: description2 || defaultDescription2 },
        { sanctionId: 4, newDescription: description3 || defaultDescription3 },
      ];

      const response = await axios.put(
        'https://wecomplyapi-production.up.railway.app/config/update-descriptions',
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

  const handleInputChange = (e, setFrequency) => {
    setFrequency(e.target.value);
  };

  return (
    <Fragment>
      <div className="flex justify-between items-end space-x-7 ">
        <div className="flex-1">
          <label
            htmlFor="frequency1"
            className="block text-xs font-bold mb-1 italic text-gray-300"
          >
            Frequency 1 (Low)
          </label>
          <input
            style={{ backgroundColor: "#EDF1F7" }}
            className="border-none rounded-md py-3 px-6 text-sm  w-64  focus:outline-none focus:ring focus:ring-gray-700 focus:ring-opacity-50"
            type="text"
            id="description1"
            placeholder="Default value of Warning"
            value={description1}
            onChange={(e) => handleInputChange(e, setDescription1)}
          />
        </div>
        <div className="flex-1">
          <label
            htmlFor="frequency2"
            className="block text-xs font-bold mb-1 italic text-gray-300"
          >
            Frequency 2 (Medium)
          </label>
          <input
            style={{ backgroundColor: "#EDF1F7" }}
            className="border-none rounded-md py-3 px-6 text-sm w-64  focus:outline-none focus:ring focus:ring-gray-700 focus:ring-opacity-50"
            id="description2"
            placeholder="Default value of Counselling"
            value={description2}
            onChange={(e) => handleInputChange(e, setDescription2)}
          />
        </div>
        <div className="flex-1">
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
            id="description3"
            placeholder="Default value of Payment"
            value={description3}
            onChange={(e) => handleInputChange(e, setDescription3)}
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

export default SanctionConfigInput2;
