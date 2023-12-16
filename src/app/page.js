"use client";

import { useState } from 'react';
import { ArrowRightOnRectangleIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid';
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import axios from 'axios';


export default function Home() {

  const router = useRouter();

  //Secret Key
  const secretKey = 'emma@cebu';
  // Use states
  const [isLoginClicked, setLoginClicked] = useState(false);
  const [secretKeyInput, setSecretKeyInput] = useState('');
  const [showIncorrectKeyMessage, setShowIncorrectKeyMessage] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleLoginButtonClick();
    }
  };
  

  const handleLoginButtonClick = () => {
    // If the button is disabled, return early
    if (buttonDisabled) {
      return;
    }

    setButtonDisabled(true); // Disable the button

    if (isLoginClicked) {
      if (secretKeyInput === secretKey) {
        router.push('/dashboard');
      } else {
        setShowIncorrectKeyMessage(true);

        // Hide the error message after 3 seconds
        setTimeout(() => {
          setShowIncorrectKeyMessage(false);
        }, 3000);
      }
    }

    // Enable the button after a 5-second timeout
    setTimeout(() => {
      setButtonDisabled(false);
    }, 3000);

    if (!isLoginClicked) {
      alert('Under Maintenance: Click login text to proceed to admin!');
      handleMaintenance();
    }
  };

<<<<<<< HEAD

   // Function to handle maintenance
   const handleMaintenance = () => {
    // Perform Axios request or any other maintenance logic
    axios.get('http://localhost:8080/students/2001720')
      .then(response => {
        // Handle the response, e.g., show a message or perform other actions
        console.log(response.data);
      })
      .catch(error => {
        // Handle errors if needed
        console.error('Error during maintenance:', error);
      });
  };

  // Function to handle login text click
=======
>>>>>>> 5c3a18d7155fe2c3ec3a8435f74e6932688e08fb
  const handleLoginTextClick = () => {
    setShowIncorrectKeyMessage(false);
    setLoginClicked(!isLoginClicked);

    // If the button is disabled, re-enable it immediately
    if (buttonDisabled) {
      setButtonDisabled(false);
    }
  };
  
  return (
    <main 
    className="bg-primary w-screen min-h-screen flex flex-col md:flex-row items-center gap-x-36">

      {/* Left Container */}
      <section className='md:w-6/12 flex justify-center md:justify-end items-center'>
        
        {/* Header*/}
        <div className='mt-36 md:mt-0'>
          <p className='font-extralight text-[18px] md:text-[34px] md:leading-10 text-white'>Together</p>
          <h1 className='font-bold text-[44px] md:text-[74px] leading-10 text-white md:mt-4'>WeComply.</h1>
        </div>

      </section>

      {/* Right Container */}
      <section className='md:w-6/12 flex flex-col items-start'>

        {/* InputBox */}
        <div className='flex flex-col md:flex-row items-center gap-2 mt-10'>
          {isLoginClicked ? (
            <input
              className='w-60 md:w-80 px-4 py-3 md:py-4 border rounded-xl shadow-md focus:outline-none focus:ring'
              type="password"
              name="secret_key"
              placeholder='Enter Secret Key'
              value={secretKeyInput}
              onChange={(e) => setSecretKeyInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          ) : (
            <input
              className='w-60 md:w-80 px-4 py-3 md:py-4 border rounded-xl shadow-md focus:outline-none focus:ring'
              type="text"
              name="id_no"
              placeholder='Search by ID Number'
              onKeyDown={handleKeyDown}
            />
          )}

          {/* Track/Login Button */}
          <button className="bg-secondary p-3 md:p-4 rounded-xl text-white mt-2 md:mt-0" onClick={handleLoginButtonClick}>
            <ArrowRightOnRectangleIcon className="h-6 w-6 pl-0.5" />
          </button>
        </div>

        {/* Action text */}
        <div className='container flex justify-center md:justify-start mt-3 md:mt-0'>
          {isLoginClicked ? (
            <p className='font-extralight text-sm md:text-[18px] leading-10 text-white md:mt-2 ml-2'>
              Not an admin?  
              <span className='text-accent font-semibold cursor-pointer' onClick={() => {
                setLoginClicked(false);
                setShowIncorrectKeyMessage(false);
              }}> Click here.
              </span>
            </p>
          ) : (
            <p className='font-extralight text-sm md:text-[18px] leading-10 text-white md:mt-2 ml-2'>
              Are you an admin?  
              <span className='text-accent font-semibold cursor-pointer' onClick={handleLoginTextClick}> Login
              </span> instead.
            </p>
          )}
        </div>

        {/* Error message */}
        {showIncorrectKeyMessage && (
          <div className='bg-error flex items-center py-3 px-4 font-semibold text-white text-[14px] rounded-lg mt-2'>
            <div className='flex items-center gap-1'>
              <ExclamationCircleIcon className="h-7 w-7" />
              <p>Incorrect Key. Please Contact the LITES President.</p>
            </div>
          </div>
        )}
      </section>

    </main>
  );
}
