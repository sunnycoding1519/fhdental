
import { useEffect, useState } from "react";
import "./ClinicGallery.css";

import treatment1 from "../../assets/images/gallery/clinic-treatment-room-01.png";
import treatment2 from "../../assets/images/gallery/clinic-treatment-room-02.png";
import treatment3 from "../../assets/images/gallery/clinic-treatment-room-03.png";
import treatment4 from "../../assets/images/gallery/clinic-treatment-room-04.png";

import reception from "../../assets/images/gallery/fh-clinic-reception.png";
import branding from "../../assets/images/gallery/fh-reception-branding.png";
import brandingExisting from "../../assets/images/gallery/fh-reception-branding-existing.png";
import lounge from "../../assets/images/gallery/fh-clinic-waiting-lounge.png";

/* =========================================
   GALLERY IMAGES
========================================= */

const galleryImages = [
  {
    src: reception,
    title: "Welcome to F&H",
    category: "Our Clinic",
  },
  {
    src: lounge,
    title: "Comfortable Waiting Lounge",
    category: "Our Space",
  },
  {
    src: treatment1,
    title: "Modern Dental Treatment Room",
    category: "Our Facilities",
  },
  {
    src: branding,
    title: "The F&H Experience",
    category: "Our Clinic",
  },
  {
    src: treatment2,
    title: "Advanced Dental Setup",
    category: "Our Facilities",
  },
  {
    src: treatment3,
    title: "Patient Care Environment",
    category: "Our Facilities",
  },
  {
    src: treatment4,
    title: "Modern Dental Equipment",
    category: "Our Facilities",
  },
  {
    src: brandingExisting,
    title: "F&H Clinic",
    category: "Our Clinic",
  },
];

function ClinicGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  /* =========================================
     SELECTED IMAGE INDEX
  ========================================= */

  const currentIndex = selectedImage
    ? galleryImages.findIndex(
        (item) => item.src === selectedImage.src
      )
    : -1;

  /* =========================================
     BODY SCROLL LOCK
  ========================================= */

  useEffect(() => {
    if (!selectedImage) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedImage]);

  /* =========================================
     CLOSE WITH ESCAPE
     NAVIGATE WITH ARROW KEYS
  ========================================= */

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }

      if (event.key === "ArrowLeft") {
        setSelectedImage((current) => {
          if (!current) return null;

          const index = galleryImages.findIndex(
            (item) => item.src === current.src
          );

          const previousIndex =
            (index - 1 + galleryImages.length) %
            galleryImages.length;

          return galleryImages[previousIndex];
        });
      }

      if (event.key === "ArrowRight") {
        setSelectedImage((current) => {
          if (!current) return null;

          const index = galleryImages.findIndex(
            (item) => item.src === current.src
          );

          const nextIndex =
            (index + 1) % galleryImages.length;

          return galleryImages[nextIndex];
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  /* =========================================
     PREVIOUS IMAGE
  ========================================= */

  const showPrevious = (event) => {
    event.stopPropagation();

    const previousIndex =
      (currentIndex - 1 + galleryImages.length) %
      galleryImages.length;

    setSelectedImage(galleryImages[previousIndex]);
  };

  /* =========================================
     NEXT IMAGE
  ========================================= */

  const showNext = (event) => {
    event.stopPropagation();

    const nextIndex =
      (currentIndex + 1) % galleryImages.length;

    setSelectedImage(galleryImages[nextIndex]);
  };

  /* =========================================
     RENDER
  ========================================= */

  return (
    <section className="clinic-gallery" id="gallery">

      <div className="clinic-gallery-container">

        {/* Gallery Heading */}

        <div className="gallery-heading">

          <span className="gallery-eyebrow">
            INSIDE F&H
          </span>

          <h2>
            A Closer Look at <span>F&H</span>
          </h2>

          <p>
            Discover our thoughtfully designed clinic, modern
            treatment spaces and welcoming environment created
            around your comfort.
          </p>

        </div>

        {/* Gallery Grid */}

        <div className="gallery-grid">

          {galleryImages.map((item, index) => (

            <button
              type="button"
              className={`gallery-item gallery-item-${index + 1}`}
              key={item.title}
              onClick={() => setSelectedImage(item)}
              aria-label={`View ${item.title}`}
            >

              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
              />

              <div className="gallery-caption">

                <span>{item.category}</span>

                <h3>{item.title}</h3>

              </div>

            </button>

          ))}

        </div>

      </div>

      {/* =========================================
          IMAGE LIGHTBOX
      ========================================= */}

      {selectedImage && (

        <div
          className="gallery-lightbox"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Clinic gallery image preview"
        >

          {/* Close Button */}

          <button
            type="button"
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image preview"
          >
            &times;
          </button>

          {/* Previous Button */}

          <button
            type="button"
            className="lightbox-prev"
            onClick={showPrevious}
            aria-label="Previous image"
          >
            &#10094;
          </button>

          {/* Selected Image */}

          <img
            src={selectedImage.src}
            alt={selectedImage.title}
            className="lightbox-image"
            onClick={(event) => event.stopPropagation()}
          />

          {/* Next Button */}

          <button
            type="button"
            className="lightbox-next"
            onClick={showNext}
            aria-label="Next image"
          >
            &#10095;
          </button>

          {/* Image Caption */}

          <div className="lightbox-caption">
            {selectedImage.title}

            <span className="lightbox-counter">
              {" "}({currentIndex + 1} / {galleryImages.length})
            </span>
          </div>

        </div>

      )}

    </section>
  );
}

export default ClinicGallery;
