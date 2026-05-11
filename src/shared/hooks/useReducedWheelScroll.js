import { useEffect } from "react";

/**
 * Dampens wheel delta so each tick moves less than native scrolling.
 * At scroll bounds, the event is left alone so nested / parent scroll can run.
 * Skips when prefers-reduced-motion: reduce (native scroll).
 */
export function useReducedWheelScroll(ref, factor = 0.58) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const onWheel = (e) => {
      if (e.ctrlKey) return;
      if (mq.matches) return;

      const maxY = Math.max(0, el.scrollHeight - el.clientHeight);
      const dy = e.deltaY * factor;
      const next = Math.max(0, Math.min(maxY, el.scrollTop + dy));

      if (next === el.scrollTop && Math.abs(e.deltaY) > 0.5) return;

      el.scrollTop = next;
      e.preventDefault();
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [ref, factor]);
}
