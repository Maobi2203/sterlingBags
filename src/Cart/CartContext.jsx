import React, { createContext, useContext, useEffect, useReducer } from "react";

// 1) Context
const CartContext = createContext();

// 2) Helper: load + save to localStorage so the cart survives page reloads
const loadCart = () => {
  try {
    const raw = localStorage.getItem("cart_items");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const saveCart = (items) => {
  try {
    localStorage.setItem("cart_items", JSON.stringify(items));
  } catch {}
};

// 3) Reducer
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const product = action.payload; // { id, name, price, img, brand? }
      const exists = state.items.find((it) => it.id === product.id);
      if (exists) {
        return {
          ...state,
          items: state.items.map((it) =>
            it.id === product.id ? { ...it, quantity: it.quantity + 1 } : it
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...product, quantity: 1 }],
      };
    }
    case "INCREASE": {
      const id = action.payload;
      return {
        ...state,
        items: state.items.map((it) =>
          it.id === id ? { ...it, quantity: it.quantity + 1 } : it
        ),
      };
    }
    case "DECREASE": {
      const id = action.payload;
      return {
        ...state,
        items: state.items.map((it) =>
          it.id === id ? { ...it, quantity: Math.max(1, it.quantity - 1) } : it
        ),
      };
    }
    case "REMOVE": {
      const id = action.payload;
      return { ...state, items: state.items.filter((it) => it.id !== id) };
    }
    case "CLEAR": {
      return { ...state, items: [] };
    }
    default:
      return state;
  }
}

const initialState = { items: loadCart() };

// 4) Provider
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    saveCart(state.items);
  }, [state.items]);

  // 5) Actions
  const addToCart = (product) => dispatch({ type: "ADD", payload: product });
  const increaseQty = (id) => dispatch({ type: "INCREASE", payload: id });
  const decreaseQty = (id) => dispatch({ type: "DECREASE", payload: id });
  const removeFromCart = (id) => dispatch({ type: "REMOVE", payload: id });
  const clearCart = () => dispatch({ type: "CLEAR" });

  const value = {
    items: state.items,
    addToCart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// 6) Hook for easy access
export const useCart = () => useContext(CartContext);
