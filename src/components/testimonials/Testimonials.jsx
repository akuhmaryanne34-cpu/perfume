import { useState } from "react";
import styles from "./Testimonial.module.css";

const testimonials = [
  {
    id: 1,
    name: "Emmanuel Bamidele",
    role: "Frontend Developer",
    review:
      "Velouré fragrances are incredible. The scent lasts all day and feels premium.",
    image: "/images/user1.jpg",
  },
  {
    id: 2,
    name: "Victoria Bamidele",
    role: "Digital Marketer",
    review:
      "I get compliments every time I wear Velouré Noir. It's elegant and unique.",
    image: "/images/user2.jpg",
  },
  {
    id: 3,
    name: "Daniel Carter",
    role: "Entrepreneur",
    review: "The packaging, the fragrance, everything feels premium.",
    image: "/images/user3.jpg",
  },
  {
    id: 4,
    name: "Sophia Laurent",
    role: "Designer",
    review: "Velouré perfumes are absolutely stunning.",
    image: "/images/user4.jpg",
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className={styles.testimonials}>
      <h4>Testimonials</h4>
      <h2>What Our Customers Say</h2>

      <div className={styles.carousel}>
        <button onClick={prevSlide} className={styles.arrow}>
          ❮
        </button>

        <div className={styles.wrapper}>
          {testimonials.slice(index, index + 2).map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.top}>
                <img src={item.image} alt={item.name} />

                <div>
                  <h3>{item.name}</h3>
                  <p>{item.role}</p>
                </div>
              </div>

              <p className={styles.review}>{item.review}</p>
            </div>
          ))}
        </div>

        <button onClick={nextSlide} className={styles.arrow}>
          ❯
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
