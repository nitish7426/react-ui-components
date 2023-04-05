import React, { createContext, useEffect, useState } from "react";

export const context = createContext();

const DarkmodeContext = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    let theme = localStorage.getItem("theme");
    return theme ? theme : "system";
  });

  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    const eventHandler = () => {
      if (matchMedia.matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };
    matchMedia.addEventListener("change", eventHandler);
    return () => {
      matchMedia.removeEventListener("change", eventHandler);
    };
  }, []);

  const switchTheme = () => {
    switch (theme) {
      case "dark":
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        break;
    }
  };

  switchTheme();

  const matchMedia = () => {
    if (
      theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  matchMedia();

  return (
    <context.Provider value={{ theme, setTheme }}>{children}</context.Provider>
  );
};

export default DarkmodeContext;
