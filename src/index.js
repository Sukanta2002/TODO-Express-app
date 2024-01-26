import { app } from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./db/connect.js";

dotenv.config({
    path: "./.env",
});

const port = process.env.PORT;

connectDB()
    .then(() => {
        app.on("error", () => {
            console.log(`Error starting the app`);
        });

        app.listen(port, () => {
            console.log(`App is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.log(`Error when connecting DB ${error}`);
    });

// First method ----------------------------
// ;
// (async function connectDB() {
//     try {
//         const connectionData = await mongoose.connect(`${process.env.MONGODB_URL}/${dbName}`)
//         console.log(connectionData.connection);
//     } catch (error) {
//         console.error("error when connecting to db")
//         process.exit(1)
//     }
// })()
