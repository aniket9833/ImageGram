import express from "express";
import connectDb from "./config/dbConfig.js";

const PORT = 3000;
const app = express();

app.get("/", (req, res)=>{
    return res.send("home");
})

app.get("/hello", (req, res)=>{
    return res.send("hello world");
})

app.post("/ping", (req, res)=>{
    return res.json({ message: "POST: pong"});
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
    connectDb();
})