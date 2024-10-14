import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const showMobileMenu = () => {
    setToggleMenu((preve) => !preve);
  };

  return (
    <header className=" primary flex justify-between   px-5 py-2 ">
      <a className="font-bold text-xl text-white " href="#">
        HABEEBULLAH JUHAF
      </a>

      <nav className="hidden md:block">
        <ul className="flex gap-5 text-white">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {toggleMenu && (
        <nav className="block fixed md:hidden ">
          <ul onClick={showMobileMenu} className="flex gap-5 flex-col text-white mobile-view ">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      )}
      <button onClick={showMobileMenu} className="block md:hidden">
        <Bars3Icon className="text-white h-6" />
      </button>
    </header>
  );
};

export default Header;
