import React, { useState } from 'react'

function AddTask({ onAdd }) {
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim() === '') return
    onAdd(title)
    setTitle('')
  }

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="Enter task title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="btn-add">
        + Add Task
      </button>
    </form>
  )
}

export default AddTask