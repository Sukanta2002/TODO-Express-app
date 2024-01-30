import mongoose from "mongoose";
import { dbName } from "../constant.js";

// making the function async
async function connectDB() {
    // use try catch to handel error in the program
    try {
        // connecting whit the DB 
        // getting the mongoDB url from the .env file
        // use the await cause it will take time to connect to the db
        const connectionData = await mongoose.connect(
            `${process.env.MONGODB_URL}/${dbName}`
        );
        console.log(connectionData.connection.host);
    } catch (error) {
        // catching the error 
        console.log(`Error in connecting DB : ${error}`);
        // if error occoured then exit out of the current process running in the nodejs
        // in simple word stop the server 
        process.exit(1);
    }
}
// exporting the function to use it in the index.js 
export { connectDB };
