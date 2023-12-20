"use client";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

import { useState, useEffect } from "react";
import introJs from "intro.js";
import "intro.js/introjs.css";

const OnboardingInfoClarity = ({ onInfoClick }) => {
  const [startTour, setStartTour] = useState(false);

  useEffect(() => {
    if (startTour) {
      const steps = [
        {
          element: "#chatContainer",
          intro:
            "Inside sanctioneer, an AI chatbot is here to further assist you on how the application works. You can ask real-time questions and you can rest assure that it will be answered.",
        },
        {
          element: "#chatBox",
          intro: "Click on the message prompt and type in your question.",
        },
        {
          element: "#submitButton",
          intro: "Click this button to send your prompt once you're done.",
        },
        {
          element: "#clearChat",
          intro: "This button allows you to clear your prompts.",
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

export default OnboardingInfoClarity;
