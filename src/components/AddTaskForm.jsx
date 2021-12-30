import { nanoid } from "nanoid";
import { useState } from "react";

export default function AddTaskForm(props) {
  const [task, setTask] = useState({
    id: "",
    lecture: "",
    week: "",
    desc: "",
    criteria: "",
    deadline: "",
  });

  function onChangeHandler(e) {
    const changedData = e.target.name;
    const updatedData = {
      ...task,
      [changedData]: e.target.value,
    };
    setTask(updatedData);
  }

  function onSubmitHandler(e) {
    e.preventDefault();

    const updatedTask = { ...task, id: nanoid() };

    props.addTask(updatedTask);

    setTask({
      id: "",
      lecture: "",
      week: "",
      desc: "",
      criteria: "",
      deadline: "",
    });
    console.log("submited");
  }

  return (
    <form onSubmit={onSubmitHandler}>
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
      <button type="submit">Save</button>
    </form>
  );
}
