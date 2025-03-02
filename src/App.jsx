import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import WhatWeDo from "./components/WhatWeDo";
import NotFound from "../src/components/NotFound";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/contactus" element={<ContactSection />} />
        <Route path="/aboutus" element={<WhatWeDo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </HelmetProvider>
  );
}

export default App;