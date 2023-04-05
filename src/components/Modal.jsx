import React from "react";
import Button from "./Button";
import { AnimatePresence, motion } from "framer-motion";

const Modal = ({ isOpen, setIsOpen }) => {
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
          className="fixed h-screen w-full top-0 z-50 bg-black/30 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.article
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.15 }}
            className="bg-gray-100 dark:bg-gray-800 max-w-lg p-4 rounded-xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              laudantium tenetur, maxime, cum odit ducimus optio quod ipsa
              labore illum deleniti aut beatae nostrum. Fugit magnam ducimus
              nemo soluta nihil?
            </p>
            <Button onClick={() => setIsOpen(false)} text={"Close"} />
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
