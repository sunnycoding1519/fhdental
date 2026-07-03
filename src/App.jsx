import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import FloatingButtons from "./components/FloatingButtons/FloatingButtons";

import Home from "./pages/Home/Home";
import WhyUs from "./pages/WhyUs/WhyUs";
import Services from "./pages/Services/Services";
import Doctor from "./pages/Doctor/Doctor";
import Gallery from "./pages/Gallery/Gallery";
import Reviews from "./pages/Reviews/Reviews";
import FAQ from "./pages/FAQ/FAQ";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/why-us" element={<WhyUs />} />

        <Route path="/services" element={<Services />} />

        <Route path="/doctor" element={<Doctor />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/reviews" element={<Reviews />} />

        <Route path="/faq" element={<FAQ />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

      <Footer />

      <FloatingButtons />

    </BrowserRouter>
  );
}

export default App;