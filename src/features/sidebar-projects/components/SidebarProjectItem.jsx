import { MoreVertical } from "lucide-react";

const iconWrap =
  "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl shadow-sm";

const ACCENT_ICON = {
  purple: "bg-purple-100 text-purple-700",
  blue: "bg-sky-100 text-sky-700",
  pink: "bg-pink-100 text-pink-700",
  green: "bg-emerald-100 text-emerald-700",
  rose: "bg-white text-rose-600 ring-1 ring-white/80",
};

const SidebarProjectItem = ({
  name,
  icon: Icon,
  accent = "purple",
  isActive,
  count,
}) => {
  if (isActive) {
    return (
      <li>
        <button
          type="button"
          className="flex w-full cursor-pointer items-center gap-2.5 rounded-2xl bg-[#fb7185]/35 px-2 py-2 text-left ring-1 ring-[#fb7185]/40 transition hover:bg-[#fb7185]/45"
        >
          <span className={`${iconWrap} ${ACCENT_ICON.rose}`}>
            <Icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={2} />
          </span>
          <span className="min-w-0 flex-1 truncate text-sm font-semibold text-white drop-shadow-sm">
            {name}
          </span>
          {count != null ? (
            <span className="flex h-6 min-w-[1.5rem] shrink-0 items-center justify-center rounded-full bg-white px-1.5 text-xs font-semibold text-rose-600 shadow-sm">
              {count}
            </span>
          ) : null}
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white/90 hover:bg-white/15"
            aria-hidden
          >
            <MoreVertical className="h-4 w-4" strokeWidth={2} />
          </span>
        </button>
      </li>
    );
  }

  const iconTone = ACCENT_ICON[accent] ?? ACCENT_ICON.purple;

  return (
    <li>
      <button
        type="button"
        className="flex w-full cursor-pointer items-center gap-2.5 rounded-2xl bg-white px-2 py-2 text-left transition hover:bg-neutral-50"
      >
        <span className={`${iconWrap} ${iconTone}`}>
          <Icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={2} />
        </span>
        <span className="min-w-0 flex-1 truncate text-sm font-medium text-neutral-800">
          {name}
        </span>
        {count != null ? (
          <span className="flex h-6 min-w-[1.5rem] shrink-0 items-center justify-center rounded-full bg-neutral-100 px-1.5 text-xs font-semibold text-neutral-600">
            {count}
          </span>
        ) : null}
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600"
          aria-hidden
        >
          <MoreVertical className="h-4 w-4" strokeWidth={2} />
        </span>
      </button>
    </li>
  );
};

export default SidebarProjectItem;
