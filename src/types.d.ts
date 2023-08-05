export type TTableVariant = "notes" | "archive" | "summary";

export type TNoteData = {
  id: string;
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
