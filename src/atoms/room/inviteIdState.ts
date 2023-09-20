import { atom } from "recoil";

export const inviteIdState= atom<number>({
  key    : 'atom_inviteIdState',
  default: undefined,
});