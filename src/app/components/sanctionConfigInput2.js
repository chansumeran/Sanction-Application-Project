"use client";
import React, { Fragment } from "react";
import { motion } from "framer-motion";
//SANCTION DESCRIPTION INPUT
const sanctionConfigInput2 = () => {
  return (
    <Fragment>
      <div className="flex justify-between items-end space-x-7 ">
        {/* Flex container for alignment */}
        <div className="flex-1">
          {/* Flex child for input */}
          <label
            htmlFor="frequency1"
            className="block text-xs font-bold mb-1 italic text-gray-300"
          >
            Frequency 1 (Low)
          </label>
          <input
            style={{ backgroundColor: "#EDF1F7" }}
            className="rounded-md py-3 px-6 text-sm  w-64 italic focus:outline-none focus:ring"
            type="text"
            id="frequency1"
            placeholder="Default value of 1"
          />
        </div>
        <div className="flex-1">
          {/* Flex child for input */}
          <label
            htmlFor="frequency2"
            className="block text-xs font-bold mb-1 italic text-gray-300"
          >
            Frequency 2 (Medium)
          </label>
          <input
            style={{ backgroundColor: "#EDF1F7" }}
            className="rounded-md py-3 px-6 text-sm w-64 italic focus:outline-none focus:ring"
            id="frequency2"
            placeholder="Default value of 4"
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
            className="rounded-md py-3 px-6 text-sm w-64 italic focus:outline-none focus:ring"
            type="text"
            id="frequency3"
            placeholder="Default value of 7"
          />
        </div>
        <motion.button
          whileHover={{
            scale: 1.1,
            // textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
            backgroundColor: "#5947A2",
          }}
          whileTap={{
            scale: 0.95, // Scales down the button to 95% of its size
          }}
          transition={{
            duration: 0.2,
            type: "mass",
            ease: "easeInOut",
          }}
          className="bg-primary text-white rounded-md px-6 py-2 font-bold"
        >
          Accept
        </motion.button>
      </div>
    </Fragment>
  );
};

export default sanctionConfigInput2;
