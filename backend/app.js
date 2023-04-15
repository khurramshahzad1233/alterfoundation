import express from "express"
import Errormiddleware from "./middleware/error.js"
import contact from "./routes/contactroute.js"
const app=express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use("/api",contact)
app.use(Errormiddleware)
export default app;