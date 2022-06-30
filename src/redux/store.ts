import { configureStore } from '@reduxjs/toolkit';
import countersReducer from './counters/counterSlice';

export const store = configureStore({
  reducer: {
    countersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
