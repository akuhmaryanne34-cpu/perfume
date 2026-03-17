import { useLocation, useNavigate } from "react-router-dom";
import styles from "./checkout.module.css";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const order = location.state?.order;

  if (!order) return <p>No order found</p>;

  const pay = (method) => {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    const updated = orders.map((o) =>
      o.id === order.id ? { ...o, status: "Paid", payment: method } : o,
    );

    localStorage.setItem("orders", JSON.stringify(updated));

    alert("Payment Successful!");

    navigate("/account?tab=orders");
  };

  return (
    <div className={styles.checkoutPage}>
      <h1>Checkout</h1>

      <div className={styles.orderBox}>
        <h3>Order ID: {order.id}</h3>

        {order.items.map((item) => (
          <div key={item.id} className={styles.item}>
            <img src={item.image} alt="" />

            <div>
              <p>{item.name}</p>
              <p>Qty: {item.qty}</p>
              <p>₦{item.price}</p>
            </div>
          </div>
        ))}

        <h2>Total: ₦{order.total}</h2>

        <div className={styles.payButtons}>
          <button className={styles.paystack} onClick={() => pay("Paystack")}>
            Pay with Paystack
          </button>

          <button
            className={styles.flutterwave}
            onClick={() => pay("Flutterwave")}
          >
            Pay with Flutterwave
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
