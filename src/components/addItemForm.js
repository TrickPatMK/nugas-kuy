class AddItemForm extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="wrapper">  
    <h2 class="add-new-header">Add new task</h2>
      <form action="" id="new-item-form" method="POST">
        <label for="lecture">Lecture: <br /> </label>
        <input type="text" name="lecture" id="lecture" value="" />

        <br />

        <label for="week">Week: <br /> </label>
        <input type="number" name="week" id="week" value="" />

        <br />

        <label for="desc">Description: <br /> </label>
        <textarea name="desc" id="desc" cols="30" rows="10" value=""></textarea>

        <br />

        <label for="criteria">Criteria: <br /> </label>
        <textarea name="criteria" id="criteria" cols="30" rows="10" value=""></textarea>

        <br />

        <label for="deadline"> Deadline: <br /> </label>
        <input type="date" name="date" id="date" value="" />

        <button type="submit" id="add-new-item">
          <span class="material-icons"> check </span>
        </button>
      </form>
    </div>`;
  }
}

customElements.define("add-item-form", AddItemForm);
