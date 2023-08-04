import { store } from "./redux/store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type TTableVariant = "notes" | "archive" | "summary";

export type TNoteData = {
  id: number;
  createdAt: string;
  name: string;
  category: string;
  content: string;
  isArchived: boolean;
};

export type TFormData = {
  id?: number;
  name: string;
  category: string;
  content: string;
};

export type TSummaryResult = {
  [category: string]: [number, number];
};
