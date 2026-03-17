import { useParams } from "react-router-dom";
import { products } from "../../data/Products";

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <section style={{ padding: "5rem 6rem" }}>
      <img src={product.image} alt={product.name} width="300" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </section>
  );
};

export default ProductDetails;
