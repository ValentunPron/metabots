import { createSlice } from '@reduxjs/toolkit'
import { IRobot } from '../../types/IRobot';

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

const totalPriceFunction = (state: stateInterface) => {
  state.totalPrice.price = state.items.reduce((value: number, item: { price: number }) => value + item.price, 0);
  state.totalPrice.realyPrice = state.items.reduce((value: number, item: { realyPrice: number }) => value + item.realyPrice, 0)
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addRobot(state, action) {
      state.items.push(action.payload);
      totalPriceFunction(state);
    },
    removeItem(state, action) {
      state.items = state.items.filter((item: IRobot) => item._id !== action.payload);
      totalPriceFunction(state);
    },
  }
})

export const { addRobot, removeItem, } = cartSlice.actions

export const cartReduces = cartSlice.reducer