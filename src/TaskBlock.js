import React from 'react';

function TaskBlock({ todo, toggleComplete, deleteToDo, editToDo }) {
    return (
        <div className='TaskBlock'>
            <h2 onClick={() => toggleComplete(todo.id)}  className={`${todo.completed ? 'Completed': ""}`}>{todo.task}</h2>
            <button onClick={() => editToDo(todo.id)}>Edit</button>
            <button onClick={() => deleteToDo(todo.id)}>Delete</button>
        </div>
    );
};

export default TaskBlock;


