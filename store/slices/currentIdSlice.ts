import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';



const initialState: number = 0;

const currentIdSlice = createSlice({
  name: 'currentId',
  initialState,
  reducers: {
    updateCurrentId(state, action: PayloadAction<number>) {
      return action.payload;
    },
  },
});

export const { updateCurrentId } = currentIdSlice.actions;
export default currentIdSlice.reducer;