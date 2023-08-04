import { createSlice } from "@reduxjs/toolkit";


import data from "./data.json";
import { TNoteData } from "../types";

export const notesList = createSlice({
  name: "notesList",
  initialState: data.data as TNoteData[],
  reducers: {
    addNote: (state, action) => {
      const { id, note } = action.payload;
      const isExistId = state.some((note) => note.id === id);
      if (isExistId) return;

      note.id = 
      state.push(note);
    },
    updateNote: () => {},
    deleteNote: (state, action) => {
      const { id } = action.payload;
      const i = state.findIndex((note) => note.id === id);
      if (i === -1) return;

      state.splice(i, 1);
    },
    toggleArchiveStatus: (state, action) => {
      const { id, actionType } = action.payload;
      const i = state.findIndex((note) => note.id === id);
      if (i === -1) return;

      if (actionType === "archive") {
        state[i].isArchived = true;
      } else if (actionType === "unarchive") {
        state[i].isArchived = false;
      }
    },
  },
});

export const { actions: notesListActions, reducer: notesListReducer } =
  notesList;
