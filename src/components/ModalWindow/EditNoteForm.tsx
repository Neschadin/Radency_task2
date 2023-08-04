
export const EditNoteForm = () => {
  return (
    <div >
    <h3 className="text-center font-semibold">Add/Edit Task</h3>

    <form >
      <div className="flex w-96 flex-col gap-2">
        <label htmlFor="modal-name">Name:</label>
        <input
          type="text"
          id="modal-name"
          name="name"
          className="rounded-sm p-2 text-slate-800"
          required
        />

        <label htmlFor="modal-category">Category:</label>
        <select
          id="modal-category"
          name="category"
          className="rounded-sm p-2 text-slate-800"
          required
        ></select>

        <label htmlFor="modal-content">Content:</label>
        <textarea
          id="modal-content"
          name="content"
          className="rounded-sm p-2 text-slate-800"
          required
        ></textarea>

        <input type="hidden" id="modal-taskId" name="taskId" />

        <button
          type="submit"
          className="mt-6 w-1/2 self-center rounded-md border font-semibold"
        >
          Save
        </button>
      </div>
    </form>
  </div>
  )
}
