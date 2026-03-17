import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "../src/components/productcard/PoductDetails";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Checkout from "./components/account/Checkout";
import Invoice from "./components/account/Invoice";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/account" element={<Account />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/invoice" element={<Invoice />} />
    </Routes>
  );
}

export default App;
