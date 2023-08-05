import { MouseEvent, useEffect } from "react";
import { useAppSelector, useActions, useTableData } from "../../hooks";

import { NoteForm } from "./NoteForm";
import { TableTemplate } from "../TableTemplate";

export const ModalWindow = () => {
  const data = useTableData("archive");
  const { closeModal } = useActions();
  const { isModalOpen, modalContent } = useAppSelector((state) => state.modal);

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    if (modalContent === "archiveTable" && !data) {
      closeModal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Esc") {
        closeModal();
      }
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleEscKey);
    }

    return () => window.removeEventListener("keydown", handleEscKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpen]);

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
        {modalContent === "archiveTable" && <TableTemplate variant="archive" />}
      </div>
    </div>
  );
};
