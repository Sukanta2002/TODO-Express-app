import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    todoName: {
        type: String,
        required: true,
    },
    isComplited: {
        type: Boolean,
        default: false
    }
},{timestamps: true})

const Todo = mongoose.model("Todo",todoSchema)

export {
    Todo
}
