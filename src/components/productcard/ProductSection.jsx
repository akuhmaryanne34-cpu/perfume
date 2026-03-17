import { useNavigate } from "react-router-dom";
import { products } from "../../data/Products";
import ProductCard from "./ProductCard";
import styles from "./ProductSection.module.css";

const ProductSection = () => {
  const navigate = useNavigate();

  // show only first 3
  const featured = products.slice(0, 6);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>Our Collection</h2>
        <p>
          Discover timeless fragrances crafted to leave a lasting impression.
        </p>
      </div>

      <div className={styles.grid}>
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className={styles.viewMoreWrapper}>
        <button
          className={styles.viewMoreBtn}
          onClick={() => navigate("/shop")}
        >
          View More
        </button>
      </div>
    </section>
  );
};

export default ProductSection;
