import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from '../redux/actions'

const ToDoList = () => {

  const todoList = useSelector(state => state.toDoList)

  const [value, setValue] = useState('')

  const dispatch = useDispatch()
  
//   console.log(todoList);
  
  const handleSubmit = () => {
    dispatch(addTodo(value))
    setValue('')
  }

  const handleDeleteTodo = (todo) => {
    dispatch(deleteTodo(todo))
  }


  return (
    <div>
      <h1 className="heading">To do list</h1>
      <div className="form-input">
        <input type="text" placeholder='Todo' value={value} style={{marginLeft: 20}} onChange={(e) => setValue(e.target.value)}/>
        <button onClick={handleSubmit} style={{marginLeft: 20}}>Add todo</button>
      </div>
      {
        todoList.length > 0 && (
            <ul>
                {
                    todoList.map(item => (
                        <li key={item}>{item} <span onClick={() => handleDeleteTodo(item)}>&times;</span></li>
                    ))  
                }
            </ul>
        )
      }
    </div>
  )
}

export default ToDoList