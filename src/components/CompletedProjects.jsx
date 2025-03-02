import React from "react";

function CompletedProjects() {
  return (
    <section className="text-gray-600 body-font bg-zinc-100">
      <div className="container px-5 py-24 mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-4xl font-bold text-gray-900">
            Our Completed Projects
          </h1>
          <p className="lg:w-2/3 mx-auto mt-4 text-lg text-gray-600">
            Explore some of the outstanding digital products we’ve built, ranging from modern 
            websites and mobile applications to enterprise software solutions.
          </p>
        </div>

        {/* Project Stats */}
        <div className="flex flex-wrap -m-4 text-center">
          
          {/* Websites */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="relative border-2 border-gray-200 px-4 py-6 rounded-lg overflow-hidden group">
              {/* Gradient Background (Initially Hidden) */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-lg"></div>

              {/* Content */}
              <div className="relative z-10 transition duration-300 group-hover:text-white">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-red-500 w-12 h-12 mb-3 inline-block group-hover:text-white transition duration-300" viewBox="0 0 24 24">
                  <path d="M3 3h18M3 8h18M3 13h18M3 18h18"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl">120+</h2>
                <p className="leading-relaxed">Websites</p>
              </div>
            </div>
          </div>

          {/* Mobile Apps */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="relative border-2 border-gray-200 px-4 py-6 rounded-lg overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-lg"></div>
              <div className="relative z-10 transition duration-300 group-hover:text-white">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-red-500 w-12 h-12 mb-3 inline-block group-hover:text-white transition duration-300" viewBox="0 0 24 24">
                  <path d="M7 3h10M5 7h14M5 11h14M5 15h14M7 19h10"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl">85+</h2>
                <p className="leading-relaxed">Mobile Apps</p>
              </div>
            </div>
          </div>

          {/* Enterprise Software */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="relative border-2 border-gray-200 px-4 py-6 rounded-lg overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-lg"></div>
              <div className="relative z-10 transition duration-300 group-hover:text-white">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-red-500 w-12 h-12 mb-3 inline-block group-hover:text-white transition duration-300" viewBox="0 0 24 24">
                  <path d="M4 4h16M4 9h16M4 15h16M4 20h16"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl">45+</h2>
                <p className="leading-relaxed">Enterprise Solutions</p>
              </div>
            </div>
          </div>

          {/* AI & ML Projects */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="relative border-2 border-gray-200 px-4 py-6 rounded-lg overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-lg"></div>
              <div className="relative z-10 transition duration-300 group-hover:text-white">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-red-500 w-12 h-12 mb-3 inline-block group-hover:text-white transition duration-300" viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM9 12h6"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl">30+</h2>
                <p className="leading-relaxed">AI & ML Models</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CompletedProjects;