import { atom } from 'recoil';

export const isCorrectState= atom<boolean>({
  key: 'atom_isCorrect',
  default: false
});