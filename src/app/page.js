"use client";

import { useState } from 'react';
import { ArrowLeftOnRectangleIcon, ExclamationCircleIcon, ArrowSmallLeftIcon} from '@heroicons/react/24/solid';
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { data } from 'autoprefixer';
import { SignIn } from '@clerk/nextjs';

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
  const [invalidFormat, setInvalidFormat] = useState(false);
  const [blankInput, setBlankInput] = useState(false);
  const [sanctionId, setSanctionId] = useState('');
  const [showLogin, setShowLogin] = useState(true);


  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleLoginButtonClick();
    }
  };
  

  const handleLoginButtonClick = () => {
 
    if (buttonDisabled) {
      return;
    }

    setButtonDisabled(true); 

    if (isLoginClicked) {
      if (secretKeyInput === secretKey) {
        setShowLogin(false);
      } else {
        setShowIncorrectKeyMessage(true);

       
        setTimeout(() => {
          setShowIncorrectKeyMessage(false);
        }, 3000);
      }
    }

    setTimeout(() => {
      setButtonDisabled(false);
    }, 3000);

    if (!isLoginClicked) {
     
      if (idNumber.trim() === '' && secretKeyInput.trim() === '') {
        setBlankInput(true);
        setSearchError(false);
        setUserNotFound(false);
        setInvalidFormat(false);

        setTimeout(() => {
          setBlankInput(false);
        }, 3000);

        return;
      }

      searchID();
    } else {
      
      if (secretKeyInput.trim() === '') {
        setBlankInput(true);
        setShowIncorrectKeyMessage(false);

        setTimeout(() => {
          setBlankInput(false);
        }, 3000);
      }
    }
  };

  const searchID = async () => {

    if (isNaN(idNumber) || idNumber.trim() === '') {
      setInvalidFormat(true);
      setSearchError(false);
      setUserNotFound(false);
      setButtonDisabled(false);
      setTimeout(() => {
        setShowIncorrectKeyMessage(false);
        setInvalidFormat(false);
      }, 3000);
      return;
    }

    try {
      const response = await axios.get(
        `https://enormous-boat-production.up.railway.app/student-attendance-summary/student-and-attendance-summary/${idNumber}`
      );

      setSearchError(false);
      const studentResponse = response.data.studentResponse;
      const fullName = studentResponse.fullName;
      const info = studentResponse.info;
      const sanction = studentResponse.sanction ? studentResponse.sanction.description : 'No Sanction';
      const sanctionId = studentResponse.sanction ? studentResponse.sanction.sanctionId : null;
      

      setFullName(fullName);
      setInfo(info);
      setSanction(sanction);
      setSanctionId(sanctionId);
      
      console.log(sanctionId);
      setTableData(response.data.attendanceSummaryList);

      setIsError(false);
      setUserNotFound(false);

      setShowSearchContainer(true);
    } catch (error) {
      console.error('Error fetching data', error);
      setIsError(true);
      setSearchError(true);

      if (error.response && error.response.status === 404) {
        setUserNotFound(true);
      }

      setTimeout(() => {
        setSearchError(false);
      }, 3000);
    }
  };

 
  const handleLoginTextClick = () => {
    setShowIncorrectKeyMessage(false);
    setLoginClicked(!isLoginClicked);

   
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
    setShowLogin(true);
  };

  return (
    <main 
    className="bg-primary w-screen min-h-screen flex flex-col md:flex-row items-center gap-x-36">

      {/* Left Container */}
      <section className='md:w-6/12 flex md:justify-end items-center'>
        
        {/* Header*/}
        <div className='mt-24 md:mt-0'>
          <p className='font-extralight text-[18px] md:text-[34px] md:leading-10 text-white'>Together</p>
          <h1 className='font-bold text-[44px] md:text-[74px] leading-10 text-white md:mt-4'>WeComply.</h1>
        </div>

      </section>

      {/* Right Container */}
      <section className='md:w-6/12 flex flex-col items-center md:items-start'>

        {/* InputBox */}
        {(showLogin || showSearchContainer) && (
          <div id="hideWhenSearching" className={`flex justify-center items-center gap-2 mt-10 ${showSearchContainer ? 'hidden' : ''}`}>
            {isLoginClicked ? (
              <input
                className='w-40 text-xs md:text-lg md:w-80 px-4 py-3 md:py-4 border rounded-xl shadow-md focus:outline-none focus:ring focus:ring-gray-700 focus:ring-opacity-50'
                type="password"
                name="secret_key"
                placeholder='Enter Secret Key'
                value={secretKeyInput}
                onChange={(e) => setSecretKeyInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            ) : (
              <input
                className='w-40 text-xs md:text-lg md:w-80 px-4 py-3 md:py-4 border rounded-xl shadow-md focus:outline-none focus:ring focus:ring-gray-700 focus:ring-opacity-50 '
                type="text"
                name="id_no"
                placeholder='Search by ID Number'
                onChange={(e) => setIdNumber(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            )}

            {/* Track/Login Button */}
            <button className="bg-gray-700 p-3 md:p-4 rounded-xl text-white" onClick={handleLoginButtonClick}>
              <ArrowLeftOnRectangleIcon className="h-6 w-6 pl-0.5" />
            </button>
          </div>
        )}

        {showLogin ? null : (
          <div className='bg-white rounded-2xl px-3 py-8'>
            <div onClick={handleArrowLeftClick} className='cursor-pointer'>
                <ArrowSmallLeftIcon className="h-6 w-6 pl-0.5" />
            </div>
            <SignIn redirectUrl="/dashboard" />
          </div>
        )}


        {/* Action text */}
        {(showLogin || showSearchContainer) && (
          <div className={`container flex justify-center md:justify-start mt-3 md:mt-0 ${showSearchContainer ? 'hidden' : ''}`}>
            {isLoginClicked ? (
              <p className='font-extralight text-md md:text-[18px] leading-10 text-white md:mt-2'>
                Not an admin?  
                <span className='text-accent font-semibold cursor-pointer' onClick={handleNotAdminClick}> Click here.
                </span>
              </p>
            ) : (
              <p className='font-extralight text-md md:text-[18px] leading-10 text-white md:mt-2'>
                Are you an admin?  
                <span className='text-accent font-semibold cursor-pointer' onClick={handleLoginTextClick}> Login
                </span>
              </p>
            )}
          </div>
        )}


        {/* Error message */}
        {showIncorrectKeyMessage && (
          <div className='error-message absolute top-8 left-1/2 transform -translate-x-1/2 bg-error flex items-center py-1 md:py-3 px-4 font-semibold text-white text-[12px] md:text-[14px] rounded-lg'>
            <div className='flex items-center gap-1'>
              <ExclamationCircleIcon className="h-7 w-7" />
              <p>Incorrect Key. Please Contact the LITES President.</p>
            </div>
          </div>
        )}

        {searchError && (
          <div className='error-message absolute top-8 left-1/2 transform -translate-x-1/2 bg-error flex items-center py-1 md:py-3 px-4 font-semibold text-white text-[12px] md:text-[14px] rounded-lg'>
            <div className='flex items-center gap-1'>
              <ExclamationCircleIcon className="h-7 w-7" />
              <p>User not found!</p>
            </div>
          </div>
        )}

        {invalidFormat && (
          <div className='error-message absolute top-8 left-1/2 transform -translate-x-1/2 bg-error flex items-center py-1 md:py-3 px-4 font-semibold text-white text-[12px] md:text-[14px] rounded-lg'>
            <div className='flex items-center gap-1'>
              <ExclamationCircleIcon className="h-7 w-7" />
              <p>Invalid Format!</p>
            </div>
          </div>
        )}

        {blankInput && (
          <div className='error-message absolute top-8 left-1/2 transform -translate-x-1/2 bg-error flex items-center py-1 md:py-3 px-4 font-semibold text-white text-[12px] md:text-[14px] rounded-lg'>
            <div className='flex items-center gap-1'>
              <ExclamationCircleIcon className="h-7 w-7" />
              <p>Please enter an input!</p>
            </div>
          </div>
        )}


        {/* Search Container */}
        {showSearchContainer && (
          <div className='w-screen md:w-2/3'>
            <div className='bg-white p-4 mx-6 md:mx-0 mt-10 md:mt-0 h-screen md:h-auto min-h-[190px] rounded-2xl mb-11 md:mb-0'>
              <div onClick={handleArrowLeftClick} className='cursor-pointer'>
                <ArrowSmallLeftIcon className="h-6 w-6 pl-0.5 mt-2 ml-2" />
              </div>
              <div className='flex flex-col items-center text-center mt-6 md:mt-0'>
                <h1 className='text-xl md:text-2xl font-semibold'>
                  {userNotFound ? 'User not Found' : fullName}
                </h1>
                {!isError && info.trim() !== '' && (
                  <>
                    <p className='font-semibold text-primary text-sm md:text-md'>{info}</p>
                    
                      <p className='text-md md:text-lg mt-3'>
                        <div className='flex justify-center items-center gap-4'>
                        <div className='font-bold'>Sanction:</div>{' '}
                        <div 
                          className={`rounded-xl p-3 px-5 text-xs font-semibold ${
                            sanctionId === 1
                              ? 'bg-lowSanc text-white'
                              : sanctionId === 2
                              ? 'bg-medSanc text-white'
                              : sanctionId === 3
                              ? 'bg-highSanc text-white'
                              : 'bg-gray-300'
                          }`}
                        >
                          {sanction}
                        </div>
                        </div>

                      </p>
                    
                  </>
                )}
              </div>

    {/* Check if sanction is not 'No Sanction' before rendering the table */}
      {tableData.length > 0 && (
        <div className="max-h-48 md:overflow-y-auto mt-6">
          <table className="w-full text-sm rtl:text-right text-gray-700 text-center">
            <thead className="text-xs text-softWhite uppercase bg-gray-700 font-bold border-b-2 border-gray-200">
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
            <tbody>
              {tableData.map((rowData, index) => (
                <tr key={index} className="bg-white border-b">
                  <td className="px-3 py-4">{rowData.date}</td>
                  <td className="px-3 py-4">{rowData.eventName}</td>
                  <td className="px-3 py-4">{rowData.totalAbsences}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  </div>
)}

      </section>
    </main>
  );
}
