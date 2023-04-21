import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import DropDown from "./components/DropDown";
import Sidebar from "./components/Sidebar";
import Switch from "./components/Switch";
import YoutubeTags from "./components/YoutubeTags";
import DarkmodeDrop from "./components/DarkmodeDrop";
import DarkmodeToggle from "./components/DarkmodeToggle";
import Modal from "./components/Modal";
import NavLinks from "./components/NavLinks";
import Input from "./components/Input";
import Buttons from "./components/Buttons";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen px-4 py-12 flex items-center justify-center bg-white dark:bg-gray-900 dark:text-gray-100 text-gray-800 transition-colors duration-150">
      <div className="absolute top-0">
        <DarkmodeDrop />
      </div>
      {/* <Input /> */}
      <Buttons />
      {/* <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} /> */}
      {/* <YoutubeTags /> */}
      {/* <DropDown /> */}
      {/* <Switch /> */}
      {/* <DarkmodeDrop /> */}
      {/* <DarkmodeToggle /> */}
      {/* <Button text="Open" onClick={() => setIsOpen(true)} /> */}
      {/* <Modal isOpen={isOpen} setIsOpen={setIsOpen} /> */}
      {/* <NavLinks /> */}
    </div>
  );
};

export default App;
