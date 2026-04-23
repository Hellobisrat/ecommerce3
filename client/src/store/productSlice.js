import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../utils/api.js";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await api.get("/products");
    return res.data;
  }
);

export const fetchProduct = createAsyncThunk(
  "products/fetchProduct",
  async (id) => {
    const res = await api.get(`/products/${id}`);
    return res.data;
  }
);

export const fetchCategories = createAsyncThunk(
  "products/fetchCategories",
  async () => {
    const res = await api.get("/categories");
    return res.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    categories: [],
    selectedProduct: null,
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.selectedProduct = action.payload;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      });
  },
});

export default productSlice.reducer;