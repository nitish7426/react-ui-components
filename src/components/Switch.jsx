import React from "react";

const Switch = ({ size, checked, onChange }) => {
  return (
    <div className="relative">
      <input
        className={`${size === "small" && "h-4 w-7"}
        ${(size === "medium" || !size) && "h-6 w-11"}
        ${size === "large" && "h-8 w-14"}
         bg-gray-400 dark:bg-gray-600 appearance-none rounded-full peer cursor-pointer checked:bg-sky-500 transition-colors duration-200`}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <div
        className={` rounded-full bg-white absolute top-0 transition-transform duration-200 pointer-events-none ${
          size === "small" && "my-1 mx-0.5 h-3 w-3 peer-checked:translate-x-3"
        }

        ${
          (size === "medium" || !size) &&
          "my-1 mx-1 h-4 w-4 peer-checked:translate-x-5"
        }
        ${size === "large" && "my-1 mx-1 h-6 w-6 peer-checked:translate-x-6"}
        `}
      ></div>
    </div>
  );
};

export default Switch;
