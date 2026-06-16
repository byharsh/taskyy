import { useNavigate } from "react-router";
import { Eraser, LogOut, Settings } from "lucide-react";

import { useAuth } from "../../auth/hooks/useAuth";

const SidebarOptions = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    logout();
    navigate("/login");
  };

  return (
    <footer className="shrink-0 border-t border-neutral-200/60 bg-white px-3 py-4 sm:px-4 md:px-5">
      <nav className="flex flex-col gap-1" aria-label="Sidebar options">
        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-neutral-700 transition hover:bg-neutral-100"
        >
          <Settings className="h-[1.15rem] w-[1.15rem] text-neutral-500" strokeWidth={2} />
          Settings
        </button>
        <button
          type="button"
          onClick={handleSignOut}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-neutral-700 transition hover:bg-neutral-100"
        >
          <LogOut className="h-[1.15rem] w-[1.15rem] text-neutral-500" strokeWidth={2} />
          Sign out
        </button>
        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-red-600 transition hover:bg-red-50"
        >
          <Eraser className="h-[1.15rem] w-[1.15rem]" strokeWidth={2} />
          Erase all todo
        </button>
      </nav>
    </footer>
  );
};

export default SidebarOptions;
