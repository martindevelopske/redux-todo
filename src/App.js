import React from 'react'
import Input from './components/Input'
import './App.css'
import TodoItem from './components/TodoItem'
import {useSelector} from 'react-redux'
import {selectTodoList} from './features/todoSlice'
function App() {
  const list=useSelector(selectTodoList);
  console.log(list);
  return (
    <div className="App">
      <div className='appContainer'>
        <div className='appTodo'>
          {list.map((item)=>{
            return(
              <TodoItem 
              name={item.item}
              done={item.done}
              id={item.id}
              />
            )
          })}
        </div>
        <Input />
      </div>
      
    </div>
  )
}

export default App