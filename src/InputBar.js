import React from 'react';
import { useState } from 'react';

function InputBar({taskToAdd}) {

    const [task, setTask] = useState("");

    const handleChange = (event) => {
        setTask(event.target.value);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        taskToAdd(task); 
        setTask("");    
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input className='TaskInput' type="text" value={task} placeholder="What do you want to do?" onChange={handleChange} />
            <input className='SubmitButton' type="submit" name="Submit" value="Add Task"/>
        </form>
    )

};


export default InputBar;