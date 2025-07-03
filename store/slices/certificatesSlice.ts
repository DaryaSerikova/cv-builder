import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';



export type CertificatesFieldType = {
  certificates?: string; 
}

interface CertificatesState {
  certificates: CertificatesFieldType | null;
}

const initialState: CertificatesState = {
  certificates: null,
};

const certificatesSlice = createSlice({
  name: 'certificates',
  initialState,
  reducers: {
    updateCertificates(state, action: PayloadAction<CertificatesFieldType>) {
      // console.log("action.payload: ", action.payload)
      state.certificates = action.payload;
    },
    removeCertificates(state) {
      state.certificates = null;
    }
  },
});

export const { updateCertificates, removeCertificates } = certificatesSlice.actions;
export default certificatesSlice.reducer;