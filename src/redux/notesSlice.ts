import { createSlice } from "@reduxjs/toolkit";

import data from "./data.json";
import { TNoteData } from "../types";

export const notesList = createSlice({
  name: "notesList",
  initialState: data.data as TNoteData[],
  reducers: {
    addNote: (state, action) => {
      //   const id = action.payload;
      //   const isExistId = state.some((note) => note.id === id);

      state.push(action.payload);
    },
    deleteNote: (state, action) => {
      const {id} = action.payload;
      const i = state.findIndex((note) => note.id === id);
      if (i === -1) return;

      state.splice(i, 1);
    },
    toggleArchiveStatus: (state, action) => {
      const { id, status } = action.payload;
      const i = state.findIndex((note) => note.id === id);
      if (i === -1) return;

      if (status === "archive") {
        state[i].isArchived = true;
      } else if (status === "unarchive") {
        state[i].isArchived = false;
      }
    },
  },
});

export const { actions: notesListActions, reducer: notesListReducer } =
  notesList;
