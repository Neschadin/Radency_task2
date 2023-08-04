import { EditNoteForm } from "./EditNoteForm";
import { TableTemplate } from "../TableTemplate";
import { useAppDispatch, useAppSelector } from "../../hooks/useStore";
import { closeModal } from "../../redux/modalSlice";
import { MouseEvent,  useEffect } from "react";

export const ModalWindow = () => {
  const { isModalOpen, modalContent } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseModal();
    };

    if (isModalOpen) window.addEventListener("keydown", handleEscKey);

    return () => window.removeEventListener("keydown", handleEscKey);
  }, [isModalOpen]);

  return !isModalOpen ? null : (
    <div
      onClick={handleBackdropClick}
      id="modal"
      className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-slate-900 bg-opacity-50"
    >
      <div className="relative max-w-[1280px] rounded-md bg-neutral-500 px-8 py-16">
        <div className="close-btn absolute right-5 top-2 text-3xl">
          <button onClick={handleCloseModal}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {modalContent === "editNoteForm" && <EditNoteForm />}

        {modalContent === "archiveTable" && <TableTemplate variant="archive" />}
      </div>
    </div>
  );
};
