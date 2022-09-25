//ovo su sami taskovi

import React, { useState } from 'react';
import './Todo.css';
import { Task } from './Task.js';
import { CreateTask } from './CreateTask.js';

function Todo() {
    const [tasks, setTasks] = useState([
        {
            title: "Hemija zadaća",
        },
        {
            title: "GOScast", 
        },
        {
            title: "Matematika izlazni",
        },
        {
            title: "Historija referat", 
        }
    ]);

    const addTask = title => {
        const newTasks = [...tasks, { title}];
        setTasks(newTasks);
    };

    const removeTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <div className="todo-container">
            <div className="header">TO DO</div>
            <div className="tasks">
                {tasks.map((task, index) => (
                    <Task
                    task={task}
                    index={index}
                    removeTask={removeTask}
                    key={index}/>

                ))}
            </div>
            
            <div className="create-task" >
                <CreateTask addTask={addTask} />
            </div>
        </div>
    );
}
export default Todo;