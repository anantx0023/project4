const express = require("express");
const app = express();
const PORT = 8000;

const {logReqRes} = require("./middlewares")
const {connectMongoDb} = require("./connection")
const userRouter = require("./routes/user");

//connection of database

connectMongoDb('mongodb://127.0.0.1:27017/youtube-app-1').then(()=>
    console.log("MongoDB connected")
);
app.use(express.urlencoded({ extended: false }));

//MIDDLEWARES
app.use(logReqRes("log.txt"));

// ROUTES
app.use("/api/users",userRouter);

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
