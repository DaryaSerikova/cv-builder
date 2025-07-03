import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { ExperienceFieldType } from '~/types/types';




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