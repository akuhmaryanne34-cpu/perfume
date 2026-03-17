import { useState } from "react";
import styles from "./Hero.module.css";
import HeroCard from "./HeroCard";

import noir from "../../assets/images/noir.jpg";
import rose from "../../assets/images/rose.jpg";
import lumiere from "../../assets/images/lumiere.jpg";
import tagIcon from "../../assets/images/tagIcon.jpg";

const perfumes = [
  { id: 1, name: "Velouré Noir", image: noir },
  { id: 2, name: "Velouré Rose", image: rose },
  { id: 3, name: "Velouré Lumière", image: lumiere },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % perfumes.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? perfumes.length - 1 : prev - 1));
  };

  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <div className={styles.tag}>
          <img src={tagIcon} alt="tag icon" />
          <span>The Art of Fragrance</span>
        </div>

        <h1>Discover Your Signature Scent</h1>

        <p>
          Experience timeless luxury with Velouré perfumes — crafted to leave a
          lasting impression.
        </p>

        <button className={styles.shopBtn}>Shop Collection →</button>
      </div>

      <div className={styles.carouselWrapper}>
        <div
          className={styles.carouselTrack}
          style={{
            transform: `translateX(-${current * 240}px)`, // 240 = card width
          }}
        >
          {perfumes.map((item) => (
            <HeroCard key={item.id} image={item.image} name={item.name} />
          ))}
        </div>

        <div className={styles.controls}>
          <button onClick={prev} className={styles.arrow}>
            ←
          </button>
          <button onClick={next} className={styles.arrow}>
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
