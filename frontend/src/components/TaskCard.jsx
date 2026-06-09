import React from 'react'

function TaskCard({ task, onMove, onDelete }) {
  return (
    <div className="task-card">
      <p className="task-title">{task.title}</p>
      <div className="task-actions">
        <button
          className="btn-move"
          onClick={() => onMove(task.id, task.status === 'todo' ? 'done' : 'todo')}
        >
          {task.status === 'todo' ? '✅ Mark Done' : '🔄 Move to Todo'}
        </button>
        <button
          className="btn-delete"
          onClick={() => onDelete(task.id)}
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  )
}

export default TaskCard