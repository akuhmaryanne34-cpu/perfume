import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/Products";
import ProductCard from "../components/productcard/ProductCard";
import styles from "./Shop.module.css";

const Shop = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const [input, setInput] = useState(search);

  // Filter products
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className={styles.shop}>
      {/* Back to Home */}
      <button className={styles.backBtn} onClick={() => navigate("/")}>
        ← Back to Home
      </button>

      {/* Header */}
      <div className={styles.header}>
        <h2>Our Full Collection</h2>
        <p>Discover the fragrances that define elegance and style.</p>
      </div>

      {/* Search Form */}
      <form
        className={styles.searchBar}
        onSubmit={(e) => {
          e.preventDefault();
          setSearchParams({ search: input });
        }}
      >
        <input
          type="text"
          placeholder="Search perfume..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button type="submit">Search</button>
      </form>

      {/* Reset Search Button */}
      {search && (
        <button
          className={styles.resetBtn}
          onClick={() => {
            setSearchParams({});
            setInput("");
          }}
        >
          ← Back to all products
        </button>
      )}

      {/* Products */}
      {filteredProducts.length === 0 ? (
        <div className={styles.empty}>
          <h3>No perfumes found</h3>
          <p>Try searching for another fragrance.</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Shop;
