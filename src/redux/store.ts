import { combineReducers, configureStore } from "@reduxjs/toolkit";
import notesListReducer from "./notesSlice";
import modalReducer from "./modalSlice";

const rootReducer = combineReducers({
  notes: notesListReducer,
  modal: modalReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
