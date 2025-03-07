import React from "react";

function ContactSection() {
  return (
    <section id="contactus" className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        {/* Left Side - Google Map & Address Info */}
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          {/* Google Map */}
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Colombo+(Zentix)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{ filter: "none" }} // Enables full-color map
          ></iframe>

          {/* Address Box */}
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">123 Innovation Street, Colombo, Sri Lanka</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-red-500 leading-relaxed">contact@zentix.com</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">+94 123 456 789</p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-6 rounded-lg shadow-lg">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Send Us a Message
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            We would love to hear from you. Let’s talk!
          </p>

          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-base outline-none text-gray-700 py-2 px-3 transition duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-base outline-none text-gray-700 py-2 px-3 transition duration-200 ease-in-out"
/>
          </div>

          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 h-32 text-base outline-none text-gray-700 py-2 px-3 resize-none transition duration-200 ease-in-out"
            ></textarea>
          </div>

          <button className="text-white bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 border-0 py-2 px-6 focus:outline-none transition-all duration-300 rounded text-lg hover:opacity-90">
            Send Message
          </button>

          <p className="text-xs text-gray-500 mt-3">
            Your information is safe with us. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
