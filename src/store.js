// Import necessary Redux and Redux Persist libraries
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Defaults to localStorage for web

// Import your reducers and create the root reducer
import rootReducer from './reducers/taskReducer';

// Configure Redux Persist
const persistConfig = {
  key: 'root',
  storage,
  // Optionally, you can whitelist or blacklist specific reducers
  // whitelist: ['tasks'], // Include only 'tasks' reducer in persistence
  // blacklist: ['auth'], // Exclude 'auth' reducer from persistence
};

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create Redux store
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
