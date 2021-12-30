import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import AddTaskPage from "./pages/AddTaskPage";
import Home from "./pages/Home";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    const updatedTasks = task;
    setTasks([...tasks, updatedTasks]);
  }

  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home data={tasks} />} />
          <Route path="/addTask" element={<AddTaskPage addTask={addTask} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
