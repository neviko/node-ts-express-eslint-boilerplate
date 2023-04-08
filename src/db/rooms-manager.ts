import { v4 as uuidv4 } from "uuid";
import { IRoom } from "../common/room";
import { IUser } from "../common/user";

interface IChatDB {
  rooms: { [key: string]: IRoom };
}

interface IUsersDB {
  [key: string]: IUser;
}

const id = uuidv4();
const name = "group_seed";
const chatDB: IChatDB = {
  rooms: {
    [name]: {
      id,
      name,
    },
  },
};

const usersDB: IUsersDB = {};

export const createRoom = (name: string): boolean => {
  const isRoomExist = chatDB.rooms[name];
  if (!isRoomExist) {
    chatDB.rooms[name] = {
      id: uuidv4(),
      name,
    };
    console.log(`room created successfully`);
    return true;
  }

  console.log(`room with the same name already exist, try another name`);
  return false;
};

const getRoomByName = (roomName: string): IRoom | undefined => {
  return chatDB.rooms[roomName];
};

const getUserById = (userId: string): IUser | undefined => {
  return usersDB[userId];
};

export const joinToGroup = (roomName: string, userId: string): boolean => {
  if (!getRoomByName(roomName)) {
    console.log("room is not exist");
    return false;
  }

  const user: IUser | undefined = getUserById(userId);
  if (!user) {
    console.log("user is not exist");
    return false;
  }

  chatDB.rooms![roomName].members![userId] = user as IUser;
  return true;
};

export const getRooms = () => {
  return Object.keys(chatDB.rooms);
};
