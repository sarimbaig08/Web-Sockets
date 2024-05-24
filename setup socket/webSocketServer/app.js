import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
const PORT = 5000;

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  // ...
});

httpServer.listen(PORT, () => console.log("running on port", PORT));
