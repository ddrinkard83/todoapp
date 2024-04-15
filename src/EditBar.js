import React from 'react';
import { useState } from 'react';

function EditBar({ editToDo, todo }) {

    const [task, setTask] = useState(todo.task);

    const handleChange = (event) => {
        setTask(event.target.value);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        editToDo(task, todo.id); 
        setTask("");    
    };
    
    return (
        <div className='TaskBlock'>
            <form onSubmit={handleSubmit}>
                <input className='TaskInput' type="text" value={task} placeholder="Update Task" onChange={handleChange} />
                <input className='SubmitButton' type="submit" name="Update"/>
            </form>
        </div>
    )

};


export default EditBar;