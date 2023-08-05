import { PayloadAction } from "@reduxjs/toolkit";
import { store } from "./redux/store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

type TModalContent = "noteForm" | "archiveTable" | null;

export type TInitialState = {
  isModalOpen: boolean;
  modalContent: TModalContent;
  noteId: undefined | string;
};

export type TPOpenModal = PayloadAction<{
  content: TModalContent;
  noteId?: string;
}>;

export type TPAddNote = PayloadAction<TNoteData>;

export type TPUpdateNote = PayloadAction<{ formData: TFormData; id: string }>;

export type TPDeleteNote = PayloadAction<{ id: string }>;

export type TPToggleStatus = PayloadAction<{
  id: string;
  actionType: "archive" | "unarchive";
}>;
