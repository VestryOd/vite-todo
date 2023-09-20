import { ITodo } from '../types'


export const TodoItem = ({ title, pictureUrl, isCompleted }: ITodo) => (
  <div className="todo-item">
    <input type="checkbox" checked={isCompleted}/>
    <p>{title}</p>
    <div className="image-wrapper">
      <img src={pictureUrl} alt={title}/>
    </div>
  </div>
)
