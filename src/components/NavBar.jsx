import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Zentix.png";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleScroll = (sectionId) => {
    setIsOpen(false); // Close mobile menu
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate(`/${sectionId}`); // Navigate to page if section not found
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 500);
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center bg-white bg-opacity-40 backdrop-blur-sm p-4 shadow-sm z-50">
        {/* Left Side - Logo */}
        <div>
          <img src={logo} alt="Company Logo" className="h-10 w-auto" />
        </div>

        {/* Right Side - Navigation Links (Desktop) */}
        <ul className="hidden md:flex space-x-6 text-black text-lg font-semibold">
          <li>
            <button onClick={() => handleScroll("home")} className="hover:text-blue-600 transition duration-300">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => handleScroll("services")} className="hover:text-blue-600 transition duration-300">
              Services
            </button>
          </li>
          <li>
            <button onClick={() => handleScroll("contactus")} className="hover:text-blue-600 transition duration-300">
              Contact
            </button>
          </li>
          <li>
            <button onClick={() => handleScroll("aboutus")} className="hover:text-blue-600 transition duration-300">
              About Us
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-black text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center transition-transform transform z-50">
          <button className="absolute top-5 right-5 text-white text-3xl" onClick={() => setIsOpen(false)}>
            ✕
          </button>
          <ul className="text-white text-2xl space-y-6 text-center">
            <li><button onClick={() => handleScroll("home")} className="hover:text-gray-300">Home</button></li>
            <li><button onClick={() => handleScroll("services")} className="hover:text-gray-300">Services</button></li>
            <li><button onClick={() => handleScroll("contactus")} className="hover:text-gray-300">Contact</button></li>
            <li><button onClick={() => handleScroll("aboutus")} className="hover:text-gray-300">About Us</button></li>
          </ul>
        </div>
      )}
    </>
  );
}

export default NavBar;