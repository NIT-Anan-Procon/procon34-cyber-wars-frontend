import { atom } from "recoil";

export const isEnterRoomState= atom<boolean>({
  key    : 'atom_isEnterRoomState',
  default: true
});