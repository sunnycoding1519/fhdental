import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaCalendarCheck,
} from "react-icons/fa";

import "./Navbar.css";
import logo from "../../assets/images/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Overlay */}

      <div
        className={`nav-overlay ${
          menuOpen ? "show-overlay" : ""
        }`}
        onClick={closeMenu}
      ></div>

      <header
        className={`navbar ${
          scroll ? "scrolled" : ""
        }`}
      >
        <div className="container nav-container">

          {/* Logo */}

          <Link
            to="/"
            className="logo"
            onClick={closeMenu}
          >
            <img
              src={logo}
              alt="F&H Aligners & Implant Dental Clinic"
            />
          </Link>

          {/* Menu */}

          <nav
            className={`nav-menu ${
              menuOpen ? "active" : ""
            }`}
          >
            <NavLink to="/" end onClick={closeMenu}>
              Home
            </NavLink>

            <NavLink to="/why-us" onClick={closeMenu}>
              Why Us
            </NavLink>

            <NavLink to="/services" onClick={closeMenu}>
              Services
            </NavLink>

            <NavLink to="/doctor" onClick={closeMenu}>
              Doctors
            </NavLink>

            <NavLink to="/gallery" onClick={closeMenu}>
              Gallery
            </NavLink>

            <NavLink to="/reviews" onClick={closeMenu}>
              Reviews
            </NavLink>

            <NavLink to="/faq" onClick={closeMenu}>
              FAQ
            </NavLink>

            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
          </nav>

          {/* Right */}

          <div className="nav-right">

            <Link
              to="/contact"
              className="book-btn"
            >
              <FaCalendarCheck />
              Book Appointment
            </Link>

            <button
              className="menu-icon"
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
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