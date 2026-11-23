
import React, { useState } from "react";
import "./Contact.css";

import heroImage from "../../assets/images/gallery/fh-reception-branding.png";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaCheckCircle,
  FaTimes,
  FaArrowRight,
  FaTooth
} from "react-icons/fa";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [treatment, setTreatment] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    const data = {
      name,
      phone,
      email,
      treatment,
      message
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxgw56ZdOxI31lKKWzsa-xmO6vaLQMmvIxlr7WZla5mCOe-UWXdCTCelO_Iaj4dYvxz/exec",
        {
          method: "POST",
          body: JSON.stringify(data)
        }
      );

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setShowPopup(true);

      setName("");
      setEmail("");
      setPhone("");
      setTreatment("");
      setMessage("");

    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* =====================================
              CINEMATIC CONTACT HERO
      ====================================== */}
{/* =====================================
        PREMIUM CONTACT HERO
====================================== */}

<section
  className="contact-hero"
  style={{ backgroundImage: `url(${heroImage})` }}
  aria-labelledby="contact-hero-heading"
>
  <div className="contact-hero-overlay"></div>
  <div className="contact-hero-glow"></div>

  <div className="contact-hero-content">
    <span className="contact-eyebrow">
      A BRANCH OF HAZRA DENTAL WELLNESS
    </span>

    <h1 id="contact-hero-heading">
      Let's Begin Your
      <br />
      <span>Smile Journey.</span>
    </h1>

    <p>
      Thoughtful dental care starts with a conversation.
      Connect with our team to discuss your dental needs.
    </p>

    <div className="contact-breadcrumb">
      <span>Home</span>
      <FaArrowRight />
      <strong>Contact Us</strong>
    </div>
  </div>

  <div className="contact-hero-bottom">
    <span>F&H ALIGNERS & IMPLANT DENTAL CLINIC</span>
    <span>JAMSHEDPUR, INDIA</span>
  </div>
