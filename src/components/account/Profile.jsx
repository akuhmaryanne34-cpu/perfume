import { useState, useEffect } from "react";
import styles from "./Profile.module.css";

const Profile = () => {
  const [avatar, setAvatar] = useState(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    gender: "",
  });

  const [message, setMessage] = useState("");

  // Load saved profile
  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("profile"));

    if (savedProfile) {
      setFormData(savedProfile.data || formData);
      setAvatar(savedProfile.avatar || null);
    }
  }, []);

  // Auto save profile
  useEffect(() => {
    if (formData.email !== "") {
      localStorage.setItem(
        "profile",
        JSON.stringify({
          data: formData,
          avatar,
        }),
      );
    }
  }, [formData, avatar]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Avatar upload (fixed)
  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      const base64Image = reader.result;

      setAvatar(base64Image);

      const savedProfile = JSON.parse(localStorage.getItem("profile")) || {};

      localStorage.setItem(
        "profile",
        JSON.stringify({
          ...savedProfile,
          avatar: base64Image,
        }),
      );
    };

    reader.readAsDataURL(file);
  };

  // Remove avatar
  const removeAvatar = () => {
    setAvatar(null);

    const savedProfile = JSON.parse(localStorage.getItem("profile")) || {};

    localStorage.setItem(
      "profile",
      JSON.stringify({
        ...savedProfile,
        avatar: null,
      }),
    );
  };

  // Activity history
  const addActivity = (message) => {
    const history = JSON.parse(localStorage.getItem("activity")) || [];

    const newActivity = {
      message,
      date: new Date().toLocaleString(),
    };

    history.unshift(newActivity);

    localStorage.setItem("activity", JSON.stringify(history));
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName) {
      setMessage("Please fill all required fields");
      return;
    }

    if (!formData.email.includes("@")) {
      setMessage("Enter a valid email address");
      return;
    }

    localStorage.setItem(
      "profile",
      JSON.stringify({
        data: formData,
        avatar,
      }),
    );

    addActivity("Profile updated");

    setMessage("Profile updated successfully");

    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className={styles.profileContainer}>
      {/* Avatar */}
      <div className={styles.avatarSection}>
        <img
          src={avatar || "https://i.pravatar.cc/150"}
          alt="profile"
          className={styles.avatar}
        />

        <input
          type="file"
          id="avatarUpload"
          accept="image/*"
          onChange={handleAvatarUpload}
          className={styles.hiddenInput}
        />

        <div className={styles.avatarButtons}>
          <label htmlFor="avatarUpload" className={styles.uploadBtn}>
            Upload Photo
          </label>

          {avatar && (
            <button
              type="button"
              className={styles.removeBtn}
              onClick={removeAvatar}
            >
              Remove Photo
            </button>
          )}
        </div>
      </div>

      {/* Message */}
      {message && <div className={styles.message}>{message}</div>}

      {/* Form */}
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <div className={styles.field}>
            <label>First Name</label>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label>Last Name</label>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.field}>
          <label>Phone</label>
          <input name="phone" value={formData.phone} onChange={handleChange} />
        </div>

        <div className={styles.field}>
          <label>Email</label>
          <input name="email" value={formData.email} onChange={handleChange} />
        </div>

        <div className={styles.field}>
          <label>Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <button className={styles.button}>Update Profile</button>
      </form>

      
    </div>
  );
};

export default Profile;
