import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'User',
  initialState: {
    loggedState: null,
    isLoggedIn: false,
    error: null,
    isModalOpen: false,
    token: null,
    isAuthenticated: false,
    profile: null,
  },
  reducers: {
    authenticationReducer : (state, action) => {
      state.isLoggedIn = action.payload;
      state.token = action.payload.token;
      // console.log(action.payload)
      state.isAuthenticated = action.payload.isAuthenticated;
    },
    saveToken : (state, action) => {
      state.token = action.payload;
    },
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
    setProfile : (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { authenticationReducer, openModal, closeModal, saveToken, setProfile } = userSlice.actions;

export default userSlice.reducer;
