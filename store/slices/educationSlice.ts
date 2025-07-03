import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { EducationFieldType } from '~/types/types';




interface EducationState {
  education: EducationFieldType | null;
}

const initialState: EducationState = {
  education: null,
};

const educationSlice = createSlice({
  name: 'education',
  initialState,
  reducers: {
    updateEducation(state, action: PayloadAction<EducationFieldType>) {
      // console.log("action.payload: ", action.payload)
      state.education = action.payload;
    },
    removeEducation(state) {
      state.education = null;
    }
  },
});

export const { updateEducation, removeEducation } = educationSlice.actions;
export default educationSlice.reducer;