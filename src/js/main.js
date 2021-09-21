import "../components/task-item";
import "../js/add-item";
import addItem from "../js/add-item";

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

  if (newItem) {
    newItem.onclick = function (e) {
      e.preventDefault();

      itemForm.style.display = "none";
      nav.style.display = "block";
      btnBack.style.display = "none";

      addItem();

      document.getElementsByName("lecture")[0].value = "";
      document.getElementsByName("week")[0].value = "";
      document.getElementsByName("desc")[0].value = "";
      document.getElementsByName("criteria")[0].value = "";
      document.getElementsByName("date")[0].value = "yyyy-MM-dd";
      console.log(items);
    };
  }
}

export default main;
