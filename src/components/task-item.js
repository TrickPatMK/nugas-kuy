class TaskItem extends HTMLElement {
  constructor() {
    super();
  }

  set data(items) {
    this.item = items;
    this.render();
  }

  render() {
    this.innerHTML += `
    <div class="task-title">
      <h2>${this.item.lecture}</h2>
    </div>

    <!-- START: Task description 1 -->
    <div class="task-week">
      <h3>Week ${this.item.week}</h3>
      <div class="task-desc">
        <h4>Task Description:</h4>
        <p>${this.item.desc}</p>
        <div class="criteria">
          <h4>Criteria:</h4>
          <p>${this.item.criteria}</p>
        </div>
        <div class="deadline">
          <h4>Deadline:</h4>
          <p>${this.item.deadline}</p>
        </div>
      </div>
    </div>`;
  }
}

customElements.define("task-item", TaskItem);
