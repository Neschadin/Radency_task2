import { NoteForm } from "./NoteForm";
import { TableTemplate } from "../TableTemplate";
import { useModal } from "../../hooks/useModal";

export const ModalWindow = () => {
  const { isModalOpen, handleBackdropClick, closeModal, modalContent } =
    useModal();

  return !isModalOpen ? null : (
    <div
      onClick={handleBackdropClick}
      className="fixed left-0 top-0 h-screen w-screen bg-slate-900 bg-opacity-50"
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-neutral-500 px-8 py-16">
        <div className="close-btn absolute right-5 top-2 text-3xl">
          <button onClick={() => closeModal()}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {modalContent === "noteForm" && <NoteForm />}
        {modalContent === "archiveTable" && <TableTemplate variant="archivedNotes" />}
      </div>
    </div>
  );
};
