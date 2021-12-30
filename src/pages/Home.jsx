import Task from "../components/Task";

export default function Home(props) {
  
  const tasks = props.data
  
  return (
    <div>
        {tasks.length > 0 ? (
          <ul>
            {tasks.map((task) => {
              return (
                <li key={task.id}>
                  <Task data={task} />
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