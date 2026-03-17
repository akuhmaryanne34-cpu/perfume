import { useState, useEffect } from "react";
import styles from "./Address.module.css";

const Address = () => {
  const [addresses, setAddresses] = useState([]);

  const [formData, setFormData] = useState({
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    isDefault: false,
  });

  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("addresses")) || [];
    setAddresses(saved);
  }, []);

  // input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Save Address
  const saveAddress = (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.address) return;

    let updated;

    if (editing) {
      updated = addresses.map((addr) =>
        addr.id === formData.id ? formData : addr,
      );
    } else {
      const newAddress = {
        ...formData,
        id: Date.now(),
      };

      updated = [...addresses, newAddress];
    }

    setAddresses(updated);

    localStorage.setItem("addresses", JSON.stringify(updated));

    resetForm();
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      id: null,
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      city: "",
      state: "",
      isDefault: false,
    });

    setEditing(false);
  };

  // Delete
  const deleteAddress = (id) => {
    const updated = addresses.filter((addr) => addr.id !== id);

    setAddresses(updated);

    localStorage.setItem("addresses", JSON.stringify(updated));
  };

  // Edit
  const editAddress = (addr) => {
    setFormData(addr);
    setEditing(true);
  };

  // Set Default
  const setDefault = (id) => {
    const updated = addresses.map((addr) => ({
      ...addr,
      isDefault: addr.id === id,
    }));

    setAddresses(updated);

    localStorage.setItem("addresses", JSON.stringify(updated));
  };

  return (
    <div className={styles.container}>
      <h2>{editing ? "Edit Address" : "Add New Address"}</h2>

      <form onSubmit={saveAddress} className={styles.form}>
        <div className={styles.row}>
          <input
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />

          <input
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />

        <div className={styles.row}>
          <input
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />

          <input
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
          />
        </div>

        <button className={styles.saveBtn}>
          {editing ? "Update Address" : "Save Address"}
        </button>
      </form>

      <h3 className={styles.savedTitle}>Saved Addresses</h3>

      {addresses.length === 0 && <p>No address saved yet</p>}

      {addresses.map((addr) => (
        <div key={addr.id} className={styles.addressCard}>
          {addr.isDefault && (
            <span className={styles.defaultBadge}>Default</span>
          )}

          <p>
            {addr.firstName} {addr.lastName}
          </p>

          <p>{addr.email}</p>

          <p>{addr.address}</p>

          <p>
            {addr.city}, {addr.state}
          </p>

          <div className={styles.actions}>
            <button onClick={() => editAddress(addr)}>Edit</button>

            <button onClick={() => deleteAddress(addr.id)}>Delete</button>

            {!addr.isDefault && (
              <button onClick={() => setDefault(addr.id)}>Set Default</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Address;
