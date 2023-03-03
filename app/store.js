import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cartSlice";
export default configureStore({
  reducer: {
    counter: cartReducer,
  },
});
