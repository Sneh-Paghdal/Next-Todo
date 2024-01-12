"use client"

import { useTodo } from '@/store/todos';
import React, { ChangeEvent, FormEvent, useState } from 'react'

const AddToDo = () => {

    const { handleAddTodo } = useTodo();
    const [todo, setTodo] = useState("");

    function handleSubmit (e:FormEvent<HTMLFormElement>) {
        e.preventDefault();
        handleAddTodo(todo);
        setTodo("");
    }

  return (
    <form onSubmit={handleSubmit} className='mt-6 flex justify-center'>
      <input placeholder='Write your todo' value={todo} onChange={(e : ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)} className='focus:shadow-md hover:shadow-md rounded-md w-full text-black p-2 border border-black bg-transparent focus:border-2 focus:border-black' type="text" name="todo" id="" />
      <button className='ml-4 border border-gray-600 pl-3 pr-3 pt-2 pb-2 rounded-md hover:bg-black hover:text-white hover:shadow-md'>ADD</button>
    </form>
  )
}

export default AddToDo
