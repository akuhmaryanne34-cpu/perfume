import styles from "./HeroCard.module.css";

const HeroCard = ({ image, name }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} />

      <div className={styles.overlay}>
        <h4>{name}</h4>
        <div className={styles.actions}>
          <button>Explore</button>
          <span>♡</span>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
