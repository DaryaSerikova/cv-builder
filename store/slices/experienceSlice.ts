import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';



export type ExperienceFieldType = {
  position?: string; 
  company?: string;
  period?: string; ///???
  description?: string;
}

interface ExperienceState {
  experience: ExperienceFieldType | null;
}

const initialState: ExperienceState = {
  experience: null,
};

const experienceSlice = createSlice({
  name: 'experience',
  initialState,
  reducers: {
    updateExperience(state, action: PayloadAction<ExperienceFieldType>) {
      // console.log("action.payload: ", action.payload)
      state.experience = action.payload;
    },
    removeExperience(state) {
      state.experience = null;
    }
  },
});

export const { updateExperience, removeExperience } = experienceSlice.actions;
export default experienceSlice.reducer;