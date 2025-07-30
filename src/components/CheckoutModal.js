import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const CheckoutModal = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [visible, setVisible] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmed(true);
    setTimeout(() => {
      setCartItems([]);
    }, 2000);
  };

  if (cartItems.length === 0) return null;

  return (
    <div className="mt-6">
      <button className="btn btn-primary" onClick={() => setVisible(true)}>
        Proceed to Checkout
      </button>

      {visible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-white p-5 rounded shadow-lg max-w-sm w-full">
            {!confirmed ? (
              <form onSubmit={handleSubmit}>
                <h4 className="mb-3">Checkout</h4>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="form-control mb-3"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-control mb-3"
                />

                <div className="d-flex justify-content-between mt-3">
                  <button type="submit" className="btn btn-success">
                    Confirm Order
                  </button>
                  <button
                    type="button"
                    onClick={() => setVisible(false)}
                    className="btn btn-outline-secondary"
                  >
                    Close
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center">
                <h4 className="text-success mb-2">✅ Order Confirmed!</h4>
                <p>
                  Thank you, <strong>{name}</strong>! Your order has been successfully placed.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutModal;
