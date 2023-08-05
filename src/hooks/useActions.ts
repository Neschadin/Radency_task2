import { useMemo } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useAppDispatch } from "./useStore";

import { modalActions } from "../redux/modalSlice";
import { notesListActions } from "../redux/notesSlice";

const rootActions = {
  ...modalActions,
  ...notesListActions,
};

export const useActions = () => {
  const dispatch = useAppDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
