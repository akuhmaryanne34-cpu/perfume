import { useLocation, useNavigate } from "react-router-dom";
import styles from "./invoice.module.css";

const Invoice = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const order = location.state?.order;

  if (!order) {
    return <p className={styles.empty}>No invoice found</p>;
  }

  const copyInvoice = () => {
    const text = `
INVOICE

Order ID: ${order.id}
Date: ${order.date}

${order.items.map((i) => `${i.name} - ₦${i.price} x ${i.qty}`).join("\n")}

Total: ₦${order.total}
`;

    navigator.clipboard.writeText(text);

    alert("Invoice copied to clipboard");
  };

  const saveInvoice = () => {
    const text = `
INVOICE

Order ID: ${order.id}
Date: ${order.date}

${order.items.map((i) => `${i.name} - ₦${i.price} x ${i.qty}`).join("\n")}

Total: ₦${order.total}
`;

    const blob = new Blob([text], { type: "text/plain" });

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = `invoice-${order.id}.txt`;

    link.click();
  };

  const printInvoice = () => {
    window.print();
  };

  return (
    <div className={styles.invoicePage}>
      <div className={styles.invoiceCard}>
        <h1 className={styles.title}>Invoice</h1>

        <div className={styles.meta}>
          <p>
            <strong>Order ID:</strong> {order.id}
          </p>
          <p>
            <strong>Date:</strong> {order.date}
          </p>
        </div>

        <div className={styles.items}>
          {order.items.map((item) => (
            <div key={item.id} className={styles.itemRow}>
              <img src={item.image} alt={item.name} />

              <div>
                <h4>{item.name}</h4>
                <p>₦{item.price}</p>
                <p>Qty: {item.qty}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.total}>Grand Total: ₦{order.total}</div>

        <div className={styles.buttons}>
          <button onClick={saveInvoice}>Save Invoice</button>

          <button onClick={copyInvoice}>Copy Invoice</button>

          <button onClick={printInvoice}>Print Invoice</button>

          <button className={styles.homeBtn} onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
