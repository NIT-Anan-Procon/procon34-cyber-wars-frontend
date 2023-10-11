import { atom } from 'recoil';

export const inviteIdState= atom<string | number>({
  key: 'atom_inviteId',
  default: undefined
});