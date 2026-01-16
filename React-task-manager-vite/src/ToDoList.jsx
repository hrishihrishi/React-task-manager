import ToDoItem from "./ToDoItem"
import React from 'react'
import './index.css'

export default function ToDoList({listArray, handleCompleted, handleEdit, handleDelete}){
    return (
        listArray.length === 0 ? 'No tasks available' :
        listArray.map((item)=>{
            return <ToDoItem key={item.id} item={item} handleCompleted={handleCompleted} handleEdit={handleEdit} handleDelete={handleDelete}/>
        })
    )
}

