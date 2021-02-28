import { Application } from "express";
import express = require("express");
import * as mongoose from "mongoose";
import morgan = require("morgan");
import http = require("http");
// import path from 'path';
//const cors = require('cors');
// import expressValidator from 'express-validator';
import expressSession = require("express-session");
import * as router from "./routes";
var socket = require("socket.io");

// const {
//   addUser,
//   removeUser,
//   getUser,
//   getUsersInRoom,
//   updatePoints,
// } = require("./users");

// let newPrivateRoomDetails: any;
const app: Application = express();
app.use(express.json()); //middlewre
app.use(express.urlencoded({ extended: false })); //if you dont have nested

app.use(
  expressSession({
    secret: "rishabhsingh",
    saveUninitialized: false,
    resave: false,
    cookie: { secure: false },
  })
); //secret is used to encrypt..

//connetciong mongo
// mongoose.connect(
//   process.env.MongoDB_URI || "mongodb://localhost/formSubmissions",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

// mongoose.connection.on("connected", () => {
//   console.log("Mongoose is connected..");
// });

app.use(morgan("tiny"));
app.use("/", router as any);

const port = process.env.PORT || 8080;
const server = http.createServer(app);
const io = socket(server);
server.listen(port, () => console.log("listenting to port 8080"));
