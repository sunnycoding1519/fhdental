import { FaArrowRight, FaPhoneAlt, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./Hero.css";
import heroImage from "../../assets/images/hero2.png";
import {
  FaTooth,
  FaSmile,
  FaTeeth,
  FaMagic,
  FaClinicMedical
} from "react-icons/fa";
{/*import beforeAfter1 from "../../assets/images/before-after1.jpg";*/}
import doctor2 from "../../assets/images/doctor2.jpg";
import directorImage from "../../assets/images/doctor2.jpg";

function Hero() {
  return (
    <>
    <section
      className="hero"
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

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Creating Beautiful
          <br />
          Smiles With
          <span> Precision & Care.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2, duration: .8 }}
        >
          Experience premium dental care with advanced aligners,
          dental implants, smile makeovers and cosmetic dentistry
          designed to restore your confidence.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .4, duration: .8 }}
        >
          <Link
            to="/contact"
            className="hero-btn primary-btn"
          >
            Book Appointment

            <FaArrowRight />
          </Link>

          <a
            href="tel:+917355095660"
            className="hero-btn secondary-btn"
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
    {/* ===========================================
          WHY CHOOSE SECTION
      =========================================== */}

    <section className="why-section">

  <div className="container why-container">

    {/* LEFT */}

    <div className="why-left">

      <span className="section-tag">
        WHY CHOOSE F&H
      </span>

      <h2>
        Why Choose
        <br />
        F&H ?
      </h2>

      <p>
        At F&H Dental, we redefine luxury dental care with a perfect blend of advanced technology, specialist expertise, and unmatched comfort.
        From advanced Clear Aligner Systems for a discreet smile transformation, to precision Dental Implants that restore confidence and function, from bespoke Smile Designing for a flawless, natural look, to Oral & Maxillofacial Surgeries performed with the highest standards of safety and care.
        We also offer premium Zirconia Crowns & Prosthesis crafted with exceptional precision, aesthetics, and durability - because you deserve nothing less than excellence.
      </p>

      <p>
        Led by experienced specialists in Orthodontics,
        Dental Implants and Smile Design, every treatment
        plan is carefully customized to your dental needs.
      </p>

    </div>
    

    {/* RIGHT */}

    <div className="why-right">

      <div className="why-card">

        <div className="why-number">
          01
        </div>

        <h3>
          Experienced Specialists
        </h3>

        <p>
          Our experienced dental specialists provide
          expert care in aligners, implants,
          cosmetic dentistry and advanced
          restorative treatments.
        </p>

      </div>

      <div className="why-card active-card">

        <div className="why-number">
          02
        </div>

        <h3>
          Ethical Patient First
        </h3>

        <p>
          Transparent treatment planning,
          honest recommendations and
          complete patient education before
          every procedure.
        </p>

      </div>

      <div className="why-card active-card">

        <div className="why-number">
          03
        </div>

        <h3>
          Advanced Technology
        </h3>

        <p>
          Digital diagnostics, 3D planning,
          laser dentistry and modern
          equipment ensure safe,
          predictable treatment.
        </p>

      </div>

      <div className="why-card">

        <div className="why-number">
          04
        </div>

        <h3>
          Tailored Experience
        </h3>

        <p>
          Every patient receives a customized
          treatment experience in a calm,
          premium and stress-free environment.
        </p>

      </div>

    </div>

  </div>
  
  

</section>
{/*==========================================
        MESSAGE FROM DIRECTOR
===========================================*/}

<section className="director-section">

  <div className="container director-container">

    {/* LEFT IMAGE */}

    <div className="director-image">

      {/* Replace with Dr. Fida Image */}

      <img
        src={directorImage}
        alt="Dr. Fida"
      />

      <div className="director-badge">

        Director & Invisalign Provider

      </div>

    </div>

    {/* RIGHT CONTENT */}

    <div className="director-content">

      <span className="section-tag">

        FROM THE DIRECTOR'S DESK

      </span>

      <h2>

        Message
        <br />
        <span>from the Director</span>

      </h2>

      <p>

        At F&H Aligners & Implant Dental Clinic, we believe exceptional
        dentistry is about more than treating teeth—it is about
        transforming confidence, enhancing quality of life, and delivering
        an experience that reflects the highest standards of care.

      </p>

      <p>

        Every patient who walks through our doors deserves honesty,
        comfort, precision and personalised attention. By combining
        advanced digital dentistry with evidence-based treatment and
        modern technology, our goal is to provide care that is predictable,
        minimally invasive and tailored to every individual.

      </p>

      <p>

        Whether you are seeking Clear Aligners, Dental Implants,
        Smile Designing, Oral & Maxillofacial Surgery or premium
        Zirconia restorations, our commitment remains the same —
        delivering excellence with compassion.

      </p>

      <div className="director-sign">

        <h3>

          Dr. Fida, M.D.S.

        </h3>

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

          <FaArrowRight/>

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
{/* ==========================================
        DENTAL TREATMENTS
========================================== */}

