# 🚀 Task Management System

A full-stack **Task Management System** built using the **MERN Stack**. This application allows users to securely manage their daily tasks with authentication, protected routes, and complete CRUD functionality.

## 🌐 Live Demo

🔗 **Live Website:** https://task-management-system-puce-zeta.vercel.app/login

---

##  Features

-  User Authentication (Register & Login)
-  JWT Protected Routes
-  Create New Tasks
-  Update Existing Tasks
-  Delete Tasks
-  View All Tasks
-  Password Hashing using bcrypt
-  RESTful API
-  Responsive UI
-  MongoDB Database Integration

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- React Router DOM
- Axios

### Backend
- Node.js
- Express.js
- JWT Authentication
- bcryptjs

### Database
- MongoDB
- Mongoose

### Deployment
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

---

## 📂 Project Structure

```
Task-Management-System
│
├── frontend
│   ├── src
│   ├── Components
│   ├── Pages
│   ├── Context
│   └── App.jsx
│
├── backend
│   ├── controller
│   ├── routes
│   ├── models
│   ├── middleware
│   ├── config
│   └── server.js
│
└── README.md
```

---

## 🔐 Authentication Flow

- User Registration
- User Login
- JWT Token Generation
- Token Stored on Client
- Protected Routes
- Authorized CRUD Operations

##  Installation

### Clone Repository

```bash
git clone https://github.com/your-username/task-management-system.git
```

### Install Frontend

```bash
cd frontend
npm install
npm run dev
```

### Install Backend

```bash
cd backend
npm install
npm run dev
```
---

##  API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |

### Tasks

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/task | Get All Tasks |
| POST | /api/task | Create Task |
| PUT | /api/task/:id | Update Task |
| DELETE | /api/task/:id | Delete Task |

---

## 🚀 Future Improvements

-  Task Status (Pending / Completed)
-  Due Date
-  Search Tasks
-  Categories
-  Dark Mode
-  Dashboard Analytics
-  User Profile

---

## 👨‍💻 Author

**Prafull Singh**

- GitHub: https://github.com/code-prafull
- LinkedIn: https://linkedin.com/in/code-prafull

---

## 📄 License

This project is licensed under the MIT License.
