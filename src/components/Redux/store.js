
import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "../Redux/User/UserSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
