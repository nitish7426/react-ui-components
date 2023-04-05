import React, { useState } from "react";
import { motion } from "framer-motion";

const NavLinks = () => {
  const [activeLink, setActiveLink] = useState("home");
  const linksArr = ["home", "services", "about", "contact", "more"];
  return (
    <nav className="flex">
      <ul className="flex">
        {linksArr.map((value) => (
          <li
            className="text-center capitalize text-lg"
            key={value}
            onClick={() => setActiveLink(value)}
          >
            <a
              className="px-5 py-1"
              href=""
              onClick={(e) => e.preventDefault()}
            >
              {value}
            </a>
            {activeLink === value && (
              <motion.div
                layoutId="links"
                transition={{
                  type: "spring",
                  stiffness: 70,
                  damping: 13,
                }}
                className="h-0.5 w-full dark:bg-gray-100 bg-gray-800"
              ></motion.div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
