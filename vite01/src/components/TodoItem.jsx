function TodoItem(props) {
  const {job} = props
  return (
    <div className="todo-item">
      <p>{job.todo} && {job.completed && <span>OK</span>}</p>
      <div className="btn-group">
        <a>Edit</a>
        <a>Delete</a>
      </div>
    </div>
  )
}

export default TodoItem