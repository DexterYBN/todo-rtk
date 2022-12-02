import { configureStore } from '@reduxjs/toolkit';
import TodoReducer from '../features/TodoReducer';

export const store = configureStore({
  reducer: TodoReducer
});
