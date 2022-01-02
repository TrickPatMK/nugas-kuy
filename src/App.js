import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import AddTaskPage from "./pages/AddTaskPage";
import Home from "./pages/Home";

function App() {
  const [tasks, setTasks] = useState([]);
  const [edit, setEdit] = useState({});

  function addTask(newTask) {
    let updatedTasks = [...tasks];

    if (edit.id) {
      const editedTaskIndex = tasks.findIndex((task) => {
        return task.id === newTask.id;
      });

      updatedTasks[editedTaskIndex] = newTask;
      setEdit({});
    } else {
      updatedTasks = [...tasks, newTask];
    }
    setTasks(updatedTasks);
  }

  function editTask(editData) {
    setEdit(editData);
  }

  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home data={tasks} editTask={editTask} />} />
          <Route
            path="/addTask"
            element={<AddTaskPage addTask={addTask} editTask={edit} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
