"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { PaperAirplaneIcon, ExclamationCircleIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { UserButton } from '@clerk/nextjs';
import Navbar from "../components/navbar";
import Header from "../components/header";
import TypingAnimation from "../components/typingAnimation";

const Clarityai = () => {
  const [inputValue, setInputValue] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [blankInput, setBlankInput] = useState(false);

  const clearChat = () => {
    console.log("Clearing chat...");
    setChatLog([]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim() === "") {
      setBlankInput(true);

      setTimeout(() => {
        setBlankInput(false);
      }, 3000);

      return;
    }

    setBlankInput(false);

    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { type: "user", message: inputValue },
    ]);

    sendMessage(inputValue);

    setInputValue("");
  };

  const sendMessage = (message) => {
    const url = "https://api.openai.com/v1/chat/completions";
    const headers = {
      "Content-type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
    };
    const data = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `
            You are Clarity, An AI Assistant that was built by Team Clarity.
            You must answer the questions that will be asked by you. You can base from this:
            (If you do not know the answer just say 'I don't know'. Do not make up answers).

            Make sure to format your response properly for better readability. Make sure to give concise answers.

            WeComply's dashboard encompasses a range of functionalities, including the ability to search for students with sanctions, a comprehensive table displaying all student information, and a filtering system that triggers a modal when activated.
            
            1. Student Search:

            Using the student's ID number, users can pinpoint a specific student, and the relevant details will be showcased in the table.

            2. Filtering System:

            Upon clicking, a modal will emerge, presenting filters categorized by event, department, year level, and course. Checkboxes contain the categories, and radio buttons hold the values. Clicking a radio button becomes enabled only when the corresponding checkbox is selected. Users can create combination filters, and the resultant filtered students will be displayed in the table.

            3. Table:

            The table exhibits all records, whether filtered or not, offering a comprehensive view of necessary student information.

            In addition, WeComply features a configuration page where users can establish defaults for determining student sanctions. This configuration is divided into two sections:
            1. Trigger Configuration:

            The trigger is crucial in determining the sanction description for a student. By comparing the total absences for the entire year to trigger values, the system assigns descriptions accordingly. If absences are greater than or equal to the Low Trigger, the student receives a "Warning" description. For absences equal to or exceeding the Medium Trigger, the student gets a "Counselling" description. If absences surpass the High Trigger, a "Payment" description is assigned.

            2. Sanction Description:

            This section handles the assignment of sanctions to students based on the configured descriptions.

            Finally, Within the WeComply AI interface, an intelligent chatbot stands ready to provide additional guidance on the application's functionalities. Feel free to pose real-time inquiries, and rest assured that prompt responses are guaranteed. Simply click on the message prompt, input your question, and upon hitting send, the AI will promptly generate a response. Additionally, a convenient button is available to clear all prompts for a streamlined interaction experience.
          `
        },
        { role: "user", content: message },
      ],
    };

    setIsloading(true);

    axios
      .post(url, data, { headers: headers })
      .then((response) => {
        console.log(response);
        setChatLog((prevChatLog) => [
          ...prevChatLog,
          { type: "bot", message: response.data.choices[0].message.content },
        ]);
        setIsloading(false);
      })
      .catch((error) => {
        setIsloading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    const chatContainer = document.getElementById("chatContainer");

    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [chatLog]);

  return (
    <div className="flex flex-col h-screen items-center bg-neutral">
      
      <Header title="Clarity AI" onboardingType="clarity" />

      <div
        className="flex flex-col w-8/12 h-[700px] overflow-y-auto bg-white p-6 rounded-2xl mt-6 shadow-lg"
        style={{ boxShadow: "0 10px 20px 10px rgba(134, 104, 255, 0.2)" }}
      >
        <div
          id="chatContainer"
          className="flex-grow p-6 max-h-[700px] overflow-y-auto"
        >
          {chatLog.length === 0 ? (
            <div 
              className="flex justify-center items-center h-full pointer"
              style={{ pointerEvents: 'none' }}
            >
              <Image
                src="/clarity-logo.png"
                alt="Clarity Logo"
                width={340}
                height={340}
              />
              <div>
                <h1 className="text-[36px] font-bold text-primary">Hello, I&apos;m Clarity</h1>
                <p className="mt-4 text-md font-semibold">Having trouble using <span className="text-primary font-bold">WeComply</span> ?</p>
                <p className="text-md font-semibold">Don&apos;t hesitate to ask me!</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col space-y-4">
              {chatLog.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.type !== "user" && (
                    <div className="mr-2" style={{ pointerEvents: 'none' }}>
                      <Image
                        src="/clarity-logo.png"
                        alt="Clarity Logo"
                        width={50}
                        height={50}
                      />
                    </div>
                  )}

                  <div
                    className={`${
                      message.type === "user"
                        ? "bg-primary text-white"
                        : "bg-neutral text-black"
                    } rounded-lg p-4 max-w-lg`}
                  >
                    {message.message}
                  </div>

                  {message.type === "user" && (
                    <div className="ml-2" style={{ pointerEvents: 'none' }}>
                      <UserButton />
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div key={chatLog.length} className="flex justify-start">
                  <div className="bg-neutral rounded-lg p-4 text-white max-w-sm">
                    <TypingAnimation />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="flex-none p-4">
          <div className="flex gap-2">
            <input
              type="text"
              id="chatBox"
              className="flex-grow px-4 pl-8 py-3 md:py-4 border rounded-xl shadow-md focus:outline-none focus:ring focus:ring-gray-700 focus:ring-opacity-50 bg-neutral"
              placeholder="Ask me anything about WeComply"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <motion.button
              type="submit"
              id="submitButton"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#5d57c9",
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
              className="bg-gray-700 p-3 md:p-4 rounded-xl text-white mt-2 md:mt-0"
            >
              <PaperAirplaneIcon className="h-6 w-6 pl-0.5" />
            </motion.button>

            {/**Clear button */}
            <motion.button
              type="button"
              id="clearChat"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#5d57c9",
                color: 'white'
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
              onClick={clearChat}
              className="bg-neutral text-black font-semibold p-3 md:p-4 rounded-xl mt-2 md:mt-0"
            >
              Clear
            </motion.button>
          </div>
        </form>
      </div>

      {blankInput && (
        <div className='error-message absolute top-8 left-1/2 transform -translate-x-1/2 bg-error flex items-center py-1 md:py-3 px-4 font-semibold text-white text-[12px] md:text-[14px] rounded-lg'>
          <div className='flex items-center gap-1'>
            <ExclamationCircleIcon className="h-7 w-7" />
            <p>Please enter a prompt!</p>
          </div>
        </div>
      )}


      <Navbar />
    </div>
  );
};

export default Clarityai;
