import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todo, removeTodo } from './features/TodoReducer'
import './style.css'

function App() {

  const dispatch = useDispatch()

  const todos = useSelector((state) => state.text)

  const [text, setText] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    dispatch(todo(text))
    setText('')
  }

  const handleAddTodo = (e) => {
    setText(e.target.value)
  }

  const handleRemove = (i) => {
    dispatch(removeTodo(i))
  }

  return (
    <>
      <div className="app">
        <form
          action='/'
          onSubmit={handleChange}>
          <input
          className='input'
          placeholder='Enter some text...'
            onChange={handleAddTodo}
            value={text}
            type="text" />
          <button
          className='btn'
            type='submit'
            disabled={!text || text[0] === ' '}
          >ADD</button>
        </form>
      
      <div className='todos'>
      <ul>
        {todos.map((item, i) => {
          return (
            <p key={i}>
              <span>{item}</span>
              <button
                onClick={() => handleRemove(i)}
              >Delete</button>
            </p>
          )
        }).reverse()}
      </ul>
      </div>
      </div>
    </>
  );
}

export default App;