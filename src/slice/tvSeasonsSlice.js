import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const tvSeasonsSlice = createSlice({
	name: 'tvSeasons',
	initialState,
	reducers: {
		FETCH_TV_SEASONS_DATA(state, action) {
			state = action.payload;
			return state;
		},
	},
});

export const { FETCH_TV_SEASONS_DATA } = tvSeasonsSlice.actions;

export default tvSeasonsSlice.reducer;
