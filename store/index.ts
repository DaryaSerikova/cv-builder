import { configureStore, current } from '@reduxjs/toolkit';
import sectionsSlice from './slices/sectionsSlice';
import currentIdSlice from './slices/currentIdSlice'

export const store = configureStore({
  reducer: {
    sections: sectionsSlice,
    currentId: currentIdSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;