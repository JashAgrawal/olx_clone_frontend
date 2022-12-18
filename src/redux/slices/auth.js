import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  id: "",
  name: "",
  token: "",
  loggedIn: false,
};
export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setAuthData: (state, action) => {
      const { id, token, name } = action.payload;
      state.id = id;
      state.token = token;
      state.name = name;
      state.loggedIn = true;
    },
    logOut: (state) => {
      state.id = "";
      state.token = "";
      state.name = "";
      state.loggedIn = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuthData, logOut } = authSlice.actions;

export default authSlice.reducer;
