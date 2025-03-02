import React, { useState } from "react";
import logo from "../assets/Zentix.png";

function NavBar() {
          const [isOpen, setIsOpen] = useState(false);
  return (
    <>
            {/* Navbar */}
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center bg-white bg-opacity-20 backdrop-blur-sm p-4 shadow-sm z-50">
      {/* Left Side - Logo */}
      <div className="text-white text-xl font-bold">
        <img
          src={logo}
          alt="Company Logo"
          className="h-10 w-auto"
        />
      </div>

      {/* Right Side - Navigation Links (Desktop) */}
      <ul className="hidden md:flex space-x-6 text-white text-lg">
        <li>
          <a
            href="#"
            className="hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-600 hover:to-cyan-500 hover:text-transparent hover:bg-clip-text transition duration-300"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-600 hover:to-cyan-500 hover:text-transparent hover:bg-clip-text transition duration-300"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-600 hover:to-cyan-500 hover:text-transparent hover:bg-clip-text transition duration-300"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-600 hover:to-cyan-500 hover:text-transparent hover:bg-clip-text transition duration-300"
          >
            About Us
          </a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div
        className="md:hidden text-white text-2xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </div>
    </nav>
    {/* Mobile Menu */}
    <div
      className={`md:hidden fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center transition-transform transform z-50 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button
        className="absolute top-5 right-5 text-white text-3xl"
        onClick={() => setIsOpen(false)}
      >
        ✕
      </button>
      <ul className="text-white text-2xl space-y-6 text-center">
        <li>
          <a
            href="#"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </a>
        </li>
      </ul>
    </div>
    </>
  )
}

export default NavBar
