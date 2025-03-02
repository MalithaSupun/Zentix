import React from "react";
import TeamImg from "../assets/Zentix Solution.jpg";

function WhatWeDo() {
  return (
    <section id="aboutus" className="py-16 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-20">
        {/* Left Side - Image */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src={TeamImg} // Replace with your actual image path
            alt="Team Collaboration"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Zentix?
          </h2>

          {/* Key Stats */}
          <div className="flex items-center space-x-6 mt-4">
            <div>
              <p className="text-4xl font-bold text-red-500">30+</p>
              <p className="text-gray-600 text-sm">Employees</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-red-500">3</p>
              <p className="text-gray-600 text-sm">Avg. years of experience</p>
            </div>
          </div>

          {/* Description */}
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
  With a presence in Sweden and Sri Lanka, our diverse tech experts collaborate 
  seamlessly to engineer next-gen software that accelerates innovation and growth.  
  Whether it's full-stack development, cloud computing, or data-driven insights—Zentix 
  turns your vision into reality.
</p>

          <a
            href="#"
            className="mt-6 inline-flex items-center font-bold bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 text-transparent bg-clip-text"
          >
            How it works →
          </a>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;