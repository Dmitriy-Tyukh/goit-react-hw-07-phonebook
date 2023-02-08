import { configureStore } from '@reduxjs/toolkit';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';
import { persistedReducer } from './contactSlice';
import { filterReduser } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: filterReduser,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

  export let persistor = persistStore(store);