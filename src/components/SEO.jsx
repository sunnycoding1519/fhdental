
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://fhalignersanddentalclinic.com";

const defaultSEO = {
  title: "Dentist in Jamshedpur | F&H Aligners & Implant Dental Clinic",
  description:
    "Looking for a dentist in Jamshedpur? F&H Aligners & Implant Dental Clinic in Bistupur offers dental implants, clear aligners, braces and personalized dental care.",
};

const pageSEO = {
  "/": {
    title: "Dentist in Jamshedpur | F&H Aligners & Implant Dental Clinic",
    description:
      "Visit F&H Aligners & Implant Dental Clinic in Bistupur, Jamshedpur for dental implants, clear aligners, braces and personalized dental care.",
  },

  "/about": {
    title: "About Our Dental Clinic in Jamshedpur | F&H Dental Clinic",
    description:
      "Learn about F&H Aligners & Implant Dental Clinic in Jamshedpur, our dental care approach, facilities and commitment to patient care.",
  },

  "/services": {
    title: "Dental Treatments & Services in Jamshedpur | F&H Dental Clinic",
    description:
      "Explore dental treatments at F&H Dental Clinic in Jamshedpur, including dental implants, aligners, braces, cosmetic dentistry and more.",
  },

  "/doctor": {
    title: "Meet Our Dentist | F&H Aligners & Implant Dental Clinic",
    description:
      "Meet the dental professional at F&H Aligners & Implant Dental Clinic in Jamshedpur. Learn about their qualifications and dental care approach.",
  },

  "/faq": {
    title: "Dental FAQs | F&H Aligners & Implant Dental Clinic",
    description:
      "Find answers to common questions about dental implants, clear aligners, braces, oral hygiene and dental treatments in Jamshedpur.",
  },

  "/contact": {
    title: "Contact Dentist in Bistupur, Jamshedpur | F&H Dental Clinic",
    description:
      "Contact F&H Aligners & Implant Dental Clinic in Bistupur, Jamshedpur to enquire about dental consultations and available treatments.",
  },

  "/blog": {
    title: "Dental Health Blog & Articles | F&H Dental Clinic Jamshedpur",
    description:
      "Read educational dental health articles about clear aligners, braces, dental implants and oral hygiene from F&H Dental Clinic.",
  },
};

const treatmentSEO = {
  "dental-implants-jamshedpur": {
    title: "Dental Implants in Jamshedpur | F&H Dental Clinic",
    description:
      "Learn about dental implant treatment options and consultations at F&H Aligners & Implant Dental Clinic in Jamshedpur.",
  },

  "clear-aligners-jamshedpur": {
    title: "Clear Aligners in Jamshedpur | F&H Dental Clinic",
    description:
      "Explore clear aligner treatment for teeth alignment at F&H Aligners & Implant Dental Clinic in Jamshedpur.",
  },

  "dental-braces-jamshedpur": {
    title: "Dental Braces in Jamshedpur | F&H Dental Clinic",
    description:
      "Explore dental braces and orthodontic treatment options at F&H Aligners & Implant Dental Clinic in Jamshedpur.",
  },

  "cosmetic-dentistry-jamshedpur": {
    title: "Cosmetic Dentistry in Jamshedpur | F&H Dental Clinic",
    description:
      "Discover cosmetic dental treatment options at F&H Aligners & Implant Dental Clinic in Bistupur, Jamshedpur.",
  },

  "smile-makeover-jamshedpur": {
    title: "Smile Makeover in Jamshedpur | F&H Dental Clinic",
    description:
      "Learn about smile makeover options and personalized cosmetic dental consultations at F&H Dental Clinic in Jamshedpur.",
  },

  "teeth-whitening-jamshedpur": {
    title: "Teeth Whitening in Jamshedpur | F&H Dental Clinic",
    description:
      "Explore professional teeth whitening options at F&H Aligners & Implant Dental Clinic in Jamshedpur.",
  },

  "root-canal-treatment-jamshedpur": {
    title: "Root Canal Treatment in Jamshedpur | F&H Dental Clinic",
    description:
      "Learn about root canal treatment and dental consultations at F&H Aligners & Implant Dental Clinic in Jamshedpur.",
  },
};

const blogSEO = {
  "clear-aligners-vs-braces": {
    title: "Clear Aligners vs Braces: Understanding the Difference",
    description:
      "Understand the differences between clear aligners and traditional braces, including treatment suitability and oral care.",
  },

  "dental-implant-consultation": {
    title: "What to Expect During a Dental Implant Consultation",
    description:
      "Learn what happens during a dental implant consultation, including dental examination, treatment planning and questions to ask.",
  },

  "oral-hygiene-basics": {
    title: "Essential Oral Hygiene Habits for Healthy Teeth",
    description:
      "Learn practical oral hygiene habits, including brushing, flossing and regular dental check-ups.",
  },
};

function updateMeta(attribute, key, content) {
  let element = document.head.querySelector(
    `meta[${attribute}="${key}"]`
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function updateCanonical(url) {
  let canonical = document.head.querySelector(
    'link[rel="canonical"]'
  );

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", url);
}

function SEO() {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.replace(/\/+$/, "") || "/";
    const segments = pathname.split("/").filter(Boolean);

    let seo = pageSEO[pathname];
    let isKnownPage = Boolean(seo);
    let pageType = "website";

    // Treatment pages
    if (!seo && segments[0] === "treatments" && segments[1]) {
      seo = treatmentSEO[segments[1]];
      isKnownPage = Boolean(seo);
    }

    // Blog article pages
    if (!seo && segments[0] === "blog" && segments[1]) {
      seo = blogSEO[segments[1]];
      isKnownPage = Boolean(seo);
      pageType = "article";
    }

    seo = seo || defaultSEO;

    const title = seo.title;
    const description = seo.description;
    const canonicalURL = `${SITE_URL}${pathname}`;

    // Update browser title
    document.title = title;

    // Update SEO metadata
    updateMeta("name", "description", description);

    updateMeta(
      "name",
      "robots",
      isKnownPage ? "index, follow" : "noindex, follow"
    );

    updateMeta(
      "name",
      "googlebot",
      isKnownPage ? "index, follow" : "noindex, follow"
    );

    // Update canonical URL
    updateCanonical(canonicalURL);

    // Update Open Graph metadata
    updateMeta("property", "og:title", title);
    updateMeta("property", "og:description", description);
    updateMeta("property", "og:url", canonicalURL);
    updateMeta("property", "og:type", pageType);
    updateMeta(
      "property",
      "og:site_name",
      "F&H Aligners & Implant Dental Clinic"
    );

    // Update Twitter metadata
    updateMeta("name", "twitter:card", "summary_large_image");
    updateMeta("name", "twitter:title", title);
    updateMeta("name", "twitter:description", description);

    // Google Analytics 4 SPA page tracking
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: `${pathname}${location.search}`,
        page_title: title,
        page_location: window.location.href,
      });
    }
  }, [location.pathname, location.search]);

  return null;
}

export default SEO;
