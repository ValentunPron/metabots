import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IFilterState {
  sortBy: string,
  part: string,
  rarety: string,
  family: string
}

const initialState: IFilterState = {
  sortBy: 'Last Listed',
  part: 'All',
  rarety: 'All',
  family: 'All',
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSortBy(state, action: PayloadAction<string>) {
      state.sortBy = action.payload
    },
  },
})

export const { setSortBy } = filterSlice.actions

export const filterReduces = filterSlice.reducer