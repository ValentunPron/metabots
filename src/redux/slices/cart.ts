import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IRobot } from '../../types/IRobot';
import axios from '../../axios';

const initialState: stateInterface = {
  items: [],
  totalPrice: {
    price: 0,
    realyPrice: 0,
  },
}

interface stateInterface {
  items: IRobot[],
  totalPrice: {
    price: number,
    realyPrice: number,
  },
}

export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
  const { data } = await axios.get(`cart`);
  return data.userCart.buyCard
});

export const removeCard = createAsyncThunk('cart/removeCard', async (id: string) => {
  axios.delete(`cart/${id}`);
});

export const buyCard = createAsyncThunk('cart/buyCard', async (id: string) => {
  const { data } = await axios.post(`cart/${id}`);
  return data.card;
});




const totalPriceFunction = (state: stateInterface) => {
  state.totalPrice.price = state.items.reduce((value: number, item: { price: number }) => value + item.price, 0);
  state.totalPrice.realyPrice = state.items.reduce((value: number, item: { realyPrice: number }) => value + item.realyPrice, 0)
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.items = [];
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.items = action.payload;
        totalPriceFunction(state)
      })
      .addCase(fetchCart.rejected, (state) => {
        state.items = [];
      })

      .addCase(removeCard.pending, (state, action: any) => {
        state.items = state.items.filter(obj => obj._id !== action.meta.arg);
        totalPriceFunction(state)
      })

      .addCase(buyCard.fulfilled, (state, action: any) => {
        state.items.push(action.payload);
        totalPriceFunction(state)
      })
  }
})

export const cartReduces = cartSlice.reducer