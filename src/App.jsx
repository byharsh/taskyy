import "./App.css";
import { Square } from "./assets/icons";
import { TodoItem } from "./features/todos/components";
const App = () => {
  return (
    <>
      <div className="mx-auto ">
        <h1>Some task:</h1>
        <ol>
          <TodoItem taskName={"Project structure"} />
          <TodoItem taskName={"JSX and components"} />
          <TodoItem taskName={"Props and rendering"} />
          <TodoItem taskName={"Use state"} />
        </ol>
      </div>
    </>
  );
};

export default App;
