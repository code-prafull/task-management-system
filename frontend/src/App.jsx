import React from "react";
import Navbar from "./Components/Navbar";
import AddTask from "./Pages/AddTask";
import List from "./Pages/List";
import Update from "./Pages/Update";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import ProtectedRoutes from './Components/ProtectedRoutes'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
  <Routes>
    {/* Public Routes */}
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />

    {/* Protected Routes */}

    

    <Route
      path="/"
      element={
        <ProtectedRoutes>
          <Navbar />
          <AddTask />
          
        </ProtectedRoutes>
      }
    />

    <Route
      path="/tasks"
      element={
        <ProtectedRoutes>
          <Navbar />
          <List />
        </ProtectedRoutes>
      }
    />

    <Route
      path="/update/:id"
      element={
        <ProtectedRoutes>
          <Navbar />
          <Update />
        </ProtectedRoutes>
      }
    />
  </Routes>
</>
  );
}

export default App;