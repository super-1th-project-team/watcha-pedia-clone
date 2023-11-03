import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const booksSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {
		FETCH_BOOKS_DATA(state, action) {
			state = action.payload;
			return state;
		},
	},
});

export const { FETCH_BOOKS_DATA } = booksSlice.actions;

export default booksSlice.reducer;
