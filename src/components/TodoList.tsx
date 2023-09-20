import { FC } from "react";
import { ITodo } from '../types'
import { TodoItem } from './TodoItem.tsx'

type TodoListType = {
  todos: ITodo[]
}

export const TodoList: FC<TodoListType> = ({ todos }) => {
  return (
    <>
      {todos.map(todo => (<TodoItem key={todo.id} {...todo} />))}
    </>
  )
}
