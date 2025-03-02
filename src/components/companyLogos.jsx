import React from "react";
import Marquee from "react-fast-marquee";

const companyLogos = [
  { src: "src/assets/Logos/Adobe.png", alt: "Adobe" },
  { src: "src/assets/Logos/Altron.png", alt: "Altron" },
  { src: "src/assets/Logos/Amazon.png", alt: "Amazon" },
  { src: "src/assets/Logos/Antatica.png", alt: "Antatica" },
  { src: "src/assets/Logos/Disney.png", alt: "Disney" },
  { src: "src/assets/Logos/Foursquare-Logo.png", alt: "Foursquare" },
  { src: "src/assets/Logos/Google.png", alt: "Google" },
  { src: "src/assets/Logos/Sanofi.png", alt: "Sanofi" },
  { src: "src/assets/Logos/Vans.png", alt: "Vans" },
];

function CompanyLogos() {
  return (
    <section className="py-12 bg-gray-100 overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
          Trusted By Leading Companies
        </h2>

        {/* Marquee Effect */}
        <Marquee gradient={false} speed={40} pauseOnHover={true}>
          {companyLogos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-12 md:h-16 object-contain mx-8"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export default CompanyLogos;