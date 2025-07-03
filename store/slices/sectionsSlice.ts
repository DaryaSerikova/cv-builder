import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';



export type SectionsFieldType = {
  // experience?: object,
  // education?: object,
  // skills?: object,
  // certificates?: object,
  // aboutme?: object,
}

interface SectionsState {
  sections: SectionsFieldType | null;
  // 'experience' | 'education' | 'skills' | 'certificates' | 'aboutme'
}

const initialState: SectionsState = {
  sections: null,
};

const experienceSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    addSection(state, action: PayloadAction<SectionsFieldType>) {
      // console.log("action.payload: ", action.payload)
      state.sections = state.sections ? [...state.sections, action.payload] : [action.payload];
    },
    removeSection(state) {
      // state.sections = null;
    }
  },
});

export const { addSection, removeSection } = experienceSlice.actions;
export default experienceSlice.reducer;