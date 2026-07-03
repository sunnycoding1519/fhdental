import "./Gallery.css";

const galleryImages = [
  {
    id: 1,
    image: "/gallery/gallery1.jpg",
    title: "Dental Implant",
  },
  {
    id: 2,
    image: "/gallery/gallery2.jpg",
    title: "Smile Makeover",
  },
  {
    id: 3,
    image: "/gallery/gallery3.jpg",
    title: "Invisible Aligners",
  },
  {
    id: 4,
    image: "/gallery/gallery4.jpg",
    title: "Clinic Reception",
  },
  {
    id: 5,
    image: "/gallery/gallery5.jpg",
    title: "Treatment Room",
  },
  {
    id: 6,
    image: "/gallery/gallery6.jpg",
    title: "Patient Care",
  },
  {
    id: 7,
    image: "/gallery/gallery7.jpg",
    title: "Dental Chair",
  },
  {
    id: 8,
    image: "/gallery/gallery8.jpg",
    title: "Cosmetic Dentistry",
  },
  {
    id: 9,
    image: "/gallery/gallery9.jpg",
    title: "Before & After",
  },
  {
    id: 10,
    image: "/gallery/gallery10.jpg",
    title: "Happy Smile",
  },
];

function Gallery() {
  return (
    <section className="gallery-section" id="gallery">

      <div className="container">

        <div className="section-title">

          <span>OUR GALLERY</span>

          <h2>Inside F&H Dental Clinic</h2>

          <p>
            Explore our modern clinic, advanced technology,
            and beautiful smile transformations.
          </p>

        </div>

        <div className="gallery-grid">

          {galleryImages.map((item) => (

            <div className="gallery-card" key={item.id}>

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="gallery-overlay">

                <h3>{item.title}</h3>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Gallery;