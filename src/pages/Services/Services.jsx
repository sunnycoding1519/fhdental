
import { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaTooth,
  FaTeeth,
  FaSmile,
  FaMagic,
} from "react-icons/fa";

import "./Services.css";

/* Hero Image */
import hero from "../../assets/images/Modern Dental Clinic with Blue Chair.png";

/* Category Images — Actual F&H Clinic Interior */
import category1 from "../../assets/images/gallery/clinic-treatment-room-03.png";
import category2 from "../../assets/images/gallery/clinic-treatment-room-04.png";
import category3 from "../../assets/images/gallery/fh-reception-branding.png";


/* Doctor Images */
import doctor1 from "../../assets/images/doctor1.jpg";
import doctor2 from "../../assets/images/doctor2.jpg";

const Services = () => {
  /* =========================================================
     SERVICE PAGE STRUCTURED DATA
  ========================================================== */

  useEffect(() => {
    const schemaId = "fh-services-schema";

    const previousSchema = document.getElementById(schemaId);

    if (previousSchema) {
      previousSchema.remove();
    }

    const schema = document.createElement("script");
    schema.id = schemaId;
    schema.type = "application/ld+json";

    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Dental Services at F&H Aligners & Implant Dental Clinic",
      url: "https://fhalignersanddentalclinic.com/services",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Dental Implants and Permanent Tooth Replacement",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Clear Aligners and Invisalign",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Dental Braces",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Smile Makeover and Smile Designing",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Teeth Whitening",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Dental Veneers in Jamshedpur",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Root Canal Treatment",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Painless Dentistry and Comfortable Dental Care",
        },
        {
          "@type": "ListItem",
          position: 9,
          name: "Preventive Dental Care",
        },
        {
          "@type": "ListItem",
          position: 10,
          name: "Dental Cleaning",
        },
        {
          "@type": "ListItem",
          position: 11,
          name: "Wisdom Tooth Removal",
        },
      ],
    });

    document.head.appendChild(schema);

    return () => {
      const existingSchema = document.getElementById(schemaId);

      if (existingSchema) {
        existingSchema.remove();
      }
    };
  }, []);

  return (
    /* IMPORTANT: This wrapper connects Services.jsx to Services.css */
    <main className="services-page">

      {/* =========================================================
          PREMIUM SERVICES HERO
      ========================================================== */}

      <section
        className="services-hero"
        aria-labelledby="services-heading"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <div className="services-overlay"></div>
        <div className="services-fade"></div>

        <div className="container">
          <div className="services-content">

            <span className="services-tag">
              F&H ALIGNERS & IMPLANT DENTAL CLINIC
            </span>

            <h1 id="services-heading">
              Dental Services in
              <br />
              <span>Jamshedpur</span>
            </h1>

            <p>
              Explore personalized dental care at F&H Aligners &
              Implant Dental Clinic in Bistupur, Jamshedpur.
              Our treatments include clear aligners, dental
              implants, permanent tooth replacement options,
              braces, veneers, teeth whitening, smile makeovers,
              cosmetic dentistry and preventive dental care.
              We also focus on patient comfort and discussing
              suitable treatment options according to individual
              dental needs.
            </p>

            <div className="services-buttons">
              <Link
                to="/contact"
                className="services-btn primary-service-btn"
                aria-label="Book a dental appointment in Jamshedpur"
              >
                Book Appointment
                <FaArrowRight />
              </Link>

              <Link
                to="/doctor"
                className="services-btn secondary-service-btn"
              >
                Meet Our Doctors
              </Link>
            </div>

            <div className="services-stats">
              <div>
                <h3>5000+</h3>
                <span>Happy Smiles</span>
              </div>

              <div>
                <h3>15+</h3>
                <span>Years Experience</span>
              </div>

              <div>
                <h3>4.9★</h3>
                <span>Google Rating</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICE CATEGORIES
      ========================================================== */}

      <section
        className="service-categories"
        aria-labelledby="categories-heading"
      >
        <div className="container">

          <div className="section-title">
            <span className="section-tag">
              OUR DENTAL SERVICES
            </span>

            <h2 id="categories-heading">
              Comprehensive Dental Care
              <span> in Jamshedpur</span>
            </h2>

            <p>
              From permanent tooth replacement and correcting
              dental alignment to improving smile aesthetics
              and maintaining oral health, our dental treatments
              are planned around your individual needs. We also
              focus on preventive dental care and a comfortable
              patient experience.
            </p>
          </div>

          <div className="category-grid">

            {/* RESTORE */}

            <article className="category-card">
              <div className="category-image">
                <img
                  src={category1}
                  alt="Dental implants and permanent tooth replacement in Jamshedpur"
                  loading="lazy"
                />
              </div>

              <div className="category-content">
                <span>Restore & Replace</span>

                <h3>
                  Dental Implants, Tooth Replacement,
                  Crowns & Bridges
                </h3>

                <p>
                  Explore dental implant and restorative
                  dentistry options for missing or damaged
                  teeth. Treatment planning focuses on
                  function, comfort and natural-looking results.
                </p>

                <a
                  href="#restore"
                  aria-label="Explore dental implant and restorative treatments"
                >
                  Explore Treatment
                  <FaArrowRight />
                </a>
              </div>
            </article>

            {/* ALIGN */}

            <article className="category-card">
              <div className="category-image">
                <img
                  src={category2}
                  alt="Clear aligners and dental braces treatment in Jamshedpur"
                  loading="lazy"
                />
              </div>

              <div className="category-content">
                <span>Straighten & Align</span>

                <h3>Clear Aligners & Dental Braces</h3>

                <p>
                  Improve tooth alignment, spacing and bite
                  through modern orthodontic treatment and
                  personalized treatment planning.
                </p>

                <a
                  href="#align"
                  aria-label="Explore clear aligners and braces treatments"
                >
                  Explore Treatment
                  <FaArrowRight />
                </a>
              </div>
            </article>

            {/* SMILE */}

            <article className="category-card">
              <div className="category-image">
                <img
                  src={category3}
                  alt="Smile makeover, dental veneers and teeth whitening in Jamshedpur"
                  loading="lazy"
                />
              </div>

              <div className="category-content">
                <span>Enhance Your Smile</span>

                <h3>
                  Smile Makeovers, Teeth Whitening & Veneers
                </h3>

                <p>
                  Explore cosmetic dentistry options such as
                  dental veneers, professional teeth whitening
                  and smile designing to improve the appearance
                  of your smile.
                </p>

                <a
                  href="#smile"
                  aria-label="Explore cosmetic dental treatments"
                >
                  Explore Treatment
                  <FaArrowRight />
                </a>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* =========================================================
          RESTORE & REPLACE
      ========================================================== */}

      <section
        className="service-detail-section"
        id="restore"
        aria-labelledby="restore-heading"
      >
        <div className="container detail-grid">

          <div className="detail-left">
            <span className="section-tag">
              RESTORE & REPLACE
            </span>

            <h2 id="restore-heading">
              Permanent Tooth Replacement &
              <br />
              Dental Implants
            </h2>

            <p>
              Looking for permanent tooth replacement in
              Jamshedpur? Dental implants are a fixed tooth
              replacement option for suitable patients with
              missing teeth. At F&H Aligners & Implant Dental
              Clinic in Bistupur, Jamshedpur, treatment planning
              considers oral health, bone condition and individual
              dental requirements.
            </p>

            <p>
              Patients can also enquire about missing teeth
              replacement, single-tooth implants, full-mouth
              rehabilitation and other restorative dentistry
              options following a dental examination.
            </p>
          </div>

          <div className="detail-right">

            <article className="detail-card">
              <FaTooth />

              <h3>Dental Implants</h3>

              <p>
                Implant-based tooth replacement for suitable
                patients who have one or more missing teeth.
              </p>

              <Link to="/treatments/dental-implants-jamshedpur">
                Learn More
              </Link>
            </article>

            <article className="detail-card">
              <FaTooth />

              <h3>Full Mouth Rehabilitation</h3>

              <p>
                Comprehensive restorative treatment planning
                for severely worn, damaged or compromised teeth.
              </p>
            </article>

            <article className="detail-card">
              <FaTooth />

              <h3>Crowns & Bridges</h3>

              <p>
                Dental restorations designed to improve
                tooth strength, function and appearance.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* =========================================================
          STRAIGHTEN & ALIGN
      ========================================================== */}

      <section
        className="service-detail-section gray-bg"
        id="align"
        aria-labelledby="align-heading"
      >
        <div className="container detail-grid reverse-grid">

          <div className="detail-right">

            <article className="detail-card">
              <FaTeeth />

              <h3>Clear Aligners</h3>

              <p>
                Discreet orthodontic treatment designed to
                gradually improve tooth alignment. Ask about
                Invisalign and clear aligner treatment options.
              </p>

              <Link to="/treatments/clear-aligners-jamshedpur">
                Learn More
              </Link>
            </article>

            <article className="detail-card">
              <FaTeeth />

              <h3>Dental Braces</h3>

              <p>
                Orthodontic treatment for correcting crowding,
                spacing and bite-related concerns.
              </p>

              <Link to="/treatments/dental-braces-jamshedpur">
                Learn More
              </Link>
            </article>

          </div>

          <div className="detail-left">
            <span className="section-tag">
              STRAIGHTEN & ALIGN
            </span>

            <h2 id="align-heading">
              Clear Aligners &
              <br />
              Dental Braces
            </h2>

            <p>
              Correct crowding, spacing and bite concerns
              through personalized orthodontic treatment.
              Clear aligners and braces are planned according
              to each patient's individual dental needs.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================
          SMILE MAKEOVER & COSMETIC DENTISTRY
      ========================================================== */}

      <section
        className="service-detail-section"
        id="smile"
        aria-labelledby="smile-heading"
      >
        <div className="container detail-grid">

          <div className="detail-left">
            <span className="section-tag">
              COSMETIC DENTISTRY
            </span>

            <h2 id="smile-heading">
              Veneers, Smile Designing &
              <br />
              Cosmetic Dentistry
            </h2>

            <p>
              Looking for veneers in Jamshedpur or cosmetic
              dentistry options? Dental veneers may help improve
              the appearance of selected teeth by addressing
              concerns related to colour, shape and appearance.
              The suitability of veneers, including porcelain
              veneers, depends on an individual dental assessment.
            </p>

            <p>
              Smile designing and smile makeover treatment
              planning are based on each patient's dental
              condition, preferences and smile goals.
            </p>
          </div>

          <div className="detail-right three-card">

            <article className="detail-card">
              <FaMagic />

              <h3>Smile Makeover</h3>

              <p>
                Personalized cosmetic treatment planning for
                a balanced and natural-looking smile.
              </p>

              <Link to="/treatments/smile-makeover-jamshedpur">
                Learn More
              </Link>
            </article>

            <article className="detail-card">
              <FaSmile />

              <h3>Teeth Whitening</h3>

              <p>
                Professional teeth whitening options for
                improving the appearance of discoloured teeth.
              </p>

              <Link to="/treatments/teeth-whitening-jamshedpur">
                Learn More
              </Link>
            </article>

            <article className="detail-card">
              <FaMagic />

              <h3>Dental Veneers</h3>

              <p>
                Veneer treatment options for improving the
                appearance of selected teeth, subject to
                clinical suitability.
              </p>

              <Link to="/treatments/dental-veneers-jamshedpur">
                Learn More
              </Link>
            </article>

          </div>
        </div>
      </section>

      {/* =========================================================
          PAINLESS & COMFORT-FOCUSED DENTISTRY
      ========================================================== */}

      <section
        className="service-detail-section gray-bg"
        id="comfortable-dental-care"
        aria-labelledby="comfort-heading"
      >
        <div className="container detail-grid">

          <div className="detail-left">
            <span className="section-tag">
              PATIENT-CENTRED DENTAL CARE
            </span>

            <h2 id="comfort-heading">
              Painless Dentistry &
              <br />
              Comfortable Dental Care
            </h2>

            <p>
              If you are looking for painless dentistry in
              Jamshedpur, discuss your concerns with the dental
              team before treatment. The clinic focuses on
              understanding patient comfort, explaining
              procedures and discussing appropriate
              pain-management options where suitable.
            </p>

            <p>
              The aim is to make dental visits more comfortable
              through clear communication, individual treatment
              planning and appropriate clinical care.
            </p>

            <Link to="/treatments/root-canal-treatment-jamshedpur">
              Learn About Root Canal Treatment
            </Link>
          </div>

          <div className="detail-right">

            <article className="detail-card">
              <FaSmile />

              <h3>Comfort-Focused Care</h3>

              <p>
                Discuss dental anxiety, treatment concerns
                and comfort options with the dental team.
              </p>
            </article>

            <article className="detail-card">
              <FaTooth />

              <h3>Preventive Dental Care</h3>

              <p>
                Regular dental examinations and professional
                cleaning can help maintain oral health and
                identify dental concerns early.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* =========================================================
          PREMIUM MARQUEE
      ========================================================== */}

      <section
        className="service-marquee"
        aria-label="F&H Dental Clinic benefits"
      >
        <div className="marquee">
          <div className="marquee-track">
            <span>Experienced Clinical Team</span>
            <span>Modern Technology & Materials</span>
            <span>Focus On Long-Term Results</span>
            <span>Digital Dentistry</span>
            <span>Smile Design Experts</span>
            <span>Patient First Treatment</span>

            <span>Experienced Clinical Team</span>
            <span>Modern Technology & Materials</span>
            <span>Focus On Long-Term Results</span>
            <span>Digital Dentistry</span>
            <span>Smile Design Experts</span>
            <span>Patient First Treatment</span>
          </div>
        </div>
      </section>

      {/* =========================================================
          DOCTORS / SPECIALISTS
      ========================================================== */}

      <section
        className="doctor-section"
        aria-labelledby="specialists-heading"
      >
        <div className="container">

          <div className="doctor-heading">
            <span className="section-tag">
              OUR SPECIALISTS
            </span>

            <h2
              id="specialists-heading"
              className="specialists-title"
            >
              Meet Your Dental Specialists
            </h2>

            <p>
              Meet the dental specialists providing
              implant-focused, Invisalign and cosmetic
              dentistry consultations at F&H Dental Clinic
              in Jamshedpur.
            </p>
          </div>

          {/* DOCTOR 1 */}

          <div className="doctor-row">
            <div className="doctor-image-wrapper">
              <div className="doctor-image-bg-glow"></div>

              <div className="doctor-image">
                <img
                  src={doctor1}
                  alt="Dr. Hazra, Implantologist at F&H Dental Clinic in Jamshedpur"
                  loading="lazy"
                />

                <div className="doctor-image-overlay"></div>
              </div>
            </div>

            <div className="doctor-content">
              <span className="specialty-badge">
                Implantologist
              </span>

              <h3>Dr. Hazra</h3>

              <h4>Implant Dentistry</h4>

              <p>
                Dr. Hazra is an implantologist focused on dental
                implant treatment and tooth replacement, with
                over <strong>10 years of experience</strong> in
                dental implant surgical placement and restoration.
                He helps patients understand implant-based options
                for addressing missing teeth and restoring
                everyday oral function.
              </p>

              <Link to="/doctor" className="doctor-btn">
                <span>View Profile</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>

          {/* DOCTOR 2 */}

          <div className="doctor-row reverse">
            <div className="doctor-image-wrapper">
              <div className="doctor-image-bg-glow"></div>

              <div className="doctor-image">
                <img
                  src={doctor2}
                  alt="Dr. Fida, Invisalign Provider and Cosmetic Dentistry specialist at F&H Dental Clinic in Jamshedpur"
                  loading="lazy"
                />

                <div className="doctor-image-overlay"></div>
              </div>
            </div>

            <div className="doctor-content">
              <span className="specialty-badge">
                Invisalign Provider
              </span>

              <h3>Dr. Fida</h3>

              <h4>
                Invisalign Provider &amp; Cosmetic Dentistry
              </h4>

              <p>
                Dr. Fida focuses on Invisalign treatment and
                cosmetic dentistry, helping patients explore
                options to improve dental alignment and the
                appearance of their smiles.
              </p>

              <p>
                Her approach centers on understanding each
                patient's smile goals, discussing suitable
                treatment options and planning care with
                attention to both dental health and aesthetics.
              </p>

              <Link to="/doctor" className="doctor-btn">
                <span>View Profile</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          ADDITIONAL TREATMENTS
      ========================================================== */}

      <section
        className="additional-section"
        aria-labelledby="additional-heading"
      >
        <div className="container">

          <div className="additional-heading">
            <span className="section-tag">
              MORE DENTAL TREATMENTS
            </span>

            <h2 id="additional-heading">
              Additional Dental Treatments
              <br />
              Offered at F&H Dental
            </h2>

            <p>
              Along with orthodontic, implant and cosmetic
              treatments, explore general and preventive dental
              care options, including routine checkups, dental
              cleaning, fillings and selected restorative
              procedures.
            </p>
          </div>

          <div className="additional-grid">

            <article className="additional-card">
              <FaTooth />
              <h4>General Dental Checkup</h4>
            </article>

            <article className="additional-card">
              <FaTooth />
              <h4>Root Canal Treatment</h4>
            </article>

            <article className="additional-card">
              <FaTooth />
              <h4>Dental Fillings</h4>
            </article>

            <article className="additional-card">
              <FaTooth />
              <h4>Tooth-Coloured Fillings</h4>
            </article>

            <article className="additional-card">
              <FaTooth />
              <h4>Wisdom Tooth Removal</h4>
            </article>

            <article className="additional-card">
              <FaTooth />
              <h4>Dental Cleaning</h4>
            </article>

            <article className="additional-card">
              <FaTooth />
              <h4>Preventive Dental Care</h4>
            </article>

            <article className="additional-card">
              <FaTooth />
              <h4>Gum Disease Treatment</h4>
            </article>

            <article className="additional-card">
              <FaTooth />
              <h4>Fluoride Treatment</h4>
            </article>

            <article className="additional-card">
              <FaTooth />
              <h4>Dentures</h4>
            </article>

            <article className="additional-card">
              <FaTooth />
              <h4>Post & Core</h4>
            </article>

            <article className="additional-card">
              <FaTooth />
              <h4>Minor Oral Surgery</h4>
            </article>

          </div>
        </div>
      </section>

      {/* =========================================================
          PREMIUM CTA
      ========================================================== */}

      <section
        className="services-cta"
        aria-labelledby="cta-heading"
      >
        <div className="container">

          <div className="cta-wrapper">

            <div className="cta-left">
              <span className="section-tag">
                BOOK YOUR VISIT
              </span>

              <h2 id="cta-heading">
                Ready to Transform
                <br />
                Your Smile?
              </h2>

              <p>
                Whether you need a routine dental check-up,
                clear aligners, permanent tooth replacement,
                teeth whitening or a smile makeover, our
                specialists are here to discuss personalized
                dental care options in Jamshedpur.
              </p>

              <div className="cta-buttons">
                <Link
                  to="/contact"
                  className="cta-primary-btn"
                >
                  Book Appointment
                  <FaArrowRight />
                </Link>

                <a
                  href="tel:+919122266733"
                  className="cta-secondary-btn"
                >
                  Call Now
                </a>
              </div>
            </div>

            <div className="cta-right">
              <div className="contact-card">
                <h3>Visit Our Clinic</h3>

                <p>
                  F&H Aligners & Implant Dental Clinic
                </p>

                <span>
                  📍 Bistupur, Jamshedpur, Jharkhand
                </span>

                <span>
                  📞 +91 91222 66733
                </span>

                <span>
                  🕘 Mon - Sat : 10 AM – 8 PM
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default Services;
