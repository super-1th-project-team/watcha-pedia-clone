import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	contentType: '', // 초기 상태는 빈 문자열로 설정합니다.
};

const reviewSlice = createSlice({
	name: 'content',
	initialState,
	reducers: {
		setContentType: (state, action) => {
			state.contentType = action.payload;
		},
	},
});

export const { setContentType } = reviewSlice.actions;

export default reviewSlice.reducer;
