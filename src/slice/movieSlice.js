import { createSlice } from '@reduxjs/toolkit';

const initialState = [{
	"adult": false,
	"backdrop_path": "/t5zCBSB5xMDKcDqe91qahCOUYVV.jpg",
	"genre_ids": [27, 9648],
	"id": 507089,
	"original_language": "en",
	"original_title": "Five Nights at Freddy's",
	"overview": "80년대에 아이들이 실종되고 폐업한지 오래된 프레디의 피자가게 그곳의 야간 경비 알바를 하게 된 ‘마이크'는 캄캄한 어둠만이 존재하는 줄 알았던 피자가게에서 살아 움직이는 피자가게 마스코트 '프레디와 친구들’을 목격한다. 어딘가 기괴하고 섬뜩한 프레디와 친구들이 실체를 드러내기 시작하는데...",
	"popularity": 5818.278,
	"poster_path": "/6rUZcazlkYILiNPKFgCGkzTn0BN.jpg",
	"release_date": "2023-10-25",
	"title": "프레디의 피자가게",
	"video": false,
	"vote_average": 8.36,
	"vote_count": 1271
},];

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
