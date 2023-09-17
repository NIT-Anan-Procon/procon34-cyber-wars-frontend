import { atom } from 'recoil';

export const isValidState= atom<boolean>({
  key    : 'atom_isValidState',
  default: false
});