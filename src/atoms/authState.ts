import { atom } from 'recoil';

export const isAuthState= atom<boolean>({
  key: 'auth-state',
  default: false,
});