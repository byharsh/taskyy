export const TODO_CATEGORY_VARIANT_CLASSES = {
  personal: "bg-pink-100 text-pink-800",
  work: "bg-purple-100 text-purple-800",
  chores: "bg-emerald-100 text-emerald-800",
  growth: "bg-sky-100 text-sky-800",
  family: "bg-rose-100 text-rose-800",
  sideHustle: "bg-blue-100 text-blue-800",
};

const TodoCategoryTag = ({ label, variant = "personal", className = "" }) => {
  const tone =
    TODO_CATEGORY_VARIANT_CLASSES[variant] ??
    TODO_CATEGORY_VARIANT_CLASSES.personal;

  return (
    <span
      className={`inline-flex max-w-full items-center rounded-full px-2.5 py-0.5 text-xs font-bold tracking-wide ${tone} ${className}`}
    >
      {label}
    </span>
  );
};

export default TodoCategoryTag;
