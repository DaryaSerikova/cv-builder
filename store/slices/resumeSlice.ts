import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';



export type ResumeFieldType = {
  experience: object,
  education: object,
  skills: object,
  certificates: object,
  aboutm: object,
}

interface ResumeState {
  resume: ResumeFieldType | null;
}

const initialState: ResumeState = {
  resume: null,
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    updateResume(state, action: PayloadAction<ResumeFieldType>) {
      // console.log("action.payload: ", action.payload)
      state.resume = action.payload;
    },
    removeResume(state) {
      state.resume = null;
    }
  },
});

export const { updateResume, removeResume } = resumeSlice.actions;
export default resumeSlice.reducer;