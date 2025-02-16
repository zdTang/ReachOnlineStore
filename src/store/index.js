import { configureStore, createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.name === newItem.name
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: parseFloat(newItem.price),
          quantity: parseInt(newItem.quantity),
          totalIncome: parseFloat(newItem.price) * parseInt(newItem.quantity),
          name: newItem.name,
        });
      } else {
        existingItem.quantity += parseInt(newItem.quantity);
        existingItem.totalIncome =
          parseFloat(existingItem.totalIncome) +
          parseFloat(newItem.price) * parseInt(newItem.quantity);
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

const store = configureStore({
  reducer: { items: itemSlice.reducer },
});

export { store };
// Export action creator
export const { addItemToCart, removeItemFromCart } = itemSlice.actions;
