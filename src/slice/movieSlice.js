import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	nowPlaying: [],
	popular: [],
	topRated: [],
	upComing: [],
	trending: [],
	actionMovies: [],
	romanticMovies: [],
	galleryImages: [],
	similarMovies: [],
	movieDetail: {},
};

const movieSlice = createSlice({
	name: 'movie',
	initialState,
	reducers: {
		SET_NOW_PLAYING(state, action) {
			state.nowPlaying = action.payload;
		},
		SET_POPULAR(state, action) {
			state.popular = action.payload;
		},
		SET_TOP_RATED(state, action) {
			state.topRated = action.payload;
		},
		SET_UPCOMING(state, action) {
			state.upComing = action.payload;
		},
		SET_TRENDING(state, action) {
			state.trending = action.payload;
		},
		SET_ACTION_MOVIES(state, action) {
			state.actionMovies = action.payload;
		},
		SET_ROMANTIC_MOVIES(state, action) {
			state.romanticMovies = action.payload;
		},
		SET_MOVIE_DETAIL(state, action) {
			state.movieDetail = action.payload;
		},
		SET_GALLERY(state, action) {
			state.galleryImages = action.payload;
		},
		SET_SIMILAR(state, action) {
			state.similarMovies = action.payload;
		},
	},
});

export const {
	SET_NOW_PLAYING,
	SET_POPULAR,
	SET_TOP_RATED,
	SET_UPCOMING,
	SET_TRENDING,
	SET_ACTION_MOVIES,
	SET_ROMANTIC_MOVIES,
	SET_MOVIE_DETAIL,
	SET_GALLERY,
	SET_SIMILAR,
} = movieSlice.actions;

export default movieSlice.reducer;
