import React from "react";

const TaskCard = (props) => {
  return (
    <div className="card">
      <div className="wrapper">
        <h2 className="card-title">
          {props.lecture} #{props.week}
        </h2>
      </div>
      <div className="wrapper">
        <h3>Description</h3>
        <p>{props.description}</p>
      </div>
      <div className="wrapper">
        <h3>Criteria</h3>
        <p>{props.criteria}</p>
      </div>
      <div className="wrapper">
        <h3>Deadline</h3>
        <p>{props.deadline}</p>
      </div>
    </div>
  );
};

export default TaskCard;
