import { atom } from 'recoil';

export const codeState= atom<string>({
  key: 'atom_codeState',
  default: ''
});

export const revisionCodeState= atom<string>({
  key: 'atom_revisionCodeState',
  default: ''
});