import { TaskItem } from "../components/task-item";

const addItem = () => {
  let items = new TaskItem();

  items.lecture = document.getElementsByName("lecture")[0].value;
  items.week = document.getElementsByName("week")[0].value;
  items.desc = document.getElementsByName("desc")[0].value;
  items.criteria = document.getElementsByName("criteria")[0].value;
  items.deadline = document.getElementsByName("date")[0].value;

  const newItem = document.createElement("task-item");
  newItem.addItem = items;
  list.appendChild(newItem);
};

export default addItem;
