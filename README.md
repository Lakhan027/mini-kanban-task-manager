# 📋 Mini Kanban Task Manager

A simple full-stack Kanban-style Task Manager built with React and Node.js + Express.

## 🚀 Live Demo

- **Frontend:** [https://your-app.netlify.app](https://your-app.netlify.app)
- **Backend:** [https://mini-kanban-task-manager-backend.onrender.com](https://mini-kanban-task-manager-backend.onrender.com)

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React + Vite |
| Backend | Node.js + Express |
| HTTP Client | Axios |
| Deployment (Frontend) | Netlify |
| Deployment (Backend) | Render |

---

## ✨ Features

- ✅ Create new tasks
- ✅ View tasks grouped by **To Do** and **Done**
- ✅ Move tasks between **To Do ↔ Done**
- ✅ Delete tasks
- ✅ Loading state
- ✅ Error handling
- ✅ Fully responsive for all devices

---

## 📁 Folder Structure

```
mini-kanban-task-manager/
├── backend/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskCard.jsx
│   │   │   ├── TaskColumn.jsx
│   │   │   └── AddTask.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── .env.example
│   └── package.json
├── .gitignore
└── README.md
```

---

## ⚙️ API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/tasks` | Get all tasks |
| POST | `/tasks` | Create a new task |
| PUT | `/tasks/:id` | Update task status |
| DELETE | `/tasks/:id` | Delete a task |

---

## 🏃 Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/Lakhan027/mini-kanban-task-manager.git
cd mini-kanban-task-manager
```

### 2. Run Backend

```bash
cd backend
npm install
node server.js
```

Backend runs on: `http://localhost:5000`

### 3. Run Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on: `http://localhost:5173`

### 4. Setup Environment Variable

Create a `.env` file inside `frontend/`:

```
VITE_API_URL=http://localhost:5000
```

---

## 📸 Screenshot

![Kanban Task Manager](https://via.placeholder.com/800x400?text=Kanban+Task+Manager)

---

## 👤 Author

**Lakhan Sharma**
- Email: lakhan.sharma@perimattic.com
- GitHub: [@Lakhan027](https://github.com/Lakhan027)
