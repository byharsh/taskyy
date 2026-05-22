
import { Outlet } from "react-router";
import { SidebarProvider } from "../../features/sidebar-projects/context/SidebarContext";

import Sidebar from "./Sidebar";
import Header from "./Header";
import TodoList from "../../features/todos/components/TodoList";

import Footer from "./Footer";
import { SearchProvider } from "../../features/todos/context/SearchContext";

const Layout = () => {
  

  return (
    <>
      <SidebarProvider>
        <SearchProvider>

        <div className="flex h-dvh min-h-0 overflow-hidden">
          <Sidebar />
          <div className="flex min-h-0 min-w-0 flex-1 flex-col">
            <Header userName="Sarah" />
            <main
              
              className="scrollbar-minimal-main min-h-0 flex-1 overflow-y-auto overscroll-y-contain"
              >
              <Outlet />
            </main>
            <Footer />
          </div>
        </div>
              </SearchProvider>
      </SidebarProvider>
    </>
  );
};

export default Layout;
