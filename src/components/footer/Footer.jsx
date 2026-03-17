import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { FaTiktok, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Brand */}
        <div className={styles.brand}>
          <h2>VELOURÉ</h2>
          <p>
            Discover timeless fragrances crafted to leave a lasting impression.
          </p>

          <div className={styles.socials}>
            <div >
              <FaTiktok />
            </div>

            <div >
              <FaFacebookF />
            </div>

            <div>
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        {/* Shop */}
        <div className={styles.links}>
          <h4>Shop</h4>
          <Link to="/shop">All Products</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/cart">Cart</Link>
        </div>

        {/* Company */}
        <div className={styles.links}>
          <h4>Company</h4>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/account">My Account</Link>
        </div>

        {/* Newsletter */}
        <div className={styles.newsletter}>
          <h4>Join Our Newsletter</h4>
          <p>Get updates on new fragrances and offers.</p>

          <div className={styles.inputBox}>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
