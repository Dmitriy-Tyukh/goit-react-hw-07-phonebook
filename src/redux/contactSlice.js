import { addContacts, deleteContacts, fetchContacts } from './operations';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const handelePending = state => {
    state.isLoading = true;
    state.error = null;
};
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
    extraReducers: builder => {
            builder
                // Get all contacts reducers
                .addCase(fetchContacts.pending, handelePending)
                .addCase(fetchContacts.fulfilled, (state, { payload }) => {
                    state.isLoading = false;
                    state.error = null;
                    state.items = payload;
                })
                .addCase(fetchContacts.rejected, handleRejected)

                // Add contact reducers
                .addCase(addContacts.pending, handelePending)
                .addCase(addContacts.fulfilled, (state, { payload }) => {
                    state.isLoading = false;
                    state.error = null;
                    state.items.push(payload);
                })
                .addCase(addContacts.rejected, handleRejected)

                // Delete contact reducers
                .addCase(deleteContacts.pending, handelePending)
                .addCase(deleteContacts.fulfilled, (state, { payload }) => {
                    state.isLoading = false;
                    state.error = null;
                    state.items = state.items.filter(({ id }) => id !== payload.id);
                })
                .addCase(deleteContacts.rejected, handleRejected)
        },
});

const persistConfig = {
    key: 'phoneContact',
    storage,
    whitelist: ['items'],
};

export const contactReduser = contactSlice.reducer;
export const persistedReducer = persistReducer(persistConfig, contactReduser);



//     [fetchContacts.pending](state) {
//       state.isLoading = true;
//       state.error = null;
//     },
//     [fetchContacts.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     [fetchContacts.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//     // addConyacts Reducers
//     [addContacts.pending](state) {
//       state.isLoading = true;
//     },
//     [addContacts.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items.push(action.payload);
//     },
//     [addContacts.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//     // deleteContacts Reducers
//     [deleteContacts.pending](state) {
//       state.isLoading = true;
//     },
//     [deleteContacts.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = state.items.filter(({ id }) => id !== action.payload.id);
//     },
//     [deleteContacts.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },