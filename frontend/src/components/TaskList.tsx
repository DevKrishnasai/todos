import React, { useState, useEffect } from "react";
import { ITask } from "../helpers/types";
import TaskItem from "./TaskItem";

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [newTask, setNewTask] = useState<ITask>({
    title: "",
    description: "",
    completed: false,
    expireTime: new Date(),
    prority: "LOW",
    userId: "",
    _id: "",
  });

  useEffect(() => {
    // Fetch tasks from your API
    // setTasks(fetchedTasks);
  }, []);

  const handleAddTask = () => {
    // Add task to your API
    // Then update local state
    setTasks([
      ...tasks,
      { ...newTask, _id: Date.now().toString(), completed: false },
    ]);
    setNewTask({
      title: "",
      description: "",
      completed: false,
      expireTime: new Date(),
      prority: "LOW",
      userId: "",
      _id: "",
    });
  };

  const handleCompleteTask = (id: string) => {
    // Update task in your API
    // Then update local state
    setTasks(
      tasks.map((task) =>
        task._id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id: string) => {
    // Delete task from your API
    // Then update local state
    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        My Todo List
      </h1>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Task title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          className="w-full p-2 mb-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Task description"
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
          className="w-full p-2 mb-2 border rounded-md"
        />
        <button
          onClick={handleAddTask}
          className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Add Task
        </button>
      </div>
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onComplete={handleCompleteTask}
          onDelete={handleDeleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
