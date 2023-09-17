import { atom } from "recoil";

export const isHintDrawerState= atom({
  key: 'atom_isHintDrawerState',
  default: false
});

export const hasHintState= atom({
  key: 'atom_hasHintState',
  default: false
});

export const hintState= atom({
  key: 'atom_hintState',
  default: ''
});

export const hintScoreState= atom({
  key: 'atom_hintScoreState',
  default: undefined
});