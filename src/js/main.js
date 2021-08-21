import "../components/task-item";

function main() {
  const addButton = document.getElementById("add-item");
  const itemForm = document.querySelector("add-item-form");
  const nav = document.querySelector("nav");
  const btnBack = document.getElementById("btn-back");
  if (addButton) {
    addButton.onclick = function () {
      itemForm.style.display = "block";
      nav.style.display = "none";
      btnBack.style.display = "block";
    };
  }

  const newItem = document.getElementById("add-new-item");
  const list = document.querySelector("#task-list");
  // const item = document.querySelector("task-item");
  let items = {
    lecture: "",
    week: "",
    desc: "",
    criteria: "",
    deadline: "",
  };
  if (newItem) {
    newItem.onclick = function (e) {
      e.preventDefault();

      itemForm.style.display = "none";
      nav.style.display = "block";
      btnBack.style.display = "none";

      items.lecture = document.getElementsByName("lecture")[0].value;
      items.week = document.getElementsByName("week")[0].value;
      items.desc = document.getElementsByName("desc")[0].value;
      items.criteria = document.getElementsByName("criteria")[0].value;
      items.deadline = document.getElementsByName("date")[0].value;

      document.getElementsByName("lecture")[0].value = "";
      document.getElementsByName("week")[0].value = "";
      document.getElementsByName("desc")[0].value = "";
      document.getElementsByName("criteria")[0].value = "";
      document.getElementsByName("date")[0].value = "yyyy-MM-dd";
      console.log(items);

      const newItem = document.createElement("task-item");
      newItem.data = items;
      list.appendChild(newItem);
    };
  }
}

export default main;
