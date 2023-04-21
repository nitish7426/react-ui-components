import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { AiFillApple, AiFillGithub } from "react-icons/ai";

const Buttons = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center gap-6">
      <button className="py-2.5 px-6 rounded-lg bg-sky-500 hover:bg-sky-600 transition-colors duration-200 text-white font-medium active:scale-95 capitalize">
        Primary
      </button>

      <button className="py-2.5 px-6 rounded-lg bg-transparent border hover:bg-sky-500/10 border-sky-500 transition-colors duration-200 text-sky-500 font-medium capitalize active:scale-95">
        outline
      </button>
      <button className="py-2.5 px-6 rounded-full bg-sky-500 hover:bg-sky-600 transition-colors duration-200 text-white font-medium capitalize active:scale-95">
        Button
      </button>

      {/* next js button */}
      <div className="p-[2px] bg-gradient-to-br from-transparent dark:via-white/60 via-black/50 rounded-lg">
        <button className="py-2.5 px-6 rounded-lg dark:bg-gray-900 bg-white text-gray-900 dark:text-white font-medium active:scale-95">
          Next js
        </button>
      </div>

      {/* login buttons */}
      <div className="space-y-4">
        {/* google */}
        <button className="flex items-center justify-center hover:bg-gray-100 hover:dark:bg-gray-800 gap-4 capitalize dark:text-gray-300 text-gray-600 py-2 px-6 min-w-[18rem] rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium transition-colors duration-200">
          <FcGoogle size={25} />
          login with google
        </button>
        {/* facebook */}
        <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-500 gap-4 capitalize text-white py-2 px-6 min-w-[18rem] rounded-lg text-sm font-medium transition-colors duration-200">
          <BsFacebook size={25} />
          login with facebook
        </button>
        {/* apple */}
        <button className="flex items-center justify-center bg-black hover:bg-black/90 gap-4 capitalize text-white py-2 px-6 min-w-[18rem] rounded-lg text-sm font-medium transition-colors duration-200">
          <AiFillApple size={25} />
          login with apple
        </button>
        {/* github */}
        <button className="flex items-center justify-center bg-neutral-800 hover:bg-neutral-800/90 gap-4 capitalize text-white py-2 px-6 min-w-[18rem] rounded-lg text-sm font-medium transition-colors duration-200">
          <AiFillGithub size={25} />
          login with github
        </button>
      </div>
    </div>
  );
};

export default Buttons;
