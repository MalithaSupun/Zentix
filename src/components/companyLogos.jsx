import React from "react";
import Marquee from "react-fast-marquee";
import Adobe from "../assets/Logos/Adobe.png";
import Altron from "../assets/Logos/Altron.png";
import Amazon from "../assets/Logos/Amazon.png";
import Antatica from "../assets/Logos/Antatica.png";
import Disney from "../assets/Logos/Disney.png";
import Foursquare from "../assets/Logos/Foursquare-Logo.png";
import Google from "../assets/Logos/Google.png";
import Sanofi from "../assets/Logos/Sanofi.png";
import Vans from "../assets/Logos/Vans.png";

const companyLogos = [
  { src: Adobe, alt: "Adobe" },
  { src: Altron, alt: "Altron" },
  { src: Amazon, alt: "Amazon" },
  { src: Antatica, alt: "Antatica" },
  { src: Disney, alt: "Disney" },
  { src: Foursquare, alt: "Foursquare" },
  { src: Google, alt: "Google" },
  { src: Sanofi, alt: "Sanofi" },
  { src: Vans, alt: "Vans" },
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