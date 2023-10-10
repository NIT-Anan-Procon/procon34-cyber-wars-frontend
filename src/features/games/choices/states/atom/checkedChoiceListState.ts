import { atom } from 'recoil';

export const checkedChoiceListState= atom<Array<string>>({
  key: 'atom_checkedChoiceList',
  default: []
});