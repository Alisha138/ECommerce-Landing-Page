import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems, dispatch } = useContext(CartContext);

  const handleRemove = (id) => dispatch({ type: "REMOVE_FROM_CART", payload: id });
  const handleUpdate = (id, quantity) =>
    dispatch({ type: "UPDATE_CART", payload: { id, quantity } });

  return (
    <div className="my-6">
      <h2 className="text-xl font-semibold mb-3">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between mb-2">
            <div>{item.name}</div>
            <input
              type="number"
              value={item.quantity}
              min={1}
              className="form-control w-20 mx-2 my-2"
              onChange={(e) => handleUpdate(item.id, parseInt(e.target.value))}
            />
            <button onClick={() => handleRemove(item.id)} className="btn btn-danger btn-sm">
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
