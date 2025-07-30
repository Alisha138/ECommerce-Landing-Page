import React, { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = { cartItems: [] };

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return { cartItems: [...state.cartItems, action.payload] };
    case "REMOVE_FROM_CART":
      return {
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    case "UPDATE_CART":
      return {
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case "CLEAR_CART":
      return initialState;
    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Add setCartItems manually for local control (used in CheckoutModal)
  const setCartItems = (newItems) => {
    dispatch({ type: "CLEAR_CART" }); // or customize if needed
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        dispatch,
        setCartItems, // ✅ added here
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
