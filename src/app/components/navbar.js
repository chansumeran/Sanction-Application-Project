"use client";
import { HomeIcon, Cog8ToothIcon, ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { UserButton, OrganizationSwitcher } from '@clerk/nextjs';
import { motion } from "framer-motion";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/dashboard");

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  return (
    <div>
      <motion.div
        whileHover={activeLink !== "/config" ? { scale: 1.1 } : {scale: 1.1}}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
          when: "afterChildren", // Wait for children to exit first
          duration: 0.5, // Adjust the duration as needed
          ease: "easeInOut", // Add easing for a smoother exit
        }}
        className="flex items-center w-auto h-20 bg-white py-0 px-8 rounded-2xl mt-8 mb-10 shadow-lg"
        style={{ boxShadow: "0 10px 20px 10px rgba(134, 104, 255, 0.2)" }}
      >
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <motion.div
              whileHover={activeLink !== "/dashboard" ? { scale: 1.2, backgroundColor: '#EDEAF6' } : {scale: 1.2}}
              transition={{ duration: 0 }}
              id="home"
              className={`p-2 rounded-lg ${
                activeLink === "/dashboard" ? "bg-gray-700 text-white" : ""
              }`}
            >
              <HomeIcon className="h-5 w-5" />
            </motion.div>
          </Link>

          <Link href="/config">
            <motion.div
              whileHover={activeLink !== "/config" ? { scale: 1.2, backgroundColor: '#EDEAF6' } : {scale: 1.2}}
              transition={{ duration: 0 }}
              id="configs"
              className={`p-2 rounded-lg ${
                activeLink === "/config" ? "bg-gray-700 text-white" : ""
              }`}
            >
              <Cog8ToothIcon className="h-5 w-5" />
            </motion.div>
          </Link>

          <Link href="/clarityai">
            <motion.div
              whileHover={activeLink !== "/clarityai" ? { scale: 1.2, backgroundColor: '#EDEAF6' } : {scale: 1.2}}
              transition={{ duration: 0 }}
              id="clarity"
              className={`p-2 rounded-lg ${
                activeLink === "/clarityai" ? "bg-gray-700 text-white" : ""
              }`}
            >
              <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5" />
            </motion.div>
          </Link>
          <motion.div
          whileHover={{scale: 1.05, backgroundColor: '#EDEAF6', borderRadius: '12px' }} 
          transition={{ duration: 0 }} 
          className='flex justify-center items-center '>
            <OrganizationSwitcher/>
          </motion.div>
          <motion.div 
          whileHover={{scale: 1.2, backgroundColor: '#EDEAF6', borderRadius: '12px' }} 
          transition={{ duration: 0 }} 
          >
            <UserButton/>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
