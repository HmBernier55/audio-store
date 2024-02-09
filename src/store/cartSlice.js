import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, product } = action.payload;
      const itemExist = state.cart.filter(cartItem => cartItem.id === id);

      if (itemExist.length > 0) {
        state.cart = state.cart.map(cartItem => {
          if (cartItem.id === id) {
            cartItem.productInfo.quantity += product.quantity;
          }
          return cartItem;
        })
      } else {
        const cartItem = {
          id: id,
          productInfo: product,
        }
        state.cart.push(cartItem);
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(cartItem => cartItem.id !== action.payload)
    },
    removeAll: (state) => {
      state.cart = [];
    }
  }
})

export const { addToCart, removeFromCart, removeAll } = cartSlice.actions;

export default cartSlice.reducer;