import { atom } from 'recoil';

export const authState= atom<boolean>({
  key: 'auth-state',
  default: false,
});