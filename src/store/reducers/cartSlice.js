import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
  discount: 0,
  subtotal: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    setDiscount: (state, action) => {
      state.discount = action.payload;
    },
    calculateTotal: (state) => {
      state.total = state.items.reduce(
        (acc, item) => acc + item.price,
        0
      );
    },
    calculateSubtotal: (state) => {
      state.subtotal = state.total - state.discount;
    },
  },
});

export const {
  addItem,
  removeItem,
  setDiscount,
  calculateTotal,
  calculateSubtotal,
} = cartSlice.actions;

export default cartSlice.reducer;
