import { CategoryIcon } from "./CategoryIcon";
import { TCategory, TSummaryResult } from "../../types";

type TRow = {
  data: TSummaryResult;
  category: TCategory;
};

export const SummaryTableRow = ({ data, category }: TRow) => {
  const rowData = data[category];
  const activeCount = rowData ? rowData[0] : 0;
  const archivedCount = rowData ? rowData[1] : 0;

  return (
    <tr>
      <CategoryIcon category={category} />
      <td>{category}</td>
      <td>{activeCount}</td>
      <td>{archivedCount}</td>
    </tr>
  );
};
