import { Server } from "socket.io";
import http from "http";

import express from "express";
import User from "../models/user.model.js";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST","PUT"],
  },
});

const userSocketMap = {}; // userId  : socketId

export const getReceiverSocketId = (receiverID) => {
  return userSocketMap[receiverID];
};

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);
  const userId = socket.handshake.query.userId;

  if (userId != "undefined") {
    userSocketMap[userId] = socket.id;
  }

  io.emit("getOnlineUsers", Object.keys(userSocketMap));
  socket.on("disconnect", async () => {
    console.log("user disconnected", socket.id);
    
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
    const lastSeen = new Date();
    console.log(lastSeen);
      // Update last seen time in the database
      io.emit("updateLastSeen", { userId, lastSeen });
      try {
        await User.findByIdAndUpdate(userId, { lastSeen : lastSeen }, { new: true });
        console.log("updated last seen ")
      } catch (error) {
        console.error("Error updating last seen in the database:", error);
      }

  });
});

export { app, io, server };
