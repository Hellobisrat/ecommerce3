import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  items: JSON.parse(localStorage.getItem("cart")) || [],
};

const saveCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const exists = state.items.find((i) => i.id === item.id);

      if (exists) {
        exists.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }

      saveCart(state.items);
      toast.success("Added to cart");
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
      saveCart(state.items);
      toast.info("Item removed");
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) item.quantity = quantity;
      saveCart(state.items);
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;