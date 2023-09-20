import { CHOICES_KEY, HINT_KEY, HINT_SCORE_KEY } from '@/config/responseKeys';
import { atom } from 'recoil';

export const vulnerabilitiesState= atom({
  key: 'atom_vulnerabilityListState',
  default: [
    {
      [ CHOICES_KEY ]: [],
      [ HINT_KEY ]: '',
      [ HINT_SCORE_KEY ]: undefined
    }
  ]
});

export const vulnerabilityListState= atom({
  key: 'atom_vulnerabilityList',
  default: []
});