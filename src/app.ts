import express from "express";
import cors from "cors";

import { json } from "body-parser";
import { signinRouter } from "./routes/signin";
import { roomsRouter } from "./routes/rooms";

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);
app.use(json());
app.use(signinRouter);
app.use(roomsRouter);
// if a route not found call to not found error, which it will call to error handler
app.all("*", async () => {
  // not found
});

export { app };
