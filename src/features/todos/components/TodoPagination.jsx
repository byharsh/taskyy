const TodoPagination = ({ page, onNext, onPrev }) => {
  return (
    <div>
      <button onClick={onPrev}>Previous</button>
      <div>{page}</div>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default TodoPagination;
