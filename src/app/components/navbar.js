"use client";
import { HomeIcon, Cog8ToothIcon, ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/dashboard');

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  return (
    <div>
      <div className="flex items-center w-auto h-20 bg-white py-0 px-8 rounded-2xl mt-8 mb-10 shadow-lg"
        style={{ boxShadow: '0 10px 20px 10px rgba(134, 104, 255, 0.2)' }}>

        <div className='flex items-center gap-4'>
          <Link href='/dashboard'>
            <div className={`p-2 rounded-lg ${activeLink === '/dashboard' ? 'bg-gray-700 text-white' : ''}`}>
              <HomeIcon className="h-5 w-5" />
            </div>
          </Link>

          <Link href='/config'>
            <div className={`p-2 rounded-lg ${activeLink === '/config' ? 'bg-gray-700 text-white' : ''}`}>
              <Cog8ToothIcon className="h-5 w-5" />
            </div>
          </Link>

          <Link href='/clarityai'>
            <div className={`p-2 rounded-lg ${activeLink === '/clarityai' ? 'bg-gray-700 text-white' : ''}`}>
              <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
