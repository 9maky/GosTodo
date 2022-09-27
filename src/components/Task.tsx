//ovo je close button

import React from 'react';
import './Todo.sass'; 
import { Task_prop } from './types/TaskTypes';
export function Todo1({ task, index, removeTask }:Task_prop){
    return (
        <div className="task">
                
            {task.title}

            <button onClick={() => removeTask(index)}>
            <span className="close">&minus;</span>
            </button>
        
        </div>
    );
}