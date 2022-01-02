import Task from "../components/Task";

export default function Home(props) {
  
  // const tasks = [...DUMMY, props.data]
  const tasks = props.data
  
  return (
    <div className="tasks">
      <h1 className="home-title">Task List</h1>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => {
            return (
              <li key={task.id} className="task">
                <Task data={task} editTask={props.editTask} />
              </li>
            );
          })}
        </ul>
      ) : (
        <i>tugas kosong boss</i>
      )}
    </div>
  )
}