import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Sidebar = ({ isOpen, setIsOpen }) => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`inset-0 bg-black/20 backdrop-blur-sm fixed transition-transform duration-500`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.aside
            initial={{ translateX: -240 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: -240 }}
            transition={{ type: "just" }}
            className={`h-full w-60 bg-white px-6 py-12 flex flex-col items-center space-y-6 dark:bg-gray-800`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-20 w-20 rounded-full bg-neutral-300 dark:bg-gray-700"></div>
            {Array(5)
              .fill()
              .map((value, i) => (
                <div
                  key={i}
                  className="h-6 w-full bg-neutral-300 rounded-md max-w-sm dark:bg-gray-700"
                ></div>
              ))}
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
