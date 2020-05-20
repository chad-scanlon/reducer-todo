import React, { useState, useReducer } from "react";
import { reducer, initialState } from "../reducers/reducer";
import TodoList from "./TodoList";
import Todo from "./Todo";

const TodoForm = (props) => {
  //   const [todos, dispatch] = useReducer(reducer, initialState);
  const [todos, setTodos] = useState(initialState);
  //   const [editing, setEditing] = useState(false);
  const [newTodo, setNewTodo] = useState([]);

  console.log(todos);
  console.log(newTodo);

  const handleChanges = (event) => {
    setNewTodo(event.target.value);
  };

  const onSubmit = () => {
    todos(...todos, newTodo);
  };

  return (
    <>
      <div>
        <form className="todo-form" onSubmit={onSubmit}>
          <input
            type="text"
            name="todo"
            value={newTodo}
            onChange={handleChanges}
          />
          <br />
          <div className="add-form">
            <button>Add</button>
          </div>
        </form>
      </div>
      <div>
        {/* toggleTodo={toggleTodo} */}
        {todos.map((todo) => (
          <Todo key={todo.id} name={todo.name} />
        ))}
      </div>
      <div>
        <TodoList />
      </div>
      <div>
        {/* onClick={clearCompleted} */}
        <button className="clear-button">Clear Completed</button>
      </div>
    </>
  );
};

export default TodoForm;
