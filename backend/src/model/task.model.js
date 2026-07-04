import mongoose from 'mongoose';

const { Schema } = mongoose;

const taskSchema = new Schema({

   title: {
        type: String,
        required: true
    },


    description: {
        type: String,
        required: true
    }
})

const Todo= mongoose.model("Todo",taskSchema);

export default Todo;