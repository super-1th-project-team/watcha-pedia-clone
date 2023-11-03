import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	id: 0,
	email: '',
	password: '',
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
	},
});

export const { LOGIN_USER, LOGOUT_USER } = userSlice.actions;

export default userSlice.reducer;
