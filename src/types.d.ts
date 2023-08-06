import { CATEGORIES } from "./constants";

export type TCategory = (typeof CATEGORIES)[number];

export type TTableVariant = "activeNotes" | "archivedNotes" | "summary";

export type TFormData = {
  name: string;
  category: TCategory;
  content: string;
};

export type TNoteData = TFormData & {
  id: string;
  createdAt: string;
  isArchived: boolean;
};

export type TSummaryResult = {
  [category in TCategory]: [number, number];
};
