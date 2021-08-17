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
  const myform = document.querySelector("form");
  let ITEM = {
    lecture: "",
    week: "",
    desc: "",
    criteria: "",
    deadline: "",
  };
  if (newItem) {
    const lecture = document.querySelector("#lecture").values;
    newItem.onclick = function (e) {
      e.preventDefault();

      itemForm.style.display = "none";
      nav.style.display = "block";
      btnBack.style.display = "none";

      console.log(lecture);
      ITEM.lecture = lecture;
      ITEM.desc = document.getElementsByName("desc").values;
      ITEM.criteria = document.getElementsByName("criteria").values;
      ITEM.deadline = document.getElementsByName("deadline").values;

      console.log(ITEM);
      console.log(ITEM.lecture);
    };
  }

  if (myform) {
    myform.onsubmit = () => {
      const lecture = document.querySelector("#lecture").values;
      ITEM.lecture = lecture;
      ITEM.desc = document.getElementsByName("desc").values;
      ITEM.criteria = document.getElementsByName("criteria").values;
      ITEM.deadline = document.getElementsByName("deadline").values;
    };
  }
}

export default main;
