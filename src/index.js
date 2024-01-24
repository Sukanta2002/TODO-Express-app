import { app } from "./app.js";
import dotenv from "dotenv";

dotenv.config({
    path:"./.env"
})

const port = process.env.PORT



app.listen(port, function() {
    console.log(`App is running in port ${port}`);
})