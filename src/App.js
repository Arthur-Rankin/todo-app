import React, {useState} from 'react';
import './App.css';

import Todo from './todo.component';
import UserInput from './user-input.component';

function App() {
  const [todos, setTodos] = useState([
    {
      text: "todo one",
      isComplete: false
    },
    {
      text: "todo two",
      isComplete: false
    },
    {
      text: "todo three",
      isComplete: false
    },
  ])

  const addTodo = text => {
    const newTodos = [...todos, { text, isComplete: false }]
    setTodos(newTodos)
  }

  const completeTodo = index => {
    const newTodos = [...todos]
    newTodos[index].isComplete = true;
    setTodos(newTodos)
  }

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }


  return (
    <div>
      {todos.map((todoItem, index) => 
        <Todo 
          key={index} 
          todoItem={todoItem} 
          index={index}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
        />
      )}

      <UserInput 
        addTodo={addTodo}
      />
    </div>
  );
}

export default App;
