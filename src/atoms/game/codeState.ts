import { atom } from 'recoil';

export const codeState= atom<string>({
  key: 'atom_codeState',
  default: ''
});