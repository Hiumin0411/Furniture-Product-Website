import {createSlice} from '@reduxjs/toolkit';

const initialState ={
    items: [],
    totalAmout:0,
};

const cartSlice = createSlice ({
    name: 'cart',
    initialState,
    reducers:{
      addToCart: (state, action) => {
        const { id } = action.payload;
  
        const existingItem = state.items.find(item => item.id === id);
  
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.items.push({ ...action.payload, quantity: 1 });
        }
  
        state.totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
      },
      removeFromCart: (state, action) => {
        const index = state.items.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state.items.splice(index, 1);
        }
  
        state.totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
      },
      increaseQuantity: (state, action) => {
        const existingItem = state.items.find(item => item.id === action.payload.id);
        if (existingItem) {
          existingItem.quantity += 1;
        }
  
        state.totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
      },
      decreaseQuantity: (state, action) => {
        const existingItem = state.items.find(item => item.id === action.payload.id);
        if (existingItem && existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        }
  
        state.totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    },
  });
     
export const { addToCart, removeFromCart,increaseQuantity,decreaseQuantity } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export const selectCartTotalAmount = (state) => state.cart.totalAmount;
export const selectCartItemsCount = (state) => state.cart.items.length;
export default cartSlice.reducer;