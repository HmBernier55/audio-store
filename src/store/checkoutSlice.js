import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showConfirmation: false
}

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: initialState,
  reducers: {
    toggleConfirmation: (state) => {
      state.showConfirmation = !state.showConfirmation;
    }
  }
})

export const { toggleConfirmation } = checkoutSlice.actions;

export default checkoutSlice.reducer;