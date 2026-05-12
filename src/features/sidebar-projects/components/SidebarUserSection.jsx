import { Sparkles, Sun } from "lucide-react";

const SidebarUserSection = ({
  avatarSrc,
  userName = "Sarah Sunshine",
  completedCount = "1,248",
}) => {
  return (
    <section className="shrink-0 rounded-b-2xl bg-[#f4efe8] px-4 pb-6 pt-5 text-center sm:px-5 md:px-6">
      <div className="relative mx-auto w-fit">
        <img
          src={avatarSrc}
          alt=""
          className="h-[4.5rem] w-[4.5rem] rounded-full border-4 border-white object-cover shadow-md"
        />
        <span
          className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-emerald-500 text-white shadow-sm"
          aria-hidden
        >
          <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
        </span>
      </div>
      <h2 className="mt-3 flex items-center justify-center gap-1.5 text-base font-bold tracking-tight text-neutral-800">
        {userName}
        <Sun
          className="h-5 w-5 shrink-0 text-amber-400"
          strokeWidth={2}
          aria-hidden
        />
      </h2>
      <div className="mx-auto mt-2 inline-flex items-center gap-2 rounded-full border border-neutral-300/60 bg-white/70 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-neutral-400">
        <span>Completed</span>
        <span className="text-base font-bold normal-case tracking-normal text-teal-600">
          {completedCount}
        </span>
      </div>
    </section>
  );
};

export default SidebarUserSection;
