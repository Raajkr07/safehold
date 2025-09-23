import React, { useState, useEffect, useRef } from "react";
import { IconCommand } from '@tabler/icons-react';

const ToDoList = () => {
  const [newTaskText, setNewTaskText] = useState("");
  const [newTaskDate, setNewTaskDate] = useState("");
  const [tasks, setTasks] = useState([
    { id: 1, text: "Finish monthly report", completed: false, dueDate: "2025-09-28" },
    { id: 2, text: "Call vendor for invoice", completed: true, dueDate: "2025-09-25" },
    { id: 3, text: "Prepare presentation slides", completed: false, dueDate: "2025-09-30" },
    { id: 4, text: "Schedule team meeting", completed: false, dueDate: "2025-09-26" },
    { id: 5, text: "Review Q3 budget", completed: true, dueDate: "2025-09-20" },
    { id: 6, text: "Update client database", completed: false, dueDate: "2025-10-05" },
    { id: 7, text: "Submit tax documents", completed: false, dueDate: "2025-10-10" },
    { id: 8, text: "Organize office supplies", completed: true, dueDate: "2025-09-22" },
    { id: 9, text: "Plan marketing campaign", completed: false, dueDate: "2025-10-15" },
    { id: 10, text: "Conduct employee feedback survey", completed: false, dueDate: "2025-10-01" },
  ]);

  const inputRef = useRef(null);

  useEffect(() => {
    function handleKeyDown(e) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const addTask = () => {
    if (!newTaskText.trim()) return;
    const newTask = {
      id: Date.now(),
      text: newTaskText.trim(),
      completed: false,
      dueDate: newTaskDate || null,
    };
    setTasks((prev) => [newTask, ...prev]);
    setNewTaskText("");
    setNewTaskDate("");
  };

  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <section className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto rounded-xl border border-gray-200 my-10 flex flex-col items-center">
      <h2 className="text-2xl font-semibold my-5 font-serif text-center">To-Do</h2>

      {/* Input Section */}
      <div className="flex flex-col sm:flex-row gap-2 mb-6 w-full max-w-3xl justify-center">
        <div className="relative flex-grow">
          <input
            ref={inputRef}
            type="text"
            placeholder="Add a new task"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            className="w-full rounded-md border border-gray-300 h-14 p-3 pr-10 focus:outline-none focus:ring-1 focus:ring-green-500 bg-primary/20"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-md font-mono select-none flex items-center space-x-1 dark:bg-gray-800 dark:text-gray-300">
            <IconCommand size={25} stroke={1.5} />
            <span className='font-bold text-[18px]'>A</span>
          </div>
        </div>

        <input
          type="date"
          value={newTaskDate}
          onChange={(e) => setNewTaskDate(e.target.value)}
          className="w-full sm:w-40 rounded-md border border-gray-300 p-3 h-14 focus:outline-none focus:ring-1 bg-primary/20 focus:ring-green-500"
        />
        <button
          onClick={addTask}
          className="bg-green-600 text-white font-bold hover:scale-105 px-5 py-3 rounded-md hover:bg-green-700 transition"
        >
          Add Task
        </button>
      </div>

      <ul className="max-w-3xl divide-y divide-gray-300 dark:divide-gray-600 w-full">
        {tasks.length === 0 && (
          <li className="py-4 text-center text-gray-500 dark:text-gray-400">
            No tasks added yet.
          </li>
        )}

        {tasks.map(({ id, text, completed, dueDate }) => {
          const isOverdue = dueDate && !completed && new Date(dueDate) < new Date();

          return (
            <li key={id} className="flex items-center font-serif justify-between py-3">
              <label className="flex items-center gap-3 cursor-pointer flex-grow select-none">
                <input
                  type="checkbox"
                  checked={completed}
                  onChange={() => toggleComplete(id)}
                  className="w-5 h-5"
                />
                <span
                  className={`text-lg ${
                    completed
                      ? "line-through text-gray-400 dark:text-gray-500"
                      : "dark:text-gray-100"
                  }`}
                >
                  {text}
                </span>
              </label>

              {dueDate && (
                <span
                  className={`ml-4 text-sm font-medium ${
                    isOverdue
                      ? "text-red-600 dark:text-red-400"
                      : "text-gray-600 dark:text-gray-400"
                  }`}
                  title={`Due on ${dueDate}`}
                >
                  {new Date(dueDate).toLocaleDateString(undefined, {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              )}

              <button
                onClick={() => deleteTask(id)}
                aria-label="Delete task"
                className="ml-4 text-red-500 hover:text-red-700 transition"
              >
                &times;
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ToDoList;
