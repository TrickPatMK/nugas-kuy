export default function main() {
  const addButton = document.getElementById("add-item");

  addButton.onclick = function () {
    window.location.replace("./src/pages/addNewItem.html");
  };
}
