import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './slices/authSlice';
import experienceSlice from './slices/experienceSlice';
import educationSlice from './slices/educationSlice';
import resumeSlice from './slices/resumeSlice';
import skillsSlice from './slices/skillsSlice'
import sectionsSlice from './slices/sectionsSlice';

export const store = configureStore({
  reducer: {
    experience: experienceSlice,
    education: educationSlice,
    skills: skillsSlice,
    // resume: resumeSlice,
    sections: sectionsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;