import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    allCategories: null,
    allProducts: null,
  },
  reducers: {
    addAllCategories: (state, action) => {
      state.allCategories = action.payload;
    },
    addAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
  },
});

export const { addAllCategories, addAllProducts } = productSlice.actions;

export default productSlice.reducer;
