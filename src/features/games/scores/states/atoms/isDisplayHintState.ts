import { atom } from 'recoil';

export const isDisplayHintState= atom<boolean>({
  key: 'atom_isDisplayHint',
  default: false
});