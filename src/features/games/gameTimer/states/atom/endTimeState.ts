import { atom } from 'recoil';

export const endTimeState= atom<string>({
  key: 'atom_endTime',
  default: ''
});