import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IRobot } from '../../types/IRobot';

interface IRobotsState {
	robots: {
		items: IRobot[];
		status: 'loading' | 'loaded' | 'error';
	}
}

export const fetchRobots = createAsyncThunk('robts/fetchRobots', async () => {
	const data = await axios('./db.json').then(({ data }) => data)
	return data.robots;
});

export const filterRobots = createAsyncThunk('robts/filterRobots', async (sortBy: string, thunkApi: any) => {
	const filters = thunkApi.getState().filter.filters;
	const data = await axios('./db.json').then(({ data }) => {
		let totalData: any = data.robots;
		if (filters.rarety.length !== 0) {
			totalData = totalData.filter((robot: IRobot) => filters.rarety.includes(robot.rarety.name));
		}
		if (filters.part.length !== 0) {
			totalData = totalData.filter((robot: IRobot) => filters.part.includes(robot.bodyPart));
		}
		if (filters.family.length !== 0) {
			totalData = totalData.filter((robot: IRobot) => filters.family.includes(robot.family));
		}
		switch (sortBy) {
			case 'last listre': return totalData;
			case 'price': return totalData.sort((robot1: IRobot, robot2: IRobot) => robot2.price - robot1.price);
			case 'age': return totalData.sort((robot1: IRobot, robot2: IRobot) => robot2.age - robot1.age);
			case 'rarety': return totalData.sort((robot1: IRobot, robot2: IRobot) => robot2.rarety.status - robot1.rarety.status);
			default: return totalData
		}
	})
	return data;
});

const initialState: IRobotsState = {
	robots: {
		items: [],
		status: 'loading'
	},
};

const robotsSlices = createSlice({
	name: 'robots',
	initialState,
	reducers: {
		setLoadedStatus(state, action) {
			const status = action.payload ? 'loaded' : 'loading';
			state.robots.status = status;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchRobots.pending, (state) => {
				state.robots.items = [];
				state.robots.status = 'loading';
			})
			.addCase(fetchRobots.fulfilled, (state, action) => {
				state.robots.items = action.payload;
				state.robots.status = 'loaded';
			})
			.addCase(fetchRobots.rejected, (state) => {
				state.robots.items = [];
				state.robots.status = 'error';
			})
			.addCase(filterRobots.pending, (state) => {
				state.robots.items = [];
				state.robots.status = 'loading';
			})
			.addCase(filterRobots.fulfilled, (state, action) => {
				state.robots.items = action.payload;
				state.robots.status = 'loaded';
			})
			.addCase(filterRobots.rejected, (state) => {
				state.robots.items = [];
				state.robots.status = 'error';
			});
	}
});

export const { setLoadedStatus } = robotsSlices.actions;

export const robotReducer = robotsSlices.reducer