import "./Services.css";

import {
  FaArrowRight,
  FaTeeth,
  FaSmile,
  FaTooth,
  FaUserMd,
  FaRegGrinStars,
  FaMagic,
} from "react-icons/fa";

const services = [
  {
    icon: <FaSmile />,
    title: "Invisible Aligners",
    desc: "Straighten your teeth comfortably with clear aligners designed for a confident smile.",
  },
  {
    icon: <FaTooth />,
    title: "Dental Implants",
    desc: "Permanent and natural-looking tooth replacement with advanced implant technology.",
  },
  {
    icon: <FaRegGrinStars />,
    title: "Smile Makeover",
    desc: "Transform your smile with customized cosmetic dentistry solutions.",
  },
  {
    icon: <FaTeeth />,
    title: "Root Canal",
    desc: "Pain-free root canal treatment using modern equipment and advanced techniques.",
  },
  {
    icon: <FaMagic />,
    title: "Teeth Whitening",
    desc: "Professional whitening treatment for a brighter and healthier smile.",
  },
  {
    icon: <FaUserMd />,
    title: "General Dentistry",
    desc: "Complete dental care for your entire family with expert consultation.",
  },
];

function Services() {
  return (
    <section className="services" id="services">

      <div className="container">

        <div className="section-title">

          <span>OUR SERVICES</span>

          <h2>
            Complete Dental Care
          </h2>

          <p>
            We provide modern dental treatments with
            advanced technology and personalized care
            for every patient.
          </p>

        </div>

        <div className="services-grid">

          {services.map((item, index) => (

            <div className="service-card" key={index}>

              <div className="service-icon">

                {item.icon}

              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

              <button>

                Read More

                <FaArrowRight />

              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;