import { configureStore } from "@reduxjs/toolkit";
import { robotReducer } from "./slices/robots";
import { filterReduces } from './slices/filter';
import { authReducer } from "./slices/auth";
import { cartReduces } from "./slices/cart";

const store = configureStore({
	reducer: {
		robots: robotReducer,
		filter: filterReduces,
		cart: cartReduces,
		auth: authReducer,
	}
});

export default store;