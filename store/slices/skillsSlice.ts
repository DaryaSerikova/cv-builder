import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


//Skills skills
export type SkillsFieldType = {
  skills: string,
}

interface SkillsState {
  skills: SkillsFieldType | null;
}

const initialState: SkillsState = {
  skills: null,
};

const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    updateSkills(state, action: PayloadAction<SkillsFieldType>) {
      // console.log("action.payload: ", action.payload)
      state.skills = action.payload;
    },
    removeSkills(state) {
      state.skills = null;
    }
  },
});

export const { updateSkills, removeSkills } = skillsSlice.actions;
export default skillsSlice.reducer;