import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Orders.module.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];

    setOrders(savedOrders);
  }, []);

  const getStep = (status) => {
    switch (status) {
      case "Processing":
        return 2;

      case "Shipped":
        return 3;

      case "Out for Delivery":
        return 4;

      case "Delivered":
        return 5;

      default:
        return 1;
    }
  };

  if (orders.length === 0) {
    return <p className={styles.empty}>No orders yet</p>;
  }

  return (
    <div className={styles.ordersContainer}>
      <h2>My Orders</h2>

      {orders.map((order) => {
        const step = getStep(order.status);

        return (
          <div key={order.id} className={styles.orderCard}>
            {/* HEADER */}

            <div className={styles.orderHeader}>
              <span>Order ID: {order.id}</span>

              <span>Date: {order.date}</span>

              <span>Status: {order.status}</span>
            </div>

            {/* ITEMS */}

            {order.items.map((item) => (
              <div key={item.id} className={styles.orderItem}>
                <img src={item.image} alt={item.name} />

                <div>
                  <h4>{item.name}</h4>

                  <p>₦{item.price}</p>

                  <p>Qty: {item.qty || 1}</p>
                </div>
              </div>
            ))}

            {/* TRACKING */}

            <div className={styles.tracking}>
              <div
                className={`${styles.step} ${step >= 1 ? styles.active : ""}`}
              >
                <span>✓</span>
                <p>Order Placed</p>
              </div>

              <div
                className={`${styles.step} ${step >= 2 ? styles.active : ""}`}
              >
                <span>✓</span>
                <p>Processing</p>
              </div>

              <div
                className={`${styles.step} ${step >= 3 ? styles.active : ""}`}
              >
                <span>3</span>
                <p>Shipped</p>
              </div>

              <div
                className={`${styles.step} ${step >= 4 ? styles.active : ""}`}
              >
                <span>4</span>
                <p>Out for Delivery</p>
              </div>

              <div
                className={`${styles.step} ${step >= 5 ? styles.active : ""}`}
              >
                <span>5</span>
                <p>Delivered</p>
              </div>
            </div>

            {/* FOOTER */}

            <div className={styles.orderFooter}>
              <div className={styles.total}>Grand Total: ₦{order.total}</div>

              <div className={styles.actions}>
                {/* Checkout button */}

                {order.status !== "Paid" && (
                  <button
                    className={styles.checkoutBtn}
                    onClick={() =>
                      navigate("/checkout", {
                        state: { order },
                      })
                    }
                  >
                    Checkout
                  </button>
                )}

                {/* Invoice button */}

                <button
                  className={styles.invoiceBtn}
                  onClick={() =>
                    navigate("/invoice", {
                      state: { order },
                    })
                  }
                >
                  View Invoice
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Orders;
