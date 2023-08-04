import { CategoryIcon } from "./CategoryIcon";
import { TSummaryResult } from "../../types";

type TRow = {
  data: TSummaryResult;
  category: string;
};

export const SummaryTableRow = ({ data, category }: TRow) => {
  const activeCount = data[category] ? data[category][0] : 0;
  const archivedCount = data[category] ? data[category][1] : 0;

  return (
    <tr>
      <CategoryIcon category={category} />
      <td>{category}</td>
      <td>{activeCount}</td>
      <td>{archivedCount}</td>
    </tr>
  );
};