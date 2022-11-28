import { Checkbox } from '@mui/material'
import React from 'react'
import './todoItem.css'
import { useDispatch } from 'react-redux'
import { handleCheck } from '../features/todoSlice'
const TodoItem = ({name,done,id}) => {
    const dispatch=useDispatch();
    const handleChange=()=>{
        dispatch(handleCheck(id));
    }
  return (
    <div className='todoItem'>
    <p className={done&& "todoItem--done"} >{name}</p>    
    <Checkbox
      checked={done}
      onChange={handleChange}
      color="primary"
      inputProps={{ 'aria-label': 'controlled' }}
/>
    </div>
  )
}

export default TodoItem