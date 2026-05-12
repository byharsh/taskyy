import { Plus } from "lucide-react";

const SidebarProjectsHeader = ({ onPlusClick }) => {
  return (
    <div className="flex items-center justify-between px-1 pt-1">
      <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-400">
        My projects
      </span>
      <button
        type="button"
        onClick={onPlusClick}
        className="cursor-pointer flex h-8 w-8 items-center justify-center rounded-full text-amber-400 transition hover:bg-amber-50 hover:text-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
        aria-label="Add new project"
      >
        <Plus
          className="h-5 w-5 drop-shadow-[0_0_6px_rgba(251,191,36,0.85)]"
          strokeWidth={2.5}
        />
      </button>
    </div>
  );
};

export default SidebarProjectsHeader;
