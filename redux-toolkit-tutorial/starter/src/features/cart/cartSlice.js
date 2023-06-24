import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';
import { openModal } from '../modal/modalSlice';

const url = 'https://course-api.com/react-useReducer-cart-project';

export const getCartItems = createAsyncThunk(
  'cart/getCartItems',
  async (name, thunkAPI) => {
    try {
      // console.log(name);
      // console.log(thunkAPI);
      // console.log(thunkAPI.getState());
      // thunkAPI.dispatch(openModal());
      const { data } = await axios(url);
      return data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue('error occurred');
    }
  }
);

const initialState = {
  cartItems: cartItems,
  amount: cartItems.length,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.cartItems = action.payload;
        state.isLoading = false;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
  reducers: {
    clearCart: (state) => {
      // state.cartItems = []; // set the value
      return { ...state, cartItems: [] }; // or return new state
    },
    removeItem: (state, action) => {
      console.log(action);
      state.cartItems = state.cartItems.filter(
        ({ id }) => id !== action.payload
      );
    },
    increaseItem: (state, { payload }) => {
      console.log(payload);
      const item = state.cartItems.find(({ id }) => id === payload.id);
      item.amount += 1;
    },
    decreaseItem: (state, { payload }) => {
      const item = state.cartItems.find(({ id }) => id === payload.id);
      item.amount -= 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});
// console.log(cartSlice);
export const {
  clearCart,
  removeItem,
  increaseItem,
  decreaseItem,
  calculateTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
