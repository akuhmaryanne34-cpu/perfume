import styles from "./alertHeader.module.css";
import { FaTiktok, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const AlertHeader = () => {
  return (
    <div className={styles.alert}>
      <div className={styles.left}>
        <p>Call Us: +234 123 456 789</p>
      </div>

      <div className={styles.center}>
        <p>
          Enjoy <span>10% Off</span> Your First Velouré Order —
          <span className={styles.join}> Join Now</span>
        </p>
      </div>

      <div className={styles.socialBox}>
        <FaTiktok />
      </div>

      <div className={styles.socialBox}>
        <FaFacebookF />
      </div>

      <div className={styles.socialBox}>
        <FaLinkedinIn />
      </div>
    </div>
  );
};

export default AlertHeader;
