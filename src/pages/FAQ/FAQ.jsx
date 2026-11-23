
import { useState } from "react";
import {
  FaPlus,
  FaMinus,
  FaArrowRight
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./FAQ.css";

const faqData = [
  {
    question: "What are Invisible Aligners?",
    answer:
      "Invisible aligners are clear, removable orthodontic trays designed to gradually straighten teeth. They offer a discreet alternative to traditional metal braces and can be removed while eating, drinking and brushing."
  },
  {
    question: "What is Invisalign treatment?",
    answer:
      "Invisalign is an advanced clear aligner treatment that uses a series of custom-made transparent trays to gradually move teeth into their desired positions. Your dentist will assess your teeth and create a personalized treatment plan."
  },
  {
    question: "Am I suitable for Clear Aligner treatment?",
    answer:
      "Clear aligners can help treat several orthodontic concerns, including crowded teeth, gaps and certain bite problems. Suitability depends on your individual dental condition and should be determined through a professional consultation."
  },
  {
    question: "Are Dental Implants a Permanent Tooth Replacement option?",
    answer:
      "Dental implants are a long-term option for permanent tooth replacement. They are designed to replace missing teeth and support natural-looking replacement teeth. Their longevity depends on individual oral health, proper placement, regular dental checkups and good oral hygiene."
  },
  {
    question: "Is Dental Implant treatment painful?",
    answer:
      "Dental implant procedures are generally performed under local anesthesia to help keep patients comfortable. Some soreness or swelling may occur after treatment, which can usually be managed with appropriate aftercare and medication prescribed by your dentist."
  },
  {
    question: "What is Painless Dentistry?",
    answer:
      "Painless dentistry generally refers to dental care focused on patient comfort, appropriate anesthesia and techniques that help reduce discomfort during treatment. At F&H Aligners & Implant Dental Clinic in Bistupur, Jamshedpur, treatment options and pain-management approaches are discussed according to each patient's needs."
  },
  {
    question: "Is Root Canal Treatment painful?",
    answer:
      "Modern root canal treatment is performed using local anesthesia and dental techniques designed to keep patients comfortable. The procedure helps treat infection or inflammation inside a tooth and can relieve the pain associated with these conditions."
  },
  {
    question: "Do you provide Dental Veneers in Jamshedpur?",
    answer:
      "Dental veneers are thin coverings placed on the front surfaces of teeth to improve their appearance. They may help address concerns such as discoloration, minor chips and certain shape or spacing issues. A dental consultation is necessary to determine whether veneers are suitable for your teeth."
  },
  {
    question: "How long does professional Teeth Whitening last?",
    answer:
      "Professional teeth whitening results vary from person to person. They depend on eating habits, lifestyle choices and oral hygiene. Regular dental care and limiting staining foods and drinks can help maintain your results."
  },
  {
    question: "Do you provide Smile Makeover treatments?",
    answer:
      "Smile makeover treatments can include cosmetic procedures such as teeth whitening, veneers, clear aligners and other treatments selected according to your smile goals and dental requirements."
  },
  {
    question: "How can I book a dental appointment?",
    answer:
      "You can book an appointment by contacting F&H Aligners & Implant Dental Clinic through the Contact page or by calling +91 9122266733. We recommend scheduling your visit in advance."
  },
  {
    question: "Where is F&H Aligners & Implant Dental Clinic located?",
    answer:
      "F&H Aligners & Implant Dental Clinic is located in Bistupur, Jamshedpur, Jharkhand. You can visit our Contact page for the clinic's location on Google Maps and directions."
  }
];

function FAQ() {
  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive((current) => current === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">

        {/* FAQ HEADER */}
        <div className="section-title">
          <span>HAVE QUESTIONS?</span>

          <h1>Frequently Asked Questions</h1>

          <p>
            Find answers to common questions about Invisalign,
            clear aligners, dental implants, permanent tooth
            replacement, dental veneers, teeth whitening and
            painless dentistry options at F&H Aligners & Implant
            Dental Clinic in Bistupur, Jamshedpur.
          </p>
        </div>

        {/* FAQ ACCORDION */}
        <div className="faq-container">
          {faqData.map((item, index) => {
            const isOpen = active === index;

            return (
              <div
                className={`faq-item ${isOpen ? "active" : ""}`}
                key={item.question}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span>{item.question}</span>

                  <span className="faq-icon" aria-hidden="true">
                    {isOpen ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>

                <div
                  className="faq-answer"
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  hidden={!isOpen}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ CONTACT CTA */}
        <div className="faq-cta">
          <div className="faq-cta-content">
            <h2>Still Have Questions?</h2>

            <p>
              Our dental team is here to help you understand
              your treatment options and take the next step
              towards a healthier smile.
            </p>
          </div>

          <Link to="/contact" className="faq-cta-btn">
            Book a Consultation
            <FaArrowRight />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default FAQ;
