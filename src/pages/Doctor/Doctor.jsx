import "./Doctor.css";

import doctor1 from "../../assets/images/doctor1.jpg";
import doctor2 from "../../assets/images/doctor2.jpg";

import { FaAward, FaUserMd, FaTooth } from "react-icons/fa";

function Doctor() {
  return (
    <section className="doctor-section" id="doctor">

      <div className="container">

        <div className="section-title">

          <span>OUR DOCTORS</span>

          <h2>Meet Our Dental Specialists</h2>

          <p>
            Our experienced team is committed to delivering world-class dental
            care with advanced technology and personalized treatment.
          </p>

        </div>

        {/* Doctor 1 */}

        <div className="doctor-card">

          <div className="doctor-image">

            <img src={doctor1} alt="Dr. Adreet Hazra" />

          </div>

          <div className="doctor-content">

            <span className="doctor-tag">
              Implant & Periodontal Specialist
            </span>

            <h2>Dr. Adreet Hazra</h2>

            <h4>Periodontal & Implant Dentistry</h4>

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

            <div className="doctor-features">

              <div>

                <FaUserMd />

                <span>10+ Years Experience</span>

              </div>

              <div>

                <FaTooth />

                <span>Implant Specialist</span>

              </div>

              <div>

                <FaAward />

                <span>Advanced Procedures</span>

              </div>

            </div>

            <button>
              Book Consultation
            </button>

          </div>

        </div>

        {/* Doctor 2 */}

        <div className="doctor-card reverse">

          <div className="doctor-image">

            <img src={doctor2} alt="Dr. Fida" />

          </div>

          <div className="doctor-content">

            <span className="doctor-tag">
              Cosmetic & General Dentist
            </span>

            <h2>Dr. Fida</h2>

            <h4>General & Cosmetic Dentistry</h4>

            <p>
              Dr. Fida is renowned for delivering exceptional care in both
              general and cosmetic dentistry, combining oral health, function,
              and aesthetics.
            </p>

            <p>
              She specializes in teeth whitening, porcelain veneers, smile
              makeovers, restorative dentistry, preventive care, and
              personalized luxury dental experiences using modern technology.
            </p>

            <div className="doctor-features">

              <div>

                <FaUserMd />

                <span>Cosmetic Dentistry</span>

              </div>

              <div>

                <FaTooth />

                <span>Smile Makeovers</span>

              </div>

              <div>

                <FaAward />

                <span>Luxury Patient Care</span>

              </div>

            </div>

            <button>
              Book Consultation
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Doctor;