import styles from "./AccountHeader.module.css";

const AccountHeader = () => {
  return (
    <div className={styles.header}>
      <h1>My Account</h1>
      <p>Home / Account</p>
    </div>
  );
};

export default AccountHeader;
