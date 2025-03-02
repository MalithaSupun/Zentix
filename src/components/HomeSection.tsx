import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Bounds } from "@react-three/drei";
import NavBar from "./NavBar";
import Bgimg from "../assets/Bgimg3.jpg";

function LaptopModel() {
  const { scene } = useGLTF("src/model/gaming_laptop.glb"); // Ensure correct path
  return <primitive object={scene} scale={1.5} position={[0, -2, 0]} />;
}

function NavandHomeSec() {
  return (
    <div className="relative w-full h-screen bg-cover bg-center">
      {/* Background Image */}
      <img
        src={Bgimg}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-55">
        <NavBar />

        {/* Hero Section with Overlay */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between h-full px-6 md:px-20 pt-20 md:pt-0">
          
          {/* Left Side - Text Content */}
          <div className="text-white w-full md:w-1/2 text-center md:text-left relative z-10">
            <h1 className="text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 text-transparent bg-clip-text drop-shadow-lg">
              Zentix Solutions
            </h1>
            <p className="mt-6 text-lg md:text-2xl text-gray-200 leading-relaxed font-medium">
              <span className="font-bold text-white">Innovative. Scalable. Future-Ready.</span>
              At <span className="font-semibold text-white">Zentix Solutions</span>, we craft cutting-edge software solutions designed to elevate your business with modern technology.
            </p>
            <p className="mt-4 text-lg md:text-xl text-gray-300 leading-relaxed">
              Whether you're a startup or an enterprise, our expertise in <strong>full-stack development, UX/UI design, and AI-driven solutions</strong> ensures top-notch performance and seamless user experience.
            </p>
            <p className="mt-6 text-lg md:text-xl font-semibold text-white">
              <span className="text-cyan-400">Let's build something extraordinary together.</span>
            </p>
          </div>

          {/* Right Side - 3D Laptop Model */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end h-[500px] md:h-[600px] lg:h-[700px] relative z-10">
            <Canvas 
              camera={{ position: [0, 2, 15], fov: 50 }} 
              className="w-full h-full"
            >
              <ambientLight intensity={0.8} />
              <directionalLight position={[10, 30, 10]} intensity={5} />

              {/* Automatically fit model inside canvas */}
              <Bounds fit clip observe margin={1.2}>
                <LaptopModel />
              </Bounds>

              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>

        </div>
      </div>
    </div>
  );
}

export default NavandHomeSec;