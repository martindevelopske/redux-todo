import React, { useState } from 'react'
import './input.css';
import { useDispatch } from 'react-redux';
import { saveTodo } from '../features/todoSlice';

const Input = () => {
  const dispatch=useDispatch();
    const [input,setInput]=useState('');

    const addTodo=()=>{
        dispatch(saveTodo({
          item: input,
          done:false,
          id:Date.now()
        }))
        setInput('')
    }
  return (
    <div className="input">
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}></input>
        <button onClick={addTodo}>Add!</button>
    </div>
  )
}

export default Input