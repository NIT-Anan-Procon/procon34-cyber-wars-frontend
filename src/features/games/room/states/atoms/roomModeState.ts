import { atom } from 'recoil';
import { ROOM_MODES } from '../../types/roomModes';

export const roomModeState= atom({
  key: 'atom_roomMode',
  default: ROOM_MODES.CREATE_ROOM
});