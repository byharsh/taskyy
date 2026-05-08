import { Outlet } from "react-router";
import TodoList from "../../features/todos/components/TodoList";
import Sidebar from "../layout/Sidebar";

const Layout = () => {
  return (
    <div className="flex h-dvh">
      <Sidebar />
      <div>
        <header>
          <h1>My App</h1>
        </header>
        <main>
          <h1>Some task:</h1>
          <Outlet />
          <TodoList />
        </main>
      </div>
    </div>
  );
};

export default Layout;
