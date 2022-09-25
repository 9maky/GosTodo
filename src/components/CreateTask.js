// Ovo je import 

import React, { useState } from 'react';
import './Todo.css';

export function CreateTask({ addTask }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTask(value);
        setValue("");
    }

    return (
        <form onSubmit={handleSubmit}>

            <div class="input-container">
            <input
                type="text"
                className="input"
                value={value}
                placeholder="Upiši zadatak..."
                onChange={e => setValue(e.target.value)}/>
                
            </div>
        </form>
    );
}