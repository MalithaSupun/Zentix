import React from "react";
import NavBar from "./NavBar";

function NavandHomeSec() {
  return (
    <div
    className="relative w-full h-screen bg-cover bg-center"
    style={{ backgroundImage: "url('src/assets/Bgimg3.jpg')" }}
  >
    <NavBar />

    {/* Hero Section with Overlay */}
    <div className="flex flex-col-reverse md:flex-row items-center justify-between h-full bg-black bg-opacity-55 px-6 md:px-20 pt-20 md:pt-0">
      {/* Left Side - Text Content */}
      <div className="text-white w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 text-transparent bg-clip-text drop-shadow-lg">
          Zentix Solutions
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-gray-200 leading-relaxed font-medium">
          <span className="font-bold text-white">
            Innovative. Scalable. Future-Ready.
          </span>
          At{" "}
          <span className="font-semibold text-white">Zentix Solutions</span>,
          we craft cutting-edge software solutions designed to elevate your
          business with modern technology.
        </p>

        <p className="mt-4 text-lg md:text-xl text-gray-300 leading-relaxed">
          Whether you're a startup or an enterprise, our expertise in
          **full-stack development, UX/UI design, and AI-driven solutions**
          ensures top-notch performance and seamless user experience.
        </p>

        <p className="mt-6 text-lg md:text-xl font-semibold text-white">
          <span className="text-cyan-400">
            Let's build something extraordinary together.
          </span>
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img
          src=""
          alt="IT Professional"
          className="w-60 md:w-80 lg:w-full max-w-md rounded-lg opacity-90"
        />
      </div>
    </div>
  </div>
  )
}

export default NavandHomeSec
