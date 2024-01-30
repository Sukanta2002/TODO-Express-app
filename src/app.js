import express from "express"

const app = express()

// this is a middlewear to convert the data recived by the user to json
app.use(express.json())


// we are building a register route with post methord
app.post("/user/register", (req,res) => {
    // steps 
    // recive the data from the user
    // check if the user, email, password is present or not
    // check in the db if the username or email is exist
    // save in the db
    // send the user a final responce 



    // destructure of object
    const {username, email, password} = req.body;

    
    // check if the user, email, password is present or not
    if (!username) {
        // Useing return to stop the execution of the function here
        // Sending a json responce to the client that username is required
        return res.json({
            error: "username is required"
        }
        )
    }




    res.json(
        {
            msg: "ok"
        }
    )
})

// exporting the app to the index.js file to start the server
export {app}