export default function Task(props) {
  const data = props.data

  return (
    <>
      <h2>{data.lecture} #{data.week}</h2>
      <div className="data-wrapper">
        <h3>Description</h3>
        <p>{data.desc}</p>
      </div>
      <div className="data-wrapper">
        <h3>Criteria</h3>
        <p>{data.criteria}</p>
      </div>
      <div className="data-wrapper">
        <h3>Deadline</h3>
        <p>{data.deadline}</p>
      </div>
    </>
  )
}