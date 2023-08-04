import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modalState",
  initialState: { isModalOpen: false, modalContent: null },
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

export const { actions: modalActions, reducer: modalReducer } = modalSlice;
