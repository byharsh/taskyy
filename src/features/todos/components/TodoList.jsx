import { useCallback, useEffect, useRef, useState } from "react";

import { useSearchContext } from "../context/SearchContext.jsx";
import { useLoaderData } from "react-router";
import { usePagination } from "../hooks/usePagination.js";
import { handleCreateTodo } from "../api/createTodo";
import { updateTodo } from "../api/updateTodo.js";

import { SAMPLE_TODOS } from "../../../utils/TODOS";

import AchievementSection from "./AchievementSection";
import CreateTodoButton from "./CreateTodoButton";
import TodoForm from "./TodoForm";
import { TodoItem } from "./TodoItem";
import TodoPagination from "./TodoPagination.jsx";

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

  const handleComplete = (todo) => {
    if (!todo.isCompleted) return;
    updateTodo(todo.id, {
      completed: true,
      completed_at: new Date().toISOString(),
    });
  };

  const handleConfirm = (payload) => {
    handleCreateTodo({ ...payload, projectId });
    setShowForm(false);
  };

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
                onComplete={() => handleComplete(todo)}
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
