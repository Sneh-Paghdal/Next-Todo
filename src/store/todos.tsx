'use client'

import { ReactNode, createContext, useContext, useState } from "react";

export type TodoContext ={
    todos : Todo[];
    handleAddTodo : (task : string) => void;
    handleActivity : (id : string) => void;
    handleDelete : (id : string) => void;
}

export type Todo = {
    id : string;
    task : string;
    isCompleted : boolean;
    createdOn : Date;
}

export const todoContext = createContext<TodoContext | null>(null);

export function TodoProvider ({children}: { children: ReactNode }){

    const [todos, setTodos] = useState<Todo[]>(() => {
        try{
        const newTodos = localStorage.getItem('todos') || "[]";
        return JSON.parse(newTodos) as Todo[]
        }catch (e) {
            return []
        }
    });

    // const [todos, setTodos] = useState<Todo[]>([]);

    function handleAddTodo (task : string){
        setTodos((prev) => {
            // we will create a new array
            const newTodos: Todo[] = [
                {
                    id: Math.random().toString(),
                    task,
                    isCompleted: false,
                    createdOn: new Date(),
                },
                ...prev,
            ];
            localStorage.setItem("todos", JSON.stringify(newTodos))
            return newTodos;
        })
    }

    function handleActivity (id:string) {
        setTodos((prev) => {
            // console.log("completed "+ prev.map((val) => val ))
            const newTodos = prev.map((task) => {
                if (task.id === id) {
                    return {...task, isCompleted: !task.isCompleted}
                }
                return task;
            })
            localStorage.setItem("todos", JSON.stringify(newTodos));
            return newTodos
        })
    }

    function handleDelete (id:string) {
        setTodos((prev) => {
            const newTodos = prev.filter((task) => task.id !== id)
            localStorage.setItem("todos", JSON.stringify(newTodos));
            return newTodos
        });
    }

    return(
    <todoContext.Provider value={{todos,handleAddTodo,handleActivity,handleDelete}}>
        {children}
    </todoContext.Provider>
    );
}

export function useTodo(){
    const todoContextValue = useContext(todoContext);
    if(!todoContextValue){
        throw new Error("Please define provider in perent");
    }
    return todoContextValue;
}