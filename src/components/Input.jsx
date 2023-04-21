import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Input = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen w-full flex flex-col gap-6 items-center">
      {/* input 1 */}
      <input
        className="py-2 px-4 rounded-lg border outline-none focus:ring-2 ring-sky-500 bg-transparent border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 max-w-sm w-full"
        type="text"
        placeholder="Enter your email"
      />

      {/* input with label */}
      <div className="w-full max-w-sm flex flex-col gap-0.5">
        <label
          className="text-sm text-gray-500 dark:text-gray-300 font-medium capitalize"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="py-2 px-4 rounded-lg border outline-none focus:ring-2 ring-sky-500 bg-transparent border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 max-w-sm w-full"
          id="email"
          type="text"
          placeholder="Enter your email"
        />
      </div>

      {/* password input */}
      <div className="w-full max-w-sm flex flex-col gap-0.5">
        <label
          className="text-sm text-gray-500 dark:text-gray-300 font-medium capitalize"
          htmlFor="password"
        >
          Password
        </label>
        <div className="relative">
          <input
            className="py-2 px-4 rounded-lg border outline-none focus:ring-2 ring-sky-500 bg-transparent border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 max-w-sm w-full"
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          <button
            className="absolute right-2 top-2 text-gray-400 dark:text-gray-500"
            onClick={() => setShowPassword((sp) => !sp)}
          >
            {showPassword ? (
              <AiOutlineEyeInvisible size={25} />
            ) : (
              <AiOutlineEye size={25} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
