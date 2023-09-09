import { atom } from 'recoil';

export const isAuthState= atom<boolean>({
  key: 'is-authenticated-state',
  default: true,
});