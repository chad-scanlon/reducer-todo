import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  console.log(props);
  return (
    <>
      <div className="todo-list">
        <Todo
          className="todo-list"
          key={props.id}
          todo={props.name}
          //   toggleTodo={props.toggleTodo}
        />

        <br />
      </div>
    </>
  );
};

export default TodoList;
