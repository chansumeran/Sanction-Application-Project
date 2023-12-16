"use client";
import Navbar from '../components/navbar';
import Header from '../components/header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import TypingAnimation from '../components/typingAnimation';
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid';

const Clarityai = () => {

  const [inputValue, setInputValue] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsloading] = useState(false);


  const clearChat = () => {
    console.log('Clearing chat...');
    setChatLog([]);
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    setChatLog((prevChatLog) => [...prevChatLog, {type: 'user', message: inputValue}])

    sendMessage(inputValue);

    setInputValue('');
  }

  const sendMessage = (message) => {
    const url = 'https://api.openai.com/v1/chat/completions';
    const headers = {
      'Content-type': 'application/json',
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`
    }
    const data = {
      model: "gpt-3.5-turbo",
      messages: [{"role": "user", "content": message}]
    }

    setIsloading(true);

    axios.post(url, data, {headers: headers}).then((response) => {
      console.log(response);
      setChatLog((prevChatLog) => [...prevChatLog, {type: 'bot', message: response.data.choices[0].message.content}])
      setIsloading(false);
    }).catch((error) => {
      setIsloading(false);
      console.log(error);
    })
  }

  useEffect(() => {

    const chatContainer = document.getElementById('chatContainer');

    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [chatLog]);

  return (
    <div className="flex flex-col h-screen items-center bg-neutral">

        <Header title="Clarity AI"/>

        <div 
          className="flex flex-col w-8/12 h-[700px] overflow-y-auto bg-white p-6 rounded-2xl mt-6 shadow-lg"
          style={{ boxShadow: '0 10px 20px 10px rgba(134, 104, 255, 0.2)' }}>

          {/*Chat Container*/}
          <div 
          id="chatContainer"
          className='flex-grow p-6 max-h-[700px] overflow-y-auto'
          >
            <div className='flex flex-col space-y-4'>
              {
              chatLog.map((message, index) => (
                <div key={index} className={`flex ${
                  message.type === 'user' ? 'justify-end' : 'justify-start'
                }`}>
                  <div className={`${
                    message.type === 'user' ? 'bg-primary text-white' : 'bg-neutral text-black'
                  } rounded-lg p-4 max-w-lg`}>
                  {message.message}
                  </div>
                  </div>
                )) 
              }
              {
                isLoading &&
                <div key={chatLog.length} className='flex justify-start'>
                  <div className='bg-neutral rounded-lg p-6 text-white max-w-sm'>
                    <TypingAnimation/>
                  </div>
                </div>
              }

            </div>
          </div>

          {/*Chat box */}
          <form onSubmit={handleSubmit} className='flex-none p-4'>

            <div className='flex gap-2'>

            <input 
              type="text" 
              className='flex-grow px-4 py-3 md:py-4 border rounded-xl shadow-md focus:outline-none focus:ring bg-neutral' 
              placeholder='Type your message here...' 
              value={inputValue} 
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button 
              type="submit" 
              className='bg-secondary p-3 md:p-4 rounded-xl text-white mt-2 md:mt-0'>
                <ArrowSmallRightIcon className="h-6 w-6 pl-0.5" />
            </button>

            {/**Clear button */}
            <button
              type="button"
              onClick={clearChat}
              className='bg-neutral text-black font-semibold p-3 md:p-4 rounded-xl mt-2 md:mt-0'>
                Clear
            </button>

            </div>

          </form>

        </div>

        <Navbar/>
        
    </div>
  );
};

export default Clarityai;

