import { atom } from 'recoil';

export const isAuthState= atom<boolean>({
  key    : 'atom_isAuthenticatedState',
  default: true,
});