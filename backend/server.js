import express from 'express';
import cors from 'cors';

const app   = express();
const PORT  = process.env.PORT || 5000;


app.use(cors());        
app.use(express.json());

let tasks = [
  { id: 1, title: "Buy milk", status: "todo" },
  { id: 2, title: "Read a book", status: "done" }
];

let nextId = 3;

// Get all tasks
app.get('/tasks', (req, res) => {
  res.status(200).json(tasks);
});

// Create a new task 
app.post('/tasks',(req,res)=>{
    const {title}=req.body;

    if(!title || title.trim()===""){
        return res.status(400).json({error:"Title is required"});
    }

    const newTask={
        id:nextId++,
        title,
        status:"todo"
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
});

// Update task status
app.put('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { status } = req.body;

  if (!status || !['todo', 'done'].includes(status)) {
    return res.status(400).json({ error: 'Status must be todo or done' });
  }

  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  task.status = status;
  res.status(200).json(task);
});

// Delete a task
app.delete('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const taskIndex = tasks.findIndex(t => t.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  tasks.splice(taskIndex, 1);
  res.status(200).json({ message: 'Task deleted successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});