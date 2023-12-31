import { useActions } from "../hooks/useActions";

const buttonStyle =
  "flex items-center gap-2 rounded-md border-2 border-gray-400 px-4 py-2 transition hover:bg-gray-500";

export const MainButtons = () => {
  const { openModal } = useActions();

  const handleOpenArchiveTable = () => openModal({ content: "archiveTable" });
  const handleOpenNoteForm = () => openModal({ content: "noteForm" });

  return (
    <div className="flex justify-evenly">
      <button onClick={handleOpenNoteForm} className={buttonStyle}>
        <span className="material-symbols-outlined">add_circle</span>
        <span>ADD TASK</span>
      </button>

      <button onClick={handleOpenArchiveTable} className={buttonStyle}>
        <span className="material-symbols-outlined">inventory_2</span>
        <span>ARCHIVE</span>
      </button>
    </div>
  );
};
