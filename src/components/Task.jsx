import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Task(props) {
  const [task, setTask] = useState({});

  const navigate = useNavigate()

  useEffect(() => {
    const importData = props.data
    setTask(importData)
    props.editTask({});
  }, [props.data])


  function onClickHandler(e) {
    e.preventDefault();

    const statusToggler = task.done ? false : true
    setTask({ ...task, done: statusToggler })
  }

  function onEditHandler(data) {
    const editData = data
    props.editTask(editData);
    navigate("/addTask")
  }

  return (
    <div className="task-item">
      <h2>
        <span>{task.lecture} #{task.week}</span> 
        <span className="material-icons" onClick={() => onEditHandler(task)} > edit </span>
      </h2>
      <div className="task-item-status">
        <i>Status:{task.done ? " Selesai " : " Belum Selesai "}</i>
        <button onClick={onClickHandler}>{task.done ? "Not yet" : "Done"}</button>
      </div>
      <div className="task-item-wrapper">
        <h3>Description</h3>
        <p>{task.desc}</p>
      </div>
      <div className="task-item-wrapper">
        <h3>Criteria</h3>
        <p>{task.criteria}</p>
      </div>
      <div className="task-item-wrapper">
        <h3>Deadline</h3>
        <p>{task.deadline}</p>
      </div>
    </div>
  )
}