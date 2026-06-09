import React from 'react'
import TaskCard from './TaskCard'

function TaskColumn({ title, tasks, onMove, onDelete, color }) {
  return (
    <div className={`task-column ${color}`}>
      <div className="column-header">
        <h2 className="column-title">{title}</h2>
        <span className="task-count">{tasks.length}</span>
      </div>
      <div className="task-list">
        {tasks.length === 0 ? (
          <div className="empty-state">
            <p className="empty-message">No tasks here</p>
          </div>
        ) : (
          tasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onMove={onMove}
              onDelete={onDelete}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default TaskColumn