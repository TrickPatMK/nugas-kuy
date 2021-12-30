import "material-icons/iconfont/filled.css";
import { useState } from "react";
import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import Navbar from "./components/Navbar";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    const updatedTasks = task;
    setTasks([...tasks, updatedTasks]);
  }

  return (
    <div className="App">
      <AddTaskForm addTask={addTask} />
      <div>
        {tasks.length > 0 ? (
          <ul>
            {tasks.map((task) => {
              return <li key={task.id}>{task.lecture}</li>;
            })}
          </ul>
        ) : (
          <i>tugas kosong boss</i>
        )}
      </div>
    </div>
  );
}

export default App;
