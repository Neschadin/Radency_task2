import { MouseEvent, useEffect } from "react";
import { useActions } from "./useActions";
import { useAppSelector } from "./useStore";
import { useTableData } from "./useTableData";

export const useModal = () => {
  const data = useTableData("archivedNotes");
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
  }, [isModalOpen]);

  return { isModalOpen, handleBackdropClick, closeModal, modalContent };
};
