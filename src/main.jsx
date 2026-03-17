import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ShopProvider } from "./context/ShopContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ShopProvider>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </ShopProvider>,
);
