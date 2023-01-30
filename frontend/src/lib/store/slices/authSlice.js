import { createSlice } from '@reduxjs/toolkit';
// import storage from 'reduxjs-toolkit-persist/lib/storage'
// import { persistReducer } from 'reduxjs-toolkit-persist'

// const persistConfig = {
//   key: 'auth',
//   storage,
// }

const initialState = {
	value: localStorage.getItem('auth') ? localStorage.getItem('auth') : null,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action) => {
			localStorage.setItem('auth', action.payload);
			state.value = action.payload;
		},
		logout: (state) => {
			localStorage.removeItem('auth');
			state.value = null;
		},
	},
});

export const { login, logout, getBlogs } = authSlice.actions;
export default authSlice.reducer;

//export default persistReducer(persistConfig, authSlice.reducer)
