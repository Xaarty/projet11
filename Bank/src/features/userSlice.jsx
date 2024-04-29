import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'User',
  initialState: {
    loggedState: null,
    isLoggedIn: false,
    error: null,
    isModalOpen: false,
  },
  reducers: {
    authenticationReducer : (state, action) => {
        state.isLoggedIn = action.payload;
    },
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
  },
});

export const { authenticationReducer, openModal, closeModal } = userSlice.actions;

export default userSlice.reducer;