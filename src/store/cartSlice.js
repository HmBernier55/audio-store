import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
  totalItems: 0,
  showCart: false,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, product } = action.payload;
      const itemExist = state.items.filter(cartItem => cartItem.id === id);

      if (itemExist.length > 0) {
        state.items = state.items.map(cartItem => {
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
        state.items.push(cartItem);
      }

      state.total += (product.price * product.quantity);
      state.totalItems += product.quantity;
    },
    removeFromCart: (state, action) => {
      const { id, product } = action.payload;
      state.items = state.items.filter(cartItem => cartItem.id !== id)
      state.total -= (product.price * product.quantity);
      state.totalItems -= product.quantity;
    },
    removeAll: (state) => {
      state.items = [];
      state.total = 0;
      state.totalItems = 0;
    },
    addOneToCart: (state, action) => {
      const { id, price } = action.payload;
      state.items = state.items.map(cartItem => {
        if (cartItem.id === id) {
          cartItem.productInfo.quantity += 1;
        }
        return cartItem;
      })
      state.total += price;
      state.totalItems += 1;
    },
    removeOneFromCart: (state, action) => {
      const { id, price } = action.payload;
      state.items = state.items.map(cartItem => {
        if  (cartItem.id === id) {
          cartItem.productInfo.quantity -= 1;
        }
        return cartItem;
      })
      state.total -= price;
      state.totalItems -= 1;
    },
    toggleCart: (state) => {
      state.showCart = !state.showCart;
    },
  }
})

export const { addToCart, removeFromCart, removeAll, addOneToCart, removeOneFromCart, toggleCart } = cartSlice.actions;

export default cartSlice.reducer;