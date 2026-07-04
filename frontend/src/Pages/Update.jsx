import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axios";

function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
  });

  // Task Fetch
  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await api.get(`/task/${id}`);

        setTaskData({
          title: response.data.todo.title,
          description: response.data.todo.description,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchTask();
  }, [id]);

  // Update Task
  const handleUpdate = async () => {
    try {
      const response = await api.put(`/update/${id}`, taskData);

      console.log(response.data);

      alert("Task Updated Successfully");

      navigate("/tasks");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-start pt-20 bg-gray-50/50 px-4">
      <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-8 w-full max-w-xl">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            Modify Task Details
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Update the title or adjustments required for this item
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-5">
          {/* Title Input */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
              Task Title
            </label>
            <input
              type="text"
              placeholder="Enter Title"
              value={taskData.title}
              onChange={(e) =>
                setTaskData({
                  ...taskData,
                  title: e.target.value,
                })
              }
              className="w-full border border-gray-200 p-3 rounded-xl text-gray-900 placeholder-gray-400 bg-gray-50/30 transition-all focus:outline-none focus:border-gray-400 focus:bg-white text-sm"
            />
          </div>

          {/* Description Input */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
              Description
            </label>
            <textarea
              placeholder="Enter Description"
              value={taskData.description}
              onChange={(e) =>
                setTaskData({
                  ...taskData,
                  description: e.target.value,
                })
              }
              className="w-full h-36 border border-gray-200 p-3 rounded-xl text-gray-900 placeholder-gray-400 bg-gray-50/30 transition-all focus:outline-none focus:border-gray-400 focus:bg-white text-sm resize-none"
            ></textarea>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleUpdate}
          className="w-full mt-6 bg-gray-950 text-white py-3 px-4 rounded-xl text-sm font-medium hover:bg-gray-800 active:scale-[0.99] transition-all shadow-sm"
        >
          Update Task
        </button>

      </div>
    </div>
  );
}

export default EditTask;