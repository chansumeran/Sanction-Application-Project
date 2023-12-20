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
      const steps = [
        {
          element: "#input1",
          intro:
            "In sanctioneer, there are three frequencies guided by a criterion. The user depending on the needs can modify this criterion. Once you're done modifying the default values, click accept.",
        },
        {
          element: "#input2",
          intro:
            "Parallel to the absences configuration, there is a default sanction for each frequency.  Once you're done modifying the default values, click accept.",
        },
      ];

      introJs().setOptions({ steps }).start();

      // Reset the state so the tour can be started again if needed
      setStartTour(false);
    }
  }, [startTour]);
  return (
    <div className="">
    <motion.button
      onClick={() => setStartTour(true)}
      aria-label="Information"
      whileHover={{
        scale: 1.2,
        backgroundColor: "#4d48a8",
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
      className="flex items-center justify-center h-9 w-9 rounded-full"
    >
      <InformationCircleIcon className="h-9 w-9 text-white" />
    </motion.button>
    </div>
  );
};

export default OnboardingInfoConfig;
