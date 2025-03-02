import React from "react";
import { Helmet } from "react-helmet"; 
import TeamImg from "../assets/Zentix Solution.jpg";
import { Link } from "react-router-dom";

function WhatWeDo() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Zentix - Innovative Software Solutions | Sweden & Sri Lanka</title>
        <meta
          name="description"
          content="Zentix is a tech-driven company with experts from Sweden and Sri Lanka, building next-gen software solutions. Explore our full-stack development, cloud computing, and data-driven insights."
        />
        <meta name="keywords" content="Zentix, software development, cloud computing, full-stack, AI solutions" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://zentix.com/about-us" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="Zentix - Innovative Software Solutions" />
        <meta property="og:description" content="Discover cutting-edge software solutions by Zentix, with expertise in AI, cloud computing, and full-stack development." />
        <meta property="og:image" content="https://zentix.com/assets/zentix-preview.jpg" />
        <meta property="og:url" content="https://zentix.com/about-us" />
        <meta property="og:type" content="website" />

        {/* Twitter Card (X) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zentix - Innovative Software Solutions" />
        <meta name="twitter:description" content="AI-powered software solutions from Zentix, empowering businesses in Sweden & Sri Lanka." />
        <meta name="twitter:image" content="https://zentix.com/assets/zentix-preview.jpg" />
      </Helmet>

      <section id="aboutus" className="py-16 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-20">
          {/* Left Side - Image */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src={TeamImg}
              alt="Zentix software development team collaboration"
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>

          {/* Right Side - Text Content */}
          <article className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Zentix?</h2>

            {/* Key Stats */}
            <div className="flex items-center space-x-6 mt-4">
              <div>
                <p className="text-4xl font-bold text-red-500">30+</p>
                <p className="text-gray-600 text-sm">Experienced Employees</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-red-500">3</p>
                <p className="text-gray-600 text-sm">Avg. Years of Experience</p>
              </div>
            </div>

            {/* Description */}
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Based in Sweden and Sri Lanka, Zentix unites a global team of tech experts to deliver 
              cutting-edge software solutions. From full-stack development and cloud computing to 
              AI-driven insights, we transform your vision into reality.
            </p>

            <Link
  to="/random-nonexistent-page"
  className="mt-6 inline-flex items-center font-bold bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 text-transparent bg-clip-text"
>
  How It Works → 404 error
</Link>
          </article>
        </div>
      </section>
    </>
  );
}

export default WhatWeDo;