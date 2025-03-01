import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/Zentix.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" text-black fixed w-full top-0 left-0 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        
        {/* Logo with Image */}
        <div className="text-2xl font-bold">
          <Link to="/">
            <img src={logo} alt="Company Logo" className="h-10 w-auto" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link to="/product" className="hover:text-gray-400">Product</Link>
          <Link to="/price" className="hover:text-gray-400">Price</Link>
          <Link to="/about" className="hover:text-gray-400">About Us</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact Us</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${menuOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col items-center space-y-4 py-4">
          <Link to="/product" className="text-black" onClick={() => setMenuOpen(false)}>Product</Link>
          <Link to="/price" className="text-black" onClick={() => setMenuOpen(false)}>Price</Link>
          <Link to="/about" className="text-black" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/contact" className="text-black" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;