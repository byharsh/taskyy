const fieldBaseClasses =
  "w-full rounded-2xl border border-[#eaded6] bg-[#fffdfb] px-4 py-3.5 text-sm text-[#2f271f] shadow-[0_1px_0_rgba(255,255,255,0.8)] outline-none transition placeholder:text-[#aa9f97] focus:border-[#efb4a8] focus:bg-white focus:ring-4 focus:ring-[#ffd8cb]/70";

const AuthField = ({
  id,
  label,
  helperText,
  rightSlot,
  className = "",
  ...props
}) => {
  return (
    <label htmlFor={id} className="block space-y-2">
      <span className="block text-sm font-medium text-[#5c524a]">{label}</span>

      <div className="relative">
        <input
          id={id}
          className={`${fieldBaseClasses} ${rightSlot ? "pr-14" : ""} ${className}`}
          {...props}
        />

        {rightSlot ? (
          <div className="absolute inset-y-0 right-3 flex items-center">
            {rightSlot}
          </div>
        ) : null}
      </div>

      {helperText ? (
        <p className="text-xs leading-6 text-[#9c8f87]">{helperText}</p>
      ) : null}
    </label>
  );
};

export default AuthField;
