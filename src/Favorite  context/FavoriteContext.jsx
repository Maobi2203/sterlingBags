import React, { createContext, useContext, useEffect, useReducer } from "react";

// 1) Context
const FavoriteContext = createContext();

// 2) Helper functions for localStorage
const loadFavorites = () => {
  try {
    const raw = localStorage.getItem("favorite_items");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const saveFavorites = (items) => {
  try {
    localStorage.setItem("favorite_items", JSON.stringify(items));
  } catch {}
};

// 3) Reducer
function favoriteReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const product = action.payload;
      const exists = state.items.find((it) => it.id === product.id);
      if (exists) return state; // don’t add twice
      return { ...state, items: [...state.items, product] };
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

const initialState = { items: loadFavorites() };

// 4) Provider
export function FavoriteProvider({ children }) {
  const [state, dispatch] = useReducer(favoriteReducer, initialState);

  useEffect(() => {
    saveFavorites(state.items);
  }, [state.items]);

  const addToFavorite = (product) =>
    dispatch({ type: "ADD", payload: product });
  const removeFromFavorite = (id) => dispatch({ type: "REMOVE", payload: id });
  const clearFavorites = () => dispatch({ type: "CLEAR" });

  const value = {
    items: state.items,
    addToFavorite,
    removeFromFavorite,
    clearFavorites,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}

// 5) Hook
export const useFavorite = () => useContext(FavoriteContext);
