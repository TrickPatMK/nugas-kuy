import React, { useState } from "react";

const NewItemForm = (props) => {
  const [data, setData] = useState({
    lecture: "",
    week: "",
    description: "",
    criteria: "",
    deadline: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTask(data);
    console.log(data);
    setData("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Lecture */}
      <h2 className="label-wrapper">
        <label htmlFor="lecture">Lecture: </label>
      </h2>
      <input type="text" name="lecture" id="lecture" onChange={handleChange} />
      {/* Week */}
      <h2 className="label-wrapper">
        <label htmlFor="week">Week: </label>
      </h2>
      <input type="text" name="week" id="week" onChange={handleChange} />
      {/* Description */}
      <h2 className="label-wrapper">
        <label htmlFor="description">Description: </label>
      </h2>
      <input
        type="text"
        name="description"
        id="description"
        onChange={handleChange}
      />
      {/* Criteria */}
      <h2 className="label-wrapper">
        <label htmlFor="criteria">Criteria: </label>
      </h2>
      <input
        type="text"
        name="criteria"
        id="criteria"
        onChange={handleChange}
      />
      {/* Deadline */}
      <h2 className="label-wrapper">
        <label htmlFor="deadline">Deadline: </label>
      </h2>
      <input
        type="text"
        name="deadline"
        id="deadline"
        onChange={handleChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default NewItemForm;
