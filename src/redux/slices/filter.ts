import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IFilterState {
  sortBy: string;
  filters: {
    part: string[];
    rarety: string[];
    family: string[];
  }
}

const initialState: IFilterState = {
  sortBy: 'Last Listed',
  filters: {
    part: [],
    rarety: [],
    family: [],
  }
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSortBy(state, action: PayloadAction<string>) {
      state.sortBy = action.payload
    },
    setFiltersPart(state, action: PayloadAction<string[]>) {
      state.filters.part = action.payload;
    },
    setFiltersRarety(state, action: PayloadAction<string[]>) {
      state.filters.rarety = action.payload;
    },
    setFiltersFamily(state, action: PayloadAction<string[]>) {
      state.filters.family = action.payload;
    },
    resetFilters(state) {
      state.filters.part = [];
      state.filters.rarety = [];
      state.filters.family = []
    }
  }
})

export const { setSortBy, setFiltersPart, setFiltersRarety, setFiltersFamily, resetFilters } = filterSlice.actions

export const filterReduces = filterSlice.reducer