import { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useShop } from "../../context/ShopContext";
import styles from "./ProductCard.module.css";
import ProductModal from "./ProductModal";

const ProductCard = ({ product }) => {
  const [open, setOpen] = useState(false);

  const { cart, wishlist, addToCart, addToWishlist } = useShop();

  const inCart = cart?.some((item) => item.id === product.id);
  const inWishlist = wishlist?.some((item) => item.id === product.id);

  return (
    <>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <img src={product.image} alt={product.name} />

          <div className={styles.icons}>
            {/* Wishlist */}
            <button
              className={styles.icon}
              onClick={() => addToWishlist(product)}
            >
              <FaHeart size={16} color={inWishlist ? "#e63946" : "#2a030a"} />
            </button>

            {/* Cart */}
            <button className={styles.icon} onClick={() => addToCart(product)}>
              <FaShoppingCart
                size={16}
                color={inCart ? "#d4af37" : "#2a030a"}
              />
            </button>
          </div>
        </div>

        <div className={styles.info}>
          <h3>{product.name}</h3>
          <p>{product.ingredients.join(" • ")}</p>

          <button className={styles.detailsBtn} onClick={() => setOpen(true)}>
            View Details
          </button>
        </div>
      </div>

      {open && (
        <ProductModal product={product} onClose={() => setOpen(false)} />
      )}
    </>
  );
};

export default ProductCard;
