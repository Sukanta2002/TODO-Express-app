import { app } from "./app.js";

const port = 3000


app.listen(port, function() {
    console.log(`App is running in port ${port}`);
})