import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	newBooks: [],
	bestSeller: [],
	foreignBestSeller: [],
	usedBooks: [],
};

const booksSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {
		SET_NEW_BOOKS(state, action) {
			state.newBooks = action.payload;
		},
		SET_BEST_SELLER_BOOKS(state, action) {
			state.bestSeller = action.payload;
		},
		SET_FOREIGN_BEST_SELLER_BOOKS(state, action) {
			state.foreignBestSeller = action.payload;
		},
		SET_USED_BOOKS(state, action) {
			state.usedBooks = action.payload;
		},
	},
});

export const {
	SET_NEW_BOOKS,
	SET_BEST_SELLER_BOOKS,
	SET_FOREIGN_BEST_SELLER_BOOKS,
	SET_USED_BOOKS,
} = booksSlice.actions;

export default booksSlice.reducer;
