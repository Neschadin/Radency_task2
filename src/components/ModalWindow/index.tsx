import { MouseEvent, useEffect } from "react";
import { useAppSelector } from "../../hooks/useStore";
import { useActions } from "../../hooks/useActions";

import { NoteForm } from "./NoteForm";
import { TableTemplate } from "../TableTemplate";
import { useTableData } from "../../hooks/useTableData";

export const ModalWindow = () => {
  const { isModalOpen, modalContent } = useAppSelector((state) => state.modal);
  const { closeModal } = useActions();
  const data = useTableData("archive");

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) closeModal();
  };

  useEffect(() => {
    if (modalContent === "archiveTable" && !data) closeModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Esc") closeModal();
    };

    if (isModalOpen) window.addEventListener("keydown", handleEscKey);

    return () => window.removeEventListener("keydown", handleEscKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpen]);

  return !isModalOpen ? null : (
    <div
      onClick={handleBackdropClick}
      className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-slate-900 bg-opacity-50"
    >
      <div className="relative max-w-[1280px] rounded-md bg-neutral-500 px-8 py-16">
        <div className="close-btn absolute right-5 top-2 text-3xl">
          <button onClick={() => closeModal()}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {modalContent === "editNote" && <NoteForm actionType={modalContent} />}
        {modalContent === "addNote" && <NoteForm actionType={modalContent} />}
        {modalContent === "archiveTable" && <TableTemplate variant="archive" />}
      </div>
    </div>
  );
};
