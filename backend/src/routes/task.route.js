import express from "express";
import { createTodo, getAllTasks, deleteTask, updateTask } from "../controller/task.controller.js";

const  router = express.Router();

router.post("/create", createTodo);
router.get("/tasks", getAllTasks);
router.delete("/delete/:id", deleteTask);
router.put("/update/:id", updateTask);

export default router;