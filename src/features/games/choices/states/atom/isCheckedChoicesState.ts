import { atom } from 'recoil';
import { choicesType } from '../../types/choicesType';

export const isCheckedChoicesState= atom<choicesType>({
  key: 'atom_isCheckedChoices',
  default: []
});