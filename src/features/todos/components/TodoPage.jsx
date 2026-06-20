import { useLoaderData } from "react-router";
import TodoList from "./TodoList";

const TodoPage = () => {
  const { projectId, todos: fetchedTodos } = useLoaderData();
  return (
    <section>
      <TodoList fetchedTodos={fetchedTodos} projectId={projectId} />
    </section>
  );
};

export default TodoPage;
