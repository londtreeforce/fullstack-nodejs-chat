const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const app = express();
const server = http.createServer(app);

const route = require('./route');//Why?

app.use(cors({ origin: "*" }));
app.use(route);



const io = new Server(server , {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});





server.listen(5000, () => {
    console.log("Server started");
});


