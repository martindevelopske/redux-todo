import { configureStore } from '@reduxjs/toolkit';
import todoreducer from '../features/todoSlice'
export const store = configureStore({
  reducer: {
    todos:todoreducer,
  },
});
