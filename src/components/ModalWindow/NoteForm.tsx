import { CATEGORIES } from "../../constants";
import { useNoteForm } from "../../hooks";

export const NoteForm = () => {
  const { formData, handleInputChange, handleSubmit } = useNoteForm();
  const { name, category, content } = formData;
  const formTitle = name ? "Edit Task" : "Add Task";

  return (
    <div>
      <h3 className="text-center font-semibold">{formTitle}</h3>

      <form onSubmit={handleSubmit}>
        <div className="flex w-96 flex-col gap-2">
          <label htmlFor="modal-name">Name:</label>
          <input
            type="text"
            id="modal-name"
            name="name"
            className="rounded-sm p-2 text-slate-800"
            value={name}
            onChange={handleInputChange}
            required
          ></input>

          <label htmlFor="modal-category">Category:</label>
          <select
            id="modal-category"
            name="category"
            className="rounded-sm p-2 text-slate-800"
            value={category}
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
            value={content}
            onChange={handleInputChange}
            required
          ></textarea>

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
