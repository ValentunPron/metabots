import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchRobots = createAsyncThunk('robts/fetchRobots', async () => {
	const data  = await axios('./db.json').then(({data}) => data)
	return data.robots; 
});

export const setLoaded = createAsyncThunk('robts/setLoaded', async (status) => {
	if(status) {
		return 'loaded'
	} else {
		return 'loading'
	}
});


const initialState = {
	robots: {
		items: [],
		status: 'loading'
	},
};

const robotsSlices = createSlice({
	name: 'robots',
	initialState,
	reducer: {},
	extraReducers: {
		[fetchRobots.pending]: (state) => {
			state.robots.items = [];
			state.robots.status = 'loading';
		},
		[fetchRobots.fulfilled]: (state, action) => {
			state.robots.items = action.payload;
			state.robots.status = 'loaded';
		},
		[fetchRobots.rejected]: (state) => {
			state.robots.items = [];
			state.robots.status = 'error';
		},
		[setLoaded.pending]: (state) => {
			state.robots.status = 'loading';
		},
		[setLoaded.fulfilled]: (state, action) => {
			state.robots.status = 'loaded';
		},
		[setLoaded.rejected]: (state) => {
			state.robots.status = 'error';
		},
	},
});	

export const robotReducer = robotsSlices.reducer