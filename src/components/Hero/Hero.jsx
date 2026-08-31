
import {
  FaArrowRight,
  FaPhoneAlt,
  FaChevronDown,
  FaTooth,
  FaSmile,
  FaTeeth,
  FaMagic,
  FaClinicMedical,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./Hero.css";

import heroImage from "../../assets/images/hero2.png";
import doctor2 from "../../assets/images/doctor2.jpg";
import directorImage from "../../assets/images/doctor2.jpg";

function Hero() {
  return (
    <>
      {/* =========================================================
          HERO SECTION
      ========================================================== */}

      <section
        className="hero"
        aria-labelledby="hero-heading"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.45)), url(${heroImage})`,
        }}
      >
        <div className="hero-overlay"></div>

        <div className="container hero-content">
          <motion.span
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            F&H ALIGNERS & IMPLANT DENTAL CLINIC
          </motion.span>

          {/* PRIMARY SEO H1 */}

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Premium Dental Care
            <br />
            in <span>Bistupur, Jamshedpur.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Experience personalized dental care in Jamshedpur with
            advanced clear aligners, dental implants, smile makeovers,
            cosmetic dentistry and modern restorative treatments.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Link
              to="/contact"
              className="hero-btn primary-btn"
              aria-label="Book a dental appointment at F&H Dental Clinic"
            >
              Book Appointment
              <FaArrowRight />
            </Link>

            <a
              href="tel:+919122266733"
              className="hero-btn secondary-btn"
              aria-label="Call F&H Dental Clinic"
            >
              <FaPhoneAlt />
              Call Now
            </a>
          </motion.div>

          <motion.div
            className="hero-bottom"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <span>Scroll Down</span>
            <FaChevronDown />
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          WHY CHOOSE F&H
      ========================================================== */}

      <section
        className="why-section"
        aria-labelledby="why-heading"
      >
        <div className="container why-container">
          {/* LEFT */}

          <div className="why-left">
            <span className="section-tag">
              WHY CHOOSE F&H
            </span>

            <h2 id="why-heading">
              Why Choose
              <br />
              <span>F&H Dental Clinic?</span>
            </h2>

            <p>
              At F&H Aligners & Implant Dental Clinic, we combine
              advanced technology, specialist expertise and
              personalized care to create a comfortable dental
              experience for every patient in Jamshedpur.
            </p>

            <p>
              From clear aligner treatment and dental implants to
              smile designing, oral and maxillofacial procedures,
              zirconia crowns and restorative dentistry, every
              treatment plan is designed around your individual
              dental needs.
            </p>

            <p>
              Our approach focuses on precision, comfort, clear
              treatment planning and long-term oral health while
              maintaining natural-looking results.
            </p>
          </div>

          {/* RIGHT */}

          <div className="why-right">
            <div className="why-card">
              <div className="why-number">01</div>

              <h3>Experienced Specialists</h3>

              <p>
                Our dental specialists provide personalized care
                across aligners, implants, cosmetic dentistry and
                advanced restorative treatments.
              </p>
            </div>

            <div className="why-card active-card">
              <div className="why-number">02</div>

              <h3>Ethical, Patient-First Care</h3>

              <p>
                Transparent treatment planning, honest
                recommendations and patient education before
                every procedure.
              </p>
            </div>

            <div className="why-card active-card">
              <div className="why-number">03</div>

              <h3>Advanced Technology</h3>

              <p>
                Digital diagnostics, 3D planning, laser dentistry
                and modern equipment support precise and
                predictable treatment.
              </p>
            </div>

            <div className="why-card">
              <div className="why-number">04</div>

              <h3>Tailored Dental Experience</h3>

              <p>
                Every patient receives a customized treatment
                experience in a calm, premium and comfortable
                environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DENTAL TREATMENTS
      ========================================================== */}

      <section
        className="treatments-section"
        aria-labelledby="treatments-heading"
      >
        <div className="container">
          <div className="treatments-heading">
            <span className="section-tag">
              OUR DENTAL SERVICES
            </span>

            <h2 id="treatments-heading">
              Advanced Dental
              <span> Treatments</span>
            </h2>

            <p>
              Explore personalized dental treatments at F&H
              Aligners & Implant Dental Clinic in Bistupur,
              Jamshedpur. Our team provides modern solutions for
              smile correction, tooth replacement, oral health and
              cosmetic dental care.
            </p>
          </div>

          <div className="treatments-grid">
            {/* CLEAR ALIGNERS */}

            <article className="treatment-card">
              <div className="treatment-icon">
                <FaSmile />
              </div>

              <h3>Clear Aligners</h3>

              <p>
                Discreet orthodontic treatment designed to
                gradually improve tooth alignment and create a
                confident smile.
              </p>

              <Link
                to="/services"
                aria-label="Learn more about clear aligners"
              >
                Learn More
                <FaArrowRight />
              </Link>
            </article>

            {/* DENTAL IMPLANTS */}

            <article className="treatment-card active-treatment">
              <div className="treatment-icon">
                <FaTooth />
              </div>

              <h3>Dental Implants</h3>

              <p>
                Modern tooth replacement solutions designed to
                restore oral function, comfort and a natural-looking
                smile.
              </p>

              <Link
                to="/services"
                aria-label="Learn more about dental implants"
              >
                Learn More
                <FaArrowRight />
              </Link>
            </article>

            {/* SMILE MAKEOVER */}

            <article className="treatment-card">
              <div className="treatment-icon">
                <FaMagic />
              </div>

              <h3>Smile Makeover</h3>

              <p>
                Personalized cosmetic dental treatments focused
                on improving smile aesthetics while maintaining a
                natural appearance.
              </p>

              <Link
                to="/services"
                aria-label="Learn more about smile makeover"
              >
                Learn More
                <FaArrowRight />
              </Link>
            </article>

            {/* TEETH WHITENING */}

            <article className="treatment-card">
              <div className="treatment-icon">
                <FaTeeth />
              </div>

              <h3>Teeth Whitening</h3>

              <p>
                Professional dental whitening care to help improve
                the appearance of stained or discolored teeth.
              </p>

              <Link
                to="/services"
                aria-label="Learn more about teeth whitening"
              >
                Learn More
                <FaArrowRight />
              </Link>
            </article>

            {/* LASER DENTISTRY */}

            <article className="treatment-card">
              <div className="treatment-icon">
                <FaClinicMedical />
              </div>

              <h3>Laser Dentistry</h3>

              <p>
                Modern laser-assisted dental procedures designed
                for precision and minimally invasive treatment where
                clinically appropriate.
              </p>

              <Link
                to="/services"
                aria-label="Learn more about laser dentistry"
              >
                Learn More
                <FaArrowRight />
              </Link>
            </article>

            {/* RESTORATIVE DENTISTRY */}

            <article className="treatment-card">
              <div className="treatment-icon">
                <FaTooth />
              </div>

              <h3>Restorative Dentistry</h3>

              <p>
                Personalized restorative care to help improve
                damaged or missing teeth while supporting oral
                function and aesthetics.
              </p>

              <Link
                to="/services"
                aria-label="Learn more about restorative dentistry"
              >
                Learn More
                <FaArrowRight />
              </Link>
            </article>
          </div>

          <div className="treatments-footer">
            <Link
              to="/services"
              className="view-services"
            >
              View All Dental Services
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          MESSAGE FROM DIRECTOR
      ========================================================== */}

      <section
        className="director-section"
        aria-labelledby="director-heading"
      >
        <div className="container director-container">
          {/* IMAGE */}

          <div className="director-image">
            <img
              src={directorImage}
              alt="Dr. Fida, Director at F&H Aligners & Implant Dental Clinic in Jamshedpur"
              loading="lazy"
            />

            <div className="director-badge">
              Director & Invisalign Provider
            </div>
          </div>

          {/* CONTENT */}

          <div className="director-content">
            <span className="section-tag">
              FROM THE DIRECTOR'S DESK
            </span>

            <h2 id="director-heading">
              Message
              <br />
              <span>from the Director</span>
            </h2>

            <p>
              At F&H Aligners & Implant Dental Clinic, we believe
              exceptional dentistry is about more than treating
              teeth—it is about transforming confidence, enhancing
              quality of life and delivering an experience that
              reflects high standards of care.
            </p>

            <p>
              Every patient who walks through our doors deserves
              honesty, comfort, precision and personalized
              attention. By combining digital dentistry,
              evidence-based treatment and modern technology, our
              goal is to provide care tailored to every individual.
            </p>

            <p>
              Whether you are considering clear aligners, dental
              implants, smile designing, oral and maxillofacial
              surgery or zirconia restorations, our commitment
              remains focused on personalized dental care.
            </p>

            <div className="director-sign">
              <h3>Dr. Fida, M.D.S.</h3>

              <span>
                Director & Invisalign Provider
              </span>

              <small>
                F&H Aligners & Implant Dental Clinic
              </small>
            </div>

            <div className="director-buttons">
              <Link
                to="/contact"
                className="director-btn"
              >
                Book Appointment
                <FaArrowRight />
              </Link>

              <Link
                to="/doctor"
                className="director-outline"
              >
                Meet Our Doctors
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          REAL SMILE TRANSFORMATIONS
      ========================================================== */}

      <section
        className="transform-section"
        aria-labelledby="transform-heading"
      >
        <div className="container transform-container">
          <div className="transform-left">
            <span className="section-tag">
              REAL SMILE STORIES
            </span>

            <h2 id="transform-heading">
              Real Smile
              <span> Transformations</span>
            </h2>

            <p>
              Explore smile transformation cases involving clear
              aligners, smile makeover procedures, dental implants
              and restorative dentistry. Each treatment plan is
              personalized to the patient's dental needs and goals.
            </p>

            <div className="transform-list">
              <div>✔ Clear Aligners</div>
              <div>✔ Smile Makeovers</div>
              <div>✔ Dental Implants</div>
              <div>✔ Cosmetic Dentistry</div>
              <div>✔ Full Mouth Rehabilitation</div>
            </div>

            <Link
              to="/gallery"
              className="transform-btn"
            >
              View More Cases
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          TRUSTED DENTISTS
      ========================================================== */}

      <section
        className="dentist-section"
        aria-labelledby="dentist-heading"
      >
        <div className="container dentist-container">
          <div className="dentist-left">
            <span className="section-tag">
              OUR DOCTORS
            </span>

            <h2 id="dentist-heading">
              Meet Your Trusted
              <br />
              Dentists in
              <br />
              <span>Jamshedpur</span>
            </h2>

            <p>
              Looking for a dentist in Jamshedpur? F&H Aligners &
              Implant Dental Clinic in Bistupur provides
              personalized care for routine, cosmetic, orthodontic,
              implant and advanced dental treatments.
            </p>

            <Link
              to="/doctor"
              className="dentist-btn"
            >
              View All Doctors
              <FaArrowRight />
            </Link>
          </div>

          <div className="dentist-right">
            <img
              src={doctor2}
              alt="Dental doctors at F&H Aligners & Implant Dental Clinic in Jamshedpur"
              loading="lazy"
            />

            <div className="experience-card">
              <div className="exp-icon">
                🏆
              </div>

              <div className="exp-text">
                <h3>15+</h3>
                <span>Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;

