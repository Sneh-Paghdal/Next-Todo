import AddToDo from '@/components/AddToDo'
import Navbar from '@/components/Navbar'
import Todo from '@/components/Todo'
import Image from 'next/image'

export default function Home() {
  return (
    <div className=' flex justify-center h-screen items-center'>
      <div className='flex flex-col'>
        <h1 className='text-4xl font-bold'> TODO APP WITH NEXT </h1>
        <div>
          <Navbar/>
          <AddToDo/>
          <Todo/>
        </div>
      </div>
    </div>
  )
}
