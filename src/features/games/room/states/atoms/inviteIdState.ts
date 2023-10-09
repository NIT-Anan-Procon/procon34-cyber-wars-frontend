import { atom } from 'recoil';

export const inviteIdState= atom<number>({
  key: 'atom_inviteId',
  default: undefined
});