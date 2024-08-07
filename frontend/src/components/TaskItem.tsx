import React from "react";
import { ITask } from "../helpers/types";

interface TaskItemProps {
  task: ITask;
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onComplete, onDelete }) => {
  return (
    <div
      className={`flex items-center justify-between p-4 mb-4 rounded-lg shadow-md ${
        task.completed ? "bg-green-100" : "bg-white"
      }`}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onComplete(task._id)}
          className="mr-4 form-checkbox h-5 w-5 text-blue-600"
        />
        <div>
          <h3
            className={`font-semibold ${
              task.completed ? "line-through text-gray-500" : "text-gray-800"
            }`}
          >
            {task.title}
          </h3>
          <p
            className={`text-sm ${
              task.completed ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {task.description}
          </p>
        </div>
      </div>
      <button
        onClick={() => onDelete(task._id)}
        className="px-3 py-1 text-red-600 hover:bg-red-100 rounded-md transition duration-300"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
