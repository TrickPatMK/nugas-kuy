class TaskItem extends HTMLElement {
  constructor() {
    super();
  }

  set data(items) {
    this.item = items;
    this.render();
  }

  addItem(lecture, week, desc, criteria, deadline) {
    this.lecture = lecture;
    this.week = week;
    this.desc = desc;
    this.criteria = criteria;
    this.deadline = deadline;
    this.render();
  }

  render() {
    this.innerHTML += `
    <div class="task-title">
      <h2>${this.item.lecture || this.lecture}</h2>
    </div>

    <!-- START: Task description 1 -->
    <div class="task-week">
      <h3>Week ${this.item.week || this.week}</h3>
      <div class="task-desc">
        <h4>Task Description:</h4>
        <p>${this.item.desc || this.desc}</p>
        <div class="criteria">
          <h4>Criteria:</h4>
          <p>${this.item.criteria || this.criteria}</p>
        </div>
        <div class="deadline">
          <h4>Deadline:</h4>
          <p>${this.item.deadline || this.deadline}</p>
        </div>
      </div>
    </div>`;
  }
}

customElements.define("task-item", TaskItem);
