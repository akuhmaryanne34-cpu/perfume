import styles from "./Sidebar.module.css";

const Sidebar = ({ activeView, setActiveView }) => {
  return (
    <div className={styles.sidebar}>
      <button
        className={activeView === "Profile" ? styles.active : ""}
        onClick={() => setActiveView("Profile")}
      >
        Personal Information
      </button>

      <button
        className={activeView === "Orders" ? styles.active : ""}
        onClick={() => setActiveView("Orders")}
      >
        My Orders
      </button>

      <button
        className={activeView === "Wishlist" ? styles.active : ""}
        onClick={() => setActiveView("Wishlist")}
      >
        Wishlist
      </button>

      <button
        className={activeView === "Address" ? styles.active : ""}
        onClick={() => setActiveView("Address")}
      >
        Manage Address
      </button>

      <button
        className={activeView === "Payment" ? styles.active : ""}
        onClick={() => setActiveView("Payment")}
      >
        Payment Methods
      </button>

      <button
        className={activeView === "Password" ? styles.active : ""}
        onClick={() => setActiveView("Password")}
      >
        Manage Password
      </button>
    </div>
  );
};

export default Sidebar;
