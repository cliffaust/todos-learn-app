function TodoItem({ todo, changeComplete, index }) {
  return (
    <div className="bg-white rounded-md p-3">
      <h3 className="font-bold text-lg font-serif mb-2">{todo.title}</h3>
      <div className="flex gap-1 items-center">
        <input
          type="checkbox"
          value={todo.completed}
          onChange={() => changeComplete(todo, index)}
        />
        {todo.completed ? (
          <label className="font-bold text-sm">Complete</label>
        ) : (
          <label className="font-bold text-sm">Completed</label>
        )}
      </div>
    </div>
  );
}

export default TodoItem;
