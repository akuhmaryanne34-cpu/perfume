import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "./password.module.css";

const Password = () => {
  const savedPassword = localStorage.getItem("userPassword") || "123456";

  const [current, setCurrent] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [message, setMessage] = useState("");

  const changePassword = (e) => {
    e.preventDefault();

    if (current !== savedPassword) {
      setMessage("Current password is incorrect");
      return;
    }

    if (newPassword.length < 6) {
      setMessage("Password must be at least 6 characters");
      return;
    }

    if (newPassword !== confirm) {
      setMessage("Passwords do not match");
      return;
    }

    localStorage.setItem("userPassword", newPassword);

    setMessage("Password updated successfully");

    setCurrent("");
    setNewPassword("");
    setConfirm("");
  };

  return (
    <div className={styles.passwordPage}>
      <h2>Change Password</h2>

      <form onSubmit={changePassword} className={styles.form}>
        {/* CURRENT PASSWORD */}

        <div className={styles.field}>
          <label>Current Password</label>

          <div className={styles.inputBox}>
            <input
              type={showCurrent ? "text" : "password"}
              value={current}
              onChange={(e) => setCurrent(e.target.value)}
            />

            <button
              type="button"
              className={styles.eyeBtn}
              onClick={() => setShowCurrent(!showCurrent)}
            >
              {showCurrent ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </button>
          </div>
        </div>

        {/* NEW PASSWORD */}

        <div className={styles.field}>
          <label>New Password</label>

          <div className={styles.inputBox}>
            <input
              type={showNew ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <button
              type="button"
              className={styles.eyeBtn}
              onClick={() => setShowNew(!showNew)}
            >
              {showNew ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </button>
          </div>
        </div>

        {/* CONFIRM PASSWORD */}

        <div className={styles.field}>
          <label>Confirm Password</label>

          <div className={styles.inputBox}>
            <input
              type={showConfirm ? "text" : "password"}
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />

            <button
              type="button"
              className={styles.eyeBtn}
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </button>
          </div>
        </div>

        <button className={styles.button}>Update Password</button>
      </form>

      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default Password;
