import styles from "./navbar.module.css";
import { Heart, ShoppingBag, User } from "iconsax-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useShop } from "../../context/ShopContext"; // ⭐ added

const Navbar = () => {
  const [hovered, setHovered] = useState(null);

  const { wishlist = [], cart = [] } = useShop() || {};

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>VEL0URÉ</div>

      {/* Navigation Links */}
      <ul className={styles.links}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/collections">Collections</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <div className={styles.icons}>
        {/* Wishlist */}
        <Link
          to="/account?tab=wishlist"
          className={styles.iconWrapper}
          onMouseEnter={() => setHovered("wishlist")}
          onMouseLeave={() => setHovered(null)}
        >
          <Heart
            size="20"
            color="#210207"
            variant={hovered === "wishlist" ? "Bold" : "Linear"}
          />

          {wishlist?.length > 0 && (
            <span className={styles.badge}>{wishlist.length}</span>
          )}
        </Link>

        {/* Cart */}
        <Link
          to="/cart"
          className={styles.iconWrapper}
          onMouseEnter={() => setHovered("cart")}
          onMouseLeave={() => setHovered(null)}
        >
          <ShoppingBag
            size="20"
            color="#210207"
            variant={hovered === "cart" ? "Bold" : "Linear"}
          />

          {cart?.length > 0 && (
            <span className={styles.badge}>{cart.length}</span>
          )}
        </Link>

        {/* Account */}
        <Link
          to="/account"
          onMouseEnter={() => setHovered("account")}
          onMouseLeave={() => setHovered(null)}
        >
          <User
            size="20"
            color="#210207"
            variant={hovered === "account" ? "Bold" : "Linear"}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
