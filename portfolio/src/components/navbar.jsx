import hamburger from "../assets/hamburger.svg";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  console.log(isMenuOpen);

  return (
    <nav className="flex justify-between items-center h-24 mx-10 xl:mx-[160px]">
      <div className="text-3xl ">Nathapon Tansit</div>

      {/* mobile display */}
      <div className="relative ">
        <button className="flex lg:hidden " onClick={toggleMenu}>
          <img src={hamburger} />
        </button>
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10 lg:hidden">
            <a
              href="#about"
              className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#education"
              className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
              onClick={toggleMenu}
            >
              Education
            </a>
            <a
              href="#experience"
              className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
              onClick={toggleMenu}
            >
              Experience
            </a>
            <a
              href="#projects"
              className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        )}
      </div>

      {/* desktop display */}
      <ul className="hidden lg:flex lg:gap-8 lg:items-center lg:justify-evenly">
        <li>
          <a
            className="text-2xl hover:text-gray-500 hover:underline hover:underline-offset-[16px]"
            href="#about"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="text-2xl hover:text-gray-500 hover:underline hover:underline-offset-[16px]"
            href="#education"
          >
            Education
          </a>
        </li>
        <li>
          <a
            className="text-2xl hover:text-gray-500 hover:underline hover:underline-offset-[16px]"
            href="#experience"
          >
            Experience
          </a>
        </li>
        <li>
          <a
            className="text-2xl hover:text-gray-500 hover:underline hover:underline-offset-[16px]"
            href="#projects"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className="text-2xl hover:text-gray-500 hover:underline hover:underline-offset-[16px]"
            href="#contact"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
