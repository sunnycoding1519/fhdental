import React, { useEffect } from "react";
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
import hero from "../../assets/images/hero.png";

/* Category Images */
import category1 from "../../assets/images/hero2.png";
import category2 from "../../assets/images/hero.png";
import category3 from "../../assets/images/hero.png";

/* Doctor Images */
import doctor1 from "../../assets/images/doctor1.jpg";
import doctor2 from "../../assets/images/doctor2.jpg";


const Services = () => {

  /* =========================================================
     SERVICES PAGE SEO
  ========================================================== */

  useEffect(() => {
    document.title =
      "Dental Services in Jamshedpur | F&H Dental Clinic";

    const description =
      "Explore dental services at F&H Aligners & Implant Dental Clinic in Bistupur, Jamshedpur, including clear aligners, dental implants, smile makeovers, braces, root canal treatment and preventive dental care.";

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute("content", description);

    /* Canonical */

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      "href",
      "https://fhalignersanddentalclinic.com/services"
    );

    /* Robots */

    let robots = document.querySelector(
      'meta[name="robots"]'
    );

    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      document.head.appendChild(robots);
    }

    robots.setAttribute(
      "content",
      "index, follow"
    );

    /* =======================================================
       SERVICE PAGE STRUCTURED DATA
    ======================================================== */

    const schemaId = "fh-services-schema";

    let schema = document.getElementById(schemaId);

    if (!schema) {
      schema = document.createElement("script");
      schema.id = schemaId;
      schema.type = "application/ld+json";
      document.head.appendChild(schema);
    }

    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Dental Services at F&H Aligners & Implant Dental Clinic",
      "url": "https://fhalignersanddentalclinic.com/services",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Dental Implants"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Clear Aligners"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dental Braces"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Smile Makeover"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Teeth Whitening"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Root Canal Treatment"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Dental Cleaning"
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Wisdom Tooth Removal"
        }
      ]
    });

    return () => {
      const existingSchema =
        document.getElementById(schemaId);

      if (existingSchema) {
        existingSchema.remove();
      }
    };
  }, []);


  return (
    <>

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

            {/* PRIMARY SEO H1 */}

            <h1 id="services-heading">

              Dental Services in
              <br />

              <span>
                Jamshedpur
              </span>

            </h1>

            <p>
              Explore personalized dental care at F&H Aligners &
              Implant Dental Clinic in Bistupur, Jamshedpur.
              Our treatments include clear aligners, dental
              implants, braces, smile makeovers, cosmetic
              dentistry, restorative care and preventive dental
              treatments.
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

                <span>
                  Happy Smiles
                </span>

              </div>

              <div>

                <h3>10+</h3>

                <span>
                  Years Experience
                </span>

              </div>

              <div>

                <h3>4.9★</h3>

                <span>
                  Google Rating
                </span>

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
              From replacing missing teeth and correcting
              alignment to improving smile aesthetics and
              maintaining oral health, our dental treatments
              are planned around your individual needs.
            </p>

          </div>


          <div className="category-grid">

            {/* RESTORE */}

            <article className="category-card">

              <div className="category-image">

                <img
                  src={category1}
                  alt="Dental implant and restorative dental treatment in Jamshedpur"
                  loading="lazy"
                />

              </div>

              <div className="category-content">

                <span>
                  Restore & Replace
                </span>

                <h3>
                  Dental Implants, Full Mouth Rehabilitation,
                  Crowns & Bridges
                </h3>

                <p>
                  Restore missing or damaged teeth with
                  modern restorative dentistry designed for
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

                <span>
                  Straighten & Align
                </span>

                <h3>
                  Clear Aligners & Dental Braces
                </h3>

                <p>
                  Improve tooth alignment, spacing and bite
                  through modern orthodontic treatment and
                  digital treatment planning.
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
                  alt="Smile makeover and cosmetic dentistry in Jamshedpur"
                  loading="lazy"
                />

              </div>

              <div className="category-content">

                <span>
                  Enhance Your Smile
                </span>

                <h3>
                  Smile Makeovers, Teeth Whitening & Veneers
                </h3>

                <p>
                  Enhance the appearance of your smile with
                  personalized cosmetic dental treatments
                  focused on colour, shape and symmetry.
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
              Dental Implants &
              <br />
              Restorative Dentistry
            </h2>

            <p>
              Replace missing or damaged teeth using modern
              restorative dental treatments in Jamshedpur.
              Our approach focuses on restoring chewing
              function, comfort, aesthetics and long-term
              oral health.
            </p>

          </div>


          <div className="detail-right">

            <article className="detail-card">

              <FaTooth />

              <h3>
                Dental Implants
              </h3>

              <p>
                Modern tooth replacement treatment for
                suitable patients with missing teeth.
              </p>

              <Link to="/services#restore">
                Learn More
              </Link>

            </article>


            <article className="detail-card">

              <FaTooth />

              <h3>
                Full Mouth Rehabilitation
              </h3>

              <p>
                Comprehensive restorative treatment for
                severely worn, damaged or compromised teeth.
              </p>

            </article>


            <article className="detail-card">

              <FaTooth />

              <h3>
                Crowns & Bridges
              </h3>

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

              <h3>
                Clear Aligners
              </h3>

              <p>
                Discreet orthodontic treatment designed to
                gradually improve tooth alignment.
              </p>

            </article>


            <article className="detail-card">

              <FaTeeth />

              <h3>
                Dental Braces
              </h3>

              <p>
                Orthodontic treatment for correcting
                crowding, spacing and bite-related concerns.
              </p>

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
          SMILE MAKEOVER
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
              Smile Makeover &
              <br />
              Cosmetic Dentistry
            </h2>

            <p>
              Cosmetic dental treatments designed to improve
              the colour, shape, symmetry and overall appearance
              of your smile. Every treatment plan is personalized
              around your smile goals.
            </p>

          </div>


          <div className="detail-right three-card">

            <article className="detail-card">

              <FaMagic />

              <h3>
                Smile Makeover
              </h3>

              <p>
                Personalized cosmetic treatment for a
                balanced and natural-looking smile.
              </p>

            </article>


            <article className="detail-card">

              <FaSmile />

              <h3>
                Teeth Whitening
              </h3>

              <p>
                Professional whitening treatment for
                improving the appearance of discoloured teeth.
              </p>

            </article>


            <article className="detail-card">

              <FaMagic />

              <h3>
                Dental Veneers
              </h3>

              <p>
                Thin dental restorations used to improve
                the appearance of selected teeth.
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
          DOCTORS
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

            <h2 id="specialists-heading">
              Meet Your Dental Specialists
            </h2>

            <p>
              Meet experienced specialists providing
              personalized orthodontic, implant and oral
              surgical care at F&H Dental Clinic in Jamshedpur.
            </p>

          </div>


          {/* DOCTOR 1 */}

          <div className="doctor-row">

            <div className="doctor-image-wrapper">

              <div className="doctor-image-bg-glow"></div>

              <div className="doctor-image">

                <img
                  src={doctor1}
                  alt="Dr. Hazra, Orthodontist at F&H Dental Clinic in Jamshedpur"
                  loading="lazy"
                />

                <div className="doctor-image-overlay"></div>

              </div>

            </div>


            <div className="doctor-content">

              <span className="specialty-badge">
                Orthodontist
              </span>

              <h3>
                Dr. Hazra
              </h3>

              <h4>
               Periodontal & Implant Dentistry
              </h4>

              <p>
                 Dr. Adreet Hazra is a specialist in periodontal and implant
                dentistry with over <strong>10 years of experience</strong> in
                dental implant surgical placement and restoration.
              </p>
              <p>
                 He provides comprehensive solutions for patients with missing
                teeth, from single-tooth replacements to full-arch implant
                restorations using advanced implant technology.
              </p>

    

              <Link
                to="/doctor"
                className="doctor-btn"
              >
                <span>
                  View Profile
                </span>

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
                  alt="Dr. Sanchit Mahajanzy, Implantologist at F&H Dental Clinic in Jamshedpur"
                  loading="lazy"
                />

                <div className="doctor-image-overlay"></div>

              </div>

            </div>


            <div className="doctor-content">

              <span className="specialty-badge">
                Implantologist
              </span>

              <h3>
                Dr. Sakeena Fida
              </h3>

              <h4>
               General & Cosmetic Dentistry
              </h4>

              <p>
                Dr. Fida is renowned for delivering exceptional care in both
                general and cosmetic dentistry, combining oral health, function,
                and aesthetics.
              </p>
              <p>She specializes in teeth whitening, porcelain veneers, smile
                makeovers, restorative dentistry, preventive care, and
                personalized luxury dental experiences using modern technology
                </p>

            
              <Link
                to="/doctor"
                className="doctor-btn"
              >

                <span>
                  View Profile
                </span>

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
              treatments, we provide comprehensive dental care
              ranging from preventive checkups to restorative
              procedures and selected oral surgeries.
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
              <h4>Wisdom Tooth Removal</h4>
            </article>

            <article className="additional-card">
              <FaTooth />
              <h4>Dental Cleaning</h4>
            </article>

            <article className="additional-card">
              <FaTooth />
              <h4>Fluoride Treatment</h4>
            </article>

            <article className="additional-card">
              <FaTooth />
              <h4>Gum Disease Treatment</h4>
            </article>

            <article className="additional-card">
              <FaTooth />
              <h4>Laser Dentistry</h4>
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
              <h4>Frenectomy</h4>
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
                clear aligners, dental implants or a complete
                smile makeover, our specialists are here to
                provide personalized dental care in Jamshedpur.
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

                <h3>
                  Visit Our Clinic
                </h3>

                <p>
                  F&H Aligners & Implant Dental Clinic
                </p>

                <span>
                  📍 Chowdhary Rd, Ram Das Bhatta,
                  Bistupur, Jamshedpur, Jharkhand 831001
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

    </>
  );
};

export default Services;