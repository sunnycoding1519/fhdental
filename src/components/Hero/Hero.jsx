import { FaArrowRight, FaWhatsapp, FaStar, FaCheckCircle, FaUserFriends, FaAward, FaSmile } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Hero.css";

import heroImage from "../../assets/images/hero2.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        
        {/* Left Side Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/*<div className="hero-tag">
            <FaCheckCircle className="tag-icon" />
            <span>Trusted Dental Care Since 2008</span>
          </div>*/}

          <h1>
            Creating <span className="gold-text">Beautiful</span> 
            <br />
            <span className="gold-text">Smiles</span> With 
            <br />
            Precision & Care.
          </h1>

          <p>
            Welcome to <b>F&H Aligners & Implant Dental Clinic</b>. We specialize
            in Invisible Aligners, Dental Implants, Smile Makeovers and
            Modern Cosmetic Dentistry using advanced technology.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Book Appointment
              <FaArrowRight />
            </button>

            <button className="secondary-btn">
              <FaWhatsapp className="whatsapp-icon" />
              WhatsApp Us
            </button>
          </div>

          {/* Bottom Stats Card */}
          <div className="hero-stats-card">
            <div className="stat-item">
              <div className="stat-icon-box">
                <FaUserFriends />
              </div>
              <div className="stat-info">
                <h3>5000+</h3>
                <span>Happy Patients</span>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon-box">
                <FaAward />
              </div>
              <div className="stat-info">
                <h3>15+</h3>
                <span>Years Experience</span>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon-box">
                <FaSmile />
              </div>
              <div className="stat-info">
                <h3>4.9</h3>
                <span>Google Rating</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side Image Block */}
        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Frame containing the photo */}
          <div className="hero-image-frame">
            <img src={heroImage} alt="Smiling man undergoing dental checkup" />
          </div>

          {/* Floating Google Rating Card */}
          <div className="floating-rating-card">
            <div className="star-gold-badge">
              <FaStar />
            </div>
            <div className="rating-details">
              <h2>4.9/5</h2>
              <div className="stars-row">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p>Google Rating</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;