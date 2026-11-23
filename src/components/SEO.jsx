
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://fhalignersanddentalclinic.com";

const defaultSEO = {
  title:
    "Best Dental Clinic in Jamshedpur | F&H Aligners & Implant Dental Clinic",
  description:
    "Looking for a dentist in Jamshedpur? Visit F&H Aligners & Implant Dental Clinic in Bistupur for dental implants, clear aligners, braces, cosmetic dentistry and personalized dental care.",
};

const pageSEO = {
  "/": {
    title:
      "Best Dental Clinic in Jamshedpur | F&H Aligners & Implant Dental Clinic",
    description:
      "Looking for a dentist in Jamshedpur? Visit F&H Aligners & Implant Dental Clinic in Bistupur for dental implants, clear aligners, braces, cosmetic dentistry, teeth whitening and comprehensive dental care.",
  },

  "/about": {
    title: "About Our Dental Clinic in Jamshedpur | F&H Dental Clinic",
    description:
      "Learn about F&H Aligners & Implant Dental Clinic in Bistupur, Jamshedpur, our dental care approach, facilities and commitment to personalized patient care.",
  },

  "/services": {
    title: "Dental Treatments & Services in Jamshedpur | F&H Dental Clinic",
    description:
      "Explore dental treatments at F&H Aligners & Implant Dental Clinic in Bistupur, Jamshedpur, including dental implants, permanent tooth replacement, clear aligners, braces, veneers, teeth whitening and comfort-focused dental care.",
  },

  "/doctor": {
    title: "Meet Our Dental Specialists in Jamshedpur | F&H Dental Clinic",
    description:
      "Meet Dr. Hazra, Implantologist, and Dr. Fida, Invisalign Provider & Cosmetic Dentistry specialist at F&H Aligners & Implant Dental Clinic in Jamshedpur.",
  },

  "/faq": {
    title: "Dental FAQs | F&H Aligners & Implant Dental Clinic",
    description:
      "Find answers about dental implants, permanent tooth replacement, clear aligners, veneers, teeth whitening, painless dentistry options and other dental treatments in Jamshedpur.",
  },

  "/contact": {
    title: "Contact Dentist in Bistupur, Jamshedpur | F&H Dental Clinic",
    description:
      "Contact F&H Aligners & Implant Dental Clinic in Bistupur, Jamshedpur to enquire about dental consultations, teeth replacement and available treatments.",
  },
};

const treatmentSEO = {
  "dental-implants-jamshedpur": {
    title: "Dental Implants & Permanent Tooth Replacement in Jamshedpur | F&H Dental Clinic",
    description:
      "Explore permanent tooth replacement options, including dental implants, at F&H Aligners & Implant Dental Clinic in Bistupur, Jamshedpur. Enquire about a consultation.",
  },

  "clear-aligners-jamshedpur": {
    title: "Clear Aligners in Jamshedpur | F&H Dental Clinic",
    description:
      "Learn about clear aligner and Invisalign treatment at F&H Aligners & Implant Dental Clinic in Bistupur, Jamshedpur. Enquire about teeth alignment consultations.",
  },

  "dental-braces-jamshedpur": {
    title: "Dental Braces in Jamshedpur | F&H Dental Clinic",
    description:
      "Explore dental braces and orthodontic consultation options at F&H Aligners & Implant Dental Clinic in Jamshedpur.",
  },

  "cosmetic-dentistry-jamshedpur": {
    title: "Cosmetic Dentistry in Jamshedpur | F&H Dental Clinic",
    description:
      "Explore cosmetic dentistry, smile designing and personalized smile enhancement options at F&H Aligners & Implant Dental Clinic in Bistupur, Jamshedpur.",
  },

  "dental-veneers-jamshedpur": {
    title: "Dental Veneers in Jamshedpur | F&H Dental Clinic",
    description:
      "Explore dental veneers in Jamshedpur at F&H Aligners & Implant Dental Clinic in Bistupur. Learn about veneer options for improving the appearance of your smile.",
  },

  "smile-makeover-jamshedpur": {
    title: "Smile Makeover in Jamshedpur | F&H Dental Clinic",
    description:
      "Discover personalized smile makeover and smile designing options at F&H Aligners & Implant Dental Clinic in Jamshedpur. Enquire about a consultation.",
  },

  "teeth-whitening-jamshedpur": {
    title: "Teeth Whitening in Jamshedpur | F&H Dental Clinic",
    description:
      "Learn about professional teeth whitening options at F&H Aligners & Implant Dental Clinic in Bistupur, Jamshedpur.",
  },

  "root-canal-treatment-jamshedpur": {
    title: "Root Canal Treatment in Jamshedpur | F&H Dental Clinic",
    description:
      "Learn about root canal treatment and comfort-focused dental care at F&H Aligners & Implant Dental Clinic in Bistupur, Jamshedpur. Enquire about a dental examination and consultation.",
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
    const pathname =
      location.pathname.replace(/\/+$/, "") || "/";

    const segments = pathname.split("/").filter(Boolean);

    let seo = pageSEO[pathname];
    let isKnownPage = Boolean(seo);

    // Treatment pages
    if (!seo && segments[0] === "treatments" && segments[1]) {
      seo = treatmentSEO[segments[1]];
      isKnownPage = Boolean(seo);
    }

    seo = seo || defaultSEO;

    const title = seo.title;
    const description = seo.description;
    const canonicalURL = `${SITE_URL}${pathname}`;

    // Browser title
    document.title = title;

    // Basic SEO metadata
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

    // Canonical URL
    updateCanonical(canonicalURL);

    // Open Graph metadata
    updateMeta("property", "og:title", title);
    updateMeta("property", "og:description", description);
    updateMeta("property", "og:url", canonicalURL);
    updateMeta("property", "og:type", "website");

    updateMeta(
      "property",
      "og:site_name",
      "F&H Aligners & Implant Dental Clinic"
    );

    // Keep this image only if public/og-image.jpg exists.
    updateMeta(
      "property",
      "og:image",
      `${SITE_URL}/og-image.jpg`
    );

    // Twitter metadata
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
