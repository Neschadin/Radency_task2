import { TNoteData, TSummaryResult, TTableVariant } from "../types";
import { useAppSelector } from "./useStore";

const getArchivedNotes = (notes: TNoteData[]) => {
  const archivedNotes = notes.filter((note: TNoteData) => note.isArchived);
  return archivedNotes.length > 0 ? archivedNotes : null;
};

const getActiveNotes = (notes: TNoteData[]) => {
  const activeNotes = notes.filter((note: TNoteData) => !note.isArchived);
  return activeNotes.length > 0 ? activeNotes : null;
};

const getSummaryData = (notes: TNoteData[]) => {
  const summary = {} as TSummaryResult;

  notes.forEach(({ category, isArchived }) => {
    if (!summary[category]) {
      summary[category] = [0, 0];
    }

    if (isArchived) {
      summary[category][1]++;
    } else {
      summary[category][0]++;
    }
  });

  return summary;
};

export const useTableData = (variant: TTableVariant) => {
  const notes = useAppSelector((state) => state.notes);
  let data: TNoteData[] | TSummaryResult | null = null;

  if (variant === "activeNotes") {
    data = getActiveNotes(notes);
  } else if (variant === "archivedNotes") {
    data = getArchivedNotes(notes);
  } else if (variant === "summary") {
    data = getSummaryData(notes);
  }

  return data;
};
