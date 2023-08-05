interface IButton {
  onClick: () => void;
  icon: string;
}

export const ActionButton = ({ onClick, icon }: IButton) => {
  return (
    <td className="w-12 bg-gray-500 bg-opacity-20 text-center">
      <button onClick={onClick}>
        <span className="material-symbols-outlined">{icon}</span>
      </button>
    </td>
  );
};
