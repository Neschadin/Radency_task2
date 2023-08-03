export const Modal = () => {
  return (
    <div
      id="modal"
      className="fixed left-0 top-0 hidden h-full w-full flex-col items-center justify-center bg-slate-900 bg-opacity-50"
    >
      <div className="relative rounded-md bg-neutral-500 px-8 py-16">
        <div className="close-btn absolute right-5 top-2 text-3xl">
          <button id="close-modal-btn">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div id="add-task-form" className="hidden">
          <h3 className="text-center font-semibold">Add/Edit Task</h3>

          <form id="modal-form">
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

        <div
          id="archive-table"
          className="relative hidden w-full min-w-[1280px]"
        >
          <table className="w-full">
            <thead>
              <tr className="bg-gray-400">
                <td className="w-[50px]"></td>
                <th className="w-[12%]">Name</th>
                <th className="w-[10%]">Created</th>
                <th className="w-[14%]">Category</th>
                <th className="w-1/2">Content</th>
                <th className="w-[14%]">Dates</th>
                <td className="w-[50px] bg-gray-500 bg-opacity-50"></td>
                <td className="w-[50px] bg-gray-500 bg-opacity-50"></td>
              </tr>
            </thead>

            <tbody id="archive-table-container"></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
