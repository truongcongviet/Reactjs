import './App.css';
import React from 'react';
import TodoList from './TodoList';

let destination = document.querySelector("#container")
function App() {
  return (
    <div className="App">
      <h1>Todolist</h1>
        <TodoList/>
    </div>

  );
  
}

export default App;
