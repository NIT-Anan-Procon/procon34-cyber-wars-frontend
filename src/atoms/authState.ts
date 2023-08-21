import { atom } from 'recoil';

export const isAuthState= atom<boolean>({
  key: 'is-auth-state',
  default: true,
});