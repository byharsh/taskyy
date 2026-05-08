import { useState } from "react";
import { Square, SquareCheck } from "../../../assets/icons";

const TodoItem = ({ children }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  return (
    <li
      className="flex items-center gap-2   "
      onClick={() => setIsCompleted((prev) => !prev)}
    >
      {/* {isCompleted ? (
        <SquareCheck color="#229b50" strokeWidth={1} absoluteStrokeWidth />
      ) : (
        <Square />
      )}
      {isCompleted ? <del>{taskName}</del> : taskName} */}
      {children(isCompleted)}
    </li>
  );
};

TodoItem.Text = ({ taskName, isCompleted }) => {
  return (
    <>
      {isCompleted ? (
        <SquareCheck color="#229b50" strokeWidth={1} absoluteStrokeWidth />
      ) : (
        <Square />
      )}
      {isCompleted ? <del>{taskName}</del> : taskName}
    </>
  );
};
export { TodoItem };
