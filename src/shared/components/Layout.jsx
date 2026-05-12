import { useRef } from "react";
import { Outlet } from "react-router";
import { SidebarProvider } from "../../features/sidebar/context/SidebarContext";

import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";
import TodoList from "../../features/todos/components/TodoList";
import { useReducedWheelScroll } from "../hooks/useReducedWheelScroll";
import Footer from "../layout/Footer";

const Layout = () => {
  const mainScrollRef = useRef(null);
  useReducedWheelScroll(mainScrollRef, 0.58);

  return (
    <SidebarProvider>
      <div className="flex h-dvh min-h-0 overflow-hidden">
        <Sidebar />
        <div className="flex min-h-0 min-w-0 flex-1 flex-col">
          <Header userName="Sarah" />
          <main
            ref={mainScrollRef}
            className="scrollbar-minimal-main min-h-0 flex-1 overflow-y-auto overscroll-y-contain"
          >
            <Outlet />
            <TodoList />
          </main>
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
