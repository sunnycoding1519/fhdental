import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaAward,
  FaSmile,
  FaUserMd,
  FaStar
} from "react-icons/fa";

import "./WhyUs.css";

import aboutHero from "../../assets/images/doctor2.jpg";
import storyImage from "../../assets/images/doctor1.jpg";

export default function WhyUs() {
  return (
    <>
      {/* =====================================
                  HERO SECTION
         ====================================== */}
      <section
        className="about-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),url(${aboutHero})`
        }}
      >
        <div className="about-overlay"></div>
        <div className="about-fade"></div>
        <div className="container">
          <div className="about-content">
            <span>ABOUT F&amp;H DENTAL CLINIC</span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              Precision.<br />Trust.<br />Beautiful Smiles.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              viewport={{ once: true }}
            >
              Experience advanced dentistry where modern technology,
              clinical excellence and compassionate care come together.
              From your first consultation to your final smile,
              every treatment is designed with precision,
              comfort and long-term oral health in mind.
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
            <img src={storyImage} alt="F&amp;H Dental" />
          </div>

          <div className="story-content">
            <span>OUR STORY</span>
            <h2>Two Experts.<br />One Vision.<br />Countless Confident Smiles.</h2>
            
            <p>
              At F&amp;H Aligners &amp; Implant Dental Clinic,
              we believe exceptional dentistry begins with trust.
              Every smile we create is backed by advanced technology,
              clinical precision and genuine patient care.
            </p>
            
            <p>
              Founded by dedicated specialists,
              our clinic combines modern dentistry with a personalised
              approach to deliver comfortable,
              ethical and long-lasting treatment.
              Whether it's a routine check-up,
              clear aligners or complex dental implants,
              your smile is always our priority.
            </p>

            <div className="story-stats">
              <div className="stat-box">
                <FaSmile />
                <h3>5000+</h3>
                <p>Happy Smiles</p>
              </div>

              <div className="stat-box">
                <FaUserMd />
                <h3>10+</h3>
                <p>Years Experience</p>
              </div>

              <div className="stat-box">
                <FaAward />
                <h3>100%</h3>
                <p>Patient First</p>
              </div>

              <div className="stat-box">
                <FaStar />
                <h3>4.9★</h3>
                <p>Google Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=========================================
            VISION & MISSION
==========================================*/}

<section className="vision-section">

<div className="container">

<div className="vision-heading">

<span>
OUR PURPOSE
</span>

<h2>
Built On Values,
Driven By Care.
</h2>

<p>
Everything we do is guided by ethical dentistry,
advanced technology and a genuine commitment
to improving every patient's smile and confidence.
</p>

</div>

<div className="vision-grid">

{/* Vision */}

<div className="vision-card">

<div className="vision-number">
01
</div>

<h3>
Our Vision
</h3>

<p>

To become one of Delhi's most trusted
dental destinations by delivering
modern, ethical and technology-driven
treatments that inspire confidence,
comfort and lifelong oral health.

</p>

</div>

{/* Mission */}

<div className="vision-card active-card">

<div className="vision-number">

02

</div>

<h3>

Our Mission

</h3>

<p>

To provide every patient with
personalized dental care using
advanced clinical techniques,
transparent treatment planning
and a compassionate approach
that puts people before procedures.

</p>

</div>

</div>

</div>

</section>
{/*=========================================
              CORE VALUES
==========================================*/}

<section className="values-section">

<div className="container">

<div className="values-heading">

<span>
OUR CORE VALUES
</span>

<h2>

What Defines
F&H Dental

</h2>

<p>

At F&H Aligners & Implant Dental Clinic,
our philosophy goes beyond treating teeth.
Every consultation, every procedure and every smile
is guided by values that place people first.

</p>

</div>

<div className="values-grid">

<div className="value-card">

<div className="value-icon">
🦷
</div>

<h3>

Personalized Care

</h3>

<p>

Every smile is unique. We create
custom treatment plans that fit your
oral health goals and lifestyle.

</p>

</div>


<div className="value-card active-value">

<div className="value-icon">
✨
</div>

<h3>

Modern Dentistry

</h3>

<p>

Digital technology and advanced
clinical techniques deliver precise,
comfortable and predictable outcomes.

</p>

</div>


<div className="value-card">

<div className="value-icon">
🤝
</div>

<h3>

Patient First

</h3>

<p>

We believe trust begins with listening.
Every recommendation is honest,
transparent and ethical.

</p>

</div>


<div className="value-card">

<div className="value-icon">
🏆
</div>

<h3>

Clinical Excellence

</h3>

<p>

Continuous learning, modern equipment
and specialist expertise ensure
the highest quality treatment.

</p>

</div>


<div className="value-card">

