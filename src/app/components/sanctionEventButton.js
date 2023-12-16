"use client";
import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger the animation of children by 0.1 second
    },
  },
};

const menuItemVariants = {
  hidden: { x: -20, opacity: 0 }, // Start from left of the container
  visible: {
    x: 0, // End at the actual position
    opacity: 1,
    transition: {
      x: { type: "tween", duration: 0.3, ease: "easeOut" },
      opacity: { duration: 0.3 },
    },
  },
};

const sanctionEventButton = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          id="eventButton"
          as={motion.div}
          whileHover={{ backgroundColor: "#5947A2" }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          whileTap={{ scale: 0.75 }}
          className="cursor-pointer italic inline-flex w-full justify-center gap-x-1.5 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300"
        >
          Event
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-white"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="py-1"
          >
            {/* Map through menu items here */}
            {["SEAITE WEEK", "FOUNDATION WEEK", "SIRIB"].map((item, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <motion.a
                    variants={menuItemVariants}
                    className={classNames(
                      active
                        ? "bg-neutral text-secondary font-bold"
                        : "text-gray-900",
                      "block px-4 py-2 text-sm"
                    )}
                    href="#"
                  >
                    {item}
                  </motion.a>
                )}
              </Menu.Item>
            ))}
          </motion.div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default sanctionEventButton;
