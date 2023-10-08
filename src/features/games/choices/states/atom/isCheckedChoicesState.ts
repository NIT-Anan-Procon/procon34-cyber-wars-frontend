import { atom } from 'recoil';

export const isCheckedChoicesState= atom({
  key: 'atom_isCheckedChoices',
  default: [
    {
      id     : undefined,
      value  : '',
      checked: false
    }
  ]
});