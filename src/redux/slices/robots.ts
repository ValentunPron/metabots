import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';
import { IRobot } from '../../types/IRobot';

interface IRobotsState {
	robots: {
		items: IRobot[];
		status: 'loading' | 'loaded' | 'error';
	}
}

const filterByRarety = (data: IRobot[], raretyFilters: string[]): IRobot[] =>
	data.filter((robot) => raretyFilters.includes(robot.rarety.name));

const filterByPart = (data: IRobot[], partFilters: string[]): IRobot[] =>
	data.filter((robot) => partFilters.includes(robot.bodyPart));

const filterByFamily = (data: IRobot[], familyFilters: string[]): IRobot[] =>
	data.filter((robot) => familyFilters.includes(robot.family));

const filterBySelected = (data: IRobot[], selectFilters: string[]): IRobot[] =>
	data.filter((robot) => selectFilters.includes(robot.name));

const filterBySliderValues = (data: IRobot[], sliderValues: any): IRobot[] =>
	data.filter(
		(robot) =>
			+sliderValues.life[0] <= robot.status.life &&
			robot.status.life <= +sliderValues.life[1] &&
			+sliderValues.attack[0] <= robot.status.attack &&
			robot.status.attack <= +sliderValues.attack[1] &&
			+sliderValues.defense[0] <= robot.status.defense &&
			robot.status.defense <= +sliderValues.defense[1] &&
			+sliderValues.speed[0] <= robot.status.speed &&
			robot.status.speed <= +sliderValues.speed[1]
	);

const filterBySearch = (data: IRobot[], searchQuery: string): IRobot[] => {
	const lowerCaseQuery = searchQuery.toLowerCase();
	return data.filter(
		(robot) =>
			robot.name.toLowerCase().includes(lowerCaseQuery) ||
			robot.family.toLowerCase().includes(lowerCaseQuery) ||
			robot.rarety.name.toLowerCase().includes(lowerCaseQuery) ||
			robot.bodyPart.toLowerCase().includes(lowerCaseQuery)
	);
};

export const fetchRobots = createAsyncThunk('robts/fetchRobots', async (sortBy: string, thunkApi: any) => {
	const filters = thunkApi.getState().filter.filters;
	const noSlider = thunkApi.getState().filter.noSlider;
	const search = thunkApi.getState().filter.search;

	const data = await axios.get('/card').then(({ data }) => {
		let totalData: IRobot[] = data;

		if (filters.rarety.length !== 0) {
			totalData = filterByRarety(totalData, filters.rarety);
		}
		if (filters.part.length !== 0) {
			totalData = filterByPart(totalData, filters.part);
		}
		if (filters.family.length !== 0) {
			totalData = filterByFamily(totalData, filters.family);
		}
		if (filters.select.length !== 0) {
			totalData = filterBySelected(totalData, filters.select);
		}
		if (noSlider.life && noSlider.attack && noSlider.defense && noSlider.speed) {
			totalData = filterBySliderValues(totalData, noSlider);
		}
		if (search.length) {
			totalData = filterBySearch(totalData, search);
		}

		switch (sortBy) {
			case 'last listre': return totalData;
			case 'price': return totalData.sort((robot1: IRobot, robot2: IRobot) => robot2.price - robot1.price);
			case 'age': return totalData.sort((robot1: IRobot, robot2: IRobot) => robot2.age - robot1.age);
			case 'rarety': return totalData.sort((robot1: IRobot, robot2: IRobot) => robot2.rarety.status - robot1.rarety.status);
			default: return totalData;
		}
	});

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
			.addCase(fetchRobots.rejected, (state, action) => {
				state.robots.items = [];
				state.robots.status = 'error';
			});
	}
});

export const { setLoadedStatus } = robotsSlices.actions;

export const robotReducer = robotsSlices.reducer