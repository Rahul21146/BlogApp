const express=require("express");
const app=express();

require("dotenv").config();
const port=process.env.PORT || 3000;

app.use(express.json());

const blog=require("./routes/blog");

app.use("/api/v1",blog);

const connectDataBase = require("./config/database");
connectDataBase();

app.listen(port,()=>{
    console.log(`App is running successFully aT port No ${port}`)
})

//default route
app.get("/",(req,res)=>{
    res.send(`<h1> This is my home page baby</h1>`);
})