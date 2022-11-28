import { createSlice } from "@reduxjs/toolkit";


const initialState={
    todoList:[
    
    ]
}

const todoSlice=createSlice({
    name:"todos",
    initialState,
    reducers: {
        saveTodo: (state,action)=>{
            state.todoList.push(action.payload)
        },
        handleCheck:(state,action)=>{
            state.todoList.map((item)=>{
                if(action.payload=== item.id){
                    if(item.done=== true){
                        item.done =false
                    } else{
                        item.done=true;
                    }
                }
            })
        }
    }
})

export const {saveTodo,handleCheck}=todoSlice.actions;
//select all todos
export const selectTodoList=state=>state.todos.todoList;
export default todoSlice.reducer;