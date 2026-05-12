/**
 * Pill “Create New Task” CTA — white surface, pink icon disc, soft shadow.
 * Wider and lower profile for a more modern control bar.
 */
const CreateTodoButton = ({
  onClick,
  label = "Create New Task",

  type = "button",
}) => {
  return (
    <button
      type={type}
      data-create-todo-trigger
      onClick={onClick}
      className="cursor-pointer group inline-flex justify-center min-w-[min(100%,12rem)] items-center gap-3 rounded-xl border border-neutral-100/90 bg-white/95 px-8 py-2 text-left shadow-[0_6px_22px_-6px_rgba(0,0,0,0.08),0_1px_4px_rgba(0,0,0,0.04)] ring-1 ring-neutral-200/30 backdrop-blur-sm transition hover:border-neutral-200/80 hover:bg-white hover:shadow-[0_10px_28px_-6px_rgba(0,0,0,0.1)] active:scale-[0.995]"
    >
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#fbcfe8] to-[#f472b6] text-base font-light leading-none text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] transition group-hover:from-[#fce7f3] group-hover:to-[#ec4899]"
        aria-hidden
      >
        +
      </span>
      <span className="text-sm font-semibold tracking-wide text-neutral-700 ">
        {label}
      </span>
    </button>
  );
};

export default CreateTodoButton;
