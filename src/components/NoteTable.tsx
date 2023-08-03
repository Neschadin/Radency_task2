import { FC } from "react";

interface Note {
  id: number;
  name: string;
  createdAt: string;
  category: string;
  content: string;
}

interface NoteTableProps {
  data: Note[];
  headers: string[];
}

const NoteTable: FC<NoteTableProps> = ({ data, headers }) => {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((note) => (
          <tr key={note.id}>
            <td>{note.name}</td>
            <td>{note.createdAt}</td>
            <td>{note.category}</td>
            <td>{note.content}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { NoteTable };
