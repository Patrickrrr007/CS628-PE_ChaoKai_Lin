import { useState } from "react";
import "./App.css";

// ToDo Item Component
function ToDoItem({ todo, onDelete }) {
  return (
    <div className="todo-item">
      <span>{todo}</span>
      <button onClick={onDelete} className="delete-button">
        Delete
      </button>
    </div>
  );
}

// ToDo List Component
function ToDoList({ todos, onDelete }) {
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p className="empty-list">No tasks added yet.</p>
      ) : (
        todos.map((todo, index) => (
          <ToDoItem key={index} todo={todo} onDelete={() => onDelete(index)} />
        ))
      )}
    </div>
  );
}

// Main App Component
export default function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <h1 className="title">ToDo List App</h1>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="task-input"
          placeholder="Enter task description"
        />
        <button onClick={addTask} className="add-button">
          Add Task
        </button>
      </div>
      <ToDoList todos={todos} onDelete={deleteTask} />
    </div>
  );
}
