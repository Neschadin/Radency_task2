import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { useAppSelector } from "./useStore";
import { useActions } from "./useActions";

import { TFormData, TNoteData } from "../types";
import { CATEGORIES } from "../constants";

const initialState: TFormData = {
  name: "",
  category: CATEGORIES[0],
  content: "",
};

const useNoteForm = () => {
  const { closeModal, addNote, updateNote } = useActions();
  const notes = useAppSelector((state) => state.notes);
  const modal = useAppSelector((state) => state.modal);
  const { noteId } = modal;
  const [formData, setFormData] = useState(initialState);

  const handleCloseModal = () => {
    setFormData(initialState);
    closeModal();
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevNote) => ({
      ...prevNote,
      [name]: DOMPurify.sanitize(value),
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (noteId) {
      updateNote({ formData, id: noteId });
    } else if (!noteId) {
      addNote({ formData });
    }

    handleCloseModal();
  };

  useEffect(() => {
    if (noteId) {
      const existsNote = notes.find((note: TNoteData) => note.id === noteId);
      if (existsNote) {
        const { name, category, content } = existsNote;
        setFormData({ name, category, content });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noteId]);

  return {
    formData,
    handleInputChange,
    handleSubmit,
  };
};

export { useNoteForm };
