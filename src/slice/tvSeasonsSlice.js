import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	tvDayTrend: [],
	tvWeekTrend: [],
	tvOnTheAir: [],
	tvPopular: [],
	tvAction: [],
	tvAnimation: [],
	tvKids: [],
	tvSimilar: [],
	tvDetail: {},
	commentTVDetail: [],
	isTVPage: false,
};

const tvSeasonsSlice = createSlice({
	name: 'tvSeasons',
	initialState,
	reducers: {
		SET_TV_DAY_TREND(state, action) {
			state.tvDayTrend = action.payload;
		},
		SET_TV_WEEK_TREND(state, action) {
			state.tvWeekTrend = action.payload;
		},
		SET_TV_ON_THE_AIR(state, action) {
			state.tvOnTheAir = action.payload;
		},
		SET_TV_POPULAR(state, action) {
			state.tvPopular = action.payload;
		},
		SET_TV_ACTION(state, action) {
			state.tvAction = action.payload;
		},
		SET_TV_ANIMATION(state, action) {
			state.tvAnimation = action.payload;
		},
		SET_TV_KIDS(state, action) {
			state.tvKids = action.payload;
		},
		SET_TV_DETAIL(state, action) {
			state.tvDetail = action.payload;
		},
		CHECK_TV_PAGE(state, action) {
			state.isTVPage = action.payload;
		},
		SET_TV_SIMILAR(state, action) {
			state.tvSimilar = action.payload;
		},
		SET_COMMENT_TV_DETAILS(state, action) {
			state.commentTVDetail = action.payload;
		},
	},
});

export const {
	SET_TV_DAY_TREND,
	SET_TV_WEEK_TREND,
	SET_TV_ON_THE_AIR,
	SET_TV_POPULAR,
	SET_TV_ACTION,
	SET_TV_ANIMATION,
	SET_TV_KIDS,
	SET_TV_DETAIL,
	CHECK_TV_PAGE,
	SET_TV_SIMILAR,
	SET_COMMENT_TV_DETAILS,
} = tvSeasonsSlice.actions;

export default tvSeasonsSlice.reducer;
