import express from "express"
import notesRoutes from "./routes/notesRouts.js"

import {connectDb }from "./config/db.js"
import dotenv from "dotenv"



dotenv.config()
const app = express();

app.use("/api/notes" , notesRoutes )



    



app.listen (5000 , () =>{
    console.log("server started on port: 5000");
    connectDb() })


