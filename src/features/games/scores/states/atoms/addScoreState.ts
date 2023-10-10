import { atom } from 'recoil';

export const addScoreState= atom<number>({
  key: 'atom_isCorrect',
  default: undefined
});