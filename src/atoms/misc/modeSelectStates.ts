import { atom } from "recoil";
import { MODES } from "@/features/modeSelect";
import { ROOM_MODES } from "@/features/rooms";

export const SelectedModeValueState= atom<string>({
  key: 'selecte-mode-value',
  default: MODES.TRAIN_MODE
});

export const RoomModeValueState= atom<string>({
  key: 'room-select-mode-value',
  default: ROOM_MODES.CREATE_ROOM,
});