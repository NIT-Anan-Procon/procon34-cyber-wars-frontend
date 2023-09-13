import { atom } from 'recoil';

export const scoreState= atom<number>({
  key    : 'atom_scoreState',
  default: undefined
});