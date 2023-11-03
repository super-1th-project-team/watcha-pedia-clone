import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const movieSlice = createSlice({
	name: 'movie',
	initialState,
	reducers: {
		FETCH_MOVIE_DATA(state, action) {
			state = action.payload;
			return state;
		},
	},
});

export const { FETCH_MOVIE_DATA } = movieSlice.actions;

export default movieSlice.reducer;
