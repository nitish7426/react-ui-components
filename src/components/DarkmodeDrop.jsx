import React, { useContext, useEffect, useRef, useState } from "react";
import { BiSun, BiMoon, BiDesktop } from "react-icons/bi";
import { context } from "../context/DarkmodeContext";
import useEventListener from "../hooks/useEventListener";
import { AnimatePresence, motion } from "framer-motion";

const DarkmodeDrop = () => {
  const { theme, setTheme } = useContext(context);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();
  const list = [
    {
      id: 1,
      text: "system",
      icon: <BiDesktop />,
    },
    {
      id: 2,
      text: "light",
      icon: <BiSun />,
    },
    {
      id: 3,
      text: "dark",
      icon: <BiMoon />,
    },
  ];
  const afterClass =
    "after:absolute after:h-10 after:w-10 after:bg-gray-700 after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-50";

  useEventListener("mousedown", (e) => {
    if (!dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  });

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="text-2xl relative p-2.5 rounded-full hover:bg-gray-100 text-gray-500 dark:hover:bg-gray-800 transition-colors duration-200 dark:text-gray-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {theme === "system" && <BiDesktop />}
        {theme === "light" && <BiSun />}
        {theme === "dark" && <BiMoon />}
      </button>

      <AnimatePresence>
        {/* dropdown */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            className={` absolute p-2 rounded-2xl dark:bg-gray-800 bg-gray-100 right-2 mt-1 z-20 shadow-xl origin-top-right`}
          >
            {list.map(({ text, id, icon }) => (
              <button
                className={`flex items-center capitalize gap-2 py-2 pl-2 pr-5 w-full rounded-xl dark:hover:bg-gray-700 hover:bg-gray-200 font-medium ${
                  theme === text
                    ? "text-sky-400"
                    : "dark:text-gray-300 text-gray-600"
                }`}
                key={id}
                onClick={() => setTheme(text)}
              >
                <div className="text-2xl">{icon}</div>
                <p>{text}</p>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DarkmodeDrop;
