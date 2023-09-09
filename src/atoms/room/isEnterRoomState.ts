import { atom } from "recoil";

export const isEnterRoomState= atom<boolean>({
  key: 'is-enter-room-state',
  default: true
});