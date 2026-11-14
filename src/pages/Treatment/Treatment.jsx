
import { Link, useParams, Navigate } from "react-router-dom";
import "./Treatment.css";

const treatments = {
  "dental-implants-jamshedpur": {
    title: "Dental Implants in Jamshedpur",
    subtitle: "Explore options for replacing missing teeth.",
    description:
      "Dental implants are one option for replacing missing teeth. They are designed to support replacement teeth and restore aspects of chewing and appearance. At F&H Aligners & Implant Dental Clinic, patients can enquire about dental implant consultations in Bistupur, Jamshedpur.",
    sections: [
      {
        heading: "What are dental implants?",
        text: "Dental implants are artificial tooth roots placed in the jawbone to support replacement teeth. The treatment process depends on individual oral health, bone condition and clinical assessment."
      },
      {
        heading: "Who may consider dental implants?",
        text: "People with one or more missing teeth may be candidates for dental implants. A dentist needs to examine the gums, jawbone and overall oral health before recommending treatment."
      },
      {
        heading: "What happens during a consultation?",
        text: "A dental implant consultation may include an oral examination, review of dental history and appropriate imaging. Your dentist can explain the available options, expected treatment stages and costs."
      },
      {
        heading: "Why is treatment planning important?",
        text: "Every patient's dental condition is different. Proper assessment helps determine whether implants are suitable and whether additional procedures may be required."
      }
    ]
  },

  "clear-aligners-jamshedpur": {
    title: "Clear Aligners in Jamshedpur",
    subtitle: "Learn about modern options for teeth alignment.",
    description:
      "Clear aligners are removable transparent trays designed to gradually move teeth. F&H Aligners & Implant Dental Clinic in Bistupur, Jamshedpur offers consultations to help patients understand teeth alignment options and treatment suitability.",
    sections: [
      {
        heading: "What are clear aligners?",
        text: "Clear aligners are custom-made transparent trays that apply controlled pressure to move teeth gradually. They are generally removable for eating, drinking and cleaning."
      },
      {
        heading: "Who can consider clear aligners?",
        text: "Clear aligners may be suitable for certain spacing, crowding and bite concerns. Suitability depends on the complexity of the case and should be assessed by a qualified dental professional."
      },
      {
        heading: "What is the treatment process?",
        text: "Treatment generally begins with a dental examination and assessment. Digital scans or other records may be used to plan tooth movements and prepare a series of aligners."
      },
      {
        heading: "How should aligners be maintained?",
        text: "Follow your dentist's instructions about daily wear, cleaning and storage. Regular follow-up appointments help monitor progress and make adjustments when necessary."
      }
    ]
  },

  "dental-braces-jamshedpur": {
    title: "Dental Braces in Jamshedpur",
    subtitle: "Understand orthodontic treatment for teeth alignment.",
    description:
      "Dental braces are orthodontic appliances used to correct different teeth alignment and bite concerns. Enquire about orthodontic consultation options at F&H Aligners & Implant Dental Clinic in Jamshedpur.",
    sections: [
      {
        heading: "What are dental braces?",
        text: "Dental braces use brackets, wires or other components to apply controlled forces that gradually move teeth into planned positions."
      },
      {
        heading: "What problems can braces address?",
        text: "Depending on the case, braces may help manage crowded teeth, gaps, certain bite problems and alignment concerns."
      },
      {
        heading: "How does braces treatment work?",
        text: "The process usually involves an orthodontic assessment, treatment planning, placement of the braces and regular adjustment appointments."
      },
      {
        heading: "How can you care for braces?",
        text: "Maintaining good oral hygiene is particularly important during orthodontic treatment. Follow brushing, cleaning and dietary instructions provided by your dental professional."
      }
    ]
  },

  "cosmetic-dentistry-jamshedpur": {
    title: "Cosmetic Dentistry in Jamshedpur",
    subtitle: "Explore dental treatments focused on smile appearance.",
    description:
      "Cosmetic dentistry includes dental procedures intended to improve the appearance of teeth and smiles. Explore consultation options at F&H Aligners & Implant Dental Clinic in Bistupur, Jamshedpur.",
    sections: [
      {
        heading: "What is cosmetic dentistry?",
        text: "Cosmetic dentistry focuses on aspects of dental appearance such as tooth colour, shape, spacing and overall smile aesthetics."
      },
      {
        heading: "Available cosmetic treatment options",
        text: "Depending on individual needs, options may include professional teeth whitening, veneers, bonding and other restorative or aesthetic procedures."
      },
      {
        heading: "Why is a dental consultation important?",
        text: "A consultation helps assess existing dental conditions, understand your expectations and identify suitable treatment options."
      },
      {
        heading: "Personalized treatment planning",
        text: "Cosmetic dental treatment should consider oral health, tooth structure, individual preferences and long-term maintenance."
      }
    ]
  },

  "smile-makeover-jamshedpur": {
    title: "Smile Makeover in Jamshedpur",
    subtitle: "Explore personalized options to improve your smile.",
    description:
      "A smile makeover may involve one or more cosmetic or restorative dental procedures planned according to individual dental needs. Enquire about smile makeover consultations at F&H Aligners & Implant Dental Clinic in Jamshedpur.",
    sections: [
      {
        heading: "What is a smile makeover?",
        text: "A smile makeover is a personalized approach that may combine different dental procedures to address concerns involving tooth appearance, shape, colour or alignment."
      },
      {
        heading: "Which treatments may be included?",
        text: "Depending on clinical assessment, treatment planning may involve teeth whitening, dental bonding, veneers, orthodontic treatment or restorative procedures."
      },
      {
        heading: "How is a smile makeover planned?",
        text: "Your dentist evaluates your teeth, gums and bite, discusses your expectations and explains the procedures that may be appropriate."
      },
      {
        heading: "Maintaining your results",
        text: "Regular dental check-ups and good oral hygiene are important for maintaining dental health after cosmetic or restorative procedures."
      }
    ]
  },

  "teeth-whitening-jamshedpur": {
    title: "Teeth Whitening in Jamshedpur",
    subtitle: "Learn about professional teeth whitening options.",
    description:
      "Professional teeth whitening is a dental procedure intended to reduce certain types of tooth discolouration. Contact F&H Aligners & Implant Dental Clinic in Bistupur, Jamshedpur to enquire about consultation options.",
    sections: [
      {
        heading: "What is professional teeth whitening?",
        text: "Teeth whitening uses approved whitening agents to lighten the colour of natural teeth. The suitability and expected results depend on the cause of discolouration and individual dental health."
      },
      {
        heading: "What causes tooth discolouration?",
        text: "Tooth colour can change due to ageing, food and drink stains, tobacco exposure, certain medicines and other dental conditions."
      },
      {
        heading: "Is teeth whitening suitable for everyone?",
        text: "Not everyone is a suitable candidate. A dental examination can help identify cavities, gum concerns, sensitivity and other conditions that should be considered before whitening."
      },
      {
        heading: "How can you maintain tooth colour?",
        text: "Good oral hygiene, regular dental cleaning and following professional advice may help manage surface stains."
      }
    ]
  },

  "root-canal-treatment-jamshedpur": {
    title: "Root Canal Treatment in Jamshedpur",
    subtitle: "Understand treatment for an infected or damaged tooth.",
    description:
      "Root canal treatment is used to treat problems affecting the pulp inside a tooth. Enquire about dental examination and treatment options at F&H Aligners & Implant Dental Clinic in Jamshedpur.",
    sections: [
      {
        heading: "What is root canal treatment?",
        text: "Root canal treatment involves removing infected or inflamed pulp from inside a tooth, cleaning and shaping the root canal system, and sealing it."
      },
      {
        heading: "When might root canal treatment be needed?",
        text: "Deep decay, cracks, dental injury or infection may affect the pulp. A dental examination and appropriate investigations help determine whether root canal treatment is required."
      },
      {
        heading: "What happens during the procedure?",
        text: "The procedure generally involves local anaesthesia, removal of affected pulp tissue, cleaning and sealing the canals. A suitable final restoration may also be recommended."
      },
      {
        heading: "Why should dental problems be assessed early?",
        text: "Tooth pain, swelling or sensitivity should be evaluated by a dentist. Early assessment can help identify the cause and appropriate treatment."
      }
    ]
  }
};

