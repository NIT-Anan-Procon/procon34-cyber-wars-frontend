import { selectorFamily } from 'recoil';

import { useFetchRevisionCodeQuery } from '../../api/fetchRevisionCode';
import { useFetchCodeQuery } from '../../api/fetchCode/useFetchCodeQuery';
import { PHASE } from '@/features/phases';
import { codeState } from '../atom';
import { CODE_KEY } from '../../api';

export const updateCodeSelector= selectorFamily({
  key: 'selector_ updateCodeSelector',
  get: ( phase ) => async() => {
    if( phase === PHASE.DEFENCE_PHASE ) {
      const codeQuery= useFetchCodeQuery();

      return await codeQuery?.data[ CODE_KEY ];

    } else {
      const codeRevisionQuery= useFetchRevisionCodeQuery();

      return await codeRevisionQuery?.data[ CODE_KEY ];
    }
  },
  set: () => ({ set }, newCodeValue) => {
    set( codeState, newCodeValue );
  }
});