import { selector } from 'recoil';

import { codeState } from '@/atoms';
import { fetchCode } from '../api/fetchCode';

export const updateCodeSelector= selector({
  key: 'selector_ updateCodeSelector',
  get: async() => {
    const codeData= await fetchCode();
    return codeData;
  },
  set: ({ set }, newCodeValue) => {
    set( codeState, newCodeValue );
  }
});