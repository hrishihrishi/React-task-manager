import React from 'react'
import './index.css'

export default function ToDoItem({item, handleCompleted, handleEdit, handleDelete}) {
    return (
        <article className='todo-item'>
            <h3 className='text-xl font-bold mx-4'>{item.taskName}</h3>
            <button className='btn-primary bg-green-500' onClick={() => handleCompleted(item.id)}>{item.isCompleted===false? 'Mark as completed' : 'Unmark'}</button>
            <button className='btn-primary bg-blue-500' onClick={() => handleEdit(item.id)}>Edit</button>
            <button className='btn-primary bg-red-500' onClick={() => handleDelete(item.id)}>Delete</button>
        </article>
    )
}

