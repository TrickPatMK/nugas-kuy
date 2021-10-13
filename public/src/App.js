import React, { useState } from "react";
import TaskCard from "./Component/TaskCard";
import NewItemForm from "./Component/NewItemForm";
import "./App.css";

const DUMMY_TASK = [
  {
    lecture: "Manajemen Operasional",
    week: "01",
    description:
      "Membuat laporan mengenai layout di sebuah perusahaan yang kita minati",
    criteria: "Simple Criteria Here",
    deadline: "yyy/mm/dd",
  },
  {
    lecture: "Manajemen Akuntansi",
    week: "11",
    description:
      "Membuat laporan mengenai layout di sebuah perusahaan yang kita minati",
    criteria: "Simple Criteria Here",
    deadline: "yyyy/mm/dd",
  },
];

function App() {
  const [tasks, setTasks] = useState(DUMMY_TASK);

  const addTask = (value) => {
    setTasks([...tasks, value]);
    console.log("data diterima");
  };

  const taskList = tasks?.map((task) => (
    <TaskCard
      lecture={task.lecture}
      week={task.week}
      description={task.description}
      criteria={task.criteria}
      deadline={task.deadline}
    />
  ));
  return (
    <>
      <header>
        <div className="logo" id="logo">
          <h1>Logo Here</h1>
        </div>
        <nav className="nav-wrapper">
          <ul className="nav-item-wrapper">
            <li>Menu 1</li>
            <li>Menu 2</li>
          </ul>
        </nav>
      </header>
      <NewItemForm addTask={addTask} />

      {taskList || <h2>Selamat bro, tugas lu kosong!</h2>}
    </>
  );
}

export default App;
