import { CategoryIcon } from "./CategoryIcon";
import { ActionButton } from "./ActionButton";
import { extractDatesFromContent } from "../../utils";
import { TNoteData } from "../../types";
import { useActions } from "../../hooks/useActions";

const MainTableRow = ({ note }: { note: TNoteData }) => {
  const { toggleArchiveStatus, deleteNote } = useActions();
  const { id, name, createdAt, content, category, isArchived } = note;
  const parsedDates = extractDatesFromContent(content);

  const handleArchiveButton = () => {
    const actionType = isArchived ? "unarchive" : "archive";
    toggleArchiveStatus({ id, actionType });
  };

  const handleDeleteButton = () => {
    deleteNote({ id });
  };

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
        onClick={handleArchiveButton}
      />
      <ActionButton icon="delete" onClick={handleDeleteButton} />
    </tr>
  );
};

export { MainTableRow };
