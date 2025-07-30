import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { dispatch } = useContext(CartContext);

  const handleAdd = () => {
    dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity: 1 } });
  };

  return (
    <div className="border rounded shadow p-3">
      <img src={product.image} alt={product.name} style={{ width: "200px", height: "180px", objectFit: "cover" }} />
      <h4 className="mt-2 text-lg font-semibold">{product.name}</h4>
      <p>${product.price}</p>
      <button onClick={handleAdd} className="btn btn-success mt-2">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
