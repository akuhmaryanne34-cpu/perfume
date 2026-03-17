import { createContext, useContext, useState, useEffect } from "react";

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [wishlist, setWishlist] = useState([]);

  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("orders");
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  // Save cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Save orders
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  // ADD TO CART
  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      const updated = cart.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
      );

      setCart(updated);
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // REMOVE FROM CART
  const removeFromCart = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
  };

  // CLEAR CART
  const clearCart = () => {
    setCart([]);
  };

  // ADD TO WISHLIST
  const addToWishlist = (product) => {
    const exists = wishlist.find((item) => item.id === product.id);

    if (!exists) {
      setWishlist([...wishlist, product]);
    }
  };

  // CHECKOUT
  const checkout = () => {
    if (cart.length === 0) return;

    const newOrder = {
      id: "ORD-" + Math.floor(Math.random() * 1000000),
      items: cart,
      date: new Date().toLocaleDateString(),
      status: "Processing",
    };

    setOrders([newOrder, ...orders]);
    setCart([]);
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        wishlist,
        orders,
        addToCart,
        addToWishlist,
        removeFromCart,
        clearCart,
        checkout,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);
