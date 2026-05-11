import { useCallback, useEffect, useRef, useState } from "react";
import AchievementSection from "./AchievementSection";
import CreateTodoButton from "./CreateTodoButton";
import TodoForm from "./TodoForm";
import { TodoItem } from "./TodoItem";

const SAMPLE_TODOS = [
  {
    id: 1,
    task_title: "Morning Yoga & Meditation 🧘‍♀️",
    category: "Personal",
    categoryVariant: "personal",
  },
  {
    id: 2,
    task_title: "Team standup prep",
    category: "Work",
    categoryVariant: "work",
  },
  {
    id: 3,
    task_title: "Laundry & kitchen reset",
    category: "Chores",
    categoryVariant: "chores",
  },
  {
    id: 4,
    task_title: "Read one chapter",
    category: "Growth",
    categoryVariant: "growth",
  },
  {
    id: 5,
    task_title: "Call mum ☎️",
    category: "Family",
    categoryVariant: "family",
  },
  {
    id: 6,
    task_title: "Invoice follow-ups",
    category: "Side Hustle",
    categoryVariant: "sideHustle",
  },
  {
    id: 7,
    task_title: "Sketch app wireframes",
    category: "Work",
    categoryVariant: "work",
  },
];

const TodoList = () => {
  const [todos, setTodos] = useState(SAMPLE_TODOS);
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const handleConfirm = useCallback((payload) => {
    setTodos((prev) => {
      const id = prev.reduce((max, t) => Math.max(max, t.id), 0) + 1;
      return [{ id, ...payload }, ...prev];
    });
    setShowForm(false);
  }, []);

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

        {showForm ? (
          <TodoForm
            ref={formRef}
            onConfirm={handleConfirm}
            onCancel={handleCancelForm}
          />
        ) : null}

        <ul className="flex w-full flex-col gap-3">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              category={todo.category}
              categoryVariant={todo.categoryVariant}
            >
              {(isCompleted) => (
                <TodoItem.Text
                  taskName={todo.task_title}
                  isCompleted={isCompleted}
                />
              )}
            </TodoItem>
          ))}
        </ul>

        <AchievementSection className="w-full" />
      </div>
    </div>
  );
};

export default TodoList;
