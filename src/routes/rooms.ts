import express, { Request, Response } from "express";
import { createRoom, getRooms } from "../db/rooms-manager";

const router = express.Router();

/**
 * returns the rooms list
 */
router.get("/api/rooms", async (req: Request, res: Response) => {
  res.status(200).send(getRooms());
});

router.post("/api/rooms", async (req: Request, res: Response) => {
  // we are assuming that the input is valid
  const { name } = req.body;
  const isCreated = createRoom(name);
  if (isCreated) {
    res.status(201).send({ message: "Room Created Successfully" });
  } else {
    res
      .status(400)
      .send({ message: "something went wrong while creating a room" });
  }
});

export { router as roomsRouter };
