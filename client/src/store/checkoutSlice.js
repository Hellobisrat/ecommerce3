import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    shippingAddress: JSON.parse(localStorage.getItem("shippingAddress")) || {},
    shippingMethod: "standard",
  },
  reducers: {
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      localStorage.setItem("shippingAddress", JSON.stringify(action.payload));
    },
    saveShippingMethod: (state, action) => {
      state.shippingMethod = action.payload;
    },
  },
});

export const { saveShippingAddress, saveShippingMethod } = checkoutSlice.actions;
export default checkoutSlice.reducer;