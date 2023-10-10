import { atom } from 'recoil';

export const focusedInputElementState= atom< HTMLInputElement | undefined >({
  key: 'atom_focusedInputElement',
  default: undefined
});