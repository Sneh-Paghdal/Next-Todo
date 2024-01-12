"use client";

import { useTodo } from "@/store/todos";
import { useSearchParams } from "next/navigation";
import React from "react";

const Todo = () => {
  const { todos, handleActivity, handleDelete } = useTodo();

  const searchParams = useSearchParams();
  const linkText = searchParams.get('todo');

  let filteredTodos = todos;

  if(linkText === "active"){
    filteredTodos = todos.filter((todo) => !todo.isCompleted);
  }else if(linkText === "complete"){
    filteredTodos = todos.filter((todo) => todo.isCompleted);
  }

  return (
    <ul className="pt-4">
      {filteredTodos.map((todo,index) => (
        <li className={`w-100 pt-4 pb-3.5 border ${(index == filteredTodos.length - 1) ? "border-y-black" : "border-t-black"} border-x-0 flex justify-between`} key={todo.id}>
            <div>
                <input onChange={() => handleActivity(todo.id)} className=" accent-black mr-4 ml-4" type="checkbox" name="todo" id={`todo-${todo.id}`} checked={todo.isCompleted} />
                <label className={`${todo.isCompleted ? "line-through text-gray-500" : ""}`} htmlFor={`todo-${todo.id}`}> {todo.task}</label>
            </div>
            {
                todo.isCompleted && (
                    <button className="mr-4" type="button" 
                    onClick={() => handleDelete(todo.id)}
                    >
                        &#x2715;
                    </button>
                )
            }
        </li>
      ))}
    </ul>
  );
};

export default Todo;
