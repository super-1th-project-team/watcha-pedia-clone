import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '../slice/userSlice';
<<<<<<< HEAD
import movieReducer from '../slice/movieSlice';
import tvSeasonsReducer from '../slice/tvSeasonsSlice';
import booksReducer from '../slice/booksSlice';

const rootReducer = combineReducers({
	user: userReducer,
	movie: movieReducer,
	tvSeasons: tvSeasonsReducer,
	books: booksReducer,
=======

const rootReducer = combineReducers({
	user: userReducer,
>>>>>>> feature/redux
});

const store = configureStore({ reducer: rootReducer });

export default store;
