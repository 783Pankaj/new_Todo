import { createContext, useContext } from "react";

export const TodoContext= createContext({
    todos:[
        {
            id:1,
            todo:"Todo msg",
            completed:false,
        }
    ],
    addTodo: (todo)=>{},
    updateTodo: (id, todo)=>{},
    deleteTodo:(id)=>{},
    toggleComlete:(id)=>{}

})

export const useTodo = ()=>{
    return useContext(TodoContext)   // when we use useContext then we must pass one context
}

export const TodoProvider = TodoContext.Provider