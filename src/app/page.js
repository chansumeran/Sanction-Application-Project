"use client";

import { useState } from 'react';
import { ArrowRightOnRectangleIcon, ExclamationCircleIcon, ArrowSmallLeftIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { data } from 'autoprefixer';

export default function Home() {

  const router = useRouter();

  //Secret Key
  const secretKey = 'emma@cebu';
  // Use states
  const [isLoginClicked, setLoginClicked] = useState(false);
  const [secretKeyInput, setSecretKeyInput] = useState('');
  const [showIncorrectKeyMessage, setShowIncorrectKeyMessage] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [idNumber, setIdNumber] = useState('');
  const [showSearchContainer, setShowSearchContainer] = useState(false);
  const [fullName, setFullName] = useState('');
  const [info, setInfo] = useState('');
  const [sanction, setSanction] = useState('');
  const [userNotFound, setUserNotFound] = useState(false);
  const [isError, setIsError] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [searchError, setSearchError] = useState(false);


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
      searchID();
    }
  };


   // Function to handle maintenance
  const searchID = async () => {
    // Perform Axios request or any other maintenance logic
    try {
      const response = await axios.get(
        `https://erect-oranges-production.up.railway.app/student-attendance-summary/student-and-attendance-summary/${idNumber}`
      );

      setSearchError(false);
      const studentResponse = response.data.studentResponse;
      const fullName = studentResponse.fullName;
      const info = studentResponse.info;
      const sanction = studentResponse.sanction;

      setFullName(fullName);
      setInfo(info);
      setSanction(sanction);

      setTableData(response.data.attendanceSummaryList);

      setIsError(false);
      setUserNotFound(false);
      setShowSearchContainer(true);
    } catch (error) {
      console.error('Error fetching data', error);
      setIsError(true);
      setSearchError(true);

      // Set the error message based on the error status
      if (error.response && error.response.status === 404) {
        setUserNotFound(true);
      }

      // Delay setting setSearchError(false) by 3 seconds
      setTimeout(() => {
        setSearchError(false);
      }, 3000);
    }
  };

  // Function to handle login text click
  const handleLoginTextClick = () => {
    setShowIncorrectKeyMessage(false);
    setLoginClicked(!isLoginClicked);

    // If the button is disabled, re-enable it immediately
    if (buttonDisabled) {
      setButtonDisabled(false);
    }
  };

  const handleNotAdminClick = () => {
    setShowIncorrectKeyMessage(false);
    setLoginClicked(false);
  };

  const handleArrowLeftClick = () => {
    setShowSearchContainer(false);
    setFullName('');
    setInfo('');
    setSanction('');
    setSearchError(false);
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
        {showSearchContainer ? null : (
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
                onChange={(e) => setIdNumber(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            )}

            {/* Track/Login Button */}
            <button className="bg-secondary p-3 md:p-4 rounded-xl text-white mt-2 md:mt-0" onClick={handleLoginButtonClick}>
              <ArrowRightOnRectangleIcon className="h-6 w-6 pl-0.5" />
            </button>
          </div>
        )}

        {/* Action text */}
        {showSearchContainer ? null : (
          <div className='container flex justify-center md:justify-start mt-3 md:mt-0'>
            {isLoginClicked ? (
              <p className='font-extralight text-sm md:text-[18px] leading-10 text-white md:mt-2 ml-2'>
                Not an admin?  
                <span className='text-accent font-semibold cursor-pointer' onClick={handleNotAdminClick}> Click here.
                </span>
              </p>
            ) : (
              <p className='font-extralight text-sm md:text-[18px] leading-10 text-white md:mt-2 ml-2'>
                Are you an admin?  
                <span className='text-accent font-semibold cursor-pointer' onClick={handleLoginTextClick}> Login
                </span>
              </p>
            )}
          </div>
        )}


        {/* Error message */}
        {showIncorrectKeyMessage && (
          <div className='bg-error flex items-center py-3 px-4 font-semibold text-white text-[14px] rounded-lg mt-2'>
            <div className='flex items-center gap-1'>
              <ExclamationCircleIcon className="h-7 w-7" />
              <p>Incorrect Key. Please Contact the LITES President.</p>
            </div>
          </div>
        )}

        {/* Error message */}
        {searchError && (
          <div className='bg-error flex items-center py-3 px-4 font-semibold text-white text-[14px] rounded-lg mt-2'>
            <div className='flex items-center gap-1'>
              <ExclamationCircleIcon className="h-7 w-7" />
              <p>User not found!</p>
            </div>
          </div>
        )}


        {/* Search Container */}
        {showSearchContainer && (
          <div className='w-screen md:w-2/3'>
            <div className='bg-neutral p-4 mx-6 md:mx-0 mt-10 md:mt-0 h-auto min-h-[190px] rounded-2xl'>
              <div onClick={handleArrowLeftClick} className='cursor-pointer'>
                <ArrowSmallLeftIcon className="h-6 w-6 pl-0.5 mt-2 ml-2" />
              </div>
              <div className='flex flex-col items-center'>
                <h1 className='text-2xl font-semibold '>
                  {userNotFound ? 'User not Found' : fullName}
                </h1>
                {!isError && info.trim() !== '' && (
                  <>
                    <p className='font-semibold text-primary'>{info}</p>
                    {sanction.trim() !== '' && (
                      <p className='text-lg mt-4'>
                        <span className='font-bold'>Sanction:</span>{' '}
                        <span className={`py-2 px-4 ml-4 text-sm rounded-md ${sanction.trim().toLowerCase() === 'no sanction' ? 'bg-success' : 'bg-error'}`}>
                          {sanction}
                        </span>
                      </p>
                    )}
                  </>
                )}
              </div>

              {/* Check if sanction is not 'No Sanction' before rendering the table */}
              {tableData.length > 0 && sanction.trim().toLowerCase() !== 'no sanction' && (
                <table className="w-full text-sm text-left rtl:text-right text-secondary mt-6">
                  <thead className="text-xs text-secondary uppercase bg-neutral font-bold border-b-2 border-gray-200">
                    <tr>
                      <th scope="col" className="px-3 py-3 ">
                        Date
                      </th>
                      <th scope="col" className="px-3 py-3">
                        Event
                      </th>
                      <th scope="col" className="px-3 py-3">
                        Absences
                      </th>
                    </tr>
                  </thead>
                  {tableData.map((rowData, index) => (
                    <tr key={index} className="bg-white border-b">
                      <td className="px-3 py-4">{rowData.date}</td>
                      <td className="px-3 py-4">{rowData.eventName}</td>
                      <td className="px-3 py-4">{rowData.totalAbsences}</td>
                    </tr>
                  ))}
                </table>
              )}

            </div>
          </div>
        )}

      </section>
    </main>
  );
}
