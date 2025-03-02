import React from "react";

const services = [
  {
    title: "UX / UI Design",
    description:
      "We create engaging, intuitive, and innovative designs that prioritize user experience while making a lasting impact.",
    icon: "🖌️",
  },
  {
    title: "Web Design",
    description:
      "We design visually stunning, innovative websites that are user-friendly and easy to navigate for seamless experiences.",
    icon: "🌐",
  },
  {
    title: "Web Development",
    description:
      "Our developers create high-performance websites with custom features that ensure functionality and growth.",
    icon: "💻",
  },
  {
    title: "Website Maintenance",
    description:
      "Regular website maintenance keeps your site secure, fast, and fully functional. We optimize for peak performance.",
    icon: "⚙️",
  },
  {
    title: "Theme Customization",
    description:
      "Theme customization to match your brand, with custom layouts, design adjustments, and enhancements.",
    icon: "🎨",
  },
  {
    title: "eCommerce Development",
    description:
      "We specialize in powerful eCommerce solutions that drive sales, enhance UX, and boost conversions.",
    icon: "🛒",
  },
];

function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto text-center px-6 md:px-12">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
        Web Solutions
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We provide cutting-edge web development and design services to help businesses 
          establish a strong online presence.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white p-8 rounded-xl shadow-lg overflow-hidden transition-all duration-500 border border-gray-200 hover:shadow-xl"
            >
              {/* Background hover effect - fills from bottom to top */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-xl"></div>

              {/* Content Wrapper */}
              <div className="relative z-10 flex flex-col items-center text-gray-900 group-hover:text-white transition-all duration-300">
                
                {/* Icon */}
                <div className="flex justify-center items-center w-20 h-20 bg-red-100 text-red-500 text-4xl rounded-full shadow-md transition-all duration-300 group-hover:bg-white group-hover:text-red-500">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="mt-5 text-xl font-bold transition-all duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-gray-600 group-hover:text-gray-100 transition-all duration-300 text-center">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;