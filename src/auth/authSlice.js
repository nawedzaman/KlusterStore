import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authenticated: false,
  },
  reducers: {
    setAuthenticated: (state, action) => {
      state.authenticated = action.payload;
    },
  },
});

export const { setAuthenticated } = authSlice.actions;
export const selectAuthenticated = (state) => state.auth.authenticated;
export default authSlice.reducer;
