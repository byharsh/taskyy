/** Shared 2×3 drag affordance used by `TodoItem` and `TodoForm` for matching chrome. */
const TodoItemDragHandle = ({ className = "", ...rest }) => (
  <span
    className={`mt-1 flex shrink-0 select-none flex-col gap-0.5 opacity-45 ${className}`}
    aria-hidden
    {...rest}
  >
    {[0, 1, 2].map((row) => (
      <span key={row} className="flex gap-0.5">
        {[0, 1].map((col) => (
          <span
            key={col}
            className="h-[3px] w-[3px] rounded-full bg-neutral-400"
          />
        ))}
      </span>
    ))}
  </span>
);

export default TodoItemDragHandle;