function Treatment() {
  const { slug } = useParams();

  const treatment = treatments[slug];

  if (!treatment) {
    return <Navigate to="/404" replace />;
  }

  return (
    <main className="treatment-page">
      <section className="treatment-hero">
        <div className="treatment-container">
          <div className="treatment-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/services">Services</Link>
            <span>/</span>
            <span>{treatment.title}</span>
          </div>

          <h1>{treatment.title}</h1>

          <p className="treatment-subtitle">
            {treatment.subtitle}
          </p>

          <p className="treatment-intro">
            {treatment.description}
          </p>

          <a
            href="tel:+919122266733"
            className="treatment-cta"
          >
            Enquire Now
          </a>
        </div>
      </section>

      <section className="treatment-content">
        <div className="treatment-container">
          <h2>
            Understanding {treatment.title.replace(" in Jamshedpur", "")}
          </h2>

          {treatment.sections.map((section, index) => (
            <article
              className="treatment-section"
              key={section.heading}
            >
              <h3>{section.heading}</h3>
              <p>{section.text}</p>
            </article>
          ))}

          <div className="treatment-contact">
            <h2>Looking for Dental Care in Jamshedpur?</h2>

            <p>
              Contact F&amp;H Aligners &amp; Implant Dental Clinic
              in Bistupur, Jamshedpur to enquire about a dental
              consultation.
            </p>

            <a href="tel:+919122266733">
              Call +91 91222 66733
            </a>

            <Link to="/contact">
              Visit Contact Page
            </Link>
          </div>

          <p className="treatment-disclaimer">
            The information on this page is for general
            educational purposes only. Treatment suitability,
            procedures and outcomes vary between individuals.
            Consult a qualified dental professional for advice
            about your dental condition.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Treatment;
