import "./FloatingButtons.css";
import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

function FloatingButtons() {

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const scrollTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  return (

    <>

      {/* WhatsApp */}

      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noreferrer"
        className="floating-btn whatsapp"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>

      {/* Call */}

      <a
        href="tel:+91XXXXXXXXXX"
        className="floating-btn call"
        aria-label="Call"
      >
        <FaPhoneAlt />
      </a>

      {/* Scroll Top */}

      {showTop && (

        <button
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