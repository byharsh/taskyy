import { useState } from "react";
import { Square, SquareCheck } from "../../../assets/icons";
import TodoCategoryTag from "./TodoCategoryTag";
import TodoItemDragHandle from "./TodoItemDragHandle";

const todoItemCardClass =
  "flex list-none items-stretch gap-3 rounded-2xl border border-neutral-100/80 bg-white px-4 py-3.5 shadow-[0_6px_20px_-4px_rgba(0,0,0,0.07),0_2px_6px_-2px_rgba(0,0,0,0.04)] transition hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.09)]";

const TodoItem = ({ children, category, categoryVariant }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  return (
    <li
      className={`${todoItemCardClass} cursor-pointer`}
      onClick={() => setIsCompleted((prev) => !prev)}
    >
      <TodoItemDragHandle
        onClick={(e) => e.stopPropagation()}
        onPointerDown={(e) => e.stopPropagation()}
        className="cursor-grab"
      />
      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        {children(isCompleted)}
        {category ? (
          <div className="self-start" onClick={(e) => e.stopPropagation()}>
            <TodoCategoryTag label={category} variant={categoryVariant} />
          </div>
        ) : null}
      </div>
    </li>
  );
};

TodoItem.Text = ({ taskName, isCompleted, projectId, projectName }) => {
  return (
    <div className="flex min-w-0 flex-1 items-start gap-3">
      <span className="mt-0.5 shrink-0 text-neutral-300 [&_svg]:rounded-md">
        {isCompleted ? (
          <SquareCheck color="#229b50" strokeWidth={1} absoluteStrokeWidth />
        ) : (
          <Square strokeWidth={2} />
        )}
      </span>
      <span className="min-w-0 text-[15px] font-semibold leading-snug text-neutral-800">
        {isCompleted ? <del>{taskName}</del> : taskName}
      </span>
      {projectId && projectName && (
        <span className="text-xs text-neutral-500">
          {projectId} - {projectName}
        </span>
      )}
    </div>
  );
};

export { TodoItem, todoItemCardClass };
