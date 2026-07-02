import { ACHIEVEMENT_SECTION_LABEL } from "../constants/todoConstants";

/**
 * Encouragement card below the list — cream panel, star, heading + subcopy.
 */
const AchievementSection = () => {
  return (
    <section
      className={`rounded-2xl border border-amber-100/60 bg-[#fffbeb] px-6 py-8 text-center shadow-[0_4px_20px_-4px_rgba(251,191,36,0.25)] ${className}`}
      aria-labelledby="achievement-heading"
    >
      <div
        className="mx-auto mb-4 flex h-14 w-14 items-center justify-center text-3xl drop-shadow-sm"
        aria-hidden
      >
        ⭐
      </div>
      <h2
        id="achievement-heading"
        className="text-lg font-semibold tracking-tight text-neutral-800"
      >
        {ACHIEVEMENT_SECTION_LABEL.TITLE}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-neutral-500">
        {ACHIEVEMENT_SECTION_LABEL.SUBTITLE}
      </p>
    </section>
  );
};

export default AchievementSection;
