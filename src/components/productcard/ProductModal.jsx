import styles from "./ProductModal.module.css";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const ProductModal = ({ product, onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <img src={product.image} alt={product.name} />

        <div className={styles.details}>
          <h2>{product.name}</h2>

          <p>{product.description}</p>

          <p className={styles.price}>${product.price}</p>

          <p className={styles.ingredients}>
            {product.ingredients.join(" • ")}
          </p>

          <div className={styles.actions}>
            {/* <button className={styles.cartBtn}>
              <FaShoppingCart /> Add to Cart
            </button> */}

            {/* <button className={styles.wishBtn}>
              <FaHeart /> Wishlist
            </button> */}
          </div>
        </div>

        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
