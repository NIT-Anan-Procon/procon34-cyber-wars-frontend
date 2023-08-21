import { atom } from "recoil";
import { MODES } from "@/features/mode-select";
import { ROOM_MODES } from "@/features/rooms";

export const SelectedModeValueState= atom<string>({
  key: 'selected-mode-value',
  default: MODES.TRAIN_MODE
});

export const RoomModeValueState= atom<string>({
  key: 'room-mode-value',
  default: ROOM_MODES.CREATE_ROOM,
});