import { configureStore } from "@reduxjs/toolkit";
import { robotReducer } from "./slices/robots";

const store = configureStore({
	reducer: {
		robots: robotReducer
	}
});

export default store;