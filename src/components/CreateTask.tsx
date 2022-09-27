// Ovo je import 

import React, { useState } from 'react';
import './Todo.sass'; 

export function CreateTask({ addTask }:any):JSX.Element {
    const [value, setValue] = useState("");

    const handleSubmit = (e:any) => {
        e.preventDefault();
        if (!value) return;
        addTask(value);
        setValue("");
    }

    return (
        <form onSubmit={handleSubmit}>

            <div className="input-container">
            <input
                type="text"
                className="input"
                value={value}
                placeholder="Upiši zadatak..."
                onChange={(e:any) => setValue(e.target.value)}/>
                
            </div>
        </form>
    );
}