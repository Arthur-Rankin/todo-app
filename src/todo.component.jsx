import React from "react";

const Todo = ({ todoItem, index, completeTodo, deleteTodo}) => {
  return (
    <div>
    <div style={todoItem.isComplete ? {color: "green"} : {color: "red"}}>{todoItem.text}</div>
      <div>
        <button onClick={() => completeTodo(index)}>complete</button>
        <button onClick={() => deleteTodo(index)}>X</button>
      </div>
    </div>
  );
};

export default Todo;
