import { TableRow } from "./TableRow";

import data from "../../redux/data.json";
import { TNoteData } from "../../types";

type TTable = { variant: "notes" | "archive" | "summary" };

export const TableTemplate = ({ variant }: TTable) => {
  const noteList: TNoteData[] = data.data;

  return (
    <div>
      <table className="w-full">
        <thead className="h-12 w-full">
          <tr className="w-full bg-gray-400">
            <td className="w-[50px]"></td>
            {variant === "summary" && (
              <>
                <th>Active</th>
                <th>Archived</th>
              </>
            )}
            {variant !== "summary" && (
              <>
                <th className="w-[12%]">Name</th>
                <th className="w-[10%]">Created</th>
                <th className="w-[14%]">Category</th>
                <th className="">Content</th>
                <th className="w-[14%]">Dates</th>
                <td className="w-[50px] bg-gray-500 bg-opacity-50"></td>
                <td className="w-[50px] bg-gray-500 bg-opacity-50"></td>
              </>
            )}
            {variant === "notes" && (
              <td className="w-[50px] bg-gray-500 bg-opacity-50"></td>
            )}
          </tr>
        </thead>

        <tbody>
          {noteList.map((note) => (
            <TableRow key={note.id} note={note} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