{/*<section className="treatments-section">

<div className="container">

<div className="treatments-heading">

<span className="section-tag">

OUR TREATMENTS

</span>

<h2>

Dental Treatments

<span> We Offer</span>

</h2>

<p>

Our specialists frequently treat patients seeking dental implants,
clear aligners, wisdom tooth surgery and cosmetic smile corrections.
Every treatment is designed to be comfortable, precise and completely
personalized.

</p>

</div>

<div className="treatments-grid">

<div className="treatment-card">

<div className="treatment-icon">

<FaSmile/>

</div>

<h3>Braces & Aligners</h3>

<p>

Straighten your teeth comfortably using modern braces
and clear aligners.

</p>

<button>

Learn More

<FaArrowRight/>

</button>

</div>

<div className="treatment-card active-treatment">

<div className="treatment-icon">

<FaTooth/>

</div>

<h3>Dental Implants</h3>

<p>

Permanent tooth replacement using advanced implant
technology.

</p>

<button>

Learn More

<FaArrowRight/>

</button>

</div>

<div className="treatment-card">

<div className="treatment-icon">

<FaMagic/>

</div>

<h3>Smile Makeover</h3>

<p>

Enhance your smile through veneers, whitening
and cosmetic dentistry.

</p>

<button>

Learn More

<FaArrowRight/>

</button>

</div>

<div className="treatment-card">

<div className="treatment-icon">

<FaTeeth/>

</div>

<h3>Teeth Whitening</h3>

<p>

Professional whitening treatments for a brighter
and confident smile.

</p>

<button>

Learn More

<FaArrowRight/>

</button>

</div>

<div className="treatment-card">

<div className="treatment-icon">

<FaClinicMedical/>

</div>

<h3>Laser Dentistry</h3>

<p>

Minimally invasive laser procedures with faster
healing and precision.

</p>

<button>

Learn More

<FaArrowRight/>

</button>

</div>

<div className="treatment-card">

<div className="treatment-icon">

<FaTooth/>

</div>

<h3>Dental Filling</h3>

<p>

Natural looking restorations using advanced
biomimetic materials.

</p>

<button>

Learn More

<FaArrowRight/>

</button>

</div>

</div>
<div className="treatments-footer">

  <Link
    to="/services"
    className="view-services"
  >

    View All Services

    <FaArrowRight />

  </Link>

</div>

</div>

</section>*/}

    {/* ===========================================
      REAL SMILE TRANSFORMATIONS
=========================================== */}

<section className="transform-section">

<div className="container transform-container">

<div className="transform-left">

<span className="section-tag">

REAL SMILE STORIES

</span>

<h2>

Real Smile

<span> Transformations</span>

</h2>

<p>

Smile transformations from patients treated with
clear aligners, smile makeover procedures,
dental implants and restorative dentistry.

Every smile is designed to restore confidence,
improve oral health and create natural aesthetics.

</p>

<div className="transform-list">

<div>

✔ Clear Aligners

</div>

<div>

✔ Smile Makeovers

</div>

<div>

✔ Dental Implants

</div>

<div>

✔ Cosmetic Dentistry

</div>

<div>

✔ Full Mouth Rehabilitation

</div>

</div>

<Link

to="/gallery"

className="transform-btn"

>

View More Cases

<FaArrowRight/>

</Link>

</div>



{/*==========================
        RIGHT
==========================*/}

{/*<div className="transform-right">

<div className="before-after-slider">

<img

src={beforeAfter1}

alt="Before After"

/>

<div className="slider-badge">

Before

</div>

<div className="slider-badge after">

After

</div>

</div>



<div className="slider-controls">

<button>

◀

</button>

<button>

▶

</button>

</div>*

</div>*/}

</div>

</section>

{/*=========================================
        TRUSTED DENTISTS
==========================================*/}

<section className="dentist-section">

<div className="container dentist-container">

<div className="dentist-left">

<span className="section-tag">
OUR DOCTORS
</span>

<h2>

Meet your Trusted
<br />

Dentists in
<br />

Jamshedpur

</h2>

<p>

If you are looking for a dentist in Jamshedpur, our clinic provides specialist care
for both routine and advanced dental treatments.

</p>

<Link
to="/doctor"
className="dentist-btn"
>

View All Doctors

<FaArrowRight/>

</Link>

</div>


<div className="dentist-right">

<img

src={doctor2}

alt="F&H Dental Doctors"

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
