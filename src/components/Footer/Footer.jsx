
import "./Footer.css";
import { Link } from "react-router-dom";

import {
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt
} from "react-icons/fa";

import logo from "../../assets/images/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        {/* Footer Top */}
        <div className="footer-top">

          <div className="footer-logo">
            <Link to="/" aria-label="F&H Dental Clinic Home">
              <img
                src={logo}
                alt="F&H Aligners & Implant Dental Clinic"
              />
            </Link>

            <p>
              Advanced dental care, clear aligners and dental
              implants for confident, healthy smiles.
            </p>
          </div>

          {/* Social Links */}
          <div className="footer-social">
            <span>Follow us at</span>

            <a
              href="https://www.instagram.com/fhalignersandimplant/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow F&H Dental Clinic on Instagram"
            >
              <FaInstagram />
            </a>
          </div>

        </div>

        <div className="footer-line"></div>

        {/* Footer Contact Details */}
        <div className="footer-contact">

          <div className="footer-contact-item">
            <FaMapMarkerAlt />
            <span>
              Bistupur, Jamshedpur, Jharkhand
            </span>
          </div>

          <a
            href="tel:+919122266733"
            className="footer-contact-item"
          >
            <FaPhoneAlt />
            <span>+91 91222 66733</span>
          </a>

        </div>

        <div className="footer-line"></div>

        {/* Footer Bottom */}
        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} F&H Aligners & Implant
            Dental Clinic. All Rights Reserved.
          </p>

          <div className="footer-links">
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/doctor">Doctors</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/faq">FAQ</Link>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
