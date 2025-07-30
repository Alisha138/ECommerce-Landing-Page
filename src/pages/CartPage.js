import React from "react";
import Cart from "../components/Cart";
import CheckoutModal from "../components/CheckoutModal";

const CartPage = () => (
  <div className="p-4">
    <Cart />
    <CheckoutModal />
  </div>
);

export default CartPage;
