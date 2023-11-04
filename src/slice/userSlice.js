import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	id: 0,
	email: '',
	password: '',
	isLoggedIn: false,
	isRegistered: false,
	isLoginError: false,
	inputValue: {
		email: '',
		password: '',
	},
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		LOGIN_USER(state, action) {
			const { id, email, password } = action.payload;
			state.id = id;
			state.email = email;
			state.password = password;
		},
		LOGOUT_USER(state) {
			state.id = 0;
			state.email = '';
			state.password = '';
		},
		TOGGLE_LOGIN_USER(state) {
			state.isLoggedIn = !state.isLoggedIn;
		},
		TOGGLE_REGISTER_USER(state) {
			state.isRegistered = !state.isRegistered;
		},
		CANCEL_AUTH(state, action) {
			const { isLoggedIn, isRegistered } = action.payload;
			state.isLoggedIn = isLoggedIn;
			state.isRegistered = isRegistered;
		},
		CHECK_LOGIN_ERROR(state, action) {
			const isLoginError = action.payload;
			state.isLoginError = isLoginError;
		},
		UPDATE_INPUT_VALUE(state, action) {
			const { name, value } = action.payload;
			state.inputValue[name] = value;
		},
	},
});

export const {
	LOGIN_USER,
	LOGOUT_USER,
	TOGGLE_LOGIN_USER,
	TOGGLE_REGISTER_USER,
	CANCEL_AUTH,
	CHECK_LOGIN_ERROR,
	UPDATE_INPUT_VALUE,
} = userSlice.actions;

export default userSlice.reducer;
