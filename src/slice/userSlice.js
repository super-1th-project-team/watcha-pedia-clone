import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	id: 0,
	name: '',
	email: '',
	password: '',
	photoURL: '',
	isLoggedIn: false,
	isLogInPopUp: false,
	isRegisterPopUp: false,
	isLoginError: false,
	isAuthCheckPopUp: false,
	buttonType: '',
	searchData: '',
	userData: {
		movies: [
			{
				movieId: '',
				wishes: false,
				watching: false,
				comment: {
					commentId: 0,
					text: '',
				},
				rating: 0,
			},
		],
		tvShows: [
			{
				tvShowsId: '',
				wishes: false,
				watching: false,
				comment: {
					commentId: 0,
					text: '',
				},
				rating: 0,
			},
		],
		books: [
			{
				booksId: '',
				wishes: false,
				watching: false,
				comment: {
					commentId: 0,
					text: '',
				},
				rating: 0,
			},
		],
	},
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		LOGIN_USER(state, action) {
			const { isLoggedIn, id, name, email, photoURL } = action.payload;
			state.isLoggedIn = isLoggedIn;
			state.id = id;
			state.name = name;
			state.email = email;
			state.photoURL = photoURL;
		},
		LOGOUT_USER(state) {
			state.id = 0;
			state.email = '';
			state.name = '';
			state.password = '';
			state.photoURL = '';
			state.isLoggedIn = false;
		},
		TOGGLE_LOGIN_POPUP(state) {
			state.isLogInPopUp = !state.isLogInPopUp;
		},
		TOGGLE_REGISTER_POPUP(state) {
			state.isRegisterPopUp = !state.isRegisterPopUp;
		},
		CANCEL_AUTH(state, action) {
			const { isLogInPopUp, isRegisterPopUp } = action.payload;
			state.isLogInPopUp = isLogInPopUp;
			state.isRegisterPopUp = isRegisterPopUp;
		},
		CHECK_LOGIN_ERROR(state, action) {
			const isLoginError = action.payload;
			state.isLoginError = isLoginError;
		},
		CHECK_AUTH_POPUP(state, action) {
			state.isAuthCheckPopUp = action.payload;
		},
		UPDATE_INPUT_VALUE(state, action) {
			const { name, value } = action.payload;
			state.inputValue[name] = value;
		},
		SET_BUTTON_TYPE(state, action) {
			state.buttonType = action.payload;
		},
		SET_SEARCH_DATA(state, action) {
			state.searchData = action.payload;
		},
		TOGGLE_WISHES(state, action) {
			const { id, isTVPage } = action.payload;
			const arrayKey = isTVPage ? 'tvShows' : 'movies';
			const itemIndex = state.userData[arrayKey].findIndex(
				(item) => (isTVPage ? item.tvShowsId : item.movieId) === id,
			);

			if (itemIndex !== -1) {
				state.userData[arrayKey] = [
					...state.userData[arrayKey].slice(0, itemIndex),
					{
						...state.userData[arrayKey][itemIndex],
						wishes: !state.userData[arrayKey][itemIndex].wishes,
					},
					...state.userData[arrayKey].slice(itemIndex + 1),
				];
			} else {
				state.userData[arrayKey] = [
					...state.userData[arrayKey],
					{
						...(isTVPage ? { tvShowsId: id } : { movieId: id }),
						wishes: true,
						watching: false,
						comment: { commentId: 0, text: '' },
						rating: 0,
					},
				];
			}
		},
		TOGGLE_WATCHING(state, action) {
			const { id, isTVPage } = action.payload;
			const arrayKey = isTVPage ? 'tvShows' : 'movies';
			const itemIndex = state.userData[arrayKey].findIndex(
				(item) => (isTVPage ? item.tvShowsId : item.movieId) === id,
			);

			if (itemIndex !== -1) {
				state.userData[arrayKey] = [
					...state.userData[arrayKey].slice(0, itemIndex),
					{
						...state.userData[arrayKey][itemIndex],
						watching: !state.userData[arrayKey][itemIndex].watching,
					},
					...state.userData[arrayKey].slice(itemIndex + 1),
				];
			} else {
				state.userData[arrayKey] = [
					...state.userData[arrayKey],
					{
						...(isTVPage ? { tvShowsId: id } : { movieId: id }),
						wishes: false,
						watching: true,
						comment: { commentId: 0, text: '' },
						rating: 0,
					},
				];
			}
		},
		SET_NO_INTEREST(state, action) {
			const { id, isTVPage } = action.payload;
			const arrayKey = isTVPage ? 'tvShows' : 'movies';
			const itemIndex = state.userData[arrayKey].findIndex(
				(item) => (isTVPage ? item.tvShowsId : item.movieId) === id,
			);

			if (itemIndex !== -1) {
				state.userData[arrayKey] = [
					...state.userData[arrayKey].slice(0, itemIndex),
					{
						...state.userData[arrayKey][itemIndex],
						wishes: false,
						watching: false,
					},
					...state.userData[arrayKey].slice(itemIndex + 1),
				];
			}
		},
		SET_COMMENT(state, action) {
			const { id, isTVPage, comment } = action.payload;
			const arrayKey = isTVPage ? 'tvShows' : 'movies';
			const itemIndex = state.userData[arrayKey].findIndex(
				(item) => (isTVPage ? item.tvShowsId : item.movieId) === id,
			);

			if (itemIndex !== -1) {
				state.userData[arrayKey] = [
					...state.userData[arrayKey].slice(0, itemIndex),
					{
						...state.userData[arrayKey][itemIndex],
						comment: { commentId: 0, text: comment },
					},
					...state.userData[arrayKey].slice(itemIndex + 1),
				];
			}
		},
		UPDATE_USER_DATA(state, action) {
			const { movies, tvShows } = action.payload;
			if (movies) {
				state.userData.movies = movies;
			}
			if (tvShows) {
				state.userData.tvShows = tvShows;
			}
		},
	},
});

export const {
	LOGIN_USER,
	LOGOUT_USER,
	TOGGLE_LOGIN_POPUP,
	TOGGLE_REGISTER_POPUP,
	CHECK_AUTH_POPUP,
	CANCEL_AUTH,
	CHECK_LOGIN_ERROR,
	UPDATE_INPUT_VALUE,
	SET_BUTTON_TYPE,
	SET_SEARCH_DATA,
	TOGGLE_WISHES,
	TOGGLE_WATCHING,
	SET_NO_INTEREST,
	SET_COMMENT,
	UPDATE_USER_DATA,
} = userSlice.actions;

export default userSlice.reducer;
