import { atom } from 'recoil';

export const inviteIdState= atom<string>({
  key: 'atom_inviteId',
  default: undefined
});