import { useState } from "react";

function TodoList() {
  const [todoState, setTodo] = useState([
    { id: "1", task: "shopping" },
    { id: "2", task: "meditate" },
  ]);
  const [newTodo, setNewTodo] = useState({ task: "" });
  const [nextId, setNextId] = useState(3); 

  function handleNewTodo(event) {
    setNewTodo({ task: event.target.value });
  }

  function handleAddTodo() {
    const newTodoItem = { id: String(nextId), task: newTodo.task };
    setTodo((currentItems) => [...currentItems, newTodoItem]);
    setNewTodo({ task: "" }); 
    setNextId(nextId + 1);
  }

  function handleReset() {
    setTodo([]);
    setNextId(1); 
  }

  function removeItem(id) {
    const todosListExceptClicked = todoState.filter((item) => item.id!== id);
    setTodo(todosListExceptClicked);
  }

  return (
    <>
      <ul>
        {todoState.map((todo) => {
          return (
            <>
              <li key={todo.id}>{todo.task}</li>
              <button onClick={() => removeItem(todo.id)}>Remove</button>
            </>
          );
        })}
      </ul>
      <input type="text" onChange={handleNewTodo} value={newTodo.task} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default TodoList;