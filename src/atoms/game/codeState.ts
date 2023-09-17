import { atom } from 'recoil';

export const codePathState= atom({
  key: 'atom_codePathState',
  default: undefined
})

export const codeState= atom<string>({
  key: 'atom_codeState',
  default: ''
});

export const revisionCodeState= atom<string>({
  key: 'atom_revisionCodeState',
  default: ''
});