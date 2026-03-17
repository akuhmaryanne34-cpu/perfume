import styles from "./Copyright.module.css";
import { Link } from "react-router-dom";

const Copyright = () => {
  return (
    <div className={styles.copyright}>
      <p>© {new Date().getFullYear()} Velouré. All rights reserved.</p>

      <div className={styles.links}>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms & Conditions</Link>
      </div>
    </div>
  );
};

export default Copyright;
