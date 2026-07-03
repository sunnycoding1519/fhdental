import "./Contact.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

function Contact() {
  return (
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

          {/* Left */}

          <div className="contact-info">

            <div className="info-card">

              <FaMapMarkerAlt />

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

              <FaPhoneAlt />

              <div>

                <h3>Phone</h3>

                <p>+91 XXXXX XXXXX</p>

              </div>

            </div>

            <div className="info-card">

              <FaEnvelope />

              <div>

                <h3>Email</h3>

                <p>info@fhdentalclinic.com</p>

              </div>

            </div>

            <div className="info-card">

              <FaClock />

              <div>

                <h3>Working Hours</h3>

                <p>
                  Mon - Sat : 10:00 AM - 8:00 PM
                </p>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="contact-form">

            <form>

              <input
                type="text"
                placeholder="Your Name"
              />

              <input
                type="email"
                placeholder="Email Address"
              />

              <input
                type="tel"
                placeholder="Phone Number"
              />

              <textarea
                rows="6"
                placeholder="Write Your Message"
              ></textarea>

              <button type="submit">
                Book Appointment
              </button>

            </form>

          </div>

        </div>

        {/* Google Map */}

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
  );
}

export default Contact;