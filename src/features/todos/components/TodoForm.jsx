import { forwardRef, useEffect, useRef } from "react";
import { Check, X } from "lucide-react";

import { useForm } from "react-hook-form";

import { todoItemCardClass } from "./TodoItem";
import TodoItemDragHandle from "./TodoItemDragHandle";

const CATEGORY_OPTIONS = [
  { variant: "personal", label: "Personal" },
  { variant: "work", label: "Work" },
  { variant: "chores", label: "Chores" },
  { variant: "growth", label: "Growth" },
  { variant: "family", label: "Family" },
  { variant: "sideHustle", label: "Side Hustle" },
];

const formCardClass = `${todoItemCardClass} !py-3`;

const fieldSurfaceClass =
  "w-full rounded-xl border border-neutral-200/40 bg-neutral-100/55 px-3 py-2 text-[15px] font-semibold text-neutral-800 outline-none transition placeholder:text-neutral-400 focus:border-neutral-300/80 focus:bg-neutral-100/80";

const actionBtnClass =
  "flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-xl border-2 border-transparent transition-colors";

// const CategoryPicker = ({ value, onChange, className = "" }) => {

//   const [open, setOpen] = useState(false);
//   const rootRef = useRef(null);

//   const selected =
//     CATEGORY_OPTIONS.find((o) => o.variant === value) ?? CATEGORY_OPTIONS[0];

//   useEffect(() => {
//     if (!open) return;
//     const onDoc = (e) => {
//       if (!rootRef.current?.contains(e.target)) setOpen(false);
//     };
//     document.addEventListener("mousedown", onDoc);
//     return () => document.removeEventListener("mousedown", onDoc);
//   }, [open]);

//   return (
//     <div ref={rootRef} className={`relative ${className}`}>
//       <button
//         type="button"
//         id="todo-category-trigger"
//         aria-haspopup="listbox"
//         aria-expanded={open}
//         aria-controls="todo-category-listbox"
//         onClick={() => setOpen((o) => !o)}
//         className="flex w-full min-w-0 items-center justify-between gap-2 rounded-xl border border-neutral-200/40 bg-neutral-100/55 px-2.5 py-1.5 text-left transition hover:bg-neutral-100/80 focus:border-neutral-300/80 focus:outline-none"
//       >
//         <TodoCategoryTag label={selected.label} variant={selected.variant} />
//         <ChevronDown
//           className={`h-4 w-4 shrink-0 text-neutral-500 transition ${open ? "rotate-180" : ""}`}
//           aria-hidden
//         />
//       </button>

//       {open ? (
//         <ul
//           id="todo-category-listbox"
//           role="listbox"
//           aria-labelledby="todo-category-trigger"
//           className="absolute left-0 top-[calc(100%+0.35rem)] z-20 w-full min-w-[8.5rem] overflow-hidden rounded-xl border border-neutral-200/60 bg-white py-1 shadow-lg ring-1 ring-black/5"
//         >
//           {CATEGORY_OPTIONS.map((opt) => (
//             <li key={opt.variant} role="presentation">
//               <button
//                 type="button"
//                 role="option"
//                 aria-selected={opt.variant === value}
//                 className={`flex w-full items-center px-2.5 py-2 text-left text-sm font-medium transition hover:brightness-[0.97] active:brightness-95 ${TODO_CATEGORY_VARIANT_CLASSES[opt.variant] ?? TODO_CATEGORY_VARIANT_CLASSES.personal}`}
//                 onClick={() => {
//                   onChange(opt.variant);
//                   setOpen(false);
//                 }}
//               >
//                 {opt.label}
//               </button>
//             </li>
//           ))}
//         </ul>
//       ) : null}
//     </div>
//   );
// };

const TodoForm = forwardRef(function TodoForm({ onConfirm, onCancel }, ref) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const categoryVariant = CATEGORY_OPTIONS[0].variant;
  const categoryLabel = CATEGORY_OPTIONS[0].label;

  const onSubmit = (data) => {
    const task_title = data.task_title.trim();

    if (!task_title) return;

    onConfirm({
      task_title,
      category: categoryLabel,
      categoryVariant,
    });
  };

  return (
    <form
      ref={ref}
      className={`${formCardClass} w-full max-w-full cursor-default`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TodoItemDragHandle className="pointer-events-none mt-0.5" />

      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        <div className="flex min-w-0 items-center gap-2">
          <input
            {...register("task_title", { required: true, minLength: 2 })}
            // ref={inputRef}
            type="text"
            // name="task"
            // value={title}
            // onChange={(e) => setTitle(e.target.value)}
            placeholder="write your next task"
            autoComplete="off"
            className={`${fieldSurfaceClass} min-h-[38px] min-w-0 flex-1`}
          />
          <button
            type="submit"
            aria-label="Create task"
            className={`${actionBtnClass} text-[#229b50] hover:border-[#229b50] active:bg-[#229b50] active:text-white`}
          >
            <Check strokeWidth={1.75} className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            aria-label="Cancel"
            onClick={onCancel}
            className={`${actionBtnClass} text-neutral-800 hover:border-neutral-800 active:bg-neutral-800 active:text-white`}
          >
            <X strokeWidth={1.75} className="h-5 w-5" aria-hidden />
          </button>
        </div>
        {errors.task_title && (
          <p className="text-sm text-red-600">
            {errors.task_title.type === "required" && "A task is required."}
            {errors.task_title.type === "minLength" &&
              "Task must be at least 2 characters."}
          </p>
        )}

        <label className="sr-only" htmlFor="todo-category-trigger">
          Category
        </label>
      </div>
    </form>
  );
});

export default TodoForm;
