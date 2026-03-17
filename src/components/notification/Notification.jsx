import { useShop } from "../context/ShopContext";
import styles from "./Notification.module.css";

const Notification = () => {
  const { message } = useShop();

  if (!message) return null;

  return <div className={styles.toast}>{message}</div>;
};

export default Notification;
