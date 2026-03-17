import { Box, Wallet, Headphone } from "iconsax-react";
import styles from "./Features.module.css";

const Features = () => {
  return (
    <section className={styles.features}>
      <div className={styles.item}>
        <div className={styles.iconWrapper}>
          <Box size="28" variant="Bold" color="#fff" />
        </div>
        <div>
          <h4>Free Shipping</h4>
          <p>On orders over $100</p>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.iconWrapper}>
          <Wallet size="28" variant="Bold" color="#fff" />
        </div>
        <div>
          <h4>Flexible Payment</h4>
          <p>Multiple secure payment options</p>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.iconWrapper}>
          <Headphone size="28" variant="Bold" color="#fff" />
        </div>
        <div>
          <h4>24x7 Support</h4>
          <p>24/7 online support</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
