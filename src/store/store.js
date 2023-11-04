import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '../slice/userSlice';
import movieReducer from '../slice/movieSlice';
import tvSeasonsReducer from '../slice/tvSeasonsSlice';
import booksReducer from '../slice/booksSlice';

const rootReducer = combineReducers({
	user: userReducer,
	movie: movieReducer,
	tvSeasons: tvSeasonsReducer,
	books: booksReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
