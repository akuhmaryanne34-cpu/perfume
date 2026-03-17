import { useNavigate } from "react-router-dom";
import { useShop } from "../context/ShopContext";

import AlertHeader from "../components/header/alertHeader/AlertHeader";
import Navbar from "../components/navbar/Navbar";
import AccountHeader from "../components/account/AccountHeader";
import Features from "../components/features/Features";
import Footer from "../components/footer/Footer";
import Copyright from "../components/copyright/Copyright";

import styles from "./cart.module.css";

const Cart = () => {
  const navigate = useNavigate();

  const { cart, setCart, removeFromCart, clearCart } = useShop();

  const increase = (id) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, qty: (item.qty || 1) + 1 } : item,
    );

    setCart(updated);
  };

  const decrease = (id) => {
    const updated = cart.map((item) =>
      item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item,
    );

    setCart(updated);
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * (item.qty || 1),
    0,
  );

  const tax = subtotal * 0.075;
  const total = subtotal + tax;

  const trackOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty");
      return;
    }

    const newOrder = {
      id: "ORD-" + Math.floor(Math.random() * 1000000),
      items: cart,
      date: new Date().toLocaleDateString(),
      status: "Processing",
      total: total.toFixed(2),
    };

    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    localStorage.setItem("orders", JSON.stringify([newOrder, ...orders]));

    clearCart();

    navigate("/account?tab=orders");
  };

  return (
    <>
      <AlertHeader />
      <Navbar />
      <AccountHeader />

      <section className={styles.cartPage}>
        <h1>Shopping Cart</h1>

        <div className={styles.cartContainer}>
          {/* LEFT */}
          <div className={styles.cartItems}>
            <button className={styles.clearBtn} onClick={clearCart}>
              Clear Cart
            </button>

            {cart.length === 0 && (
              <p className={styles.empty}>Your cart is empty</p>
            )}

            {cart.map((item) => (
              <div key={item.id} className={styles.item}>
                <img src={item.image} alt={item.name} />

                <div className={styles.details}>
                  <h3>{item.name}</h3>
                  <p>{item.category}</p>
                  <span>₦{item.price}</span>
                </div>

                <div className={styles.qty}>
                  <button onClick={() => decrease(item.id)}>-</button>

                  <span>{item.qty || 1}</span>

                  <button onClick={() => increase(item.id)}>+</button>
                </div>

                <button
                  className={styles.delete}
                  onClick={() => removeFromCart(item.id)}
                >
                  🗑
                </button>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className={styles.summary}>
            <h3>Order Summary</h3>

            <div className={styles.row}>
              <span>Subtotal</span>
              <span>₦{subtotal.toFixed(2)}</span>
            </div>

            <div className={styles.row}>
              <span>Tax (7.5%)</span>
              <span>₦{tax.toFixed(2)}</span>
            </div>

            <div className={styles.total}>
              <span>Total</span>
              <span>₦{total.toFixed(2)}</span>
            </div>

            <button className={styles.checkout} onClick={trackOrder}>
              Track Order
            </button>
          </div>
        </div>
      </section>

      <Features />
      <Footer />
      <Copyright />
    </>
  );
};

export default Cart;
