import { useEffect, useState } from "react";
import { TodoItem } from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, task_title: "Learn React" },
    { id: 2, task_title: "Learn Supabase" },
  ]);

  // const fetchTodos = async () => {
  //   const { error, data } = await supabase.from("tasks").select("*");
  //   if (error) {
  //     console.error("Error fetching todos:", error);
  //     return;
  //   }

  //   setTodos(data);
  // };

  // useEffect(() => {
  //   fetchTodos();
  // }, []);

  return (
    <ol>
      {todos.map((todo) => (
        <TodoItem key={todo.id}>
          {(isCompleted) => (
            <TodoItem.Text
              taskName={todo.task_title}
              isCompleted={isCompleted}
            />
          )}
        </TodoItem>
      ))}
    </ol>
  );
};

//             isCompleted={isCompleted}
//           />
//         )}
//       </TodoItem>
//       <TodoItem>
//         {(isCompleted) => (
//           <TodoItem.Text
//             taskName={"JSX and components"}
//             isCompleted={isCompleted}
//           />
//         )}
//       </TodoItem>
//     </ol>
//   );
// };

export default TodoList;
