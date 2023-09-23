import { selectorFamily } from 'recoil';

import { codeState } from '@/atoms';
import { fetchCode } from '../api/fetchCode';
import { CODE_KEY } from '@/constants/responseKeys';
import { PHASE } from '@/features/phase/types';
import { fetchRevisionCode } from '../api/fetchRevisionCode';

export const updateCodeSelector= selectorFamily({
  key: 'selector_ updateCodeSelector',
  get: ( phase ) => async() => {
    if( phase === PHASE.DEFENCE_PHASE ) {
      const codeData= await fetchCode();
      return codeData[ CODE_KEY ];

    } else {
      const codeRevisionData= await fetchRevisionCode();
      return codeRevisionData[ CODE_KEY ];
    }
  },
  set: () => ({ set }, newCodeValue) => {
    set( codeState, newCodeValue );
  }
});