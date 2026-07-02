import { TODO_PAGINATION_LABELS } from "../constants/todoConstants";

const TodoPagination = ({ page, onNext, onPrev }) => {
  return (
    <div>
      <button
        onClick={onPrev}
        className="bg-gray-400 border-[0.5px] rounded-3xl"
      >
        {TODO_PAGINATION_LABELS.PREVIOUS}
      </button>
      <div>{page}</div>
      <button
        onClick={onNext}
        className="bg-gray-400 border-[0.5px] rounded-3xl"
      >
        {TODO_PAGINATION_LABELS.NEXT}
      </button>
    </div>
  );
};

export default TodoPagination;
