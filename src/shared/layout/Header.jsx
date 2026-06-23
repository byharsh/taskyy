import { useEffect, useState } from "react";
import { Bell, Menu, Search, X } from "lucide-react";

import { useDebounce } from "../../features/todos/hooks/useDebounce.js";

import { useSidebarContext } from "../../features/sidebar-projects/context/SidebarContext.jsx";
import { useSearchParams } from "react-router";

const Header = ({ userName = "hard Working individual" }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(
    searchParams.get("search") || "",
  );

  const { isSidebarOpen, toggleSidebar } = useSidebarContext();

  const debouncedSearchValue = useDebounce(inputValue, 400);

  // useEffect(() => {
  //   const urlSearch = searchParams.get("search") || "";
  //   if (urlSearch === inputValue) return;
  //   setInputValue(urlSearch);
  // }, [searchParams, inputValue]);

  useEffect(() => {
    const currentUrlSearch = searchParams.get("search") || "";
    const newSearchValue = debouncedSearchValue.trim();

    if (newSearchValue === currentUrlSearch) return;

    const params = new URLSearchParams(searchParams);
    if (newSearchValue) {
      params.set("search", newSearchValue);
    } else {
      params.delete("search");
    }

    params.set("page", "1");

    setSearchParams(params);
  }, [debouncedSearchValue, setSearchParams, searchParams]);

  return (
    <header className="flex w-full shrink-0 flex-col gap-4 bg-[#faf9f6] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6 sm:py-5">
      <div className="flex min-w-0 items-center gap-3 sm:flex-1 sm:gap-4">
        <button
          type="button"
          className="flex z-10 h-10 w-10 shrink-0 items-center justify-center rounded-xl text-neutral-700 transition hover:bg-neutral-200/50 sm:hidden"
          onClick={toggleSidebar}
          aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
        >
          {isSidebarOpen ? (
            <X className="h-5 w-5" strokeWidth={2} />
          ) : (
            <Menu className="h-5 w-5" strokeWidth={2} />
          )}
        </button>

        <div className="min-w-0">
          <h1 className="text-lg font-bold tracking-tight text-neutral-900 sm:text-xl">
            Hello, {userName}!{" "}
            <span className="font-normal" aria-hidden>
              👋
            </span>
          </h1>
          <p className="mt-0.5 text-sm text-neutral-500 sm:text-[15px]">
            Let&apos;s make today productive and fun.
          </p>
        </div>
      </div>

      <div className="flex w-full shrink-0 items-center gap-2.5 sm:w-auto sm:gap-3">
        <label className="relative flex min-w-0 flex-1 items-center sm:max-w-xs md:max-w-md">
          <span className="pointer-events-none absolute left-3.5 text-neutral-400">
            <Search className="h-4 w-4" strokeWidth={2} aria-hidden />
          </span>
          <input
            type="search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search tasks..."
            className="w-full min-w-[10rem] rounded-full border border-neutral-200/80 bg-white py-2.5 pl-10 pr-4 text-sm text-neutral-800 shadow-sm outline-none ring-0 transition placeholder:text-neutral-400 focus:border-neutral-300 focus:ring-2 focus:ring-neutral-200/80 sm:min-w-[12rem] sm:py-3"
            autoComplete="off"
          />
        </label>

        <button
          type="button"
          className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-200/80 bg-white text-neutral-600 shadow-sm transition hover:bg-neutral-50 hover:text-neutral-800 sm:h-11 sm:w-11"
          aria-label="Notifications"
        >
          <Bell className="h-[1.15rem] w-[1.15rem]" strokeWidth={2} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
        </button>
      </div>
    </header>
  );
};

export default Header;
