import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	id: 0,
	email: '',
	password: '',
	isLoggedIn: false,
	isRegistered: false,
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
	},
});

export const {
	LOGIN_USER,
	LOGOUT_USER,
	TOGGLE_LOGIN_USER,
	TOGGLE_REGISTER_USER,
	CANCEL_AUTH,
} = userSlice.actions;

export default userSlice.reducer;
