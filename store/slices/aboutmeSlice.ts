import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AboutmeFieldType } from '~/types/types';




interface AboutmeState {
  aboutme: AboutmeFieldType | null;
}

const initialState: AboutmeState = {
  aboutme: null,
};

const aboutmeSlice = createSlice({
  name: 'aboutme',
  initialState,
  reducers: {
    updateAboutme(state, action: PayloadAction<AboutmeFieldType>) {
      // console.log("action.payload: ", action.payload)
      state.aboutme = action.payload;
    },
    removeAboutme(state) {
      state.aboutme = null;
    }
  },
});

export const { updateAboutme, removeAboutme } = aboutmeSlice.actions;
export default aboutmeSlice.reducer;