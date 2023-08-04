import { ChangeEvent, FormEvent, useState } from "react";
import { CATEGORIES } from "../../constants";
import { useActions } from "../../hooks/useActions";
import { useNoteForm } from "../../hooks/useForm";

type TNoteForm = { actionType: "editNote" | "addNote" };

export const NoteForm = ({ actionType }: TNoteForm) => {
const {}=useNoteForm(actionType)

  const { closeModal, addNote } = useActions();
  const [formData, setFormData] = useState({
    name: "",
    category: CATEGORIES[0],
    content: "",
  });

  const handleCloseModal = () => closeModal();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNote(formData);
    handleCloseModal();
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <h3 className="text-center font-semibold">Add/Edit Task</h3>

      <form onSubmit={handleSubmit}>
        <div className="flex w-96 flex-col gap-2">
          <label htmlFor="modal-name">Name:</label>
          <input
            type="text"
            id="modal-name"
            name="name"
            className="rounded-sm p-2 text-slate-800"
            value={formData.name}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="modal-category">Category:</label>
          <select
            id="modal-category"
            name="category"
            className="rounded-sm p-2 text-slate-800"
            value={formData.category}
            onChange={handleInputChange}
            required
          >
            {CATEGORIES.map((category, i) => (
              <option key={category + i} value={category}>
                {category}
              </option>
            ))}
          </select>

          <label htmlFor="modal-content">Content:</label>
          <textarea
            id="modal-content"
            name="content"
            className="rounded-sm p-2 text-slate-800"
            value={formData.content}
            onChange={handleInputChange}
            required
          ></textarea>

          {/* <input type="hidden" id="modal-taskId" name="taskId" /> */}

          <button
            type="submit"
            className="mt-6 w-1/2 self-center rounded-md border font-semibold"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
