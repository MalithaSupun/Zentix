import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import notFoundAnimation from "../assets/Animation - 1740952424889.json"; 

function NotFound() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 relative text-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated 404 Illustration */}
      <motion.div
        className="w-72 md:w-96 mb-4"
        initial={{ scale: 0.5, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        <Lottie animationData={notFoundAnimation} loop={true} />
      </motion.div>

      {/* Heading */}
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-red-500"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
      >
        404 - Not Found
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="mt-4 text-base md:text-lg text-gray-700 px-4 md:px-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Oops! The page you are looking for does not exist.
      </motion.p>

      {/* Go Back Home Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100, delay: 0.5 }}
      >
        <Link
          to="/"
          className="mt-6 px-4 md:px-6 py-2 md:py-3 text-sm md:text-lg font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg hover:scale-105 transition-transform"
        >
          Go Back Home
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default NotFound;