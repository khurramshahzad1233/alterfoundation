import app from "./app.js";
import dotenv from "dotenv"
if(process.config.env!=="PRODUCTION"){
    dotenv.config({path:"backend/config.env"})
};
import mongoose from "mongoose";

mongoose.set("strictQuery",false);
main().catch(err=>console.log(err));

async function main(){
    await mongoose.connect(process.env.mongodb);
};



app.listen(process.env.port,()=>{
    console.log(`server is running on port ${process.env.port}`)
})