import { TodoItem } from "../../features/todos/components/TodoItem";

const PlayGround = () => {
  return (
    <div className="min-h-full bg-[#faf7f2] px-4 py-8 w-half">
      <TodoItem category="Work" categoryVariant="primary">
        <TodoItem.Text
          taskName="This is a sample task"
          isCompleted={false}
          onComplete={(isCompleted) =>
            console.log("Task completed:", isCompleted)
          }
          projectId="123"
          projectName="Sample Project"
          createdAt={new Date().toISOString()}
        />
      </TodoItem>
    </div>
  );
};

export default PlayGround;
