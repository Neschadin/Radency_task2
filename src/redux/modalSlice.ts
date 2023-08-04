import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modalState",
  initialState: { isModalOpen: true, modalContent: null },
  reducers: {
    openModal: (state, action) => {
      state.isModalOpen = true;
      state.modalContent = action.payload;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.modalContent = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
