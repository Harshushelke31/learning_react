import React, { useState, useEffect } from 'react';

const ToDoArrayLocalStorage = () => {

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("tasks"));

        if (saved) {
            setTasks(saved);
        }
    }, []);

    const addTask = () => {

        if (!task.trim()) {
            return;
        }

        const newTasks = [...tasks, task];

        setTasks(newTasks);

        localStorage.setItem(
            "tasks",
            JSON.stringify(newTasks)
        );

        setTask("");
    };

    return (
        <div className="container border rounded p-4 col-md-6 mt-4">

            <h2 className="text-danger">
                TODO Array List - Local Storage
            </h2>

            <input
                className="form-control mb-3"
                placeholder="Enter Task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />

            <button
                className="btn btn-primary"
                onClick={addTask}
            >
                Add
            </button>

            <ul className="mt-3">
                {tasks.map((t, i) => (
                    <li key={i}>{t}</li>
                ))}
            </ul>

        </div>
    );
};

export default ToDoArrayLocalStorage;