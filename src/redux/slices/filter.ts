import { createAction, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export const setNoSlider = createAction<{ status: number[], name: string }>('filter/setNoSlider');

interface INoSlider {
  life: number[];
  attack: number[];
  defense: number[];
  speed: number[];
}

export interface IFilterState {
  sortBy: string;
  filters: {
    part: string[];
    rarety: string[];
    family: string[];
    select: string[];
  },
  search: string,
  noSlider: INoSlider,
}

const sliderFieldMap: { [key: string]: keyof INoSlider } = {
  Life: 'life',
  Attack: 'attack',
  Defense: 'defense',
  Speed: 'speed',
};

const initialState: IFilterState = {
  sortBy: 'Last Listed',
  filters: {
    part: [],
    rarety: [],
    family: [],
    select: [],
  },
  search: '',
  noSlider: {
    life: [0, 100],
    attack: [0, 100],
    defense: [0, 100],
    speed: [0, 100]
  },
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
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    selectRobot(state, action: PayloadAction<string[]>) {
      state.filters.select = action.payload;
    },
    resetFilters(state) {
      state.filters.part = [];
      state.filters.rarety = [];
      state.filters.family = [];
      state.filters.select = [];
      state.search = '';
      state.noSlider.life = [0, 100];
      state.noSlider.attack = [0, 100];
      state.noSlider.defense = [0, 100];
      state.noSlider.speed = [0, 100];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(setNoSlider, (state, action) => {
      const { status, name } = action.payload;
      console.log(status, name);
      const field = sliderFieldMap[name];
      if (field) {
        state.noSlider[field] = status;
      }
    });
  }
})

export const { setSortBy, setFiltersPart, setFiltersRarety, setFiltersFamily, setSearch, selectRobot, resetFilters } = filterSlice.actions

export const filterReduces = filterSlice.reducer