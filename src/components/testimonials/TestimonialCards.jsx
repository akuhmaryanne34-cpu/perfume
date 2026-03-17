import styles from "./Testimonial.module.css";

const TestimonialCards = ({ testimonial }) => {
  return (
    <div className={styles.card}>
      <div className={styles.avatarBox}>
        <img src={testimonial.image} alt={testimonial.name} />
      </div>

      <div className={styles.content}>
        <h3>{testimonial.name}</h3>
        <span>{testimonial.role}</span>

        <p>{testimonial.review}</p>
      </div>
    </div>
  );
};

export default TestimonialCards;
