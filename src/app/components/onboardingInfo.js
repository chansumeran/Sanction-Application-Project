"use client";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

import { useState, useEffect } from "react";
import introJs from "intro.js";
import "intro.js/introjs.css";

const OnboardingInfo = ({ onInfoClick }) => {
  const [startTour, setStartTour] = useState(false);

  useEffect(() => {
    if (startTour) {
      // Define the steps for the Intro.js tour
      const steps = [
        {
          element: "#searchInput",
          intro: "This is where you can search for students with sanctions.",
        },
        {
          element: "#eventButton",
          intro:
            "Click this button to filter per events. The table will then show all the students that is participating/participated in the event.",
        },
        {
          element: "#advanceButton",
          intro:
            "Click this button to filter per course, year or department. Once selected, the table will then show all the students that will satisfy the chosen filters.",
        },
        {
          element: "#table",
          intro: "This table shows the data for each students with sanctions.",
        },
        {
          element: "#home",
          intro: "This button brings you to the home page or Dashboard.",
        },
        {
          element: "#configs",
          intro: "This button brings you to the Configuration Page.",
        },
        {
          element: "#clarity",
          intro: "This button brings you to Clarity AI for further assistance.",
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

export default OnboardingInfo;
