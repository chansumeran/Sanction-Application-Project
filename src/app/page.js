"use client";

import { useState } from 'react';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';
import { motion } from "framer-motion";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {

  const router = useRouter();

  //Secret Key
  const secretKey = 'emma@cebu';
  // Use states
  const [isLoginClicked, setLoginClicked] = useState(false);
  const [secretKeyInput, setSecretKeyInput] = useState('');

  // Function to handle login button click
  const handleLoginButtonClick = () => {
    if (isLoginClicked) {
      if (secretKeyInput === secretKey) {
        alert('Authentication successful! Redirecting to Dashboard');
        router.push('/dashboard');
      } else {
        // Display error if the key is incorrect
        alert('Wrong key');
      }
    }
    if(!isLoginClicked) {
      alert('Under Maintenance: Click login text to proceed to admin!');
    }
  };

  // Function to handle login text click
  const handleLoginTextClick = () => {
    setLoginClicked(!isLoginClicked);
  };

  return (
    <main className="bg-primary w-screen min-h-screen flex flex-col md:flex-row items-center gap-x-36">

      {/* Left Container */}
      <section className='md:w-6/12 flex justify-center md:justify-end items-center'>
        
        {/* Header*/}
        <div className='mt-36 md:mt-0'>
          <p className='font-extralight text-lg md:text-[34px] md:leading-10 text-white'>Together</p>
          <h1 className='font-bold text-3xl md:text-[74px] md:leading-10 text-white md:mt-4'>WeComply.</h1>
        </div>

      </section>

      {/* Right Container */}
      <section className='md:w-6/12 flex flex-col items-start'>

        {/* InputBox */}
        <div className='flex items-center gap-2 mt-10'>
          {isLoginClicked ? (
            <input
              className='w-60 md:w-80 px-4 py-3 md:py-4 border rounded-xl shadow-md focus:outline-none focus:ring'
              type="text"
              name="secret_key"
              placeholder='Enter Secret Key'
              value={secretKeyInput}
              onChange={(e) => setSecretKeyInput(e.target.value)}
            />
          ) : (
            <input
              className='w-60 md:w-80 px-4 py-3 md:py-4 border rounded-xl shadow-md focus:outline-none focus:ring'
              type="text"
              name="id_no"
              placeholder='Search by ID Number'
            />
          )}

          {/* Track/Login Button */}
          <div className="bg-secondary p-3 md:p-4 rounded-xl text-white" onClick={handleLoginButtonClick}>
            <ArrowRightOnRectangleIcon className="h-6 w-6 pl-0.5" />
          </div>
        </div>

        {/* Action text */}
        <div>
          {isLoginClicked ? (
            <p className='font-extralight text-sm md:text-[18px] leading-10 text-white md:mt-2'>
              Not an admin?  
              <span className='text-accent font-semibold cursor-pointer' onClick={() => setLoginClicked(false)}> Click here.
              </span>
            </p>
          ) : (
            <p className='font-extralight text-sm md:text-[18px] leading-10 text-white md:mt-2'>
              Are you an admin?  
              <span className='text-accent font-semibold cursor-pointer' onClick={handleLoginTextClick}> Login
              </span> instead.
            </p>
          )}
        </div>

      </section>

    </main>
  );
}
