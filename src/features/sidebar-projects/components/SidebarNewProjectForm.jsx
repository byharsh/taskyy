import { useEffect, useRef, useState } from "react";

import { useForm } from "react-hook-form";

import {
  Briefcase,
  Check,
  ChevronDown,
  Home,
  Lightbulb,
  Pencil,
  Rocket,
  X,
} from "lucide-react";

const iconCell =
  "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl shadow-sm";

const ICON_OPTIONS = [
  {
    key: "rocket",
    Icon: Rocket,
    accent: "bg-white text-rose-600 ring-1 ring-neutral-200/70",
  },
  {
    key: "briefcase",
    Icon: Briefcase,
    accent: "bg-purple-100 text-purple-700",
  },
  { key: "lightbulb", Icon: Lightbulb, accent: "bg-sky-100 text-sky-700" },
  { key: "pencil", Icon: Pencil, accent: "bg-pink-100 text-pink-700" },
  { key: "home", Icon: Home, accent: "bg-emerald-100 text-emerald-700" },
];

const SidebarNewProjectForm = ({ onConfirm, onCancel }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [pickerOpen, setPickerOpen] = useState(false);
  const [selectedIconIndex, setSelectedIconIndex] = useState(0);
  const rootRef = useRef(null);

  const handleCancel = () => {
    reset();
    onCancel();
  };

  useEffect(() => {
    if (!pickerOpen) return;
    const close = (e) => {
      if (!rootRef.current?.contains(e.target)) setPickerOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [pickerOpen]);

  const selected = ICON_OPTIONS[selectedIconIndex] ?? ICON_OPTIONS[0];
  const SelectedIcon = selected.Icon;

  return (
    <div
      ref={rootRef}
      className="rounded-2xl border border-neutral-200/70 bg-neutral-50/80 px-3 py-3 shadow-sm"
    >
      <div className="relative flex flex-col items-center">
        <button
          type="button"
          onClick={() => setPickerOpen((o) => !o)}
          aria-expanded={pickerOpen}
          aria-haspopup="listbox"
          className="flex cursor-pointer items-center gap-2 rounded-xl border border-transparent px-2 py-1.5 transition hover:border-neutral-200/80 hover:bg-white/80"
        >
          <span className={`${iconCell} ${selected.accent}`}>
            <SelectedIcon className="h-[1.15rem] w-[1.15rem]" strokeWidth={2} />
          </span>
          <ChevronDown
            className={`h-4 w-4 shrink-0 text-neutral-500 transition ${pickerOpen ? "rotate-180" : ""}`}
            aria-hidden
          />
        </button>

        {pickerOpen ? (
          <div
            className="absolute left-1/2 top-[calc(100%+0.35rem)] z-20 flex -translate-x-1/2 flex-row flex-wrap items-center justify-center gap-2 rounded-xl border border-neutral-200/70 bg-white px-3 py-2.5 shadow-lg ring-1 ring-black/5"
            role="listbox"
            aria-label="Project icon"
          >
            {ICON_OPTIONS.map((opt, i) => {
              const Icon = opt.Icon;
              const isOn = i === selectedIconIndex;
              return (
                <button
                  key={opt.key}
                  type="button"
                  role="option"
                  aria-selected={isOn}
                  onClick={() => {
                    setSelectedIconIndex(i);
                    setPickerOpen(false);
                  }}
                  className={`cursor-pointer rounded-lg p-0.5 transition hover:ring-2 hover:ring-rose-200/60 focus-visible:outline focus-visible:ring-2 focus-visible:ring-rose-300 ${isOn ? "ring-2 ring-rose-300/70" : ""}`}
                >
                  <span className={`${iconCell} ${opt.accent}`}>
                    <Icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={2} />
                  </span>
                </button>
              );
            })}
          </div>
        ) : null}
      </div>

      <form onSubmit={handleSubmit(onConfirm)}>
        <input
          type="text"
          {...register("project_name", { required: true, minLength: 3 })}
          placeholder="Create project page..."
          className="mt-3 w-full rounded-xl border border-neutral-200/60 bg-white px-3 py-2.5 text-sm font-medium text-neutral-800 outline-none ring-0 placeholder:text-neutral-400 focus:border-rose-200 focus:ring-2 focus:ring-rose-100"
        />
        {errors.project_name?.type === "required" && (
          <p className="mt-1 text-xs text-red-600">Project name is required.</p>
        )}
        {errors.project_name?.type === "minLength" && (
          <p className="mt-1 text-xs text-red-600">
            Project name must be at least 3 characters long.
          </p>
        )}

        <div className="mt-3 flex items-center justify-center gap-8">
          <button
            type="submit"
            className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-emerald-600 transition hover:text-emerald-700"
          >
            <Check className="h-4 w-4" strokeWidth={2.25} aria-hidden />
            Confirm
          </button>

          <button
            onClick={handleCancel}
            className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-neutral-500 transition hover:text-neutral-700"
          >
            <X className="h-4 w-4" strokeWidth={2.25} aria-hidden />
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default SidebarNewProjectForm;
