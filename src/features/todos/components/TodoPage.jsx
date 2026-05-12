import { useLoaderData } from "react-router";

import TodoList from "./TodoList";

const TodoPage = () => {
  //   const { id, name } = useLoaderData();

  return (
    <section>
      <TodoList />;
    </section>
  );
};

export default TodoPage;
