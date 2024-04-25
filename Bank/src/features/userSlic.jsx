import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'User',
  initialState: {
    loggedState: null,
    isLoggedIn: false,
    error: null,
  },
  reducers: {
    authenticationReducer : (state, action) => {
        state.isLoggedIn = action.payload;
    }
  },
});

export const { authenticationReducer } = userSlice.actions;

export default userSlice.reducer;
