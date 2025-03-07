import React from "react";
import logo from "../assets/Zentix.png";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 body-font">
      <div className="container px-5 py-16 mx-auto flex md:items-start lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        
        {/* Left Side - Company Info */}
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <img src={logo} alt="Zentix Logo" className="h-12 w-auto" />
          </a>
          <p className="mt-2 text-sm text-gray-400">
            Delivering innovative software solutions with expertise in **AI, Web, and DevOps**.
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          
          {/* Services */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">SERVICES</h2>
            <nav className="list-none mb-10">
              <li><a className="text-gray-400 hover:text-red-400">Web Development</a></li>
              <li><a className="text-gray-400 hover:text-red-400">AI & Machine Learning</a></li>
              <li><a className="text-gray-400 hover:text-red-400">DevOps & Cloud</a></li>
              <li><a className="text-gray-400 hover:text-red-400">UI/UX Design</a></li>
            </nav>
          </div>

          {/* Company */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">COMPANY</h2>
            <nav className="list-none mb-10">
              <li><a className="text-gray-400 hover:text-red-400">About Us</a></li>
              <li><a className="text-gray-400 hover:text-red-400">Careers</a></li>
              <li><a className="text-gray-400 hover:text-red-400">Our Team</a></li>
              <li><a className="text-gray-400 hover:text-red-400">Contact</a></li>
            </nav>
          </div>

          {/* Resources */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">RESOURCES</h2>
            <nav className="list-none mb-10">
              <li><a className="text-gray-400 hover:text-red-400">Case Studies</a></li>
              <li><a className="text-gray-400 hover:text-red-400">Blog</a></li>
              <li><a className="text-gray-400 hover:text-red-400">FAQs</a></li>
              <li><a className="text-gray-400 hover:text-red-400">Support</a></li>
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CONTACT</h2>
            <nav className="list-none mb-10">
              <li><a className="text-gray-400 hover:text-red-400">info@zentix.com</a></li>
              <li><a className="text-gray-400 hover:text-red-400">+1 234 567 890</a></li>
              <li><a className="text-gray-400 hover:text-red-400">LinkedIn</a></li>
              <li><a className="text-gray-400 hover:text-red-400">Twitter</a></li>
            </nav>
          </div>
          
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-800">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Zentix — All rights reserved.
          </p>
          
          {/* Social Media Links */}
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-400 hover:text-red-400">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-400 hover:text-red-400">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0015 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-400 hover:text-red-400">
              <svg fill="none" stroke="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;