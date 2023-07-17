import { configureStore } from "@reduxjs/toolkit";
import { robotReducer } from "./slices/robots";
import { filterReduces } from './slices/filter';
import { authReducer } from "./slices/auth";

const store = configureStore({
	reducer: {
		robots: robotReducer,
		filter: filterReduces,
		auth: authReducer,
	}
});

export default store;