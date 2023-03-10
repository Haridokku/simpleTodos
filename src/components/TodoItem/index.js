// Write your code here
import './index.css'

const TodoItem = props => {
  const {eachTodo, DeleteTodo} = props
  const {title, id} = eachTodo

  onDeleteTodo = () => {
    DeleteTodo(id)
  }
  return (
    <li className="todoContainer">
      <p className="description">{title}</p>
      <button type="button" className="button" onClick={this.onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
