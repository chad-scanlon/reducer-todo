import React from "react";

const Todo = (props) => {
  console.log(props);
  return (
    // <div
    //   onClick={() => props.toggleTodo(props.todo.id)}
    //   className={`todo${props.todo.completed ? " completed" : ""}`}
    // >
    <div>
      <p>{props.name}</p>
    </div>
  );
};

export default Todo;
