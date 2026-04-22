import { useState } from "react";
import { Square } from "../../../assets/icons";
import { SquareCheck } from "../../../assets/icons";

const TodoItem = ({ taskName }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  return (
    <li
      className="flex items-center gap-2"
      onClick={() => setIsCompleted(!isCompleted)}
    >
      {isCompleted ? (
        <SquareCheck color="#229b50" strokeWidth={1} absoluteStrokeWidth />
      ) : (
        <Square />
      )}
      {isCompleted ? <del>{taskName}</del> : taskName}
      {/* {taskName} */}
    </li>
  );
};

export { TodoItem };
