export const CategoryIcon = ({ category }: { category: string }) => {
  let iconName = "";

  switch (category) {
    case "Task":
      iconName = "task";
      break;
    case "Idea":
      iconName = "emoji_objects";
      break;
    case "Random Thought":
      iconName = "psychology";
      break;
    default:
      break;
  }

  return (
    <td className="w-12 text-center">
      <span className="material-symbols-outlined">{iconName}</span>
    </td>
  );
};
