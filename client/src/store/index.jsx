import { configureStore } from '@reduxjs/toolkit';
import paramsReducer from './reducers/params.reducer';

export const store = configureStore({
  reducer: {
    params: paramsReducer,
  },
});