import { CategoryIcon } from "./CategotyIcon";
import { ActionButton } from "./ActionButton";
import { extractDatesFromContent } from "../../utils";
import { TNoteData } from "../../types";

type TRow = {
  note: TNoteData;
  // isArchiveRow?: boolean;
};

const TableRow = ({ note }: TRow) => {
  const { id, name, createdAt, content, category, isArchived } = note;
  const parsedDates = extractDatesFromContent(content);

  return (
    <tr>
      <CategoryIcon category={category} />
      <td>{name}</td>
      <td>{createdAt}</td>
      <td>{category}</td>
      <td>{content}</td>
      <td>{parsedDates}</td>
      {!isArchived && <ActionButton icon="edit" onClick={() => {}} />}
      <ActionButton
        icon={isArchived ? "unarchive" : "archive"}
        onClick={() => {}}
      />
      <ActionButton icon="delete" onClick={() => {}} />
    </tr>
  );
};

export { TableRow };
