import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchRobots = createAsyncThunk('robts/fetchRobots', async () => {
	const data = await axios('./db.json').then(({ data }) => data)
	return data.robots;
});

export const setLoadedStatus = createAsyncThunk(
	'robots/setLoaded',
	async (status) => {
	  return status ? 'loaded' : 'loading';
	}
  );

  export const setLoaded = (status) => (dispatch) => {
	  dispatch(setLoadedStatus(status));
  };


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
		[setLoadedStatus.pending]: (state) => {
			state.robots.status = 'loading';
		},
		[setLoadedStatus.fulfilled]: (state, action) => {
			console.log(action.payload);
			state.robots.status = action.payload;
		},
		[setLoadedStatus.rejected]: (state) => {
			state.robots.status = 'error';
		},
	},
});

export const robotReducer = robotsSlices.reducer