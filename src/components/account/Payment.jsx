import { useState, useEffect } from "react";
import styles from "./Payment.module.css";

const Payment = () => {
  const [cards, setCards] = useState([]);

  const [formData, setFormData] = useState({
    id: null,
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    isDefault: false,
  });

  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const savedCards = JSON.parse(localStorage.getItem("cards")) || [];
    setCards(savedCards);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const saveCard = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.cardNumber) return;

    let updated;

    if (editing) {
      updated = cards.map((card) =>
        card.id === formData.id ? formData : card,
      );
    } else {
      const newCard = {
        ...formData,
        id: Date.now(),
      };

      updated = [...cards, newCard];
    }

    setCards(updated);

    localStorage.setItem("cards", JSON.stringify(updated));

    resetForm();
  };

  const resetForm = () => {
    setFormData({
      id: null,
      name: "",
      cardNumber: "",
      expiry: "",
      cvv: "",
      isDefault: false,
    });

    setEditing(false);
  };

  const deleteCard = (id) => {
    const updated = cards.filter((card) => card.id !== id);

    setCards(updated);

    localStorage.setItem("cards", JSON.stringify(updated));
  };

  const editCard = (card) => {
    setFormData(card);
    setEditing(true);
  };

  const setDefault = (id) => {
    const updated = cards.map((card) => ({
      ...card,
      isDefault: card.id === id,
    }));

    setCards(updated);

    localStorage.setItem("cards", JSON.stringify(updated));
  };

  const maskCard = (number) => {
    return "**** **** **** " + number.slice(-4);
  };

  return (
    <div className={styles.container}>
      <h2>{editing ? "Edit Card" : "Add Payment Method"}</h2>

      <form onSubmit={saveCard} className={styles.form}>
        <input
          name="name"
          placeholder="Card Holder Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          name="cardNumber"
          placeholder="Card Number"
          value={formData.cardNumber}
          onChange={handleChange}
        />

        <div className={styles.row}>
          <input
            name="expiry"
            placeholder="MM/YY"
            value={formData.expiry}
            onChange={handleChange}
          />

          <input
            name="cvv"
            placeholder="CVV"
            value={formData.cvv}
            onChange={handleChange}
          />
        </div>

        <button className={styles.saveBtn}>
          {editing ? "Update Card" : "Save Card"}
        </button>
      </form>

      <h3 className={styles.savedTitle}>Saved Cards</h3>

      {cards.length === 0 && <p>No payment methods saved</p>}

      {cards.map((card) => (
        <div key={card.id} className={styles.card}>
          {card.isDefault && <span className={styles.default}>Default</span>}

          <h4>{card.name}</h4>

          <p>{maskCard(card.cardNumber)}</p>

          <p>Expiry: {card.expiry}</p>

          <div className={styles.actions}>
            <button onClick={() => editCard(card)}>Edit</button>

            <button onClick={() => deleteCard(card.id)}>Delete</button>

            {!card.isDefault && (
              <button onClick={() => setDefault(card.id)}>Set Default</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Payment;
