//ovo su sami taskovi

import React, { useState } from 'react';
import './Todo.css';
import { CreateTask } from './CreateTask';
import { Task } from './types/TaskTypes';
import { Todo1 } from './Task';


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

    const addTask = (title:string) => {
        const newTasks:Task[] = [...tasks, {title: title}];
        setTasks(newTasks);
    };

    const removeTask = (index:number) => {
        const newTasks:Task[] = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <div className="todo-container">
            <div className="header">TO DO</div>
            <div className="tasks">
                {tasks.map((task, index) => (
                    <Todo1
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