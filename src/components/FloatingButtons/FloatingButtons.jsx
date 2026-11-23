
import "./FloatingButtons.css";

import {
  FaWhatsapp,
  FaPhoneAlt,
  FaArrowUp
} from "react-icons/fa";

import { useEffect, useState } from "react";

function FloatingButtons() {

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  const scrollTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  return (
    <>

      {/* WhatsApp Button */}

      <a
        href="https://wa.me/919122266733"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn whatsapp"
        aria-label="Chat with F&H Dental Clinic on WhatsApp"
      >
        <FaWhatsapp />
      </a>


      {/* Call Button */}

      <a
        href="tel:+919122266733"
        className="floating-btn call"
        aria-label="Call F&H Dental Clinic"
      >
        <FaPhoneAlt />
      </a>


      {/* Scroll To Top Button */}

      {showTop && (

        <button
          type="button"
          className="floating-btn top"
          onClick={scrollTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>

      )}

    </>
  );
}

export default FloatingButtons;
