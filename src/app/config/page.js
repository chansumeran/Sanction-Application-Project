"use client";
import Navbar from "../components/navbar";
import Header from "../components/header";
import SanctionConfigInput from "../components/sanctionConfigInput";
import SanctionConfigInput2 from "../components/sanctionConfigInput2";
import { motion } from "framer-motion"
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import axios from "axios";

const Config = () => {

  const [serverError, setServerError] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  const updateTriggers = async () => {
    try {
      await axios.put('https://enormous-boat-production.up.railway.app/config/reset');
      setSuccessMsg(true);
  
      setTimeout(() => {
        setSuccessMsg(false);
      }, 3000);
    } catch (error) {
      setServerError(true);
      setTimeout(() => {
        setServerError(false);
      }, 3000);
    }
  };

  return (
    <div className="flex flex-col h-screen items-center bg-neutral">
      
      <Header title="Configuration" onboardingType="config" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="flex w-8/12 h-[700px] bg-white p-16 rounded-2xl mt-6 shadow-lg overflow-y-auto xl:overflow-hidden flex-col"
        style={{ boxShadow: "0 10px 20px 10px rgba(134, 104, 255, 0.2)" }}
      >
        <h1 className="text-2xl font-semibold text-gray-700">
          Sanction Configurations{" "}
        </h1>
        <div>
          <h4 className="text-m font-bold italic text-primary pt-2.5 mt-8">
            Adjust the Total Absences Required for Sanctioning
          </h4>
        </div>
        <div className="space-x-4 mb-3 pt-2">
          <div id="input1" className="inline-block">
            <SanctionConfigInput />
          </div>
        </div>
        <div>
          <h4 className="text-sm font-bold italic text-highSanc pt-2.5">
            *Take Note: When a student is late, he/she is already considered absent.*
          </h4>
        </div>
        <div>
          <h4 className="text-m font-bold italic text-primary pt-10">
            Edit the Sanction Description
          </h4>
        </div>
        <div className="space-x-4 pt-2 ">
          <div id="input2" className="inline-block">
            <SanctionConfigInput2 />
          </div>
        </div>
        <div>
          <h4 className="text-m font-bold italic text-primary pt-10">
            Reset All
          </h4>
        </div>

        <div>
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#b85858",
            }}
            whileTap={{
              scale: 0.98,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
            className="bg-highSanc text-white rounded-md px-6 py-2 font-bold mt-4"
            onClick={updateTriggers}
          >
            Accept
          </motion.button>
        </div>

        <div>
          <h4 className="text-sm font-bold italic text-highSanc pt-2.5 mt-2">
            *Attention: It is highly recommended to reset the sanction configurations every school year to avoid errors*
          </h4>
        </div>
      </motion.div>

      {serverError && (
          <div className='error-message absolute top-8 left-1/2 transform -translate-x-1/2 bg-error flex items-center py-1 md:py-3 px-4 font-semibold text-white text-[12px] md:text-[14px] rounded-lg'>
            <div className='flex items-center gap-1'>
              <ExclamationCircleIcon className="h-7 w-7" />
              <p>There seems to be an error!</p>
            </div>
          </div>
        )}

      {successMsg && (
          <div className='error-message absolute top-8 left-1/2 transform -translate-x-1/2 bg-success flex items-center py-1 md:py-3 px-4 font-semibold text-white text-[12px] md:text-[14px] rounded-lg'>
            <div className='flex items-center gap-1'>
              <ExclamationCircleIcon className="h-7 w-7" />
              <p>Successfully Resetted!</p>
            </div>
          </div>
      )}

      <Navbar />
    </div>
  );
};

export default Config;
