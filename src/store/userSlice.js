import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    logged: false,
  },
  reducers: {
    logIn(state) {
      state.logged = true;
    },
    logOut(state) {
      state.logged = false;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
export default userSlice.reducer;
