import { atom } from 'recoil';

export const focusedInputElementState= atom({
  key: 'atom_focusedInputElement',
  default: undefined
});