export const EmptyMessage = ({ message }: { message: string }) => (
  <tr>
    <td colSpan={10} className="text-center text-xl font-semibold">
      {message}
    </td>
  </tr>
);