</section>


      {/* =====================================
                CONTACT SECTION
      ====================================== */}

      <section className="contact-section" id="contact">

        <div className="container">

          <div className="contact-heading">
            <span className="contact-section-label">
              WE ARE HERE FOR YOU
            </span>

            <h2>
              Your Next Step
              <br />
              <span>Starts Here.</span>
            </h2>

            <p>
              Have a question or considering a dental treatment?
              Send us an enquiry and our team will get in touch.
            </p>
          </div>


          <div className="contact-main-grid">

            {/* LEFT: CLINIC INFORMATION */}

            <div className="contact-details-column">

              <div className="contact-intro-card">
                <div className="contact-intro-icon">
                  <FaTooth />
                </div>

                <span>CONNECT WITH F&H</span>

                <h3>
                  A little conversation
                  can make a difference.
                </h3>

                <p>
                  Our team is available to help you with appointment
                  enquiries and information about our dental services.
                </p>
              </div>


              <div className="contact-glass-info">

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <span>VISIT OUR CLINIC</span>
                    <h4>Our Location</h4>

                    <p>
                      Chowdhary Rd, Ram Das Bhatta,
                      Bistupur, Jamshedpur,
                      Jharkhand 831001, India
                    </p>

                    <a
                      href="https://www.google.com/maps?q=22.7963062,86.1790605"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions <FaArrowRight />
                    </a>
                  </div>
                </div>

                <div className="contact-info-divider"></div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <span>CALL US</span>
                    <h4>Speak With Our Team</h4>

                    <a href="tel:+919122266733">
                      +91 91222 66733
                    </a>
                  </div>
                </div>

                <div className="contact-info-divider"></div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <FaEnvelope />
                  </div>

                  <div>
                    <span>EMAIL US</span>
                    <h4>Send an Enquiry</h4>

                    <a href="mailto:info@fhdentalclinic.com">
                      info@fhdentalclinic.com
                    </a>
                  </div>
                </div>

                <div className="contact-info-divider"></div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <FaClock />
                  </div>

                  <div>
                    <span>CLINIC SCHEDULE</span>
                    <h4>Opening Information</h4>

                    <p>
                      Monday – Wednesday: 10 AM – 8 PM
                    </p>

                    <p>
                      Friday – Saturday: 10 AM – 8 PM
                    </p>

                    <div className="contact-closed-status">
                      <span className="closed-dot"></span>
                      Thursday — CLOSED
                    </div>

                    <p className="contact-hours-note">
                      Please contact our team for appointment
                      availability on other days.
                    </p>
                  </div>
                </div>

              </div>

            </div>


            {/* RIGHT: GLASSMORPHIC APPOINTMENT FORM */}

            <div className="contact-form-panel">

              <div className="contact-form-heading">
                <span>APPOINTMENT ENQUIRY</span>

                <h3>
                  Tell Us How
                  <br />
                  We Can Help.
                </h3>

                <p>
                  Fill in the details below and our team
                  will get back to you.
                </p>
              </div>

              <form onSubmit={submitForm}>

                <div className="contact-form-grid">

                  <div className="contact-input-group">
                    <label htmlFor="contact-name">
                      Full Name *
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      autoComplete="name"
                      required
                    />
                  </div>


                  <div className="contact-input-group">
                    <label htmlFor="contact-phone">
                      Phone Number *
                    </label>

                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      autoComplete="tel"
                      required
                    />
                  </div>


                  <div className="contact-input-group full-width">
                    <label htmlFor="contact-email">
                      Email Address
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      placeholder="Enter your email address (optional)"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="email"
                    />
                  </div>


                  <div className="contact-input-group full-width">
                    <label htmlFor="contact-treatment">
                      Treatment of Interest *
                    </label>

                    <select
                      id="contact-treatment"
                      value={treatment}
                      onChange={(e) => setTreatment(e.target.value)}
                      required
                    >
                      <option value="" disabled>
                        Select a treatment
                      </option>

                      <option value="Aligners">
                        Clear Aligners / Invisalign
                      </option>

                      <option value="Implants">
                        Dental Implants
                      </option>

                      <option value="General Checkup">
                        General Dental Checkup
                      </option>

                      <option value="Cosmetic Dentistry">
                        Cosmetic Dentistry
                      </option>

                      <option value="Other">
                        Other Treatment
                      </option>
                    </select>
                  </div>


                  <div className="contact-input-group full-width">
                    <label htmlFor="contact-message">
                      Your Message *
                    </label>

                    <textarea
                      id="contact-message"
                      rows="4"
                      placeholder="Tell us a little about your dental concerns..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>

                </div>


                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="contact-submit-btn"
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Sending Enquiry...
                    </>
                  ) : (
                    <>
                      Request an Appointment
                      <FaArrowRight />
                    </>
                  )}
                </button>

                <p className="contact-form-note">
                  Our team will contact you regarding your enquiry.
                </p>

              </form>

            </div>

          </div>


          {/* =====================================
                    GOOGLE MAP
          ====================================== */}

          <div className="contact-map-section">

            <div className="contact-map-heading">
              <span>FIND US</span>
              <h3>Visit Our Clinic.</h3>
            </div>

            <div className="contact-map-box">
              <iframe
                title="F&H Aligners and Implant Dental Clinic Location"
                src="https://www.google.com/maps?q=22.7963062,86.1790605&output=embed"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================
                  SUCCESS POPUP
      ====================================== */}

      {showPopup && (
        <div className="contact-modal-backdrop">

          <div
            className="contact-success-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-success-title"
          >

            <button
              className="contact-close-modal"
              onClick={() => setShowPopup(false)}
              aria-label="Close success message"
            >
              <FaTimes />
            </button>

            <div className="contact-success-icon">
              <FaCheckCircle />
            </div>

            <span>THANK YOU FOR CONTACTING US</span>

            <h2 id="contact-success-title">
              Enquiry Received!
            </h2>

            <p>
              Your appointment request has been submitted.
              Our team will contact you shortly to discuss
              your enquiry.
            </p>

            <button
              className="contact-modal-confirm"
              onClick={() => setShowPopup(false)}
            >
              Continue <FaArrowRight />
            </button>

          </div>

        </div>
      )}

    </>
  );
}

export default Contact;
