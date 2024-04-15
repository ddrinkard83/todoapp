import React from 'react';
import { useState,useEffect } from 'react';
import './App.css';
import InputBar from './InputBar';
import TaskBlock from './TaskBlock';
import EditBar from './EditBar';
import { v4 as uuidv4 } from 'uuid';
uuidv4();


function App() {
  
  const[todos, setTodos] = useState([]);

  //inserts a new task into the array, alerts user if no task submitted
  const taskToAdd = todo => {
    if (todo !== "") {
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}]);
    } else {
      alert('Please enter a task!');
    };
  };

  //looks through the todos array by ID, then switches the boolean of the value 'completed' 
  const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id === id ? {...
      todo, completed: !todo.completed} : todo))
  };

  //looks through the todos array and returns all entries that don't match the ID passed to it
  const deleteToDo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  };

  //looks through the todos array by ID and switches the value of 'isEditing' to allow for edit entry
  const editToDo = id => {
    setTodos(todos.map(todo => todo.id === id ? {...
      todo, isEditing: !todo.isEditing} : todo))
  };

  //looks through the todos array by ID, reassigns the task value and switches the 'isEditing' value to return to the default view
  const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? {...
      todo, task, isEditing: !todo.isEditing} : todo
    
    ))
  };

  return (
    <div className='ToDoContainer'>
      <div className='InputBar'>
        <InputBar taskToAdd={taskToAdd} />
      </div>
      <div className='TaskWrapper'>
        {
          todos.map((todo, index) => 
          todo.isEditing ? (
            <EditBar className='EditBar' editToDo={editTask} todo={todo} />
          ) : (
          <TaskBlock todo={todo} key={index} toggleComplete={toggleComplete} 
          deleteToDo={deleteToDo} editToDo={editToDo} />)
        )
        }
      </div>
    </div>
  );
}

export default App;
