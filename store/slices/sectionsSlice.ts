import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { TSection } from '~/types/types';




interface SectionsState {
  sections: TSection[];
  ids: number[],
}

const initialState: SectionsState = {
  sections: [],
  // sections: {}, //////////////
  ids: []
};

const sectionsSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    addSection: (state, action: PayloadAction<TSection>) => {
      // console.log('------redux---start----')
      // console.log('state: ', JSON.parse(JSON.stringify(state)));
      // console.log('action.payload: ', action.payload);

      state.sections.push(action.payload);
      state.ids.push(+action.payload.id);

      // const type: string = action.payload?.type;
      // console.log('type: ', type)
      // console.log('!!state?.sections?.[`${type}`]: ', !!state?.sections?.[`${type}`]);

      // if (!!state?.sections?.[`${type}`]) {
      //   state.sections?.[`${type}`].push(action.payload);
      // } else {
      //   console.log('state.sections: ', JSON.parse(JSON.stringify(state.sections)))
      //   state.sections[`${type}`] = [action.payload];
      //   state.sections.push
      // }

      // console.log('state: ', JSON.parse(JSON.stringify(state)));
      // console.log('-------redux---end------')

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
    // reorderSections: (state, action: PayloadAction<{fromId: string, toId: string}>) => {
    //   // Логика перетаскивания
    //   const { fromId, toId } = action.payload;
    //   const fromIndex = state.sections.findIndex(s => s.id === fromId);
    //   const toIndex = state.sections.findIndex(s => s.id === toId);
      
    //   if (fromIndex !== -1 && toIndex !== -1) {
    //     const [moved] = state.sections.splice(fromIndex, 1);
    //     state.sections.splice(toIndex, 0, moved);
        
    //     // Обновляем порядок
    //     state.sections.forEach((section, index) => {
    //       section.order = index;
    //     });
    //   }
    // },
    reorderSections: (state, action: PayloadAction<{activeId: string; overId: string}>) => {
      const { activeId, overId } = action.payload;
      const oldIndex = state.ids.indexOf(activeId);
      const newIndex = state.ids.indexOf(overId);

      if (oldIndex !== -1 && newIndex !== -1) {
        const newIds = [...state.ids];
        newIds.splice(oldIndex, 1);
        newIds.splice(newIndex, 0, activeId);
        state.ids = newIds;
      }
    },
  },
});

export const { 
  addSection,
  updateSection,
  removeSection, 
  reorderSections } = sectionsSlice.actions;
export default sectionsSlice.reducer;