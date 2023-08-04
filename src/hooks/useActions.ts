import { useMemo } from "react";
import { useAppDispatch } from "./useStore";

import { modalActions } from "../redux/modalSlice";
import { notesListActions } from "../redux/notesSlice";
import { bindActionCreators } from "@reduxjs/toolkit";

const rootActions = {
  ...modalActions,
  ...notesListActions,
};

export const useActions = () => {
  const dispatch = useAppDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
