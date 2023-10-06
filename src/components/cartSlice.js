import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItemToCart: (state, action) => {
      const { id, title, price } = action.payload;
      const existingItem = state.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ id, title, price, quantity: 1 });
      }
    },
    removeItemFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
    incrementQuantity: (state, action) => {
      const item = state.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
