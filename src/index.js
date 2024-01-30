// Importing the app from the app.js to start thr server here
import { app } from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./db/connect.js";

// Config the dotenv
dotenv.config({
    path: "./.env",
});

// Use the process to get the port no from the .env file
const port = process.env.PORT;

// connecting the db using this function 
// NOTE: this function is written in the "connection.js" file in "db" follder
connectDB()
// Using the then to starting the server if the DB is connected
// NOTE: the then() function accepts a callback function
    .then(() => {
        // This function is used to check is some unexpected error happen while starting the server
        app.on("error", () => {
            console.log(`Error starting the app`);
        });

        // This function is used to start the server 
        // NOTE: this takes the port no and a callback in the argument to start the server
        app.listen(port, () => {
            console.log(`App is running on port ${port}`);
        });
    })
    // Using the catch method to handel the error whilw connecting  the db
    // Here we are chatching the error and log to the console the error
    .catch((error) => {
        console.log(`Error when connecting DB ${error}`);
    });

/*
// First method ----------------------------

// Here we are using a IIFE to connect the db to our server 
// NOTE: IF you don't know IIFE then google it by yourself
;
// making the function async
(async function connectDB() {
    // use try catch to handel error in the program
    try {
        // connecting whit the DB 
        // getting the mongoDB url from the .env file
        const connectionData = await mongoose.connect(`${process.env.MONGODB_URL}/${dbName}`)
        console.log(connectionData.connection);
    } catch (error) {
        // catching the error 
        console.error("error when connecting to db")
        // if error occoured then exit out of the current process running in the nodejs
        // in simple word stop the server 
        process.exit(1)
    }
})()

*/
