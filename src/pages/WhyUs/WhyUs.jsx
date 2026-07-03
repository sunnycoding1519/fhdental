import "./WhyUs.css";

import {
  FaUserMd,
  FaTeethOpen,
  FaAward,
  FaShieldAlt,
} from "react-icons/fa";

function WhyUs() {
  return (
    <section className="whyus" id="why">

      <div className="container">

        <div className="section-title">

          <span>WHY CHOOSE US</span>

          <h2>
            Excellence in Dental Care
          </h2>
            <div className="divider"></div>

          <p>
            At <b>F&H Aligners & Implant Dental Clinic</b>,
            we combine advanced technology, experienced dentists,
            and personalized care to create confident smiles.
          </p>

        </div>

        <div className="why-grid">

          <div className="why-card">

            <div className="icon">
              <FaTeethOpen />
            </div>

            <h3>Advanced Technology</h3>

            <p>
              Modern dental equipment with precise
              diagnosis and painless treatment.
            </p>

          </div>

          <div className="why-card">

            <div className="icon">
              <FaUserMd />
            </div>

            <h3>Expert Dentists</h3>

            <p>
              Highly experienced professionals
              delivering world-class dental care.
            </p>

          </div>

          <div className="why-card">

            <div className="icon">
              <FaAward />
            </div>

            <h3>Premium Experience</h3>

            <p>
              Comfortable environment with
              personalized treatment plans.
            </p>

          </div>

          <div className="why-card">

            <div className="icon">
              <FaShieldAlt />
            </div>

            <h3>Sterile Environment</h3>

            <p>
              International sterilization protocols
              ensuring complete patient safety.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyUs;