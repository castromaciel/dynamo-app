import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducer: {
    setName: (state, action) => {
      state.action = action.payload;
    },
  },
});

export const { setName } = userSlice.actions;

export const selectName = (state) => state.user.user;

export default userSlice.reducer;
