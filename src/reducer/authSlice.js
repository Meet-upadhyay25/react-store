import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    isAuthenticated: false,
  },
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = !state.isAuthenticated;
    },
    removeToken :(state,action) => {
      state.token = null
      state.isAuthenticated = !state.isAuthenticated
    }
  },
});

export const { addToken, removeToken } = authSlice.actions;

export default authSlice.reducer;
