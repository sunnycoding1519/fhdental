
import { useEffect, useState } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaCalendarCheck,
} from "react-icons/fa";

import "./Navbar.css";
import logo from "../../assets/images/logooo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [galleryActive, setGalleryActive] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to Gallery after navigation
  useEffect(() => {
    if (location.pathname === "/" && location.hash === "#gallery") {
      const frame = requestAnimationFrame(() => {
        document.getElementById("gallery")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });

      return () => cancelAnimationFrame(frame);
    }
  }, [location.pathname, location.hash]);

  // Detect when Gallery section is visible
  useEffect(() => {
    setGalleryActive(false);

    if (location.pathname !== "/") {
      return;
    }

    const gallerySection = document.getElementById("gallery");

    if (!gallerySection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setGalleryActive(entry.isIntersecting);
      },
      {
        rootMargin: "-120px 0px -45% 0px",
        threshold: 0,
      }
    );

    observer.observe(gallerySection);

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Gallery navigation from any page
  const handleGalleryClick = (event) => {
    event.preventDefault();
    closeMenu();

    if (location.pathname !== "/" || location.hash !== "#gallery") {
      navigate("/#gallery");
    } else {
      document.getElementById("gallery")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <div
        className={`nav-overlay ${menuOpen ? "show-overlay" : ""}`}
        onClick={closeMenu}
      ></div>

      <header className={`navbar ${scroll ? "scrolled" : ""}`}>
        <div className="container nav-container">

          {/* Logo */}
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src={logo} alt="F&H Aligners & Implant Logo" />

            <div className="logo-content">
              <h2>F&amp;H</h2>
              <span>Aligners &amp; Implant</span>
              <small>Dental Clinic</small>
            </div>
          </Link>

          {/* Navigation Menu */}
          <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>

            <NavLink
              to="/"
              end
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive && !galleryActive ? "active" : ""
              }
            >
              Home
            </NavLink>

            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>

            <NavLink to="/services" onClick={closeMenu}>
              Services
            </NavLink>

            <NavLink to="/doctor" onClick={closeMenu}>
              Doctors
            </NavLink>

            <a
              href="/#gallery"
              className={galleryActive ? "gallery-active" : ""}
              onClick={handleGalleryClick}
            >
              Gallery
            </a>

            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>

            {/* Mobile Appointment Button */}
            <Link
              to="/contact"
              className="book-btn mobile-drawer-btn"
              onClick={closeMenu}
            >
              <FaCalendarCheck />
              Book Appointment
            </Link>

          </nav>

          {/* Right Side */}
          <div className="nav-right">
            <Link to="/contact" className="book-btn desktop-btn">
              <FaCalendarCheck />
              Book Appointment
            </Link>

            <button
              className="menu-icon"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

        </div>
      </header>
    </>
  );
}

export default Navbar;
