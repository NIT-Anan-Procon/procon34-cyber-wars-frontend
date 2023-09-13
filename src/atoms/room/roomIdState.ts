import { atom } from "recoil";

export const RoomIdState= atom<number>({
  key    : 'atom_roomIdState',
  default: undefined,
});