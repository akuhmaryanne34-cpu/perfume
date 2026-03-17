import styles from "./Categories.module.css";

import veloure1 from "../../assets/images/veloure1.jpg";
import veloure2 from "../../assets/images/veloure2.jpg";
import veloure3 from "../../assets/images/veloure3.jpg";

const data = [
  {
    id: 1,
    title: "Noir",
    notes: ["Woody", "Spicy", "Oriental", "Aromatic"],
    image: veloure1,
  },
  {
    id: 2,
    title: "Rose",
    notes: ["Floral", "Citrus", "Sweet", "Fruity"],
    image: veloure2,
  },
  {
    id: 3,
    title: "Lumière",
    notes: ["Fresh", "Musk", "Amber", "Woody"],
    image: veloure3,
  },
];

const PerfumeSection = () => {
  return (
    <section className={styles.section}>
      {data.map((item) => (
        <div
          key={item.id}
          className={styles.card}
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div className={styles.overlay}>
            <span className={styles.badge}>1500+ Scents</span>
            <h2>{item.title}</h2>
            <ul>
              {item.notes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default PerfumeSection;
