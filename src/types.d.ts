import { store } from "./redux/store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type TNoteData = {
  id: number;
  createdAt: string;
  name: string;
  category: string;
  content: string;
  isArchived: boolean
};

export type TFormData = {
  id?: number;
  name: string;
  category: string;
  content: string;
};

