
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import FloatingButtons from "./components/FloatingButtons/FloatingButtons";

import SEO from "./components/SEO";

import Home from "./pages/Home/Home";
import WhyUs from "./pages/WhyUs/WhyUs";
import Services from "./pages/Services/Services";
import Doctor from "./pages/Doctor/Doctor";
import FAQ from "./pages/FAQ/FAQ";
import Contact from "./pages/Contact/Contact";

import Treatment from "./pages/Treatment/Treatment";





function App() {
  return (
    <BrowserRouter>
      <SEO />

      <Navbar />

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<WhyUs />} />

        {/* Redirect old About URL */}
        <Route
          path="/WhyUs"
          element={<Navigate to="/about" replace />}
        />

        <Route path="/services" element={<Services />} />

        <Route path="/doctor" element={<Doctor />} />

        <Route path="/faq" element={<FAQ />} />

        <Route path="/contact" element={<Contact />} />

        {/* Treatment Pages */}
        <Route
          path="/treatments/:slug"
          element={<Treatment />}
        />

<Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />

      <FloatingButtons />
    </BrowserRouter>
  );
}

export default App;
