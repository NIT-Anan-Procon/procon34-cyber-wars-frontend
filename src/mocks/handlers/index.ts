import { roomHandlers } from "./room";
import { userHandlers } from "./user";

export const handlers= [
  ...userHandlers,
  ...roomHandlers,
  
];