import "./Footer.css";

import logo from "../../assets/images/logo.png";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-grid">

          {/* Logo */}

          <div className="footer-about">

            <img src={logo} alt="F&H Dental Clinic" />

            <h2>F&H Aligners & Implant Dental Clinic</h2>

            <p>
              Creating confident smiles with advanced dental care,
              invisible aligners, implants and cosmetic dentistry.
            </p>

            <div className="footer-social">

              <a href="#">
                <FaFacebookF />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaWhatsapp />
              </a>

            </div>

          </div>

          {/* Links */}

          <div>

            <h3>Quick Links</h3>

            <ul>

              <li><a href="#home">Home</a></li>

              <li><a href="#why">Why Us</a></li>

              <li><a href="#services">Services</a></li>

              <li><a href="#doctor">Doctors</a></li>

              <li><a href="#gallery">Gallery</a></li>

              <li><a href="#contact">Contact</a></li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3>Our Services</h3>

            <ul>

              <li>Invisible Aligners</li>

              <li>Dental Implants</li>

              <li>Smile Makeover</li>

              <li>Root Canal</li>

              <li>Teeth Whitening</li>

              <li>General Dentistry</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3>Contact Info</h3>

            <ul className="contact-list">

              <li>

                <FaPhoneAlt />

                <span>+91 XXXXX XXXXX</span>

              </li>

              <li>

                <FaEnvelope />

                <span>info@fhdentalclinic.com</span>

              </li>

              <li>

                <FaMapMarkerAlt />

                <span>
                  Jamshedpur,
                  Jharkhand,
                  India
                </span>

              </li>

            </ul>

          </div>

        </div>

        <div className="footer-bottom">

          <p>

            © {new Date().getFullYear()} F&H Aligners & Implant Dental Clinic.
            All Rights Reserved|Powered by NextGen Business Agency

          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;