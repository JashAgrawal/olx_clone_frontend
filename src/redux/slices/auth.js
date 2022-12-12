import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  id: "",
  name: "",
  token: "",
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
    },
    logOut: (state) => {
      state.id = "";
      state.token = "";
      state.name = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuthData, logOut } = authSlice.actions;

export default authSlice.reducer;
