import { ChangeEvent, FormEvent, useState } from "react";
import DOMPurify from "dompurify";
import { useActions } from "./useActions";
import { TNoteData } from "../types";

const useNoteForm = (actionType: "addNote" | "editNote") => {
  const { closeModal, addNote, updateNote } = useActions();
  const [note, setNote] = useState({} as TNoteData);

  const test = {
    id: null,
    name: "",
    category: "",
    content: "",
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const sanitizedNote = {
      ...note,
      name: DOMPurify.sanitize(note.name),
      category: DOMPurify.sanitize(note.category),
      content: DOMPurify.sanitize(note.content),
    };

    if (actionType === "editNote") {
      addNoteAction(sanitizedNote);
    } else if (actionType === "addNote") {
      // For adding new note
      // addNoteAction should be your addNote action creator
      addNoteAction(sanitizedNote);
    }

    // Reset the form
    setNote({
      id: null,
      name: "",
      category: "",
      content: "",
    });
  };

  const handleCloseModal = () => {
    setNote({} as TNoteData);
    closeModal();
  };

  return {
    note,
    setNote,
    handleInputChange,
    handleSubmit,
    handleCloseModal,
  };
};

export { useNoteForm };
