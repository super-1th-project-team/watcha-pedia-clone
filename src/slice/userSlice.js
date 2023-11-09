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
} = userSlice.actions;

export default userSlice.reducer;
