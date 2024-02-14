import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showNavMenu: false
}

export const navSlice = createSlice({
  name: 'nav',
  initialState: initialState,
  reducers: {
    toggleNavMenu: (state) => {
      state.showNavMenu = !state.showNavMenu;
    }
  }
})

export const { toggleNavMenu } = navSlice.actions;

export default navSlice.reducer;