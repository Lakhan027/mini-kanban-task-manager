import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AddTask from './components/AddTask'
import TaskColumn from './components/TaskColumn'
import './App.css'

const API = import.meta.env.VITE_API_URL 

console.log('Using API URL:', API)

function App() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch tasks from backend
  const fetchTasks = async () => {
    try {
      setLoading(true)
      setError(null)
      const res = await axios.get(`${API}/tasks`)
      setTasks(res.data)
    } catch (err) {
      setError('Failed to fetch tasks. Is your backend running?')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

// Add a new task
  const addTask = async (title) => {
    try {
      const res = await axios.post(`${API}/tasks`, { title })
      setTasks([...tasks, res.data])
    } catch (err) {
      setError('Failed to add task.')
    }
  }

  // Move task between columns
    const moveTask = async (id, newStatus) => {
    try {
      const res = await axios.put(`${API}/tasks/${id}`, { status: newStatus })
      setTasks(tasks.map(task => 
        task.id === id ? res.data : task
      ))
    } catch (err) {
      setError('Failed to update task.')
    }
  }

  // Delete a task
    const deleteTask = async (id) => {
    try {
      await axios.delete(`${API}/tasks/${id}`)
      setTasks(tasks.filter(task => task.id !== id))
    } catch (err) {
      setError('Failed to delete task.')
    }
  }



  const todoTasks = tasks.filter(task => task.status === 'todo')
  const doneTasks = tasks.filter(task => task.status === 'done')

  return (
    <div className="app">
      <h1 className="app-title">📋 Mini Kanban Task Manager</h1>

      <AddTask onAdd={addTask} />

      {loading && <p className="loading">Loading tasks...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <div className="board">
          <TaskColumn
            title="📝 To Do"
            tasks={todoTasks}
            onMove={moveTask}
            onDelete={deleteTask}
          />
          <TaskColumn
            title="✅ Done"
            tasks={doneTasks}
            onMove={moveTask}
            onDelete={deleteTask}
          />
        </div>
      )}
    </div>
  )
}

export default App