
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

import heroImage from "../../assets/images/gallery/fh-clinic-reception.png";
import doctor2 from "../../assets/images/doctor2.jpg";
import directorImage from "../../assets/images/doctor2.jpg";

import ClinicGallery from "../ClinicGallery/ClinicGallery";

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
          backgroundImage: `url(${heroImage})`,
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

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Advanced Dental Care
            <br />
            for <span>Confident Smiles.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Experience personalized dental care at F&H Aligners
            & Implant Dental Clinic in Bistupur, Jamshedpur, with
            clear aligners, dental implants, permanent tooth
            replacement, teeth whitening, veneers and modern
            cosmetic and restorative treatments.
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
              What makes F&H different is our focus on the individual
              behind every smile. We bring aligner treatment, implant
              dentistry and comprehensive dental care together, with
              treatment discussions shaped around each patient's
              needs and goals.
            </p>

            <p>
              Whether you are exploring Invisalign or other clear
              aligners, replacing missing teeth with dental implants,
              or seeking preventive, restorative or cosmetic care,
              our team helps you understand the available options
              before you decide on treatment.
            </p>

            <p>
              We value clear communication, personalized planning
              and continuity of care—from your first consultation
              through follow-up visits.
            </p>
          </div>

          <div className="why-right">
            <div className="why-card">
              <div className="why-number">01</div>

              <h3>Focused Dental Expertise</h3>

              <p>
                Dedicated clinical profiles for implant dentistry,
                Invisalign and cosmetic dentistry help patients
                understand who may guide their care.
              </p>
            </div>

            <div className="why-card active-card">
              <div className="why-number">02</div>

              <h3>Care Built Around You</h3>

              <p>
                We take time to understand your concerns, explain
                suitable options and shape recommendations around
                your dental needs.
              </p>
            </div>

            <div className="why-card active-card">
              <div className="why-number">03</div>

              <h3>Modern Treatment Options</h3>

              <p>
                Explore contemporary clear aligner solutions,
                implant dentistry and cosmetic treatments in
                one clinic.
              </p>
            </div>

            <div className="why-card">
              <div className="why-number">04</div>

              <h3>Comprehensive Dental Care</h3>

              <p>
                From smile alignment and permanent tooth replacement
                to general, restorative and cosmetic care, multiple
                needs can be discussed with one dental team.
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
              smile correction, permanent tooth replacement,
              oral health and cosmetic dental care.
            </p>
          </div>

          <div
            className="aligner-intro"
            aria-labelledby="aligner-intro-heading"
          >
            <h3 id="aligner-intro-heading">
              Invisalign &amp; Clear Aligner Treatment
            </h3>

            <p>
              Clear aligners are transparent, removable trays
              planned to move teeth gradually towards improved
              alignment. Invisalign is a clear aligner treatment
              option that may help address selected spacing,
              crowding and bite concerns. Because every smile is
              different, treatment begins with a dental assessment
              to understand your needs and determine whether
              aligners are suitable. The trays can be removed for
              meals, brushing and flossing, while regular reviews
              help your dentist monitor progress. At F&amp;H
              Aligners &amp; Implant Dental Clinic, we focus on
              explaining your options and planning care around
              your smile goals.
            </p>
          </div>

          {/* PATIENT COMFORT / PAINLESS DENTISTRY */}

          <div className="aligner-intro">
            <h3>Comfort-Focused &amp; Painless Dentistry</h3>

            <p>
              We understand that some patients feel anxious about
              dental procedures. Our approach focuses on patient
              comfort, clear communication and appropriate
              pain-management options according to the treatment
              required. If you are looking for painless dentistry
              in Jamshedpur, a consultation can help you understand
              the available procedures and ways to make your
              dental experience more comfortable.
            </p>
          </div>

          <div className="treatments-grid">
            {/* CLEAR ALIGNERS */}

            <article className="treatment-card">
              <div className="treatment-icon">
                <FaSmile />
              </div>

              <h3>Invisalign &amp; Clear Aligners</h3>

              <p>
                Discreet orthodontic treatment designed to
                gradually improve tooth alignment and create
                a confident smile.
              </p>

              <Link
                to="/treatments/clear-aligners-jamshedpur"
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
                Permanent tooth replacement options designed
                to replace missing teeth and help restore oral
                function and a natural-looking smile.
              </p>

              <Link
                to="/treatments/dental-implants-jamshedpur"
                aria-label="Learn more about dental implants and permanent tooth replacement"
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
                on improving smile aesthetics while maintaining
                a natural appearance.
              </p>

              <Link
                to="/treatments/smile-makeover-jamshedpur"
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
                Professional teeth whitening care to help improve
                the appearance of stained or discolored teeth.
              </p>

              <Link
                to="/treatments/teeth-whitening-jamshedpur"
                aria-label="Learn more about teeth whitening"
              >
                Learn More
                <FaArrowRight />
              </Link>
            </article>

            {/* DENTAL VENEERS */}

            <article className="treatment-card">
              <div className="treatment-icon">
                <FaSmile />
              </div>

              <h3>Dental Veneers</h3>

              <p>
                Cosmetic dental coverings that may help improve
                the appearance of tooth shape, color and selected
                smile concerns.
              </p>

              <Link
                to="/treatments/dental-veneers-jamshedpur"
                aria-label="Learn more about dental veneers in Jamshedpur"
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
                for precision and minimally invasive treatment
                where clinically appropriate.
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
          <div className="director-image">
            <img
              src={directorImage}
              alt="Dr. Fida, Director at F&H Aligners & Implant Dental Clinic in Jamshedpur"
              loading="lazy"
            />

            <div className="director-badge">
              Invisalign Provider &amp; Cosmetic Dentistry
            </div>
          </div>

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
              evidence-based treatment and modern technology,
              our goal is to provide care tailored to every
              individual.
            </p>

            <p>
              Whether you are considering clear aligners, dental
              implants, smile designing, oral and maxillofacial
              surgery or zirconia restorations, our commitment
              remains focused on personalized dental care.
            </p>

            <div className="director-sign">
              <h3>Dr. Fida</h3>

              <span>
                Invisalign Provider &amp; Cosmetic Dentistry
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
              to="/services"
              className="transform-btn"
            >
              Explore Our Treatments
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

            {/* VERIFIED EXPERIENCE BADGE - RETAINED */}

            <div className="experience-card">
              <div className="exp-icon">
                <FaClinicMedical />
              </div>

              <div className="exp-text">
                <h3>15+</h3>
                <span>Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INSIDE F&H - CLINIC GALLERY
      ========================================================== */}

      <ClinicGallery />
    </>
  );
}

export default Hero;
