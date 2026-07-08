import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
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

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div
        className={`nav-overlay ${menuOpen ? "show-overlay" : ""}`}
        onClick={closeMenu}
      ></div>

      <header className={`navbar ${scroll ? "scrolled" : ""}`}>
        <div className="container nav-container">

          {/* ================= Logo ================= */}
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src={logo} alt="F&H Aligners & Implant Logo" />

            <div className="logo-content">
              <h2>F&amp;H</h2>
              <span>Aligners &amp; Implant</span>
              <small>Dental Clinic</small>
            </div>
          </Link>

          {/* ================= Menu ================= */}
          <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
            <NavLink to="/" end onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink to="/WhyUs" onClick={closeMenu}>
              About
            </NavLink>
            <NavLink to="/services" onClick={closeMenu}>
              Services
            </NavLink>
            <NavLink to="/doctor" onClick={closeMenu}>
              Doctors
            </NavLink>
            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
            
            {/* Mobile-Only CTA injected inside the mobile drawer menu view */}
            <Link to="/contact" className="book-btn mobile-drawer-btn" onClick={closeMenu}>
              <FaCalendarCheck />
              Book Appointment
            </Link>
          </nav>

          {/* ================= Right ================= */}
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