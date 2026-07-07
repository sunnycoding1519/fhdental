import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaTooth,
  FaTeeth,
  FaSmile,
  FaMagic
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
  return (
    <>
      {/*==========================================
            PREMIUM HERO
===========================================*/}

<section
  className="services-hero"
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

      <h1>
        Dental Treatments
        <br />
        Designed Around
        <span> Your Smile.</span>
      </h1>

      <p>
        Experience world-class dental care delivered through advanced
        technology, evidence-based treatment planning and a patient-first
        philosophy. From smile makeovers to dental implants, every treatment
        is designed to restore confidence, comfort and long-term oral health.
      </p>

      <div className="services-buttons">

        <Link
          to="/contact"
          className="services-btn primary-service-btn"
        >
          Book Appointment
          <FaArrowRight />
        </Link>

        <Link
          to="/doctors"
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

          <h3>10+</h3>

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

      {/*=========================================
          SERVICE CATEGORIES
==========================================*/}

<section className="service-categories">

<div className="container">

<div className="section-title">

<span className="section-tag">
OUR SERVICES
</span>

<h2>
Service Categories
</h2>

<p>

From corrective procedures to aesthetic transformations,
explore treatments designed for long-term oral health,
comfortable dentistry and naturally beautiful smiles.

Whether it is routine checkups, cosmetic dentistry,
aligners or implants, every treatment is carefully planned
to deliver predictable and lasting results.

</p>

</div>

<div className="category-grid">

{/* CARD 1 */}

<div className="category-card">

<div className="category-image">

<img
src={category1}
alt="Restore & Replace"
/>

</div>

<div className="category-content">

<span>

Restore & Replace

</span>

<h3>

Dental Implants

Full Mouth Rehab

Crowns & Bridges

</h3>

<p>

Restore missing or damaged teeth using
advanced implant dentistry, crowns and
bridges designed for strength, comfort
and natural aesthetics.

</p>

<Link to="#restore">

Explore Treatment

<FaArrowRight/>

</Link>

</div>

</div>

{/* CARD 2 */}

<div className="category-card">

<div className="category-image">

<img
src={category2}
alt=""
/>

</div>

<div className="category-content">

<span>

Straighten & Align

</span>

<h3>

Invisible Aligners

Dental Braces

</h3>

<p>

Correct crowding, spacing and bite
issues through digital planning,
clear aligners and modern orthodontics.

</p>

<Link to="#align">

Explore Treatment

<FaArrowRight/>

</Link>

</div>

</div>

{/* CARD 3 */}

<div className="category-card">

<div className="category-image">

<img
src={category3}
alt=""
/>

</div>

<div className="category-content">

<span>

Enhance Your Smile

</span>

<h3>

Smile Makeovers

Teeth Whitening

Veneers

</h3>

<p>

Improve colour, symmetry and overall
appearance with cosmetic dentistry
tailored to your smile goals.

</p>

<Link to="#smile">

Explore Treatment

<FaArrowRight/>

</Link>

</div>

</div>

</div>

</div>

</section>

      {/*=========================================
      RESTORE & REPLACE
==========================================*/}

<section className="service-detail-section" id="restore">

<div className="container detail-grid">

<div className="detail-left">

<span className="section-tag">
RESTORE & REPLACE
</span>

<h2>
Restore &
<br />
Replace
</h2>

<p>
Replace missing or damaged teeth using modern restorative
dentistry. Our treatments are designed to restore chewing
ability, facial aesthetics and long-term oral health while
maintaining a completely natural appearance.
</p>

</div>

<div className="detail-right">

<div className="detail-card">

<FaTooth/>

<h3>Dental Implants</h3>

<p>
Permanent replacement for missing teeth using titanium implants.
</p>

</div>

<div className="detail-card">

<FaTooth/>

<h3>Full Mouth Rehab</h3>

<p>
Complete rehabilitation for severely worn or damaged teeth.
</p>

</div>

<div className="detail-card">

<FaTooth/>

<h3>Crowns & Bridges</h3>

<p>
Strong ceramic restorations designed to match natural teeth.
</p>

</div>

</div>

</div>

</section>


{/*=========================================
      STRAIGHTEN & ALIGN
==========================================*/}

<section className="service-detail-section gray-bg" id="align">

<div className="container detail-grid reverse-grid">

<div className="detail-right">

<div className="detail-card">

<FaTeeth/>

<h3>Invisible Aligners</h3>

<p>
Virtually invisible clear aligners for modern smile correction.
</p>

</div>

<div className="detail-card">

<FaTeeth/>

<h3>Metal Braces</h3>

<p>
Reliable orthodontic treatment for every age group.
</p>

</div>

</div>

<div className="detail-left">

<span className="section-tag">
STRAIGHTEN & ALIGN
</span>

<h2>
Straighten
<br />
& Align
</h2>

<p>
Correct crowding, spacing and bite problems through
digital treatment planning. Every orthodontic case is
planned for maximum comfort, precision and predictable
results.
</p>

</div>

</div>

</section>


{/*=========================================
      ENHANCE YOUR SMILE
==========================================*/}

<section className="service-detail-section" id="smile">

<div className="container detail-grid">

<div className="detail-left">

<span className="section-tag">
ENHANCE YOUR SMILE
</span>

<h2>
Enhance
<br />
Your Smile
</h2>

<p>
Cosmetic dentistry designed to improve colour,
shape, symmetry and confidence. Whether you need
small refinements or a complete smile makeover,
our specialists personalise every treatment.
</p>

</div>

<div className="detail-right three-card">

<div className="detail-card">

<FaMagic/>

<h3>Smile Makeover</h3>

<p>
Complete aesthetic smile transformation.
</p>

</div>

<div className="detail-card">

<FaSmile/>

<h3>Teeth Whitening</h3>

<p>
Professional whitening for brighter smiles.
</p>

</div>

<div className="detail-card">

<FaMagic/>

<h3>Dental Veneers</h3>

<p>
Ultra-thin porcelain veneers for natural beauty.
</p>

</div>

</div>

</div>

</section>
{/*==========================================
            PREMIUM MARQUEE
===========================================*/}

<section className="service-marquee">

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


{/*==========================================
        DOCTORS SECTION
===========================================*/}

<section className="doctor-section">

<div className="container">

<div className="doctor-heading">

<span className="section-tag">

OUR SPECIALISTS

</span>

<h2>

Meet Your Dental Specialists

</h2>

<p>

Meet experienced specialists dedicated to creating healthy,
beautiful smiles through advanced dentistry, personalised
care and the latest treatment technology.

</p>

</div>


{/*---------------- Doctor 1 ----------------*/}

<div className="doctor-row">

<div className="doctor-image">

{/* Replace Image */}

<img

src={doctor1}

alt="Doctor"

/>

</div>

<div className="doctor-content">

<span>

Orthodontist

</span>

<h3>

Dr. Hazra

</h3>

<h4>

BDS, MDS

</h4>

<p>

Gold Medalist Orthodontist specializing in
Invisible Aligners, Braces, Smile Makeovers,
Jaw Correction and Pediatric Orthodontics.

Known for minimally invasive treatment planning
and beautiful smile transformations.

</p>

<ul>

<li>Invisible Aligners</li>

<li>Smile Makeovers</li>

<li>Jaw Correction</li>

<li>Pediatric Orthodontics</li>

</ul>

<Link
to="/doctor"
className="doctor-btn"
>

View Profile

<FaArrowRight/>

</Link>

</div>

</div>


{/*---------------- Doctor 2 ----------------*/}

<div className="doctor-row reverse">

<div className="doctor-content">

<span>

Implantologist

</span>

<h3>

Dr. Fida

</h3>

<h4>

BDS, MDS (OMFS)

</h4>

<p>

Specialist in Dental Implants, Wisdom Tooth
Surgery, Laser Surgery and Oral Cancer Screening.

Focused on long-term function,
precision and painless dentistry.

</p>

<ul>

<li>Dental Implants</li>

<li>Laser Dentistry</li>

<li>Wisdom Tooth Surgery</li>

<li>Oral Cancer Screening</li>

</ul>

<Link
to="/doctor"
className="doctor-btn"
>

View Profile

<FaArrowRight/>

</Link>

</div>

<div className="doctor-image">

<img

src={doctor2}

alt="Doctor"

/>

</div>

</div>

</div>

</section>
{/*==========================================
      ADDITIONAL TREATMENTS
===========================================*/}

<section className="additional-section">

<div className="container">

<div className="additional-heading">

<span className="section-tag">

MORE TREATMENTS

</span>

<h2>

Additional Treatments
<br/>

Offered at F&H Dental

</h2>

<p>

Beyond our core services, we provide comprehensive dental
care ranging from preventive checkups to advanced oral
surgeries — all under one roof.

</p>

</div>


<div className="additional-grid">

<div className="additional-card"><FaTooth/><h4>General Checkup</h4></div>

<div className="additional-card"><FaTooth/><h4>Root Canal Treatment</h4></div>

<div className="additional-card"><FaTooth/><h4>Dental Fillings</h4></div>

<div className="additional-card"><FaTooth/><h4>Wisdom Tooth Removal</h4></div>

<div className="additional-card"><FaTooth/><h4>Dental Cleaning</h4></div>

<div className="additional-card"><FaTooth/><h4>Fluoride Treatment</h4></div>

<div className="additional-card"><FaTooth/><h4>Gum Disease Treatment</h4></div>

<div className="additional-card"><FaTooth/><h4>Laser Dentistry</h4></div>

<div className="additional-card"><FaTooth/><h4>Dentures</h4></div>

<div className="additional-card"><FaTooth/><h4>Post & Core</h4></div>

<div className="additional-card"><FaTooth/><h4>Frenectomy</h4></div>

<div className="additional-card"><FaTooth/><h4>Minor Oral Surgery</h4></div>

</div>

</div>

</section>
{/*==========================================
            PREMIUM CTA
===========================================*/}

<section className="services-cta">

<div className="container">

<div className="cta-wrapper">

<div className="cta-left">

<span className="section-tag">

BOOK YOUR VISIT

</span>

<h2>

Ready to Transform
<br/>

Your Smile?

</h2>

<p>

Whether you need a routine dental check-up,
clear aligners, dental implants or a complete
smile makeover, our experienced specialists are
here to provide personalised treatment with
advanced technology and compassionate care.

</p>

<div className="cta-buttons">

<Link
to="/contact"
className="cta-primary-btn"
>

Book Appointment

<FaArrowRight/>

</Link>

<a
href="tel:+917355095660"
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

📍 Jamshedpur, Jharkhand

</span>

<span>

📞 +91 73550 95660

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