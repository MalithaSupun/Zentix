import React, { useState } from "react";
import HomeSection from "../components/HomeSection";
import CompanyLogos from "../components/companyLogos";
import WhatWeDo from "../components/WhatWeDo";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import TeamSection from "../components/TeamSection";
import CompletedProjects from "../components/CompletedProjects";

function Home() {
  return (
    <>
      <HomeSection />
      <CompanyLogos />
      <WhatWeDo />
      <CompletedProjects />
      <ServicesSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;
