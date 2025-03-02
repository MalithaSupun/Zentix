import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import WhatWeDo from "./components/WhatWeDo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/contactus" element={<ContactSection />} />
        <Route path="/aboutus" element={<WhatWeDo />} />
      </Routes>
    </Router>
  );
}

export default App;