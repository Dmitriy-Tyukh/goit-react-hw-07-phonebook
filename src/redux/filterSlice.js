import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState.filter,
  reducers: {
    searchContact: (state, { payload }) => {
      return (state = payload);
    },
  },
});

export const filterReduser = filterSlice.reducer;
export const { searchContact } = filterSlice.actions;
