import { useActions } from "../../hooks/useActions";
import { CategoryIcon } from "./CategoryIcon";
import { ActionButton } from "./ActionButton";
import { extractDatesFromContent, formatDate } from "../../utils";
import { TNoteData } from "../../types";

const MainTableRow = ({ note }: { note: TNoteData }) => {
  const { toggleArchiveStatus, deleteNote, openModal } = useActions();
  const { id, name, createdAt, content, category, isArchived } = note;
  const parsedDates = extractDatesFromContent(content);

  const handleArchiveButton = () => {
    const actionType = isArchived ? "unarchive" : "archive";
    toggleArchiveStatus({ id, actionType });
  };

  const handleDeleteButton = () => {
    deleteNote({ id });
  };

  const handleEditButton = () => {
    openModal({ content: "noteForm", noteId: id });
  };

  return (
    <tr>
      <CategoryIcon category={category} />
      <td>{name}</td>
      <td>{formatDate(createdAt)}</td>
      <td>{category}</td>
      <td>{content}</td>
      <td>{parsedDates}</td>
      {!isArchived && <ActionButton icon="edit" onClick={handleEditButton} />}
      <ActionButton
        icon={isArchived ? "unarchive" : "archive"}
        onClick={handleArchiveButton}
      />
      <ActionButton icon="delete" onClick={handleDeleteButton} />
    </tr>
  );
};

export { MainTableRow };
