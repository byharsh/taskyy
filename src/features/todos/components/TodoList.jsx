import { useCallback, useEffect, useRef, useState } from "react";

import { useSearchContext } from "../context/SearchContext.jsx";
import { useLoaderData } from "react-router";
import { SAMPLE_TODOS } from "../../../utils/TODOS";

import AchievementSection from "./AchievementSection";
import CreateTodoButton from "./CreateTodoButton";
import TodoForm from "./TodoForm";
import { TodoItem } from "./TodoItem";
import { handleCreateTodo } from "../api/createTodo";

import TodoPagination from "./TodoPagination.jsx";
import { usePagination } from "../hooks/usePagination.js";

// import { use } from "react";
// import { getTodos } from "../api/getTodo";

const TodoList = () => {
  const { projectId, todos: fetchedTodos } = useLoaderData();

  const { page, handleNextPageList, handlePrevPageList } = usePagination();

  const { searchQuery } = useSearchContext();

  const [todos, setTodos] = useState(fetchedTodos || SAMPLE_TODOS);
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleConfirm = (payload) => {
    handleCreateTodo({ ...payload, projectId });
    setShowForm(false);
  };
  // setTodos((prev) => {
  //   const id = prev.reduce((max, t) => Math.max(max, t.id), 0) + 1;
  //   return [{ id, projectId, projectName, ...payload }, ...prev];
  // });

  const handleCancelForm = useCallback(() => {
    setShowForm(false);
  }, []);

  useEffect(() => {
    if (!showForm) return;

    const onPointerDownCapture = (e) => {
      const el = formRef.current;
      const target = e.target;
      if (!(target instanceof Node)) return;
      if (el?.contains(target)) return;
      if (target.closest?.("[data-create-todo-trigger]")) return;
      handleCancelForm();
    };

    document.addEventListener("pointerdown", onPointerDownCapture, true);
    return () =>
      document.removeEventListener("pointerdown", onPointerDownCapture, true);
  }, [showForm, handleCancelForm]);

  return (
    <div className="min-h-full bg-[#faf7f2] px-4 py-8">
      <div className="mx-auto flex w-full max-w-[41.6rem] flex-col items-center gap-6">
        <CreateTodoButton onClick={() => setShowForm(true)} />

        {showForm && (
          <TodoForm
            ref={formRef}
            onConfirm={handleConfirm}
            onCancel={handleCancelForm}
          />
        )}

        <ul className="flex w-full flex-col gap-3">
          {filteredTodos.map((todo) => (
            <TodoItem
              // key={todo.task_id}
              key={todo.id}
              category={todo.category}
              categoryVariant={todo.categoryVariant}
            >
              <TodoItem.Text
                taskName={todo.title}
                isCompleted={todo.isCompleted}
                projectId={todo.project_id}
                projectName={todo.project_name}
                createdAt={todo.created_at}
              />
            </TodoItem>
          ))}
        </ul>
        <TodoPagination
          page={page}
          onNext={handleNextPageList}
          onPrev={handlePrevPageList}
        />

        <AchievementSection className="w-full" />
      </div>
    </div>
  );
};

export default TodoList;
