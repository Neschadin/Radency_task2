import { useAppDispatch } from "../hooks/useStore";
import { openModal } from "../redux/modalSlice";

export const MainButtons = () => {
  const dispatch = useAppDispatch();

  const handleOpenArchiveTable = () => dispatch(openModal("archiveTable"));
  const handleOpenEditNoteForm = () => dispatch(openModal("editNoteForm"));

  return (
    <div className="flex justify-evenly">
      <button
        onClick={handleOpenEditNoteForm}
        className="flex items-center gap-2 rounded-md border-2 border-gray-400 px-4 py-2 transition hover:bg-gray-500"
      >
        <span className="material-symbols-outlined">add_circle</span>
        <span>ADD TASK</span>
      </button>

      <button
        onClick={handleOpenArchiveTable}
        className="flex items-center gap-2 rounded-md border-2 border-gray-400 px-4 py-2 transition hover:bg-gray-500"
      >
        <span className="material-symbols-outlined">inventory_2</span>
        <span>ARCHIVE</span>
      </button>
    </div>
  );
};
