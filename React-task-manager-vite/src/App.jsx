import { useState } from 'react'
import ToDoList from './ToDoList'
import './index.css'
import Header from './Header'
export default function App() {

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-blue-100'>
      <h1 className='text-5xl font-bold m-4 bg-blue-500 text-white px-6 py-2 rounded-xl italic'>TASK-IT-O</h1>
      <Header/>
    </div>
  )
}


