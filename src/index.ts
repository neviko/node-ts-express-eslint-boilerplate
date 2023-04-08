import { app } from "./app";
import http from "http";
import { Server } from "socket.io";
import { Message } from "./common/Message";

const PORT = process.env.PORT || 5000;

//TODO: understand the http library
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["POST", "GET"],
  },
});

io.on("connection", (socket) => {
  console.log("connected");

  socket.on("disconnect", () => {
    console.log(" user disconnected");
  });

  socket.on("join-room", (roomName) => {
    console.log(`user ${socket.id} joined to room ${roomName}`);

    socket.join(roomName);
  });

  // socket.on("fetch-rooms", function () {
  //   console.log("fetched rooms called", io.sockets.adapter.rooms);

  //   // socket.emit("rooms", { rooms: Object.keys(io.sockets.adapter.rooms) });
  // });

  socket.on("new-message", (msg: Message) => {
    socket.to(msg.roomId).emit("message-from-server", msg);
  });
});

server.on("error", (err) => {
  console.log("Error opening server");
});
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
