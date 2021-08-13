window.addEventListener("load", main);

function main() {
  const addButton = document.getElementById("add-item");
  if (addButton) {
    addButton.onclick = function () {
      window.location.replace("./src/pages/addNewItem.html");
    };
  }
}
