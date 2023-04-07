const mongoose = require('mongoose');

const express = require("express");
const morgan=require('morgan')
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
/* const socket = require("socket.io"); */
const http = require("http")
require("dotenv").config();
const path = require('path');
const port = process.env.PORT || 5000;
mongoose.set('strictQuery', true)

//import route
const userRoutes = require("./routes/user");
const workRoutes = require("./routes/works");
const ApplicationsFormRoutes= require("./routes/ApplicationsForm")
const workerRoutes = require("./routes/Worker");



const {Server} = require("socket.io")
/* const { Socket } = require("socket.io"); */


const app = express();
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(morgan('dev'));



// for cors origin config
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
//use parsing middelware
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api", userRoutes);
app.use("/work", workRoutes);
app.use("/apply",ApplicationsFormRoutes)
app.use("/worker",workerRoutes)




/* const server = app.listen(port, () =>
  console.log(`Server started on ${port}`)
);
const io = socket(server, {
  cors: {
    origin: "http://localhost:5000",
    credentials: true,
  },
}); */

const server = http.createServer(app)
const io = new Server(server)

global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.msg);
    }
  });
});


mongoose
  .connect("mongodb+srv://fedinaimi:bTI6Qdk1hLsGo2RW@metaco.ihyqrof.mongodb.net/?retryWrites=true&w=majority")
  .then( () => {
    console.log("Database connected!");
    server.listen(port, () =>
      console.log(`Server started on ${port}`)
    );

  })
  .catch((err) => console.log(err));