import { Outlet } from "react-router";

import { SidebarProvider } from "../../features/sidebar-projects/context/SidebarContext";
import { SearchProvider } from "../../features/todos/context/SearchContext";
import { AuthProvider } from "../../features/auth/context/AuthContext";

import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <AuthProvider>
        <SidebarProvider>
          <SearchProvider>
            <div className="flex h-dvh min-h-0 overflow-hidden">
              <Sidebar />
              <div className="flex min-h-0 min-w-0 flex-1 flex-col">
                <Header userName="Sarah" />
                <main className="scrollbar-minimal-main min-h-0 flex-1 overflow-y-auto overscroll-y-contain">
                  <Outlet />
                </main>
                <Footer />
              </div>
            </div>
          </SearchProvider>
        </SidebarProvider>
      </AuthProvider>
    </>
  );
};

export default Layout;
