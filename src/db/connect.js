import mongoose from "mongoose";
import { dbName } from "../constant.js";

async function connectDB() {
    try {
        const connectionData = await mongoose.connect(
            `${process.env.MONGODB_URL}/${dbName}`
        );
        console.log(connectionData.connection.host);
    } catch (error) {
        console.log(`Error in connecting DB : ${error}`);
        process.exit(1);
    }
}

export { connectDB };
