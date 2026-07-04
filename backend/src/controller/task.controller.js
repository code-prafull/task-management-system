import Task from "../model/task.model.js";

const createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title) {
            return res.status(400).json({
                message: "Title is required"
            });
        }

        if (!description) {
            return res.status(400).json({
                message: "Description is required"
            });
        }

        const todo = new Task({
            title,
            description,
        });

        await todo.save();

        res.status(201).json({
            message: "Todo created successfully",
            todo,
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const getAllTasks = async (req,res)=>{
    const todos = await Task.find();

    res.status(200).json({
        message:"Todos fetched successfully",
        todos
    })
}

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedTask = await Task.findByIdAndDelete(id);

        if (!deletedTask) {
            return res.status(404).json({
                message: "Task not found",
            });
        }

        res.status(200).json({
            message: "Task deleted successfully",
            deletedTask,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        const updatedTask = await Task.findByIdAndUpdate(
            id,
            { title, description },
            { new: true }
        );
        
        if (!updatedTask) {
            return res.status(404).json({
                message: "Task not found",
            });
        }
        res.status(200).json({
            message: "Task updated successfully",
            updatedTask,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}


export { createTodo, getAllTasks , deleteTask, updateTask};