import { atom } from "recoil";

export const RoomIdState= atom<number>({
  key: 'room-id-state',
  default: undefined,
});