"use client";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

import { useState, useEffect } from "react";
import introJs from "intro.js";
import "intro.js/introjs.css";

const OnboardingInfoConfig = ({ onInfoClick }) => {
  const [startTour, setStartTour] = useState(false);

  useEffect(() => {
    if (startTour) {
      // Define the steps for the Intro.js tour
      const steps = [
        {
          element: "#input1",
          intro: "This is where you can search for students with sanctions.",
        },
        {
          element: "#input2",
          intro: "This is where you can search for students with sanctions.",
        },
        // ... other steps for your tour
      ];

      // Start the Intro.js tour
      introJs().setOptions({ steps }).start();

      // Reset the state so the tour can be started again if needed
      setStartTour(false);
    }
  }, [startTour]);
  return (
    // Use the motion.button instead of button to enable animations
    <motion.button
      onClick={() => setStartTour(true)}
      aria-label="Information"
      whileHover={{ backgroundColor: "#5947A2" }} // Apply the hover effect
      transition={{ duration: 0.2, ease: "easeInOut" }} // Apply the transition properties
      whileTap={{ scale: 0.75 }} // Apply the tap effect
      className="flex items-center justify-center h-9 w-9 rounded-full"
    >
      <InformationCircleIcon className="h-9 w-9 text-white" />
    </motion.button>
  );
};

export default OnboardingInfoConfig;
