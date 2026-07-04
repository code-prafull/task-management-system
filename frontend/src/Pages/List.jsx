import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

function TaskTable() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get("/tasks");
        console.log(response.data);
        setTasks(response.data.todos || []);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTasks();
  }, []);

  const HandleDeleteTask = async (id) => {
    try {
      const response = await api.delete(`/delete/${id}`);
      console.log(response.data);
      navigate("/"); 
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/update/${id}`);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-gray-50/50 min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 border-b border-gray-100 pb-5">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            Task Overview
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage, review, and track all your active task modules
          </p>
        </div>
        <button
          onClick={() => navigate("/")}
          className="bg-gray-950 text-white text-sm font-medium py-2.5 px-4 rounded-xl hover:bg-gray-800 transition-all shadow-sm active:scale-[0.98]"
        >
          + Create Task
        </button>
      </div>

      {/* Main Table/Card Container */}
      <div className="bg-white border border-gray-100 shadow-sm rounded-2xl overflow-hidden">
        {tasks.length > 0 ? (
          <>
            {/* --- DESKTOP TABLE VIEW --- */}
            <table className="hidden md:table w-full border-collapse text-left">
              <thead>
                <tr className="bg-gray-50/70 border-b border-gray-100">
                  <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider w-16 text-center">Index</th>
                  <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Title</th>
                  <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider w-28 text-center">Status</th>
                  <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider w-44 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {tasks.map((task, index) => (
                  <tr key={task._id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-4 text-center text-sm text-gray-400 font-medium">{index + 1}</td>
                    <td className="p-4 text-sm font-semibold text-gray-900">{task.title}</td>
                    <td className="p-4 text-sm text-gray-500 max-w-xs truncate">{task.description || "—"}</td>
                    <td className="p-4 text-center">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                        task.completed 
                          ? "bg-gray-100 text-gray-800" 
                          : "bg-gray-50 border border-gray-200 text-gray-600"
                      }`}>
                        {task.completed ? "Completed" : "Pending"}
                      </span>
                    </td>
                    <td className="p-4 text-center space-x-2">
                      <button
                        onClick={() => handleEdit(task._id)}
                        className="text-gray-700 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-all text-xs font-medium"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => HandleDeleteTask(task._id)}
                        className="text-red-600 bg-red-50/50 px-3 py-1.5 rounded-lg hover:bg-red-50 transition-all text-xs font-medium"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* --- MOBILE CARD VIEW --- */}
            <div className="block md:hidden divide-y divide-gray-100">
              {tasks.map((task, index) => (
                <div key={task._id} className="p-5 hover:bg-gray-50/30 transition-colors">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Task #{index + 1}
                    </span>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      task.completed 
                        ? "bg-gray-100 text-gray-800" 
                        : "bg-gray-50 border border-gray-200 text-gray-600"
                    }`}>
                      {task.completed ? "Completed" : "Pending"}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    {task.title}
                  </h3>
                  
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                    {task.description || <em className="text-gray-300">No description provided</em>}
                  </p>

                  <div className="flex gap-2 pt-1">
                    <button 
                      onClick={() => handleEdit(task._id)}
                      className="flex-1 text-center font-medium bg-gray-50 border border-gray-200 text-gray-700 py-2 rounded-xl text-xs hover:bg-gray-100 transition-all"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => HandleDeleteTask(task._id)}
                      className="flex-1 text-center font-medium bg-red-50/50 text-red-600 py-2 rounded-xl text-xs hover:bg-red-50 transition-all"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16 px-4">
            <div className="text-3xl mb-2">📋</div>
            <h3 className="text-sm font-semibold text-gray-900">No tasks found</h3>
            <p className="text-xs text-gray-400 mt-1 max-w-xs mx-auto">
              Your task lineup is completely clear right now. Click above to create something new.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskTable;