import { createSlice } from "@reduxjs/toolkit";
import { TInitialState, TPOpenModal } from "./types";

const initialState: TInitialState = {
  isModalOpen: false,
  modalContent: null,
  noteId: undefined,
};

export const modalSlice = createSlice({
  name: "modalState",
  initialState,
  reducers: {
    openModal: (state, { payload }: TPOpenModal) => {
      state.isModalOpen = true;
      state.modalContent = payload.content;
      state.noteId = payload.noteId;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.modalContent = null;
      state.noteId = undefined;
    },
  },
});

export const { actions: modalActions, reducer: modalReducer } = modalSlice;
