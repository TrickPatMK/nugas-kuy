class TaskItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="task-title">
      <h2>Manajemen Operasional</h2>
    </div>

    <!-- START: Task description 1 -->
    <div class="task-week">
      <h3>Week 0</h3>
      <div class="task-desc">
        <h4>Task Description:</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          exercitationem illum necessitatibus quasi nobis quae animi alias
          cumque nisi maiores.
        </p>
        <div class="criteria">
          <h4>Criteria:</h4>
          <p>time here</p>
        </div>
        <div class="deadline">
          <h4>Deadline:</h4>
          <p>date here</p>
        </div>
      </div>
    </div>`;
  }
}

customElements.define("task-item", TaskItem);
