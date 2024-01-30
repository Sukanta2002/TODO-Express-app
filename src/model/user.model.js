import mongoose from "mongoose";

// Use to create the user schema
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Username is required"],
            unique: true,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: [true, "Password is required"],
        },
        profilePic: {
            type: String,
        },
        refreshToken: {
            type: String,
        },
    },
    // The timestamps will add the fiels of "created at" and "updated at" to the mongoDB
    {
        timestamps: true,
    }
);
// Use to make a model out of the schema
// NOTE: the name "User" will be changed in the mongodb database as "users"
// we will directly export the "User"
export const User = mongoose.model("User", userSchema);


// We will not export it this way
// export { User };
