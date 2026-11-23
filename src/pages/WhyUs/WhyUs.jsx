
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaArrowRight,
  FaAward,
  FaSmile,
  FaUserMd,
  FaStar,
  FaTooth
} from "react-icons/fa";

import "./WhyUs.css";

import aboutHero from "../../assets/images/gallery/fh-reception-branding.png";
import storyImage from "../../assets/images/gallery/fh-clinic-reception.png";
import doctor1 from "../../assets/images/doctor1.jpg";
import doctor2 from "../../assets/images/doctor2.jpg";

export default function WhyUs() {
  return (
    <>
      {/* =====================================
                  HERO SECTION
      ====================================== */}

      <section
        className="about-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)),url(${aboutHero})`
        }}
      >
        <div className="about-overlay"></div>
        <div className="about-fade"></div>

        <div className="container">
          <div className="about-content">

            <span>ABOUT F&amp;H DENTAL CLINIC</span>

            <p className="branch-identity">
              A BRANCH OF HAZRA DENTAL WELLNESS
            </p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              Precision Trust<br />
             And Beautiful Smiles.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              viewport={{ once: true }}
            >
              A commitment to exceptional dentistry, where
              clinical expertise, contemporary treatment
              approaches and personalised attention come
              together. We believe every smile deserves
              thoughtful care, professional precision
              and a lasting commitment to oral health.
            </motion.p>

            <div className="about-buttons">

              <Link to="/contact" className="about-btn">
                Book Appointment
                <FaArrowRight />
              </Link>

              <Link to="/doctor" className="about-btn-outline">
                Meet Our Doctors
              </Link>

            </div>
          </div>
        </div>
      </section>


      {/* =====================================
                  OUR STORY SECTION
      ====================================== */}

      <section className="about-story">
        <div className="container story-grid">

          <div className="story-image">
            <img
              src={storyImage}
              alt="F&H Aligners and Implant Dental Clinic, Bistupur"
            />
          </div>

          <div className="story-content">

            <span>OUR STORY</span>

            <h2>
              A Legacy of Care.
              <br />
              A Commitment to
              <br />
              Excellence.
            </h2>

            <p>
              F&amp;H Aligners &amp; Implant Dental Clinic,
              a branch of Hazra Dental Wellness, represents
              a continued commitment to excellence in modern
              dentistry and comprehensive oral healthcare
              in Bistupur, Jamshedpur.
            </p>

            <p>
              Built upon a philosophy of clinical precision,
              professional integrity and patient-centred care,
              our clinic brings together contemporary dental
              techniques and individualised treatment planning
              to address a wide range of dental needs. Our
              approach encompasses clear aligner treatments,
              dental implants, cosmetic dentistry, restorative
              procedures and comprehensive oral healthcare.
            </p>

            <p>
              With over 15 years of experience, we understand
              that exceptional dentistry is not defined by
              procedures alone, but by the confidence patients
              place in their dental care. Every consultation
              begins with understanding individual concerns,
              evaluating oral health and recommending
              treatment options suited to each patient's needs.
            </p>

            <p>
              From enhancing smiles through advanced alignment
              solutions to restoring dental function through
              implant dentistry, our emphasis remains on
              thoughtful diagnosis, attention to detail
              and responsible clinical practice.
            </p>

            <p>
              At F&amp;H, we believe that a beautiful smile
              begins with good oral health, informed decisions
              and a relationship built on trust. We remain
              dedicated to creating a welcoming environment
              where expertise, compassion and personalised
              attention come together in every patient experience.
            </p>

            <div className="story-stats">

              <div className="stat-box">
                <FaSmile />
                <h3>5000+</h3>
                <p>Happy Smiles</p>
              </div>

              <div className="stat-box">
                <FaUserMd />
                <h3>15+</h3>
                <p>Years Experience</p>
              </div>

              <div className="stat-box">
                <FaAward />
                <h3>Patient First</h3>
                <p>Our Philosophy</p>
              </div>

              <div className="stat-box">
                <FaStar />
                <h3>Personalised</h3>
                <p>Patient Care</p>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* =====================================
                  OUR DOCTORS
      ====================================== */}

      <section className="about-doctors">
        <div className="container">

          <div className="about-doctors-heading">
            <span>OUR SPECIALISTS</span>

            <h2>
              Meet the Experts Behind
              <br />
              Your Smile.
            </h2>

            <p>
              Our dental professionals focus on individual
              patient needs, thoughtful treatment planning
              and comprehensive oral healthcare.
            </p>
          </div>


          {/* DOCTOR 1 - DR. FIDA */}

          <div className="about-doctor-card">

            <div className="about-doctor-image">
              <img src={doctor2} alt="Dr. Fida" />
            </div>

            <div className="about-doctor-content">

              <span className="about-doctor-tag">
                Invisalign Provider
              </span>

              <h3>Dr. Fida</h3>

              <h4>Invisalign Provider &amp; Cosmetic Dentistry</h4>

              <p>
                Dr. Fida focuses on Invisalign treatment and
                cosmetic dentistry, helping patients explore
                suitable options to improve dental alignment
                and smile aesthetics.
              </p>

              <p>
                Her approach centres on understanding each
                patient's smile goals, discussing appropriate
                treatment options and planning care with
                attention to dental health and aesthetics.
              </p>

              <div className="about-doctor-specialities">

                <div>
                  <FaUserMd />
                  <span>Invisalign Treatment</span>
                </div>

                <div>
                  <FaTooth />
                  <span>Cosmetic Dentistry</span>
                </div>

                <div>
                  <FaAward />
                  <span>Smile Aesthetics</span>
                </div>

              </div>

              <Link to="/doctor" className="about-doctor-btn">
                View Doctor Profile
                <FaArrowRight />
              </Link>

            </div>
          </div>


          {/* DOCTOR 2 - DR. HAZRA */}

          <div className="about-doctor-card">

            <div className="about-doctor-image">
              <img src={doctor1} alt="Dr. Adreet Hazra" />
            </div>

            <div className="about-doctor-content">

              <span className="about-doctor-tag">
                Implantologist
              </span>

              <h3>Dr. Hazra</h3>

              <h4>Implant Dentistry</h4>

              <p>
                Dr. Hazra is an implantologist focused on
                dental implant treatment and tooth replacement.
                His clinical work includes implant-based
                approaches for addressing missing teeth and
                restoring everyday oral function.
              </p>

              <p>
                Treatment recommendations are based on
                individual dental assessments, oral health
                requirements and the options appropriate
                to each patient's situation.
              </p>

              <div className="about-doctor-specialities">

                <div>
                  <FaTooth />
                  <span>Dental Implants</span>
                </div>

                <div>
                  <FaAward />
                  <span>Implant Dentistry</span>
                </div>

              </div>

              <Link to="/doctor" className="about-doctor-btn">
                View Doctor Profile
                <FaArrowRight />
              </Link>

            </div>
          </div>

        </div>
      </section>


      {/* =====================================
                  VISION & MISSION
      ====================================== */}

      <section className="vision-section">
        <div className="container">

          <div className="vision-heading">
            <span>OUR PURPOSE</span>

            <h2>
              Guided by Purpose,
              <br />
              Defined by Excellence.
            </h2>

            <p>
              Our approach is guided by professional integrity,
              thoughtful treatment planning and a commitment
              to comprehensive dental care. We believe that
              lasting patient relationships are built through
              trust, transparency and consistent attention
              to clinical standards.
            </p>
          </div>

          <div className="vision-grid">

            <div className="vision-card">
              <div className="vision-number">01</div>

              <h3>Our Vision</h3>

              <p>
                To be recognised as a trusted centre for
                advanced dental care, known for clinical
                integrity, progressive treatment approaches
                and a lasting commitment to improving oral
                health and quality of life.
              </p>
            </div>

            <div className="vision-card active-card">
              <div className="vision-number">02</div>

              <h3>Our Mission</h3>

              <p>
                To deliver comprehensive and personalised
                dental care through careful diagnosis,
                evidence-informed treatment planning and
                modern clinical techniques. We strive to
                build lasting relationships with our patients
                through transparency, compassion and
                professional responsibility.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================
                    CORE VALUES
      ====================================== */}

      <section className="values-section">
        <div className="container">

          <div className="values-heading">
            <span>OUR CORE VALUES</span>

            <h2>
              The Principles Behind
              <br />
              Our Practice.
            </h2>

            <p>
              Our philosophy extends beyond individual
              dental treatments. Every consultation,
              recommendation and procedure is guided by
              principles that place patient well-being,
              professional responsibility and long-term
              oral health at the centre of care.
            </p>
          </div>

          <div className="values-grid">

            <div className="value-card">
              <div className="value-icon">🦷</div>
              <h3>Personalised Care</h3>
              <p>
                Treatment recommendations are tailored
                to each patient's oral health requirements,
                concerns and individual expectations.
              </p>
            </div>

            <div className="value-card active-value">
              <div className="value-icon">✨</div>
              <h3>Modern Dentistry</h3>
              <p>
                We embrace contemporary dental techniques
                and technology to support accurate diagnosis
                and considered treatment planning.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Patient First</h3>
              <p>
                Clear communication, informed decisions
                and ethical recommendations remain central
                to our approach to patient care.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🏆</div>
              <h3>Clinical Excellence</h3>
              <p>
                We value professional knowledge, attention
                to detail and consistent clinical standards
                across our dental services.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Compassion</h3>
              <p>
                Every patient deserves to be treated
                with respect, patience and understanding
                in a welcoming clinical environment.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">⭐</div>
              <h3>Lasting Oral Health</h3>
              <p>
                Our approach considers long-term oral
                health, dental function and aesthetic
                outcomes alongside immediate treatment needs.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================
                PATIENT TESTIMONIALS
      ====================================== */}

      <section className="testimonial-section">
        <div className="container">

          <div className="testimonial-heading">
            <span>PATIENT EXPERIENCES</span>

            <h2>
              Experiences That
              <br />
              Inspire Confidence.
            </h2>

            <p>
              The trust patients place in us is an important
              part of our practice. Their experiences reflect
              the value of attentive care, clear communication
              and a thoughtful approach to dentistry.
            </p>
          </div>
        </div>

        <div className="testimonial-slider">
          <div className="testimonial-track">

            {/* Original Testimonials */}

            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <h3>Professional Team</h3>
              <p>
                The doctors explained every step clearly
                and made my aligner treatment completely
                stress-free. The results exceeded my expectations.
              </p>
              <h4>— Riya Sharma</h4>
            </div>

            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <h3>Excellent Care</h3>
              <p>
                The clinic is modern, clean and welcoming.
                Every appointment felt comfortable and
                professionally managed.
              </p>
              <h4>— Aman Verma</h4>
            </div>

            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <h3>Highly Recommended</h3>
              <p>
                I finally have the smile I always wanted.
                The entire journey was smooth from consultation
                to the final treatment.
              </p>
              <h4>— Priyanka Singh</h4>
            </div>

            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <h3>Wonderful Experience</h3>
              <p>
                The doctors genuinely care about patients.
                Everything was explained patiently and
                the treatment experience was comfortable.
              </p>
              <h4>— Rahul Mehta</h4>
            </div>

            {/* Duplicate Cards for Infinite Slider */}

            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <h3>Professional Team</h3>
              <p>
                The doctors explained every step clearly
                and made my aligner treatment completely
                stress-free. The results exceeded my expectations.
              </p>
              <h4>— Riya Sharma</h4>
            </div>

            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <h3>Excellent Care</h3>
              <p>
                The clinic is modern, clean and welcoming.
                Every appointment felt comfortable and
                professionally managed.
              </p>
              <h4>— Aman Verma</h4>
            </div>

            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <h3>Highly Recommended</h3>
              <p>
                I finally have the smile I always wanted.
                The entire journey was smooth from consultation
                to the final treatment.
              </p>
              <h4>— Priyanka Singh</h4>
            </div>

            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <h3>Wonderful Experience</h3>
              <p>
                The doctors genuinely care about patients.
                Everything was explained patiently and
                the treatment experience was comfortable.
              </p>
              <h4>— Rahul Mehta</h4>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================
                    PREMIUM CTA
      ====================================== */}

      <section className="about-cta">
        <div className="container">

          <div className="about-cta-box">

            <div className="about-cta-content">

              <span>
                A BRANCH OF HAZRA DENTAL WELLNESS
              </span>

              <h2>
                Discover a More
                Confident Smile.
              </h2>

              <p>
                Whether you are considering clear aligner
                treatment, dental implants, cosmetic dentistry
                or comprehensive dental care, our team is
                committed to understanding your needs and
                guiding you towards suitable treatment options
                with personalised attention and professional care.
              </p>

              <div className="about-cta-buttons">

                <Link
                  to="/contact"
                  className="about-primary-btn"
                >
                  Book Appointment
                  <FaArrowRight />
                </Link>

                <a
                  href="tel:+919122266733"
                  className="about-secondary-btn"
                >
                  Call Now
                </a>

              </div>
            </div>


            {/* CLINIC CONTACT INFORMATION */}

            <div className="about-cta-info">
              <div className="cta-info-card">

                <h3>
                  F&amp;H Aligners &amp; Implant
                  Dental Clinic
                </h3>

                <p>
                  A Branch of Hazra Dental Wellness
                </p>

                <p>
                  📍 Chowdhary Rd, Ram Das Bhatta,
                  Bistupur, Jamshedpur, Jharkhand 831001
                </p>

                <p>📞 +91 9122266733</p>

                <div className="clinic-hours">

                  <h4>Clinic Hours</h4>

                  <p>
                    Monday – Wednesday: 10 AM – 8 PM
                  </p>

                  <p className="clinic-closed">
                    Thursday: Closed
                  </p>

                  <p>
                    Friday – Saturday: 10 AM – 8 PM
                  </p>

                  <p>
                    Sunday: Closed
                  </p>

                </div>

                <p>
                  ✨ Advanced Dentistry with Personalised Care
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  );
}
