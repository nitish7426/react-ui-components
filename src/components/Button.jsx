import React from "react";

const Button = ({ text, onClick, className }) => {
  return (
    <button
      className={`${className} text-white bg-sky-500 py-2 px-5 rounded-lg font-semibold capitalize tracking-wide hover:bg-sky-600 transition-colors duration-200`}
      onClick={onClick}
    >
      {text || "Add text"}
    </button>
  );
};

export default Button;
