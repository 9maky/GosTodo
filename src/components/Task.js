//ovo je close button

import React from 'react';
import './Todo.css';

export function Task({ task, index, removeTask }) {
    return (
        <div className="task">
                
            {task.title}

            <button onClick={() => removeTask(index)}>
            <span class="close">&minus;</span>
            </button>
        
        </div>
    );
}