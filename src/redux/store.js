import { configureStore } from "@reduxjs/toolkit";
import { robotReducer } from "./slices/robots";
import { filterReduces } from './slices/filter';

const store = configureStore({
	reducer: {
		robots: robotReducer,
		filter: filterReduces,
	}
});

export default store;