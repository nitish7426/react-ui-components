import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import useEventListener from "../hooks/useEventListener";
import { AnimatePresence, motion } from "framer-motion";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const handleEvent = (e) => {
    if (!menuRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };
  useEventListener("mousedown", handleEvent);
  return (
    <div className="relative" ref={menuRef}>
      <Button text={"Options"} onClick={() => setIsOpen(!isOpen)} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            className={` absolute p-2 rounded-2xl dark:bg-gray-800 bg-gray-100 right-0 mt-2 z-20 shadow-xl origin-top-right`}
          >
            {Array(5)
              .fill()
              .map((value, i) => (
                <button
                  className="flex items-center capitalize gap-2 py-2 pl-2 pr-5 w-32 rounded-xl dark:hover:bg-gray-700 hover:bg-gray-200 font-medium"
                  key={i}
                >
                  Items
                </button>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropDown;
