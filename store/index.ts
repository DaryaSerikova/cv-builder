import { configureStore, current } from '@reduxjs/toolkit';
// import authReducer from './slices/authSlice';
import experienceSlice from './slices/experienceSlice';
import educationSlice from './slices/educationSlice';
import skillsSlice from './slices/skillsSlice'
import sectionsSlice from './slices/sectionsSlice';
import aboutmeSlice from './slices/aboutmeSlice';
import certificatesSlice from './slices/certificatesSlice';
import currentIdSlice from './slices/currentIdSlice'

export const store = configureStore({
  reducer: {
    experience: experienceSlice,
    education: educationSlice,
    skills: skillsSlice,
    aboutme: aboutmeSlice,
    certificates: certificatesSlice,
    sections: sectionsSlice,
    currentId: currentIdSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;