<div className="value-icon">
❤️
</div>

<h3>

Compassion

</h3>

<p>

Creating a relaxed, welcoming
environment where every patient
feels respected and cared for.

</p>

</div>


<div className="value-card">

<div className="value-icon">
⭐
</div>

<h3>

Lasting Results

</h3>

<p>

Our focus isn't just beautiful smiles—
it's healthy, functional smiles that
last for years.

</p>

</div>

</div>

</div>

</section>
{/*==========================================
        PATIENT TESTIMONIALS
===========================================*/}

<section className="testimonial-section">

<div className="container">

<div className="testimonial-heading">

<span>

PATIENT STORIES

</span>

<h2>

What Our
Patients Say

</h2>

<p>

Nothing speaks louder than the confidence of our patients.
Here are a few experiences shared by people who trusted
F&H Dental with their smiles.

</p>

</div>

</div>

<div className="testimonial-slider">

<div className="testimonial-track">

{/* Card 1 */}

<div className="testimonial-card">

<div className="stars">

★★★★★

</div>

<h3>

Professional Team

</h3>

<p>

The doctors explained every step clearly and
made my aligner treatment completely stress-free.
The results exceeded my expectations.

</p>

<h4>

— Riya Sharma

</h4>

</div>

{/* Card 2 */}

<div className="testimonial-card">

<div className="stars">

★★★★★

</div>

<h3>

Excellent Care

</h3>

<p>

The clinic is modern, clean and welcoming.
Every appointment felt comfortable and
professionally managed.

</p>

<h4>

— Aman Verma

</h4>

</div>

{/* Card 3 */}

<div className="testimonial-card">

<div className="stars">

★★★★★

</div>

<h3>

Highly Recommended

</h3>

<p>

I finally have the smile I always wanted.
The entire journey was smooth from consultation
to the final treatment.

</p>

<h4>

— Priyanka Singh

</h4>

</div>

{/* Card 4 */}

<div className="testimonial-card">

<div className="stars">

★★★★★

</div>

<h3>

Wonderful Experience

</h3>

<p>

The doctors genuinely care about patients.
Everything was explained patiently and
the treatment was painless.

</p>

<h4>

— Rahul Mehta

</h4>

</div>

{/* Duplicate Cards for Infinite Loop */}

<div className="testimonial-card">

<div className="stars">

★★★★★

</div>

<h3>

Professional Team

</h3>

<p>

The doctors explained every step clearly and
made my aligner treatment completely stress-free.
The results exceeded my expectations.

</p>

<h4>

— Riya Sharma

</h4>

</div>

<div className="testimonial-card">

<div className="stars">

★★★★★

</div>

<h3>

Excellent Care

</h3>

<p>

The clinic is modern, clean and welcoming.
Every appointment felt comfortable and
professionally managed.

</p>

<h4>

— Aman Verma

</h4>

</div>

<div className="testimonial-card">

<div className="stars">

★★★★★

</div>

<h3>

Highly Recommended

</h3>

<p>

I finally have the smile I always wanted.
The entire journey was smooth from consultation
to the final treatment.

</p>

<h4>

— Priyanka Singh

</h4>

</div>

<div className="testimonial-card">

<div className="stars">

★★★★★

</div>

<h3>

Wonderful Experience

</h3>

<p>

The doctors genuinely care about patients.
Everything was explained patiently and
the treatment was painless.

</p>

<h4>

— Rahul Mehta

</h4>

</div>

</div>

</div>

</section>
{/*==========================================
            PREMIUM CTA
===========================================*/}

<section className="about-cta">

<div className="container">

<div className="about-cta-box">

<div className="about-cta-content">

<span>

READY TO SMILE WITH CONFIDENCE?

</span>

<h2>

Your Journey To A
Healthier Smile
Starts Here.

</h2>

<p>

Whether you're considering clear aligners, dental implants,
cosmetic dentistry or simply looking for a trusted family dentist,
our specialists are here to provide personalised care with
modern technology and exceptional attention to detail.

</p>

<div className="about-cta-buttons">

<Link
to="/contact"
className="about-primary-btn"
>

Book Appointment

<FaArrowRight/>

</Link>

<a
href="tel:+917355095660"
className="about-secondary-btn"
>

Call Now

</a>

</div>

</div>

<div className="about-cta-info">

<div className="cta-info-card">

<h3>

F&H Aligners & Implant
Dental Clinic

</h3>

<p>

📍 Jamshedpur, Jharkhand

</p>

<p>

📞 +91 73550 95660

</p>

<p>

🕘 Mon – Sat | 10 AM – 8 PM

</p>

<p>

✨ Advanced Dentistry
with Personalized Care

</p>

</div>

</div>

</div>

</div>

</section>
    </>
  );
}