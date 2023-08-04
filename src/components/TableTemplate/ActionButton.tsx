interface IButton {
  onClick: () => void;
  icon: string;
}

export const ActionButton = ({ onClick, icon }: IButton) => {
  return (
    <td className="bg-gray-500 bg-opacity-20 text-center w-12">
      <button onClick={onClick}>
        <span className="material-symbols-outlined">{icon}</span>
      </button>
    </td>
  );
};
