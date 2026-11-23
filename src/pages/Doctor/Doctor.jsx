
import { Link } from "react-router-dom";
import "./Doctor.css";

import heroImage from "../../assets/images/gallery/fh-reception-branding.png";
import doctor1 from "../../assets/images/doctor1.jpg";
import doctor2 from "../../assets/images/doctor2.jpg";
import drVasan from "../../assets/images/Dr. Vasan Orthodontist.jpg";
import drDutta from "../../assets/images/dr_dutta_.jpg";
import { FaAward, FaUserMd, FaTooth } from "react-icons/fa";

function Doctor() {
  return (
    <>
     {/* HERO SECTION */}
<section
  className="doctor-hero"
  style={{ backgroundImage: `url(${heroImage})` }}
>
  <div className="hero-overlay"></div>
  <div className="hero-fade-bottom"></div>

  <div className="hero-content">
    <h1>Our Specialists</h1>
    <p>Home &gt; Our Doctors</p>
  </div>
</section>

      {/* MAIN DOCTOR SECTION */}
      <section className="doctor-section" id="doctor">
        <div className="container">

          {/* SECTION HEADING */}
          <div className="section-title">
            <span>OUR SPECIALISTS</span>
            <h2>Meet Our Dental Specialists</h2>
            <p>
              Our team brings together different areas of dental
              expertise to provide comprehensive care, personalised
              treatment planning and solutions for individual
              oral health needs.
            </p>
          </div>

          {/* =================================
              DOCTOR 1 - DR. FIDA
          ================================= */}

          <div className="doctor-card reverse">

            <div className="doctor-image">
              <img src={doctor2} alt="Dr. Fida" />
              <div className="image-border-deco"></div>
            </div>

            <div className="doctor-content">

              <span className="doctor-tag">
                Invisalign Provider
              </span>

              <h2>Dr. Fida</h2>

              <h4>Invisalign Provider &amp; Cosmetic Dentistry</h4>

              <p>
                Dr. Fida focuses on Invisalign treatment and cosmetic
                dentistry, helping patients explore suitable options
                to improve dental alignment and smile aesthetics.
              </p>

              <p>
                Her approach centres on understanding each patient's
                smile goals, discussing appropriate treatment options
                and planning care with attention to dental health
                and aesthetics.
              </p>

              <div className="doctor-features">
                <div>
                  <FaUserMd />
                  <span>Invisalign Treatment</span>
                </div>

                <div>
                  <FaTooth />
                  <span>Cosmetic Dentistry</span>
                </div>

                <div>
                  <FaAward />
                  <span>Smile Aesthetics</span>
                </div>
              </div>

              <Link to="/contact" className="consult-btn">
                Book Consultation
              </Link>

            </div>
          </div>

          {/* =================================
              DOCTOR 2 - DR. HAZRA
          ================================= */}

          <div className="doctor-card">

            <div className="doctor-image">
              <img src={doctor1} alt="Dr. Adreet Hazra" />
              <div className="image-border-deco"></div>
            </div>

            <div className="doctor-content">

              <span className="doctor-tag">
                Implantologist
              </span>

              <h2>Dr. Hazra</h2>

              <h4>Implant Dentistry</h4>

              <p>
                Dr. Hazra is an implantologist focused on dental
                implant treatment and tooth replacement, with over
                <strong> 10 years of experience</strong> in dental
                implant surgical placement and restoration. He helps
                patients understand implant-based options for
                addressing missing teeth and restoring everyday
                oral function.
              </p>

              <p>
                Treatment recommendations are based on an individual
                dental assessment, oral health needs and the options
                appropriate to each patient's situation.
              </p>

              <div className="doctor-experience">
                <FaUserMd />
                <h3>10+ Years Experience</h3>
              </div>

              <div className="doctor-features">
                <div>
                  <FaTooth />
                  <span>Implant Specialist</span>
                </div>

                <div>
                  <FaAward />
                  <span>Advanced Procedures</span>
                </div>
              </div>

              <Link to="/contact" className="consult-btn">
                Book Consultation
              </Link>

            </div>
          </div>

          {/* =================================
              DOCTOR 3 - DR. VASAN
          ================================= */}

          <div className="doctor-card reverse">

            <div className="doctor-image">
  <img
    src={drVasan}
    alt="Dr. Vasan, Orthodontist"
    className="doctor-vasan-photo"
  />
  <div className="image-border-deco"></div>
</div>
            <div className="doctor-content">

              <span className="doctor-tag">
                Orthodontist
              </span>

              <h2>Dr. Vasan</h2>

              <h4>Our Orthodontist</h4>

              <p>
                Dr. Vasan specialises in orthodontics, focusing on
                the diagnosis and correction of misaligned teeth
                and bite irregularities. Orthodontic care helps
                improve dental alignment, bite function and the
                overall appearance of a patient's smile.
              </p>

              <p>
                Treatment planning considers each patient's dental
                condition and alignment needs, with suitable
                orthodontic options discussed to support healthier,
                well-aligned smiles.
              </p>

              <div className="doctor-features">
                <div>
                  <FaTooth />
                  <span>Teeth Alignment</span>
                </div>

                <div>
                  <FaAward />
                  <span>Bite Correction</span>
                </div>

                <div>
                  <FaUserMd />
                  <span>Orthodontic Care</span>
                </div>
              </div>

              <Link to="/contact" className="consult-btn">
                Book Consultation
              </Link>

            </div>
          </div>

          {/* =================================
              DOCTOR 4 - DR. DUTTA
          ================================= */}

          <div className="doctor-card">

            <div className="doctor-image">
  <img
    src={drDutta}
    alt="Dr. Dutta, Oral and Maxillofacial Surgeon"
    className="doctor-dutta-photo"
  />
  <div className="image-border-deco"></div>
</div>
            <div className="doctor-content">

              <span className="doctor-tag">
                Oral &amp; Maxillofacial Surgeon
              </span>

              <h2>Dr. Dutta</h2>

              <h4>Our Oral &amp; Maxillofacial Surgeon</h4>

              <p>
                Dr. Dutta specialises in Oral and Maxillofacial
                Surgery, a field concerned with the diagnosis and
                surgical management of conditions affecting the
                mouth, jaws, face and related structures.
              </p>

              <p>
                This specialty includes procedures such as
                impacted tooth removal, complex dental extractions
                and the surgical management of selected oral and
                jaw-related conditions. Treatment is planned
                according to each patient's clinical needs.
              </p>

              <div className="doctor-features">
                <div>
                  <FaTooth />
                  <span>Oral Surgery</span>
                </div>

                <div>
                  <FaAward />
                  <span>Jaw-related Procedures</span>
                </div>

                <div>
                  <FaUserMd />
                  <span>Surgical Consultation</span>
                </div>
              </div>

              <Link to="/contact" className="consult-btn">
                Book Consultation
              </Link>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Doctor;
