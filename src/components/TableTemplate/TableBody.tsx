import { MainTableRow } from "./MainTableRow";
import { TNoteData, TSummaryResult, TTableVariant } from "../../types";
import { CATEGORIES } from "../../constants";
import { SummaryTableRow } from "./SummaryTableRow";
import { EmptyMessage } from "./EmptyMessage";
import { useTableData } from "../../hooks/useTableData";

const TableBody = ({ variant }: { variant: TTableVariant }) => {
  const data = useTableData(variant);

  const message =
    variant !== "summary" && variant === "notes" ? "Add your task" : "Empty!";

  return (
    <tbody>
      {(variant === "notes" || variant === "archive") &&
        (data ? (
          (data as TNoteData[]).map((note) => (
            <MainTableRow key={note.id} note={note} />
          ))
        ) : (
          <EmptyMessage message={message} />
        ))}

      {variant === "summary" &&
        CATEGORIES.map((category, i) => (
          <SummaryTableRow
            key={i + category}
            data={data as TSummaryResult}
            category={category}
          />
        ))}
    </tbody>
  );
};

export { TableBody };
