import { Sprout } from "lucide-react";

const SidebarGrowCard = ({ onCreateClick, disabled, className = "" }) => {
  return (
    <div
      className={`mt-4 rounded-2xl bg-[#ffedd5] px-4 py-4 text-center ring-1 ring-orange-200/40 ${className}`}
    >
      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-orange-100">
        <Sprout className="h-5 w-5 text-emerald-600" strokeWidth={2} aria-hidden />
      </div>
      <p className="mt-2 text-sm font-semibold text-neutral-800">Keep growing!</p>
      <button
        type="button"
        disabled={disabled}
        onClick={onCreateClick}
        className="mt-3 w-full rounded-full border border-rose-200/80 bg-white py-2 text-sm font-semibold text-rose-600 shadow-sm transition hover:bg-rose-50 disabled:cursor-not-allowed disabled:opacity-45"
      >
        Create Page
        
      </button>
    </div>
  );
};

export default SidebarGrowCard;
