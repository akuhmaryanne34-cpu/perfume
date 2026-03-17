import { useShop } from "../../context/ShopContext";
import ProductCard from "../productcard/ProductCard";
import styles from "./Wishlist.module.css";

const Wishlist = () => {
  const { wishlist } = useShop();

  if (wishlist.length === 0) {
    return (
      <div className={styles.empty}>
        <h2>No items in wishlist</h2>
        <p>Start adding your favorite perfumes.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2>My Wishlist</h2>

      <div className={styles.grid}>
        {wishlist.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
