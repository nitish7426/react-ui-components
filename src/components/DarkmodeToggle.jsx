import React, { useState } from "react";
import { BiSun, BiMoon, BiDesktop } from "react-icons/bi";

const DarkmodeToggle = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <button
      className="relative dark:text-gray-300 text-gray-600"
      onClick={() => setToggle(!toggle)}
    >
      <BiSun
        className={`absolute ${
          toggle ? " opacity-100" : " opacity-0 rotate-180"
        } transition-all duration-300`}
        size={30}
      />
      <BiMoon
        className={`absolute ${
          toggle ? " opacity-0 -rotate-180" : " opacity-100"
        } transition-all duration-300`}
        size={30}
      />
    </button>
  );
};

export default DarkmodeToggle;
