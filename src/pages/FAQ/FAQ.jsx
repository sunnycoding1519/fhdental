import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./FAQ.css";

const faqData = [
  {
    question: "What are Invisible Aligners?",
    answer:
      "Invisible aligners are clear, removable orthodontic trays used to straighten teeth comfortably without traditional metal braces."
  },
  {
    question: "Are Dental Implants Permanent?",
    answer:
      "Yes. Dental implants are a long-term solution for replacing missing teeth and can last many years with proper care."
  },
  {
    question: "Is Root Canal Treatment Painful?",
    answer:
      "No. With modern anesthesia and advanced equipment, root canal treatment is usually painless and comfortable."
  },
  {
    question: "How long does Teeth Whitening last?",
    answer:
      "Professional teeth whitening typically lasts between 1 to 3 years depending on oral hygiene and lifestyle habits."
  },
  {
    question: "Do I need an appointment before visiting?",
    answer:
      "Yes. We recommend booking an appointment in advance to reduce waiting time and provide personalized consultation."
  },
  {
    question: "Do you provide Smile Makeover treatments?",
    answer:
      "Yes. We offer complete smile makeover treatments including veneers, whitening, aligners and cosmetic dentistry."
  }
];

function FAQ() {
  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">

      <div className="container">

        <div className="section-title">

          <span>FAQ</span>

          <h2>Frequently Asked Questions</h2>

          <p>
            Everything you need to know before visiting
            F&H Aligners & Implant Dental Clinic.
          </p>

        </div>

        <div className="faq-container">

          {faqData.map((item, index) => (

            <div
              className={`faq-item ${
                active === index ? "active" : ""
              }`}
              key={index}
            >

              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >

                {item.question}

                {active === index ? <FaMinus /> : <FaPlus />}

              </button>

              <div className="faq-answer">

                <p>{item.answer}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FAQ;