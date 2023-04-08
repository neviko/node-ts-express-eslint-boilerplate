import { IUser } from "./user";

export interface IRoom {
  id: string;
  name: string;
  members?: { [key: string]: IUser };
  message?: IMessage[];
}

interface IMessage {
  id: string;
  text: string;
  date: Date;
  status: EMessageStatus;
}

enum EMessageStatus {
  pending = "pending",
  sent = "sent",
  received = "received",
}
