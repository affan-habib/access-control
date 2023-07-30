// toastSlice.js
import { createSlice } from '@reduxjs/toolkit';

const toastSlice = createSlice({
  name: 'toast',
  initialState: {
    type: '',
    message: '',
  },
  reducers: {
    setMessage(state, action) {
      state.type = action.payload.type;
      state.message = action.payload.message;
    },
    clearMessage(state) {
      state.type = '';
      state.message = '';
    },
  },
});

export const { setMessage, clearMessage } = toastSlice.actions;
export default toastSlice.reducer;
