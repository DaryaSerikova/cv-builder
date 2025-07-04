import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { ExperienceFieldType, 
  EducationFieldType, 
  SkillsFieldType, 
  AboutmeFieldType, 
  CertificatesFieldType
 } from '~/types/types';



type Section = ExperienceFieldType | EducationFieldType | SkillsFieldType | AboutmeFieldType | CertificatesFieldType;

interface SectionsState {
  sections: Section[];
}

// 'experience' | 'education' | 'skills' | 'certificates' | 'aboutme'

const initialState: SectionsState = {
  sections: [],
};

const sectionsSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    addSection: (state, action: PayloadAction<Section>) => {
      state.sections.push(action.payload);
    },
    updateSection: (state, action: PayloadAction<Section>) => {
      const index = state.sections.findIndex(s => s.id === action.payload.id);
      if (index !== -1) {
        state.sections[index] = action.payload;
      }
    },
    removeSection: (state, action: PayloadAction<string>) => {
      state.sections = state.sections.filter(s => s.id !== action.payload);
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
  },
});

export const { addSection, updateSection, removeSection
  // reorderSections 
} = sectionsSlice.actions;
export default sectionsSlice.reducer;