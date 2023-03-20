import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    // If item and variation already exists in cart update quantity
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const priceItem = newItem.price * newItem.quantity;
      const existingItem = state.items.find((item) => {
        return item.id === newItem.id;
      });
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice += Number(newItem.price) * newItem.quantity;
        state.totalQuantity += newItem.quantity;
        state.totalPrice += priceItem;
        return;
      }
      state.items.push({
        ...newItem,
        totalPrice: newItem.quantity * newItem.price,
      });
      state.totalQuantity += newItem.quantity;
      state.totalPrice += priceItem;
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem.quantity <= 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }

      state.totalQuantity--;
      state.totalPrice -= existingItem.price;
    },
    // Update changes from cart modal
    updateItemFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      existingItem.quantity++;
      existingItem.totalPrice += Number(existingItem.price);

      state.totalQuantity++;
      state.totalPrice += Number(existingItem.price);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItemToCart, removeItemFromCart, updateItemFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
