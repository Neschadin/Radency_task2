import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

import { TPAddNote, TPDeleteNote, TPToggleStatus, TPUpdateNote } from "./types";
import { TNoteData } from "../types";

import mockupDB from "./mockupDB.json";

const indexFinder = (state: TNoteData[], id: string) =>
  state.findIndex((note) => note.id === id);

export const notesList = createSlice({
  name: "notesList",
  initialState: mockupDB.data as TNoteData[],
  reducers: {
    addNote: {
      reducer: (state, { payload }: TPAddNote) => {
        state.push(payload);
      },
      prepare: ({ formData }) => {
        const now = new Date();
        const payload: TNoteData = {
          id: nanoid(),
          createdAt: now.toJSON(),
          isArchived: false,
          ...formData,
        };
        return { payload };
      },
    },
    updateNote: (state, { payload }: TPUpdateNote) => {
      const { name, content, category } = payload.formData;
      const i = indexFinder(state, payload.id);
      if (i === -1) return;

      state[i] = { ...state[i], name, content, category };
    },
    deleteNote: (state, { payload }: TPDeleteNote) => {
      const i = indexFinder(state, payload.id);
      if (i === -1) return;

      state.splice(i, 1);
    },
    toggleArchiveStatus: (state, action: TPToggleStatus) => {
      const { id, actionType } = action.payload;
      const i = indexFinder(state, id);
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
