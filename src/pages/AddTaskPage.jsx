import { nanoid } from "nanoid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddTaskPage(props) {
  

  const taskTemplate = {
    id: "",
    lecture: "",
    week: "",
    desc: "",
    criteria: "",
    deadline: "",
    done: false,
  };
  const [task, setTask] = useState(props.editTask.id ? props.editTask  : taskTemplate);

  const navigate = useNavigate();

  function onChangeHandler(e) {
    const changedData = e.target.name;
    const updatedData = {
      ...task,
      [changedData]: e.target.value,
    };
    setTask(updatedData);
  }

  async function onSubmitHandler(e) {
    e.preventDefault();

    if (task === taskTemplate) return;
    if(props.editTask.id) {
      props.addTask({ ...task })
      console.log("edit triggered")
    } else {
      const updatedTask = { ...task, id: nanoid() };  
      props.addTask(updatedTask);
      console.log("edit ignored")
    }

    setTask({ taskTemplate });
    navigate("/") 
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach((item) => item.classList.toggle("active"));
    console.log("submited");
  }

  return (
    <div className="form-wrapper">
      <h1 className="form-title">Add Task</h1>
      <form onSubmit={onSubmitHandler} className="form">
        <div className="form-item">
          <label htmlFor="lecture">Lecture</label>
          <input
            type="text"
            id="lecture"
            name="lecture"
            onChange={onChangeHandler}
            value={task.lecture}
          />
        </div>
        <div className="form-item">
          <label htmlFor="week">Week</label>
          <input
            type="number"
            id="week"
            name="week"
            onChange={onChangeHandler}
            value={task.week}
            placeholder="0"
          />
        </div>
        <div className="form-item">
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            id="desc"
            name="desc"
            onChange={onChangeHandler}
            value={task.desc}
            placeholder="add detail here ..."
          />
        </div>
        <div className="form-item">
          <label htmlFor="criteria">Criteria</label>
          <input
            type="text"
            id="criteria"
            name="criteria"
            onChange={onChangeHandler}
            value={task.criteria}
          />
        </div>
        <div className="form-item">
          <label htmlFor="deadline">Deadline</label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            onChange={onChangeHandler}
            value={task.deadline}
          />
        </div>
        <button type="submit" className="btn-submit">
          Save
        </button>
      </form>
    </div>
  );
}
