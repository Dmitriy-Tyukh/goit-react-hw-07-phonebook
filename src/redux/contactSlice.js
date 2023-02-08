import { addContacts, deleteContacts, fetchContacts } from './operations';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // addConyacts Reducers
    [addContacts.pending](state) {
      state.isLoading = true;
    },
    [addContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // deleteContacts Reducers
    [deleteContacts.pending](state) {
      state.isLoading = true;
    },
    [deleteContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(({ id }) => id !== action.payload.id);
    },
    [deleteContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const persistConfig = {
    key: 'phoneContact',
    storage,
    whitelist: ['items'],
};

export const contactReduser = contactSlice.reducer;
export const persistedReducer = persistReducer(persistConfig, contactReduser);
