import mongoose from "mongoose";

// Use to create a new schema
const todoSchema = new mongoose.Schema(
    {
        todoName: {
            type: String,
            required: true,
        },
        isComplited: {
            type: Boolean,
            default: false,
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    // The timestamps will add the fiels of "created at" and "updated at" to the mongoDB
    { timestamps: true }
);

// Use to make a model out of the schema
// NOTE: the name "Todo" will be changed in the mongodb database as "todos"
// we will directly export the "Todo"
export const Todo = mongoose.model("Todo", todoSchema);

// We will not export it this way
// export {
//     Todo
// }
