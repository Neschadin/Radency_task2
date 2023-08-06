import { TCategory } from "../../types";

const categoryIconMap = {
  Task: "task",
  Idea: "emoji_objects",
  "Random Thought": "psychology",
};

export const CategoryIcon = ({ category }: { category: TCategory }) => {
  const icon = categoryIconMap[category];

  return (
    <td className="w-12 text-center">
      <span className="material-symbols-outlined">{icon}</span>
    </td>
  );
};
