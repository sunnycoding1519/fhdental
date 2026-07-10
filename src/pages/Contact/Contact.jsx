import React, { useState } from "react";
import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaCheckCircle,
  FaTimes
} from "react-icons/fa";

function Contact() {
  // Form input states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [treatment, setTreatment] = useState("");
  const [message, setMessage] = useState("");

  // UX Feedback states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Form submission handler
  const submitForm = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = { name, phone, email, treatment, message };

    try {
      await fetch("https://script.google.com/macros/s/AKfycbxgw56ZdOxI31lKKWzsa-xmO6vaLQMmvIxlr7WZla5mCOe-UWXdCTCelO_Iaj4dYvxz/exec", {
        method: "POST",
        body: JSON.stringify(data)
      });

      // Show premium success modal
      setShowPopup(true);

      // Reset fields
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
      {/* --- HERO SECTION WITH WHITE FADE --- */}
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="hero-fade-bottom"></div>
        <div className="hero-content">
          <h1>Get In Touch</h1>
          <p>Home &gt; Contact Us</p>
        </div>
      </section>

      {/* --- MAIN CONTACT SECTION --- */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="section-title">
            <span>CONTACT US</span>
            <h2>Book Your Appointment</h2>
            <p>
              We'd love to hear from you. Contact us today and
              begin your journey towards a healthier, more confident smile.
            </p>
          </div>

          <div className="contact-wrapper">
            {/* Left Column: Premium Info Cards */}
            <div className="contact-info">
              <div className="info-card">
                <div className="icon-wrapper">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3>Clinic Address</h3>
                  <p>
                    F&H Aligners & Implant Dental Clinic
                    <br />
                    Jamshedpur, Jharkhand
                  </p>
                </div>
              </div>

              <div className="info-card">
                <div className="icon-wrapper">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h3>Phone</h3>
                  <p>+91 XXXXX XXXXX</p>
                </div>
              </div>

              <div className="info-card">
                <div className="icon-wrapper">
                  <FaEnvelope />
                </div>
                <div>
                  <h3>Email</h3>
                  <p>info@fhdentalclinic.com</p>
                </div>
              </div>

              <div className="info-card">
                <div className="icon-wrapper">
                  <FaClock />
                </div>
                <div>
                  <h3>Working Hours</h3>
                  <p>Mon - Sat : 10:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Submission Form */}
            <div className="contact-form">
              <form onSubmit={submitForm}>
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="input-group">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="input-group">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                <div className="input-group">
                  <select
                    value={treatment}
                    onChange={(e) => setTreatment(e.target.value)}
                    required
                    className={treatment ? "selected" : ""}
                  >
                    <option value="" disabled hidden>Select Treatment</option>
                    <option value="Aligners">Aligners</option>
                    <option value="Implants">Dental Implants</option>
                    <option value="Checkup">General Checkup</option>
                    <option value="Other">Other Treatment</option>
                  </select>
                </div>

                <div className="input-group">
                  <textarea
                    rows="5"
                    placeholder="Write Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>

                <button type="submit" disabled={isSubmitting} className="submit-btn">
                  {isSubmitting ? (
                    <span className="spinner"></span>
                  ) : (
                    "Book Appointment"
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Map Embed */}
          <div className="map-box">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Jamshedpur&output=embed"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* --- PREMIUM SUCCESS POPUP MODAL --- */}
      {showPopup && (
        <div className="modal-backdrop">
          <div className="success-modal">
            <button className="close-modal-btn" onClick={() => setShowPopup(false)}>
              <FaTimes />
            </button>
            <div className="success-icon-animation">
              <FaCheckCircle />
            </div>
            <h2>Submission Successful!</h2>
            <p>Your appointment request has been recorded. Our team will contact you shortly to confirm your schedule.</p>
            <button className="modal-confirm-btn" onClick={() => setShowPopup(false)}>
              Great, Thank You
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;