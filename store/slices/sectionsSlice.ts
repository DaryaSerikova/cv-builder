import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { TSection } from '~/types/types';




interface SectionsState {
  sections: TSection[];
  ids: number[],
}

const initialState: SectionsState = {
  sections: [],
  ids: []
};

const sectionsSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    addSection: (state, action: PayloadAction<TSection>) => {
      state.sections.push(action.payload);
      state.ids.push(+action.payload.id);
    },
    updateSection: (state, action: PayloadAction<TSection>) => {
      const index = state.sections.findIndex(s => s.id === action.payload.id);
      if (index !== -1) {
        state.sections[index] = action.payload;
      }
    },
    removeSection: (state, action: PayloadAction<string>) => {
      state.sections = state.sections.filter(s => s.id !== action.payload);
      state.ids = state.ids.filter(s => s !== +action.payload); //не проверила
    },
    reorderSections: (state, action: PayloadAction<{activeId: string; overId: string}>) => {
      // console.log('----reorderSections--start-----')
      
      const { activeId, overId } = action.payload;
      const oldIndex = state.ids.indexOf(activeId); //они подходят и для ids, и sections
      const newIndex = state.ids.indexOf(overId);

      // console.log('state: ', JSON.parse(JSON.stringify(state)));
      // console.log('action.payload: ', action.payload);
      // console.log('activeId: ', activeId, ', newIndex: ', overId);
      // console.log('поиск места indexOf, на котором находится id')
      // console.log('oldIndex: ', oldIndex, ', newIndex: ', newIndex);

      if (oldIndex !== -1 && newIndex !== -1) {
        //для ids
        const newIds = [...state.ids];
        newIds.splice(oldIndex, 1);
        newIds.splice(newIndex, 0, activeId);
        state.ids = newIds;

        //для sections
        let activeSection = state?.sections?.filter((section) => section.id === activeId)[0];
        const newSections = [...state.sections];
        newSections.splice(oldIndex, 1);
        newSections.splice(newIndex, 0, activeSection);
        state.sections = newSections;

      }
      // console.log('----reorderSections----end-----')
    },
  },
});

export const { 
  addSection,
  updateSection,
  removeSection, 
  reorderSections } = sectionsSlice.actions;
export default sectionsSlice.reducer;